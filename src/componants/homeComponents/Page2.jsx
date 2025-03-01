import React from 'react';
import { Link } from 'react-router-dom';
// menu stuff
import Cup from "../../assets/page 2/icon1.png";
import iceCream from "../../assets/page 2/icon2.png";
import drinks from "../../assets/page 2/icon3.png";
import cake from "../../assets/page 2/icon4.png";
import title from "../../assets/page 2/title.png";

const menuCategories = [
    {
        id: 1,
        name: "Breakfast",
        description: "In the new era of technology we look in the future with certainty and pride for our life.",
        img: Cup,
        buttonText: "Explore menu",
    },
    {
        id: 2,
        name: "Main Dishes",
        description: "In the new era of technology we look in the future with certainty and pride for our life.",
        img: iceCream,
        buttonText: "Explore menu",
    },
    {
        id: 3,
        name: "Drinks",
        description: "In the new era of technology we look in the future with certainty and pride for our life.",
        img: drinks,
        buttonText: "Explore menu",
    },
    {
        id: 4,
        name: "Desserts",
        description: "In the new era of technology we look in the future with certainty and pride for our life.",
        img: cake,
        buttonText: "Explore menu",
    },
];

const Page2 = () => {
    return (


        <div className="w-full min-h-screen flex flex-col items-center p-4 ">
    
            <div className="w-full flex justify-center mb-30">
                <img className="w-[80%] max-w-[500px] mt-20" src={title} alt="Menu Title" />
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1200px] ">
                {menuCategories.map((category) => (
                    <Link key={category.id} to={`/categories/${category.id}`}>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-2 border-[#DBDFD0] hover:shadow-xl transition transform hover:scale-105 hover:bg-[#E07A5F] hover:text-white flex flex-col justify-between h-full ">
                            <div className="flex justify-center mb-4  ">
                                <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                                    <img src={category.img} alt={category.name} className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold">{category.name}</h3>
                            <p className="text-base mt-2 leading-relaxed">{category.description}</p>
                            <button className="text-[#AD343E] font-semibold text-lg mt-4 hover:underline">
                                {category.buttonText}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page2;
