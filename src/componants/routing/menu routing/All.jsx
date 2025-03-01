import React from 'react';
import { motion } from 'framer-motion';
// Cards
import egg from "../../../assets/menu/All/1.png";
import pizza from "../../../assets/menu/All/2.png";
import cocktail from "../../../assets/menu/All/3.png";
import cake from "../../../assets/menu/All/4.png";
import lemonade from "../../../assets/menu/All/5.png";
import icecream from "../../../assets/menu/All/6.png";
import burger from "../../../assets/menu/All/7.png";
import waffles from "../../../assets/menu/All/8.png";

const categoryCards = [
  { price: "$ 9.99", name: "Fried Eggs", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: egg },
  { price: "$ 15.99", name: "Hawaiian Pizza", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: pizza },
  { price: "$ 7.25", name: "Martinez Cocktail", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: cocktail },
  { price: "$ 20.99", name: "Butterscotch Cake", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: cake },
  { price: "$ 5.89", name: "Mint Lemonade", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: lemonade },
  { price: "$ 18.05", name: "Chocolate Icecream", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: icecream },
  { price: "$ 12.55", name: "Cheese Burger", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: burger },
  { price: "$ 12.99", name: "Classic Waffles", description: "Made with eggs, lettuce, salt, oil and other ingredients.", img: waffles }
];

const All = () => {
  return (
    <motion.div 
      className='max-w-full min-h-screen p-10 bg-[#F9F9F7]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'
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
        {categoryCards.map((card, index) => (
          <motion.div 
            key={index}
            className='shadow-md hover:shadow-2xl transition cursor-pointer rounded-lg overflow-hidden'
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img src={card.img} alt={card.name} className='w-full h-auto' />
            <div className='border-[#DBDFD0] border rounded-[5px] p-8 flex flex-col items-center gap-2 bg-white'>
              <h1 className='font-bold text-xl text-[#AD343E]'>{card.price}</h1>
              <h2 className='text-[#2C2F24] text-2xl font-semibold'>{card.name}</h2>
              <p className='text-[#414536] text-sm text-center mt-2'>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default All;
