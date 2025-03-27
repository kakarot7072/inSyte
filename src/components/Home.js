import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  BarChart2, Brain, Target, Users, ArrowRight } from 'lucide-react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import image1 from './Assets/IMG_5090.JPG'
import image2 from './Assets/PHOTO-2025-03-26-11-57-39.jpg';
import image3 from './Assets/PHOTO-2025-03-26-12-01-34.jpg';
import image4 from './Assets/PHOTO-2025-03-26-12-01-35.jpg';
import image5 from './Assets/PHOTO-2025-03-26-12-07-45.jpg';



function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const handleSignOut = () => {
    console.log("Signing out..."); // Debugging log
    localStorage.removeItem("userToken");
    navigate("/login"); // Ensure "/login" route exists
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
   

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statistics = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: BarChart2, value: '85%', label: 'Accuracy Rate' },
    { icon: Target, value: '24/7', label: 'Real-time Monitoring' },
    { icon: Brain, value: '95%', label: 'Prediction Success' },
  ];

  const testimonials = [
    {
      name: 'Yogendra Singh ',
      role: 'Backend Developer',
      image: image1,
     
    },
    {
      name: 'Piyush Gupta',
      role: 'Power BI Developer',
      image: image2,
     
    },
    {
      name: 'Shreya Keshari',
      role: 'Frontend Developer',
      image: image3,
     
    },
    {
      name: 'Raman Singh',
      role: 'Data Engineer ',
      image: image4,
      
    },
    {
      name: 'Siddhi Sudrania',
      role: 'Cloud Developer',
      image: image5,
      
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100">
      {/* Navigation Bar */}
      
     <Navbar handleSignOut={handleSignOut}/>
      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 animate__animated animate__fadeIn">
                Transform Your Business with
                <br />
                Intelligent Analytics
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                Harness the power of real-time data and predictive analytics to make informed decisions, optimize operations, and drive growth with our cutting-edge platform.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeIn animate__delay-2s">
                <Link
                  to="/realtime-data"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors group"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:ml-5 transition-all duration-300" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-transparent border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors group"
                >
                  View Pricing
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:ml-5 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-blue-50 py-16" ref={statsRef}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600">Our Impact in Numbers</h2>
              <p className="mt-2 text-lg text-gray-600">Discover the results we've delivered for businesses like yours.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {statistics.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-3xl font-semibold text-blue-600">{stat.value}</h3>
                  <p className="mt-2 text-lg text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16" ref={featuresRef}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600">Key Features</h2>
              <p className="mt-2 text-lg text-gray-600">Explore the powerful features designed to boost your data analytics experience.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
                icon: BarChart2,
                title: 'Data Visualization',
                description: 'Get real-time insights with intuitive data visualizations tailored to your needs.'
              }, {
                icon: Brain,
                title: 'Predictive Analytics',
                description: 'Leverage machine learning models to predict trends and optimize operations.'
              }, {
                icon: Users,
                title: 'Collaboration Tools',
                description: 'Easily share insights and collaborate with teams to make data-driven decisions.'
              }].map((feature) => (
                <div key={feature.title} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-2xl font-semibold text-blue-600">{feature.title}</h3>
                  <p className="mt-2 text-lg text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Testimonials Section */}
        {/* Testimonials Section */}


{/* Testimonials Section */}

{/* Testimonials Section */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-600">Meet Our Team Members</h2>
    </div>

    {/* Outer wrapper for scrolling effect */}
    <div className="relative overflow-hidden w-full">
      <div className="flex space-x-6 animate-slide">
        {/* Duplicate testimonials list to create seamless scrolling */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="w-[320px] flex-shrink-0 bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-24 w-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">
              {testimonial.name}
            </h3>
            <p className="text-lg text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;