import React from 'react';
import d from '../assets/images/deadpool-hero.png';

const HeroSection = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center h-screen px-6 text-center md:flex-row md:text-left md:justify-between md:px-12 lg:px-24">
      {/* Main Image */}
      <div className="mb-1 mt-11 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
        <img
          src={d}
          alt="Deadpool Hero"
          className="w-full h-3/4 object-cover md:h-3/4 lg:h-2/3 max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl animate-pulse">
          Welcome to Deadpool's World
        </h2>
        <p className="text-lg mb-6 md:text-xl lg:text-2xl">
          Where chaos meets comedy! Get ready for a wild ride with the one and only Merc with a Mouth.
        </p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition duration-300">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
