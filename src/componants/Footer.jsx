import React from 'react'
import col1 from "../assets/footer/col1.png"
import Follow from "../assets/footer/Follow.png"
import img1 from "../assets/footer/img1.png"
import img2 from "../assets/footer/img2.png"
import img3 from "../assets/footer/img3.png"
import img4 from "../assets/footer/img4.png"
import copyright from "../assets/footer/copyright.png"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      <div className='w-full min-h-screen flex flex-col items-center justify-around gap-20 bg-[#474747] p-4'>
        
        <div className=' w-full h-auto flex flex-col items-center md:flex-row gap-20 justify-between'>

        <div className='w-full max-w-[300px]'>
          <img src={col1} alt="Image not found" />
        </div>

        <div className='flex gap-10'>
          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-bold  text-white mb-4">Pages</h3>
            <ul className="space-y-2 text-[#DBDFD0]">
              <li><NavLink to="/" className="hover:text-[#AD343E]">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#AD343E]">About</NavLink></li>
              <li><NavLink to="/menu" className="hover:text-[#AD343E]">Menu</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-[#AD343E]">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#AD343E]">Contact</NavLink></li>
              <li><NavLink to="/delivery" className="hover:text-[#AD343E]">Delivery</NavLink></li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className='space-y-3'>
            <h3 className="text-lg font-bold mb-4 text-white">Utility Pages</h3>
            <p className='text-[#DBDFD0]'>Start Here </p>
            <p className='text-[#DBDFD0]'>Password Protected</p>
            <p className='text-[#DBDFD0]'>404 Not Found</p>
            <p className='text-[#DBDFD0]'>Licenses</p>
            <p className='text-[#DBDFD0]'>Changelog </p>
            <p className='text-[#DBDFD0]'>View More </p>
          </div>

        </div>

        <div className='flex flex-col gap-10'>

          <div className='w-full max-w-[300px]'>
            <img src={Follow} alt="Image not found" />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            <img className='shadow-md hover:shadow-2xl hover:cursor-pointer' src={img1} alt="Image not found" />
            <img className='shadow-md hover:shadow-2xl hover:cursor-pointer' src={img2} alt="Image not found" />
            <img className='shadow-md hover:shadow-2xl hover:cursor-pointer' src={img3} alt="Image not found" />
            <img className='shadow-md hover:shadow-2xl hover:cursor-pointer' src={img4} alt="Image not found" />
          </div>

        </div>
        </div>

        <div>
          <img className='w-full max-w-[1000px]' src={copyright} alt="COPYRIGHT NOT FOUND" />
        </div>
      </div>

    </>
  )
}

export default Footer