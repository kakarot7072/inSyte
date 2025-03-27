
import React, { useState, useEffect } from 'react';

import {
  Layout,

  Search,
  User
} from 'lucide-react';


const Dashboard = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [embedUrl, setEmbedUrl] = useState(
    "https://app.powerbi.com/view?r=eyJrIjoiYTNkMmY2YjUtMzEwZS00NDdjLTk3YzEtMTQ4ZWY3ZmM3MTY3IiwidCI6ImQ0OGQ0NjhjLTI1MzktNGU4YS1iNmM0LTkwNTYxNDY5ZmU3ZCJ9"
  );
// Simulated real-time data


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Layout className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">Analytics Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="ml-4">
                <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                  <User className="h-6 w-6 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Power BI Dashboard</h2>
          <iframe
            title="Power BI Dashboard"
            width="100%"
            height="600px"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}

export default Dashboard;