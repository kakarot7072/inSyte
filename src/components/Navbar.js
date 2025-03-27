import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Settings, Phone, ChevronDown } from 'lucide-react';

import logo from './Assets/weblogo.png';
import image from './Assets/default.jpg'

const Navbar = ({ handleSignOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fullName, setFullName] = useState("User"); // Default if no user is found
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    profileImage: ""
  });

  // Add scroll event listener to handle navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("http://localhost:5000/api/users/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();

        // Store username in localStorage
        localStorage.setItem("fullName", data.username || "User");

        // Set profile data
        setFullName(data.username || "User");
        setProfileData({
          name: data.username,
          email: data.email,
          phone: data.phone || "",
          location: data.location || "",
          bio: data.bio || "",
          profileImage: data.profileImage || ""
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo and Links */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center group">
              <img src={logo} className="h-24 w-auto" alt="Website Logo" />
            </Link>
            <div className="hidden md:flex items-center ml-10 space-x-8">
              {[
                { to: '/home', icon: Home, label: 'Home' },
                { to: '/services', icon: Settings, label: 'Services' },
                { to: '/contact', icon: Phone, label: 'Contact' }
              ].map((item) => (
                <Link key={item.to} to={item.to} className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  <item.icon className="h-5 w-5 mr-1" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* User Profile Section */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 hover:scale-105">
                <img src= {image} alt="User profile" className="h-8 w-8 rounded-full object-cover ring-2 ring-blue-100" />
                <span className="font-medium">{fullName}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 animate__animated animate__fadeIn animate__faster">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Dashboard</Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Your Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Settings</Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      handleSignOut();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate__animated animate__fadeIn animate__faster">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
              {[
                { to: '/home', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
                { to: '/dashboard', label: 'Dashboard' }
              ].map((item) => (
                <Link key={item.to} to={item.to} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Add a spacer div to prevent content overlap */}
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;