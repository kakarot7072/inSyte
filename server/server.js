const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

const client = new MongoClient(process.env.ATLAS_URI);

// API endpoint for frontend to interact with MongoDB
app.get("/api/collections", async (req, res) => {
  try {
    await client.connect();
    const collections = await client.db("mydatabase").collections();
    const collectionNames = collections.map((col) => col.s.namespace.collection);
    res.json(collectionNames); // Sending collection names to the frontend
  } catch (e) {
    console.error(e);
    res.status(500).send("Error connecting to database");
  } finally {
    await client.close();
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});