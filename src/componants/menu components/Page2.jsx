import React from 'react'
import title from "../../assets/menu/page 2/title.png"
import Uber from "../../assets/menu/page 2/1.png"
import Doordash from "../../assets/menu/page 2/2.png"
import Instacart from "../../assets/menu/page 2/3.png"
import GrubHub from "../../assets/menu/page 2/4.png"
import DidiFood from "../../assets/menu/page 2/5.png"
import Deliveroo from "../../assets/menu/page 2/6.png"
import Postmates from "../../assets/menu/page 2/7.png"
import FoodPanda from "../../assets/menu/page 2/8.png"
import JustEat from "../../assets/menu/page 2/9.png"

const Page2 = () => {
  return (
    <>
    
    <div className='w-full min-h-screen bg-[#F9F9F7] flex flex-col justify-around md:flex-row items-center p-4'>
        {/* left side content */}
        <div className='max-w-[400px] h-auto'>
            <img src={title} alt="title not found" />
        </div>
        {/* right side content */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px]'>
            <img src={Uber} alt="img not found" />
            <img src={Doordash} alt="img not found" />
            <img src={Instacart} alt="img not found" />
            <img src={GrubHub} alt="img not found" />
            <img src={DidiFood} alt="img not found" />
            <img src={Deliveroo} alt="img not found" />
            <img src={Postmates} alt="img not found" />
            <img src={FoodPanda} alt="img not found" />
            <img src={JustEat} alt="img not found" />
        </div>
    </div>
    
    </>
  )
}

export default Page2