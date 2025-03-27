import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white mt-20 py-10"
  >
    <div className="container mx-auto text-center px-6">
      <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
      <p className="text-gray-300 max-w-md mx-auto mb-6">
        Join us in shaping the future of data analytics and AI-powered insights.
      </p>
      <div className="flex justify-center space-x-6 mb-6">
        {["Contact", "About", "Privacy Policy"].map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={`/${link.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-white transition"
            >
              {link}
            </Link>
          </motion.div>
        ))}
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} DataX Solutions. All rights reserved.
      </p>
    </div>
  </motion.footer>
  )
}

export default Footer
