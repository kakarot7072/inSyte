import React, { useState, useEffect } from "react";

const PowerBIDashboard = () => {
    const [embedUrl, setEmbedUrl] = useState("");

    useEffect(() => {
        // Directly setting the Power BI report URL
        setEmbedUrl("https://app.powerbi.com/view?r=eyJrIjoiYTNkMmY2YjUtMzEwZS00NDdjLTk3YzEtMTQ4ZWY3ZmM3MTY3IiwidCI6ImQ0OGQ0NjhjLTI1MzktNGU4YS1iNmM0LTkwNTYxNDY5ZmU3ZCJ9");
    }, []);

    return (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Power BI Dashboard</h2>
            {embedUrl ? (
                <iframe
                    title="Power BI Dashboard"
                    width="100%"
                    height="600px"
                    src={embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg shadow-md"
                ></iframe>
            ) : (
                <p className="text-gray-600">Loading dashboard...</p>
            )}
        </div>
    );
};

export default PowerBIDashboard;