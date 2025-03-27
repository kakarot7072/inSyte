import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from './Assets/inSyte_Light.png';

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
    className="bg-gradient-to-b from-[#1A237E] to-[#2C387E] text-white mt-20 py-12"
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Short Description */}
        <div>
          <img src={Logo} alt="Logo" className="h-12 w-auto mb-4" />
          <p className="text-gray-400">
            We are the forefront of data analytics and AI, driving innovation and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            {["Home", "Services", "Contact"].map((link, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal and Policy Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul>
            {["Privacy Policy", "Terms of Service"].map((link, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-2">
            Subscribe to our newsletter for updates and insights.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} înSyté. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          {/* Placeholder Social Media Links */}
          <a href="/facebook" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/twitter" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/linkedin" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/instagram" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    
  </motion.footer>
  )
}

export default Footer
