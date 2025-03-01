import React from 'react'
import { Link } from 'react-router-dom'
//Articles
import title3 from "../../assets/page 7/OurBlog&Articles.png"
import burger from "../../assets/page 7/1.png"
import fries from "../../assets/page 7/2.png"
import chicken from "../../assets/page 7/3.png"
import cheesecake from "../../assets/page 7/4.png"
import pizza from "../../assets/page 7/5.png"

const articleCards = [
    {
      id: 1,
  
      name: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      description: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
      date: "January 3,2023",
      img: burger
    },
  
    {
      id: 2,
  
      name: "How to prepare the perfect french fries in an air fryer",
      date: "January 3,2023",
      img: fries
    },
  
    {
      id: 3,
  
      name: "How to prepare delicious chicken tenders",
      date: "January 3,2023",
      img: chicken
    },
  
    {
      id: 4,
  
      name: "7 delicious cheesecake recipes you can prepare",
      date: "January 3,2023",
      img: cheesecake
    },
  
    {
      id: 5,
  
      name: "5 great pizza restaurants you should visit this city",
      date: "January 3,2023",
      img: pizza
    },
  
  ];

const Page7 = () => {
    return (
        <>

            <div className='w-full min-h-screen bg-[#F9F9F7] flex flex-col items-center justify-center gap-[10px]'>
                <div className='w-5xl h-auto flex mt-10 flex-col md:flex-row items-center md:justify-between'>
                    <img className='w-[300px] md:w-2xl' src={title3} alt="Error" />
                    <button className='pl-[25px] pr-[25px] pt-[15px] pb-[15px] m-2 text-white bg-[#AD343E] 
                          rounded-[50px] font-[700] text-base transition-[0.3] ease-in-out
                            hover:bg-white hover:text-[#474747] hover:cursor-pointer hover:border-[#474747] border'>Read All Articles</button>
                </div>

                <div className="max-w-6xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {articleCards.map((article, index) => ( 
                            <Link
                                key={article.id}
                                to={`/articles/${article.id}`}
                                className={`rounded-lg shadow-md hover:shadow-2xl transition cursor-pointer overflow-hidden bg-white ${index === 0 ? "md:col-span-2 lg:col-span-2 row-span-2" : ""
                                    }`}
                            >
                                <img src={article.img} alt={article.name} />
                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">{article.date}</p>
                                    <h3 className="text-lg font-semibold mt-2">{article.name}</h3>
                                    {article.description && (
                                        <p className="text-gray-600 mt-2 text-sm">{article.description}</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page7