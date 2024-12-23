
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import { useInView } from 'react-intersection-observer'; // Intersection observer for animation

function HomePage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,  // Trigger when 50% of the element is visible
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200">
      {/* Custom Cursor */}
      

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center py-16">
          <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 animate__animated animate__fadeIn animate__delay-1s">
            Real-Time Data Analytics & Predictive Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-light animate__animated animate__fadeIn animate__delay-2s">
            Harness the power of real-time data and predictive analytics to transform your business.
          </p>
        </header>

        {/* Key Features Section */}
        <section className="py-16 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-center text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-semibold text-blue-600">Real-Time Data Visualization</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience seamless, real-time data updates with interactive visualizations.
            </p>
            <Link to="/realtime-data">
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                View Real-Time Data
              </button>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-blue-600">Predictive Analytics</h2>
            <p className="mt-4 text-lg text-gray-600">
              Leverage predictive insights to forecast future trends and make data-driven decisions.
            </p>
            <Link to="/predictive-analytics">
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
                Explore Predictive Analytics
              </button>
            </Link>
          </div>
        </section>

        {/* Impactful Use Case Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-green-600 text-white rounded-xl shadow-lg">
          <div className="text-center px-6">
            <h2 className="text-4xl font-semibold animate__animated animate__fadeIn animate__delay-3s">
            Driving Innovation and Efficiency Through Data Analytics
            </h2>
            <p className="mt-4 text-lg font-light animate__animated animate__fadeIn animate__delay-4s">
            Our platform enables businesses to drive efficiency and enhance decision-making with real-time data.
            </p>
            <Link
              to="/login"
              className="mt-8 px-7 py-2  bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Start Now
            </Link>
          </div>
        </section>

        {/* Key Benefits Section with Intersection Observer */}
        <section className="py-20 px-4 bg-gray-50 text-center">
          <h2
            ref={ref}
            className={`text-4xl font-semibold text-blue-600 mb-10 transition-all duration-700 ${
              inView ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''
            }`}
          >
            Key Benefits of Our Platform
          </h2>
          <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
            <div
              className={`feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                inView ? 'animate__animated animate__fadeInLeft animate__delay-2s' : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Real-Time Data Analytics
              </h3>
              <p className="text-lg text-gray-600">
                With real-time data processing, our platform helps you stay updated with the latest insights, ensuring quick and informed decision-making.
              </p>
            </div>
            <div
              className={`feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                inView ? 'animate__animated animate__fadeInRight animate__delay-2s' : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Predictive Analytics
              </h3>
              <p className="text-lg text-gray-600">
                Our predictive capabilities allow you to foresee trends and outcomes, enabling proactive actions and a competitive edge.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto grid gap-12 mt-12 md:grid-cols-2">
            <div
              className={`feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                inView ? 'animate__animated animate__fadeInLeft animate__delay-3s' : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Easy to Use Interface
              </h3>
              <p className="text-lg text-gray-600">
                Our platform is designed with ease of use in mind. Intuitive navigation ensures a seamless experience for users at all levels.
              </p>
            </div>
            <div
              className={`feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                inView ? 'animate__animated animate__fadeInRight animate__delay-3s' : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Customizable Dashboards
              </h3>
              <p className="text-lg text-gray-600">
                Tailor your dashboard to meet your specific needs and focus on the key metrics that matter most to your business.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center py-8 mt-16">
          <p className="text-sm text-gray-600">© 2024 Real-Time Data Analytics Platform. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
