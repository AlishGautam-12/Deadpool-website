import React from 'react';
import A from "../assets/images/deadpool-about.png"

const AboutSection = () => {
  return (
    <section className="bg-gray-900 text-white py-0 px-6 flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:px-12 lg:px-24">
      {/* Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
          About Deadpool
        </h2>
        <p className="text-lg mb-6 md:text-xl lg:text-2xl">
          Deadpool is not your average superhero. He's witty, he's funny, and he's a little bit crazy. But that's what makes him so awesome! Dive into the world of Deadpool and discover his unique style of heroism.
        </p>
        <p className="text-lg mb-6 md:text-xl lg:text-2xl">
          Whether he's breaking the fourth wall or kicking some serious bad-guy butt, Deadpool does it all with flair and panache. Get ready for a wild ride!
        </p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={A}
          alt="Deadpool About"
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
