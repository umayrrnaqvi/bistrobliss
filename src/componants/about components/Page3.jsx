import React from 'react'
// Overview images
import title2 from "../../assets/about/page 3/title2.png"
import location from "../../assets/about/page 3/1.png"
import founded from "../../assets/about/page 3/2.png"
import member from "../../assets/about/page 3/3.png"
import feedback from "../../assets/about/page 3/4.png"
import maskgroup from "../../assets/about/page 3/Maskgroup.png"

const Page3 = () => {
    return (
        <div className='w-full min-h-screen bg-[#F9F9F7] flex justify-center items-center p-6'>
            <div className='w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-10'>

                {/* Left Section */}
                <div className='w-full lg:w-1/2 flex flex-col justify-center gap-10'>
                    
                    <div className='w-full max-w-[400px] mx-auto'>
                        <img className='w-full' src={title2} alt="Title" />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <img className='w-full max-w-[180px] mx-auto shadow-md hover:shadow-2xl cursor-pointer' src={location} alt="Location" />
                        <img className='w-full max-w-[180px] mx-auto  shadow-md hover:shadow-2xl cursor-pointer' src={founded} alt="Founded" />
                        <img className='w-full max-w-[180px] mx-auto  shadow-md hover:shadow-2xl cursor-pointer' src={member} alt="Member" />
                        <img className='w-full max-w-[180px] mx-auto  shadow-md hover:shadow-2xl cursor-pointer' src={feedback} alt="Feedback" />
                    </div>
                </div>

                {/* Right Section */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img className='w-full max-w-[500px]' src={maskgroup} alt="Mask group" />
                </div>
            </div>
        </div>
    )
}

export default Page3
