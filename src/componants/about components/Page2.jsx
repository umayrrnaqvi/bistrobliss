import React from 'react'
// Video clip
import bg2 from "../../assets/about/page 2/bg2.png"
import play from "../../assets/about/page 2/Play.png"
import Title from "../../assets/about/page 2/Title.png"
import features from "../../assets/about/page 2/features.png"

const Page2 = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-[#F9F9F7] gap-10 p-6'>

    
      <div className='relative w-full max-w-[1200px] aspect-[16/9] flex justify-center items-center rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover' src={bg2} alt="Background" />
        
  
        <img className='absolute w-16 sm:w-20 md:w-24 hover:cursor-pointer' src={play} alt="Play button" />

        
        <img className='absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 max-w-[400px]' src={Title} alt="Title" />
      </div>

      <div className='w-full max-w-[800px]'>
        <img className='w-full' src={features} alt="Features" />
      </div>

    </div>
  )
}

export default Page2
