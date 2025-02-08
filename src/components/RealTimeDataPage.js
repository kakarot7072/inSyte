
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import AnalyticsPage from "./AnalyticsPage";


function RealTimeDataPage() {
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      setIsUploading(true);
      setUploadMessage("Uploading...");
      
      // Simulate file upload with a delay
      setTimeout(() => {
        setIsUploading(false);
        setUploadMessage("File uploaded successfully!");
        setIsUploadSuccessful(true); // Mark upload as successful
        
        // Hide the message after 5 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 5000);
      }, 2000); // Simulate 2 seconds delay for upload
    } else {
      setUploadMessage("Please upload a valid CSV file.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center p-2">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Real-Time Data Upload
      </motion.h1>

      <motion.div
        className="relative w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center shadow-xl"
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.label
          htmlFor="file-input"
          className="w-64 h-64 border-4 border-dashed border-blue-400 rounded-full flex items-center justify-center cursor-pointer transition"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-gray-800 bg-white w-48 h-48 flex items-center justify-center rounded-full shadow-md font-bold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isUploading ? (
              <span>Uploading...</span>
            ) : (
              <span>Drag & Drop or Click</span>
            )}
          </motion.div>
        </motion.label>
        <input
          id="file-input"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
        />
      </motion.div>

      {uploadMessage && (
        <motion.p
          className={`mt-6 text-xl ${
            uploadMessage.includes("successfully")
              ? "text-green-600"
              : "text-red-500"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {uploadMessage}
        </motion.p>
      )}

      {/* Show link to navigate to analytics page after successful upload */}
      {isUploadSuccessful && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/analytics" className="text-blue-500 font-bold text-xl">
            View Analytics
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default RealTimeDataPage;
