import React from 'react'

import bg2 from "../../assets/page 3/bg2.png"
import rightTxt from "../../assets/page 3/rightTxt.png"
import { Link } from 'react-router-dom'

const Page3 = () => {
    return (
        <div className='w-[100%] mx-auto bg-[#F9F9F7] flex flex-col lg:flex-row items-center justify-center lg:justify-around px-6 lg:px-20 py-20 gap-10 font-["Playfair Display", serif]'>

            {/* Left Side (Image + Overlay Card) */}
            <div className='relative w-full lg:w-[50%] max-w-[600px]'>
                <img src={bg2} alt="Background" className='w-full rounded-lg' />

                {/* Overlay Images */}
                <div className='absolute bottom-0 left-0 p-6 bg-[#2C2F24] text-white rounded-lg w-[90%] max-w-[400px]'>
                    <h3 className='text-lg font-bold mb-4'>Come and visit us</h3>
                    <p className='flex items-center gap-2 mb-2'><span>📞</span> (414) 857 - 0107</p>
                    <p className='flex items-center gap-2 mb-2'><span>📧</span> happytummy@restaurant.com</p>
                    <p className='flex items-center gap-2'><span>📍</span> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                </div>
            </div>

            {/* Right Side (Image + Button) */}
            <div className='w-full lg:w-[50%] max-w-[600px] text-center lg:text-left'>
                <img src={rightTxt} alt="Right Side Text" className='mb-6 w-full max-w-[400px]' />
               <Link to="/about">
                <button className='border-2 border-[#2C2F24] text-[#2C2F24] px-8 py-3 rounded-full font-semibold hover:bg-[#AD343E] hover:text-white transition ease-in-out hover:cursor-pointer'>
                    More About Us
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Page3
