import React, { useState, useEffect } from 'react';

function RealTimeDataPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate real-time data fetching (e.g., from an API or WebSocket)
    const interval = setInterval(() => {
      fetchRealTimeData();
    }, 1000); // Fetch data every second

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  const fetchRealTimeData = () => {
    // Example: Fetch data from an API or simulate real-time data
    setData({
      time: new Date().toLocaleTimeString(),
      temperature: (Math.random() * 10 + 20).toFixed(2), // Random temperature
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-semibold text-center text-blue-600">Real-Time Data Analytics</h1>

      <div className="mt-8 text-center">
        <h2 className="text-2xl text-gray-800">Current Time: {data?.time}</h2>
        <p className="mt-4 text-xl text-gray-700">Temperature: {data?.temperature} °C</p>
      </div>

      {/* Example of real-time data display */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
          Update Data
        </button>
      </div>
    </div>
  );
}

export default RealTimeDataPage;
