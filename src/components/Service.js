
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { CheckCircle, BarChart, Cpu, Database } from "lucide-react";
import Footer from "./Footer";

const Service = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          Our Services
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Unlock the potential of data with our advanced analytics solutions, 
          designed for real-time monitoring and predictive intelligence.
        </motion.p>

        <div className="flex justify-center space-x-6">
          {[
            { label: "Real-Time Data", link: "/realtime-data", color: "blue" },
            { label: "Predictive Analysis", link: "/predictive", color: "green" },
          ].map((btn, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={btn.link}>
                <button
                  className={`bg-${btn.color}-500 hover:bg-${btn.color}-600 text-blue px-8 py-3 rounded-lg text-lg font-medium shadow`}
                >
                  {btn.label}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-10 text-center bg-gray-50 rounded-lg shadow-md"
      >
        <h3 className="text-4xl md:text-5xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          Why Choose Us?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              icon: <BarChart className="h-14 w-14 text-blue-500 mx-auto" />,
              title: "Advanced Analytics",
              description:
                "Gain deeper insights with intuitive data visualization and reporting.",
            },
            {
              icon: <Cpu className="h-14 w-14 text-green-500 mx-auto" />,
              title: "AI-Powered Insights",
              description:
                "Leverage machine learning for precise and intelligent forecasts.",
            },
            {
              icon: <Database className="h-14 w-14 text-purple-500 mx-auto" />,
              title: "Scalable Solutions",
              description:
                "Seamlessly process vast amounts of data with efficiency.",
            },
            {
              icon: <CheckCircle className="h-14 w-14 text-red-500 mx-auto" />,
              title: "Reliable Performance",
              description:
                "Real-time data processing with exceptional accuracy.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-lg"
            >
              {item.icon}
              <h4 className="text-lg font-medium mt-5 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-3">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Section */}
     
     <Footer/>
    </div>
  );
};

export default Service;
