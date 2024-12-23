
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Login from './components/LoginForm.js';
import Signup from './components/SignupForm.js';
import Home from './components/Home.js';
import RealTimeDataPage from './components/RealTimeDataPage.js';
import PredictiveAnalyticsPage from './PredictiveAnalyticsPage.js';

function App() {
  return (
    <Routes>  {/* Use Routes for routing */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/realtime-data" element={<RealTimeDataPage />} />
        <Route path="/predictive-analytics" element={<PredictiveAnalyticsPage />} />
    </Routes>
  );
}

export default App;
