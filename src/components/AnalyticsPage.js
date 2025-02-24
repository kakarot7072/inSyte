import React from "react";
import PowerBIDashboard from "../components/PowerBIDashboard"; // Adjust path if needed

function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Analytics</h1>
      <div className="text-lg text-gray-600 mb-6">
        <p>Here, you can view the analytics of the uploaded data.</p>
      </div>
      {/* Display Power BI Dashboard */}
      <PowerBIDashboard />
    </div>
  );
}

export default AnalyticsPage;