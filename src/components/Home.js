
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Settings, Phone, Layout, User, ChevronDown, BarChart2, Brain, Target, Users, ArrowRight } from 'lucide-react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import Footer from './Footer';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The predictive analytics capabilities have transformed how we make business decisions. Incredible tool!',
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Analytics Co',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: "The real-time visualization features are unmatched. It has become an essential part of our daily operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100">
      {/* Navigation Bar */}
      
     <Navbar/>
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
                  to="/demo"
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
        <section className="bg-gray-50 py-16" ref={testimonialsRef}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600">What Our Clients Say</h2>
              <p className="mt-2 text-lg text-gray-600">See how our platform has helped companies achieve their goals.</p>
            </div>
            <div className="flex overflow-x-auto gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <p className="mt-6 text-xl text-gray-600 italic">"{testimonial.content}"</p>
                  <h3 className="mt-4 text-xl font-semibold text-blue-600">{testimonial.name}</h3>
                  <p className="text-lg text-gray-500">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
