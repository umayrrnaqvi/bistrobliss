import React from 'react';
import { motion } from 'framer-motion';

const LoginForm = ({ onSwitch }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-[#F9F9F7] p-4"
    >
      <div className="w-full max-w-md lg:w-xl bg-white p-10 rounded-2xl shadow-lg">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#AD343E] mb-8 text-center">Login</h2>

        {/* Form */}
        <form className="space-y-6">

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="cursor-pointer"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-[#AD343E] hover:underline">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#AD343E] text-white p-3 rounded-lg hover:bg-[#8B282F] transition cursor-pointer"
          >
            Login Now
          </button>
        </form>

        {/* Switch to Signup */}
        <p className="text-sm text-center mt-6">
          Don't have an account? 
          <button 
            onClick={onSwitch} 
            className="text-[#AD343E] font-bold ml-1 hover:underline cursor-pointer"
          >
            Signup now
          </button>
        </p>

      </div>
    </motion.div>
  );
};

export default LoginForm;
