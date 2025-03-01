import React from 'react';
import { motion } from 'framer-motion';

const SignupForm = ({ onSwitch }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="lg:w-xl flex items-center justify-center min-h-screen bg-[#F9F9F7]"
    >
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg">
        
        <h2 className="text-3xl font-bold text-[#AD343E] mb-8 text-center">Registration</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Create a password" 
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input 
              type="checkbox" 
              className="cursor-pointer"
            />
            <span>I accept all terms & conditions</span>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#AD343E] text-white p-3 rounded-lg hover:bg-[#8B282F] transition cursor-pointer"
          >
            Register Now
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Already have an account? 
          <button 
            onClick={onSwitch} 
            className="text-[#AD343E] font-bold ml-1 hover:underline cursor-pointer"
          >
            Login now
          </button>
        </p>

      </div>
    </motion.div>
  );
};

export default SignupForm;
