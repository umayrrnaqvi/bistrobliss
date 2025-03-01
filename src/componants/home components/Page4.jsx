import React from 'react'
import { Link } from 'react-router-dom'
//Services
import title2 from "../../assets/page 4/Title.png"
import catering from "../../assets/page 4/1.png"
import birthday from "../../assets/page 4/2.png"
import weddings from "../../assets/page 4/3.png"
import events from "../../assets/page 4/4.png"

const servicesCards = [
    {
      id: 1,
      name: "Caterings",
      description: "In the new era of technology we look in the future with certainty for life.",
      img: catering
    },
  
    {
      id: 2,
      name: "Birthdays",
      description: "In the new era of technology we look in the future with certainty for life.",
      img: birthday
    },
  
    {
      id: 3,
      name: "Weddings",
      description: "In the new era of technology we look in the future with certainty for life.",
      img: weddings
    },
  
    {
      id: 4,
      name: "Events",
      description: "In the new era of technology we look in the future with certainty for life.",
      img: events
    },
  ];

const Page4 = () => {
    return (
        <>
            <div className='w-[100%] min-h-screen flex flex-col items-center gap-15 p-4'>
                <div className='mt-20 w-[80%]'>
                    <img src={title2} alt="Error" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] '>
                    {servicesCards.map((cards) => (
                        <Link key={cards.id} to={`services/${cards.id}`} className=' flex flex-col justify-between h-120  hover:shadow-2xl cursor-pointer transition ease-in-out rounded-2xl hover:bg-[#DBDFD0]' >
                            <div>
                                <div >
                                    <img className='p-2' src={cards.img} alt={cards.name} />
                                </div>
                            </div>
                            <h3 className=' font-bold text-2xl p-2 text-[#2C2F24]'>{cards.name}</h3>
                            <p className='p-2 text-xl text-[#414536]'>{cards.description}</p>
                        </Link>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Page4