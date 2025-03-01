import React, { useState } from 'react';
import { motion } from 'framer-motion';
import title from "../../assets/menu/All/title.png";
import { NavLink, Outlet } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import Page2 from '../menu components/Page2';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ['All', 'Breakfast', 'Main', 'Drinks', 'Desserts'];

  return (
    <>
      {/* Main Container */}
      <motion.div 
        className='w-full min-h-screen flex flex-col gap-20 items-center pb-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Title and Navigation */}
        <motion.div 
          className='w-[90%] max-w-[600px] flex flex-col items-center gap-8 mt-10'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src={title} alt="Menu Title" className='w-full' />

          {/* Desktop Menu */}
          <motion.nav 
            className='hidden md:flex justify-center gap-4'
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={`/menu/${item}`}
                className={({ isActive }) =>
                  `text-[#474747] border border-[#DBDFD0] font-bold py-2 px-8 rounded-full 
                  transition-all duration-300 ease-in-out 
                  hover:bg-[#AD343E] hover:text-white hover:border-none 
                  ${isActive ? "bg-[#AD343E] text-white" : ""}`
                }
              >
                {item}
              </NavLink>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className='md:hidden'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button onClick={toggleMenu} className='text-[#474747] text-2xl'>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </motion.div>

          {/* Mobile Dropdown Menu */}
          <motion.div 
            className='md:hidden flex flex-col items-center gap-4 bg-[#F9F9F7] p-4 rounded-lg w-full'
            initial={{ y: -20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen && menuItems.map((item) => (
              <NavLink
                key={item}
                to={`/menu/${item}`}
                className={({ isActive }) =>
                  `text-[#474747] border border-[#DBDFD0] font-bold py-2 px-8 rounded-full 
                  transition-all duration-300 ease-in-out 
                  hover:bg-[#AD343E] hover:text-white hover:border-none 
                  ${isActive ? "bg-[#AD343E] text-white" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className='w-full flex justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Outlet />
        </motion.div>
      </motion.div>

      <Page2 />
    </>
  );
};

export default Menu;
