
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Login from './components/LoginForm.js';
import Signup from './components/SignupForm.js';
import Home from './components/Home.js';
import RealTimeDataPage from './components/RealTimeDataPage.js';
import PredictiveAnalyticsPage from './PredictiveAnalyticsPage.js';
import AnalyticsPage from './components/AnalyticsPage.js';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for a few seconds before showing the content
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 3000);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {loading ? (
        // Show Lottie loader while the content is loading
        <div className="absolute inset-0 flex justify-center items-center animate-popOut">
          <DotLottieReact
            src="https://lottie.host/8d48b5a1-d654-494b-815c-e3b4cbdad464/AC1uyV5YD9.lottie"
            loop
            autoplay
          />
        </div>
      ) : (
        // Once loading is complete, show the routes and main content
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/realtime-data" element={<RealTimeDataPage />} />
          <Route path="/predictive-analytics" element={<PredictiveAnalyticsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
