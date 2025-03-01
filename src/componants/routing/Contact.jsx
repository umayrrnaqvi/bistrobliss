import React from 'react';
import { motion } from 'framer-motion';
import title from "../../assets/contact/title.png";
import info from "../../assets/contact/info.png";

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between'>

      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-full h-[60vh] bg-[#F9F9F7] flex items-center justify-center'
      >
        <img className='w-[70%] md:w-[40%] lg:w-[30%]' src={title} alt="Contact Title" />
      </motion.div>

      {/* Form Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='w-[90%] md:w-[70%] lg:w-[50%] bg-white rounded-2xl shadow-lg p-6 mx-auto -mt-20'
      >
        <form className='space-y-6'>

          {/* Name & Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-gray-700 font-semibold">Name</label>
              <input 
                type="text" 
                placeholder='Enter your name' 
                className="w-full border border-[#DBDFD0] rounded-[30px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className="w-full border border-[#DBDFD0] rounded-[30px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="text-gray-700 font-semibold">Subject</label>
            <input 
              type="text" 
              placeholder='Write a subject'
              className='w-full border-[#DBDFD0] border rounded-[30px] p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-[#AD343E]'
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="text-gray-700 font-semibold">Message</label>
            <textarea 
              placeholder='Write your message'
              className='w-full border-[#DBDFD0] border rounded-[20px] p-3 mt-2 h-[150px] focus:outline-none focus:ring-2 focus:ring-[#AD343E]'
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full bg-[#AD343E] text-white text-lg font-semibold rounded-[30px] py-3 hover:bg-[#8B282F] transition'
          >
            Send Message
          </motion.button>

        </form>
      </motion.div>

      {/* Info Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='w-full flex justify-center mt-10 mb-20 px-5'
      >
        <img className='w-full max-w-[600px]' src={info} alt="Contact Info" />
      </motion.div>
      
    </div>
  );
};

export default Contact;
