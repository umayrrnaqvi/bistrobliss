import React from 'react';
import { motion } from 'framer-motion';
// Articles
import title from "../../assets/pags/title.png";
import article1 from "../../assets/pags/1.png";
import article2 from "../../assets/pags/2.png";
import article3 from "../../assets/pags/3.png";
import article4 from "../../assets/pags/4.png";
import article5 from "../../assets/pags/5.png";
import article6 from '../../assets/pags/6.png';
import article7 from "../../assets/pags/7.png";
import article8 from "../../assets/pags/8.png";
import article9 from "../../assets/pags/9.png";
import article10 from "../../assets/pags/10.png";
import article11 from "../../assets/pags/11.png";
import article12 from "../../assets/pags/12.png";

const blogCards = [
  { date: "January 3, 2023", name: "How to prepare a delicious gluten free sushi", img: article1 },
  { date: "January 3, 2023", name: "Exclusive baking lessons from the pastry king", img: article2 },
  { date: "January 3, 2023", name: "How to prepare the perfect fries in an air fryer", img: article3 },
  { date: "January 3, 2023", name: "How to prepare delicious chicken tenders", img: article4 },
  { date: "January 3, 2023", name: "5 great cooking gadgets you can buy to save time", img: article5 },
  { date: "January 3, 2023", name: "The secret tips & tricks to prepare a perfect burger", img: article6 },
  { date: "January 3, 2023", name: "7 delicious cheesecake recipes you can prepare", img: article7 },
  { date: "January 3, 2023", name: "5 great pizza restaurants you should visit this city", img: article8 },
  { date: "January 3, 2023", name: "5 great cooking gadgets you can buy to save time", img: article9 },
  { date: "January 3, 2023", name: "How to prepare a delicious gluten free sushi", img: article10 },
  { date: "January 3, 2023", name: "Top 20 simple and quick desserts for kids", img: article11 },
  { date: "January 3, 2023", name: "Top 20 simple and quick desserts for kids", img: article12 },
];

const Pages = () => {
  return (
    <motion.div 
      className='w-full min-h-screen bg-[#F9F9F7] flex flex-col items-center gap-20 p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.div 
        className='w-full md:w-[50%] h-auto mt-[50px]'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={title} alt="Error" />
      </motion.div>

      {/* Blog Cards */}
      <motion.div 
        className='max-w-7xl mx-auto'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {blogCards.map((card, index) => (
            <motion.div 
              key={index}
              className='rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-2xl transition cursor-pointer'
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <img className='w-full' src={card.img} alt={card.name} />
              <div className='p-4'>
                <p className='text-gray-500 text-sm'>{card.date}</p>
                <h1 className="text-lg font-semibold">{card.name}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Pages;
