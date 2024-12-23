import React from 'react';

function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center py-16">
        <h1 className="text-4xl font-semibold text-green-600">Predictive Analytics</h1>
        <p className="mt-4 text-lg text-gray-600">Unlock predictive insights to forecast future trends and make data-driven decisions.</p>
      </header>

      {/* Predictive Analytics Overview Section */}
      <section className="py-16 bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-green-600">What is Predictive Analytics?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Predictive analytics involves using historical data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes. This helps businesses make proactive decisions and gain a competitive edge.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-10">Benefits of Predictive Analytics</h2>
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Enhanced Decision-Making</h3>
            <p className="text-lg text-gray-600">
              With predictive insights, organizations can make data-driven decisions, reducing risks and enhancing their strategy for growth.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimized Resource Allocation</h3>
            <p className="text-lg text-gray-600">
              Predictive analytics helps businesses understand demand patterns and optimize the use of resources, saving time and costs.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid gap-12 mt-12 md:grid-cols-2">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Improved Customer Retention</h3>
            <p className="text-lg text-gray-600">
              By predicting customer behavior, businesses can tailor marketing strategies to retain valuable customers and enhance loyalty.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Mitigation</h3>
            <p className="text-lg text-gray-600">
              Predictive models help businesses to foresee potential risks and take preventive actions to minimize losses.
            </p>
          </div>
        </div>
      </section>

      {/* Predictive Analytics Use Case Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center">Use Cases of Predictive Analytics</h2>
        <div className="max-w-4xl mx-auto mt-8">
          <h3 className="text-xl font-semibold mb-4">Customer Churn Prediction</h3>
          <p className="text-lg text-gray-200">
            Predictive analytics helps businesses to identify customers who are likely to churn. This allows organizations to take proactive steps to retain them, such as offering discounts or personalized services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-8">
          <h3 className="text-xl font-semibold mb-4">Supply Chain Optimization</h3>
          <p className="text-lg text-gray-200">
            Predictive models can forecast supply chain disruptions, enabling businesses to adjust their operations and ensure seamless product delivery.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8 mt-16">
        <p className="text-sm text-gray-600">© 2024 Predictive Analytics Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default PredictiveAnalyticsPage;
