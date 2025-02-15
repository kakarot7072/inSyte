
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Settings, Phone, Layout, User, ChevronDown, BarChart2, Brain, Target, Users, ArrowRight } from 'lucide-react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <Layout className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">DataAnalytics</span>
              </Link>

              <div className="hidden md:flex items-center ml-10 space-x-8">
                {[{ to: '/', icon: Home, label: 'Home' }, { to: '/services', icon: Settings, label: 'Services' }, { to: '/contact', icon: Phone, label: 'Contact' }]
                  .map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                    >
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
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <span className="font-medium">John Doe</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 animate__animated animate__fadeIn animate__faster">
                    {[{ to: '/dashboard', label: 'Dashboard' }, { to: '/profile', label: 'Your Profile' }, { to: '/settings', label: 'Settings' }]
                      .map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Sign out</button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate__animated animate__fadeIn animate__faster">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
              {[{ to: '/', label: 'Home' }, { to: '/services', label: 'Services' }, { to: '/contact', label: 'Contact' }, { to: '/dashboard', label: 'Dashboard' }]
                .map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </nav>

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
    </div>
  );
}

export default HomePage;
