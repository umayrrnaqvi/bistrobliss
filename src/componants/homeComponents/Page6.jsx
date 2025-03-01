import React from 'react'
//comments stuff
import title4 from "../../assets/page 6/title.png"
import user1 from "../../assets/page 6/User1.png"
import user2 from "../../assets/page 6/User2.png"
import user3 from "../../assets/page 6/User3.png"

const customerComments = [
    {
      name: "“The best restaurant”",
      description: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      img: user1
    },
  
    {
      name: "“Simply delicious”",
      description: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      img: user2
    },
  
    {
      name: "“One of a kind restaurant”",
      description: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      img: user3
    },
  
  ];

const Page6 = () => {
    return (
        <>

            <div className='w-full min-h-screen flex flex-col items-center gap-20 p-4'>

                <div className='mt-20'>
                    <img src={title4} alt="Error" />
                </div>
                <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {customerComments.map((Comments, index) => (
                        <div key={index} className='bg-[#F9F9F7] h-110 shadow-lg rounded-lg p-10 flex flex-col justify-around hover:shadow-xl transition hover:cursor-pointer'>
                            <h2 className='font-bold text-2xl text-[#AD343E] '>{Comments.name}</h2>
                            <p className='text-[#414536] text-xl border-b border-b-[#414536] pb-6'>{Comments.description}</p>

                            <div>
                                <div>
                                    <img src={Comments.img} alt={Comments.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page6