import React from 'react';
import { motion } from 'framer-motion';
// contact info
import bg from "../../assets/about/bg.png";
import rightText from "../../assets/about/rightText.png";

const LandingPage = () => {
  return (
    <motion.div 
      className='w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-20 p-6 bg-[#F9F9F7]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section (Image + Contact Card) */}
      <motion.div 
        className='relative w-full max-w-[600px]'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img className='w-full rounded-lg' src={bg} alt="Background" />

        <motion.div 
          className='absolute bottom-5 left-5 p-6 bg-[#2C2F24] text-white rounded-lg w-[90%] max-w-[400px]'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className='text-lg font-bold mb-4'>Come and visit us</h3>
          <div className='space-y-2 text-sm'>
            <p className='flex items-center gap-2'><span>📞</span> (414) 857 - 0107</p>
            <p className='flex items-center gap-2'><span>📧</span> happytummy@restaurant.com</p>
            <p className='flex items-center gap-2'><span>📍</span> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section (Right Text Image) */}
      <motion.div 
        className='w-full max-w-[500px] flex justify-center'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img className='w-full max-w-[500px]' src={rightText} alt="Right Text" />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
