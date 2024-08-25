import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;
