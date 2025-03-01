import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
// Icons
import Cup from "../../assets/page 2/icon1.png";
import iceCream from "../../assets/page 2/icon2.png";
import drinks from "../../assets/page 2/icon3.png";
import cake from "../../assets/page 2/icon4.png";
// Breakfast items
import buttercake from "../../assets/Breakfastdetails/1.png";
import plate from "../../assets/Breakfastdetails/2.png";
import avacado from "../../assets/Breakfastdetails/3.png";
import smoothie from "../../assets/Breakfastdetails/4.png";
import chicken from "../../assets/Breakfastdetails/5.png";
import Iced from "../../assets/Breakfastdetails/6.png";
import Strawberry from "../../assets/Breakfastdetails/7.png";
import chocolatecake from "../../assets/Breakfastdetails/8.png";
import chessecake from "../../assets/Breakfastdetails/9.png";

const menuItems = [
  { id: 1, name: 'Buttermilk Pancakes', price: '$15.99', description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.", image: buttercake },
  { id: 2, name: 'Diner Double', price: '$13.99', description: 'Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.', image: plate },
  { id: 3, name: 'Avocado Toast', price: '$12.50', description: 'Kale chips tilde poke crucifix neutra heirloom YOLO enamel pin meditation literally.', image: avacado },
  { id: 4, name: 'Berry Smoothie Bowl', price: '$10.99', description: 'Quinoa tattooed wayfarers, gastropub cronut kitsch activated charcoal brunch.', image: smoothie },
  { id: 5, name: 'Chicken & Waffles', price: '$17.99', description: 'Artisan biodiesel fashion axe, tumeric helvetica tofu hot chicken.', image: chicken },
  { id: 6, name: 'Iced Latte', price: '$5.99', description: 'Espresso combined with chilled milk and poured over ice for a refreshing drink.', image: Iced },
  { id: 7, name: 'Strawberry Lemonade', price: '$4.50', description: 'A perfect balance of sweet strawberries and tart lemons, served ice-cold.', image: Strawberry },
  { id: 8, name: 'Chocolate Lava Cake', price: '$8.99', description: 'Decadent chocolate cake with a gooey molten center, topped with vanilla ice cream.', image: chocolatecake },
  { id: 9, name: 'Cheesecake', price: '$7.99', description: 'Classic New York-style cheesecake with a graham cracker crust.', image: chessecake }
];

const CategoryDetail = () => {
  const { id } = useParams();

  return (
    <motion.div
      className="max-w-4xl mx-auto py-10 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-start gap-4 border-b border-gray-300 pb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <span className="text-lg font-semibold text-[#AD343E]">{item.price}</span>
              </div>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryDetail;
