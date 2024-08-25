import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <motion.div
      className="w-16 h-16 border-4 border-t-4 border-red-500 border-solid rounded-full mx-auto my-12"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
};

export default Spinner;
