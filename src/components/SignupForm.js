
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(""); 
      // Handle signup logic (e.g., API call)
      console.log("Signed up:", email);
      
      // Redirect to the Home page after successful signup
      navigate('/'); 
    }
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to Login page when clicked
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <div className="text-3xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
          Signup Form
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <input
              type="submit"
              value="Signup"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:scale-95"
            />
          </div>
        </form>

        {/* Link to Login Page */}
        <div className="mt-4 text-center">
          Already have an account?{' '}
          <button
            type="button"
            onClick={handleLoginClick}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
