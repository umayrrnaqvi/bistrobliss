import React from 'react'
// Delivery images
import image1 from "../../assets/page 5/1.png"
import image2 from "../../assets/page 5/2.png"
import image3 from "../../assets/page 5/3.png"
import rightTxt2 from "../../assets/page 5/rightTxt.png"

const Page5 = () => {
    return (
        <div className='w-full min-h-screen bg-[#F9F9F7] flex flex-col sm:flex-row justify-around items-center p-6 gap-10'>

            
            <div className='w-full sm:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-6'>
                <img className='lg:row-span-2 w-full rounded-lg' src={image1} alt="Error" />
                <img src={image2} alt="Error" />
                <img src={image3} alt="Error" />
            </div>

            
            <div className='w-full sm:w-[35%] flex justify-center'>
                <img className='max-w-full h-auto' src={rightTxt2} alt="Error" />
            </div>
        </div>
    )
}

export default Page5
 