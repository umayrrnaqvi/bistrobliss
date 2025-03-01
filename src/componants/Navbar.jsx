import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import call from '../assets/call.png';
import mail from '../assets/mail.png';
import social from '../assets/social.png';
import logo from '../assets/logo.png';
import cuisine from '../assets/cuisine.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full sticky top-0 z-50 bg-white shadow-md'>

      {/* Top bar */}
      <div className='w-full bg-[#474747] text-white p-2 flex justify-between items-center md:justify-center gap-10'>

        {/* Left side (Call and Mail) */}
        <div className='flex items-center gap-3 '>
          <img src={call} alt="Call" className='w-[100px] md:w-[50%] ' />
          {/* <span className='text-sm'>+123 456 0107</span> */}
          <img src={mail} alt="Mail" className='w-[100px] md:w-[50%]' />

        </div>
        <div className='w-1/2 flex justify-center'>
          <img src={social} alt="Social Media" className='w-[90px]' />
        </div>
      </div>

      {/* Navbar */}
      <div className='flex justify-between items-center py-4 px-6 md:px-10'>

        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img className='w-10' src={logo} alt="Logo" />
          <img className='w-28' src={cuisine} alt="Cuisine" />
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-8 items-center'>
          {['/', '/about', '/menu', '/pages', '/contact'].map((path, index) => {
            const labels = ['Home', 'About', 'Menu', 'Pages', 'Contact'];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `text-[#474747] font-bold font-sans px-4 py-2 rounded-lg transition-colors duration-300
                  hover:bg-[#DBDFD0] ${isActive ? 'bg-[#DBDFD0]' : ''}`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#AD343E] px-4 py-2 rounded-lg"
                : "bg-white text-[#AD343E] px-4 py-2 rounded-lg hover:bg-[#AD343E] hover:text-white"
            }
          >
            Sign Up
          </NavLink>
        </nav>

        {/* Book a Table Button */}
        <Link to="/book-table">
          <button className='hidden md:block text-[#474747] border border-[#474747] px-6 py-2 rounded-lg font-bold
                    hover:bg-[#AD343E] hover:text-white cursor-pointer transition-colors duration-300'>
            Book A Table
          </button>
        </Link>


        {/* Hamburger Menu */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX onClick={toggleMenu} size={30} className='text-[#474747]' />
          ) : (
            <FiMenu onClick={toggleMenu} size={30} className='text-[#474747]' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-white shadow-lg'>
          {['/', '/about', '/menu', '/pages', '/contact'].map((path, index) => {
            const labels = ['Home', 'About', 'Menu', 'Pages', 'Contact'];
            return (
              <NavLink
                key={index}
                to={path}
                onClick={toggleMenu}
                className='w-full text-center py-4 text-[#474747] font-bold border-b hover:bg-[#DBDFD0]'
              >
                {labels[index]}
              </NavLink>
            );
          })}
          <NavLink
            to="/signup"
            onClick={toggleMenu}
            className='w-full text-center py-4 text-[#AD343E] font-bold hover:bg-[#AD343E] hover:text-white'
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/book-table"
            onClick={toggleMenu}
            className='w-full text-center py-4 text-[#474747] font-bold border-t hover:bg-[#AD343E] hover:text-white transition ease-in-out'
          >
            Book A Table
          </NavLink>

        </div>
      )}

    </div>
  );
};

export default Navbar;
