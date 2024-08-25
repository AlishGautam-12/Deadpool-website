import React from 'react';
import { motion } from 'framer-motion';
import shirtImage from '../assets/images/shirt.png';
import mugImage from '../assets/images/mug 2.jpg';
import posterImage from '../assets/images/poster.png';
import beltImage from '../assets/images/belt.jpg';

const merchItems = [
  { id: 1, name: "Deadpool T-Shirt", price: "$19.99", image: shirtImage },
  { id: 2, name: "Deadpool Mug", price: "$12.99", image: mugImage },
  { id: 3, name: "Deadpool Poster", price: "$9.99", image: posterImage },
  { id: 4, name: "Deadpool Action Figure", price: "$24.99", image: beltImage },
];

  

const MerchSection = () => {
  return (
    <section  className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 md:text-5xl lg:text-6xl">
        Deadpool Merch
      </h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {merchItems.map(item => (
          <motion.div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-auto mb-4 rounded-lg object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-lg mb-4">{item.price}</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MerchSection;
