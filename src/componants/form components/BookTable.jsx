import React from 'react';
import { motion } from 'framer-motion';
import bookATableTitle from "../../assets/Book table/tableTitle.png";

const BookATable = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between pb-20'>

      {/* Title Section with Motion */}
      <motion.div 
        className='w-full h-[60vh] bg-[#F9F9F7] flex items-center justify-center'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={bookATableTitle} 
          alt="Book A Table" 
          className='w-[70%] md:w-[40%] lg:w-[30%] transition-transform duration-300 hover:scale-105'
        />
      </motion.div>

      {/* Form Section with Motion */}
      <motion.div 
        className='w-[90%] md:w-[70%] lg:w-[50%] bg-white rounded-2xl shadow-lg p-6 mx-auto -mt-20'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form className='space-y-6'>

          {/* Date & Time Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-gray-700 font-semibold">Date</label>
              <input 
                type="date" 
                className="w-full border border-[#DBDFD0] rounded-[30px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Time</label>
              <input 
                type="time" 
                className="w-full border border-[#DBDFD0] rounded-[30px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
              />
            </div>
          </div>

          {/* Name & Phone Fields */}
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
              <label className="text-gray-700 font-semibold">Phone</label>
              <input 
                type="tel" 
                placeholder='Enter your phone number' 
                className="w-full border border-[#DBDFD0] rounded-[30px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[#AD343E]"
              />
            </div>
          </div>

          {/* Total Persons Field */}
          <div>
            <label className="text-gray-700 font-semibold">Total Persons</label>
            <select 
              className='w-full border-[#DBDFD0] border rounded-[30px] p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-[#AD343E]'
            >
              {[...Array(10).keys()].map(num => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            className='w-full bg-[#AD343E] text-white text-lg font-semibold rounded-[30px] py-3 hover:bg-[#8B282F] transition hover:cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
};

export default BookATable;
