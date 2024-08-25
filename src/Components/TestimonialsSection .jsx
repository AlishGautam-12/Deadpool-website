import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Deadpool is the best! Highly recommended.",
    author: "John Doe"
  },
  {
    id: 2,
    quote: "A wild ride of humor and action. Love it!",
    author: "Jane Smith"
  },
  {
    id: 3,
    quote: "Deadpool brings comedy to the next level!",
    author: "Sam Wilson"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 md:text-5xl lg:text-6xl">
        What People Say
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map(testimonial => (
          <motion.div
            key={testimonial.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <p className="text-lg mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-right">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
