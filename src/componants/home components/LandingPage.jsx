import React from 'react';
import { motion } from 'framer-motion';
import text from "../../assets/text.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <motion.div
      className="w-full h-screen relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.img
        className="w-full h-full object-cover"
        src="/bg.png"
        alt="Error"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Centered Text */}
      <motion.img
        className="absolute w-[80%] max-w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={text}
        alt="Error"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Buttons */}
      <motion.div
        className="absolute flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bottom-20 sm:bottom-32 left-1/2 transform -translate-x-1/2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Link to="/book-table">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 text-white bg-[#AD343E] rounded-full font-bold text-sm sm:text-base hover:bg-white cursor-pointer hover:text-[#474747] hover:border-[#474747] border transition"
          >
            Book A Table
          </motion.button>
        </Link>

        <Link to="/menu">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 text-[#474747] bg-white border-[#474747] border rounded-full font-bold text-sm sm:text-base hover:bg-[#AD343E] cursor-pointer hover:text-white transition"
          >
            Explore Menu
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
