
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RealTimeDataPage() {
  const [selectedDataType, setSelectedDataType] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);
  const uploadSectionRef = useRef(null);

  const dataTypes = ["Medical", "Business", "College"];

  const handleDataTypeSelection = (type) => {
    setSelectedDataType(type);
    setTimeout(() => {
      uploadSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return setUploadMessage("Please select a file.");
    if (file.type !== "text/csv") return setUploadMessage("Only CSV files are allowed.");

    setIsUploading(true);
    setUploadMessage("Uploading...");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setUploadMessage("File uploaded successfully!");
        setIsUploadSuccessful(true);
      } else {
        setUploadMessage(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      setUploadMessage("Upload failed. Please try again.");
    }
    setIsUploading(false);
    setTimeout(() => setUploadMessage(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center p-6 space-y-12">
      <motion.h1
        className="text-5xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Select Your Organisation
      </motion.h1>

      <div className="flex space-x-6">
        {dataTypes.map((type) => (
          <motion.div
            key={type}
            className={`cursor-pointer p-6 rounded-2xl shadow-lg w-52 text-center text-xl font-semibold text-white transition-all duration-300 ${
              selectedDataType === type ? "bg-blue-600 scale-105" : "bg-blue-400 hover:bg-blue-500"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDataTypeSelection(type)}
          >
            {type}
          </motion.div>
        ))}
      </div>

      {selectedDataType && (
        <motion.div
          className="mt-12 w-full flex flex-col items-center"
          ref={uploadSectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Upload Your {selectedDataType} Data</h2>
          <motion.div
            className="relative w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.label
              htmlFor="file-input"
              className="w-72 h-72 border-4 border-dashed border-gray-600 rounded-full flex items-center justify-center cursor-pointer bg-white shadow-md font-bold text-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              {isUploading ? "Uploading..." : "Drag & Drop or Click"}
            </motion.label>
            <input id="file-input" type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
          </motion.div>

          {uploadMessage && (
            <motion.p
              className={`mt-6 text-xl ${uploadMessage.includes("successfully") ? "text-green-600" : "text-red-500"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {uploadMessage}
            </motion.p>
          )}

          {isUploadSuccessful && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link to="/analytics" className="text-blue-600 font-bold text-xl hover:underline">
                View Analytics
              </Link>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
    <Footer/>
    </div>
  );
}
export default RealTimeDataPage;