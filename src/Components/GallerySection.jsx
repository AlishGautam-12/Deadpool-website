import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Adjust the import path as needed

// Example image imports (adjust paths as needed)
import img1 from '../assets/images/deadpool-gallery-1.png';
import img2 from '../assets/images/deadpool-gallery-2.png';
import img3 from '../assets/images/deadpool-gallery-3.png';
import img4 from '../assets/images/deadpool-gallery-4.png';
import img5 from '../assets/images/deadpool-gallery-5.png';
import img6 from '../assets/images/deadpool-gallery-6.png';

const GallerySection = () => {
  // State for loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <section className="bg-black text-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 md:text-5xl lg:text-6xl">
          Deadpool Gallery
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <img
            src={img1}
            alt="Deadpool 1"
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <img
            src={img2}
            alt="Deadpool 2"
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <img
            src={img3}
            alt="Deadpool 3"
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <img
            src={img4}
            alt="Deadpool 4"
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <img
            src={img5}
            alt="Deadpool 5"
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <img
            src={img6}
            alt="Deadpool 6"
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>
    </>
  );
};

export default GallerySection;
