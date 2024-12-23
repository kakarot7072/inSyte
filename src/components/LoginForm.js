
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
    } else {
      setError('');
      console.log('Login successful');
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <div className="text-3xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
          Login Form
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
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

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <div className="text-sm text-indigo-600 hover:underline">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div className="mb-6">
            <input
              type="submit"
              value="Login"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:scale-95"
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            Not a member?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Signup now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
