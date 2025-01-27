const express = require("express");
const { MongoClient } = require("mongodb");
const { BlobServiceClient } = require("@azure/storage-blob");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.ATLAS_URI);

// Function to normalize MongoDB data
function normalizeData(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (value && value.$oid) return value.$oid;
      if (value && value.$numberInt) return parseInt(value.$numberInt);
      if (value && value.$numberLong) return parseInt(value.$numberLong);
      if (value && value.$date) return new Date(value.$date.$numberLong).toISOString();
      return value;
    })
  );
}

// Function to upload data to Azure Blob Storage
async function uploadToAzure(data, fileName) {
  const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
  const AZURE_CONTAINER_NAME = process.env.AZURE_CONTAINER_NAME;

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER_NAME);

    // Ensure the container exists
    await containerClient.createIfNotExists();

    // Create a blob
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const dataString = JSON.stringify(data, null, 2); // Pretty-printed JSON

    // Upload the data
    await blockBlobClient.upload(dataString, Buffer.byteLength(dataString));
    console.log(`File ${fileName} uploaded successfully to Azure.`);
  } catch (err) {
    console.error("Error uploading to Azure Blob Storage:", err);
  }
}

// API endpoint to fetch data and upload to Azure Blob Storage
app.get("/api/upload-data", async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();

    // Access the database and collection
    const db = client.db("mydatabase");
    const collection = db.collection("dummy");

    // Fetch all data from the collection
    const data = await collection.find().toArray();

    // Normalize the data
    const normalizedData = data.map(normalizeData);

    // Upload to Azure Blob Storage
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `dummy_data_${timestamp}.json`;
    await uploadToAzure(normalizedData, fileName);

    res.status(200).send(`Data uploaded successfully to Azure Blob Storage as ${fileName}`);
  } catch (e) {
    console.error("Error during data upload:", e);
    res.status(500).send("Failed to upload data");
  } finally {
    // Ensure the MongoDB client is closed
    await client.close();
  }
});

// Existing API to list collections
app.get("/api/collections", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collectionsCursor = await db.listCollections().toArray();
    const collectionNames = collectionsCursor.map((col) => col.name);
    res.json(collectionNames);
  } catch (e) {
    console.error("Error connecting to database or fetching collections:", e);
    res.status(500).send("Error connecting to the database");
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
