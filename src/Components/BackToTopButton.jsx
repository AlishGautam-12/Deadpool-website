import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="bg-red-600 text-white p-3 rounded-full fixed bottom-4 right-4 shadow-lg"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp size={24} />
    </motion.button>
  );
};

export default BackToTopButton;
