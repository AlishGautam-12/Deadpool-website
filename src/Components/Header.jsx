
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import l from '../assets/images/deadpool-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={l}
          alt="Deadpool Logo"
          className="h-10 w-10 animate-spin hover:animate-none transition duration-300"
        />
        <h1 className="text-2xl font-bold">Deadpool's World</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation - Hidden on Mobile, shown on larger screens */}
      <nav className={`hidden md:flex space-x-6 text-lg`}>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-red-500 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-500 transition duration-300">Deadpool</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-red-500 transition duration-300">Gallery</Link>
          </li>
          <li>
            <Link to="/merch" className="hover:text-red-500 transition duration-300">Merch</Link>
          </li>
         
        </ul>
      </nav>

      {/* Join the Chaos Button - Hidden on Mobile */}
      <div className="hidden md:block">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transform hover:scale-110 transition duration-300">
          Join the Chaos
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black text-white z-50">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link to="/" className="hover:text-red-500 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition duration-300">Deadpool</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-red-500 transition duration-300">Gallery</Link>
            </li>
            <li>
              <Link to="/merch" className="hover:text-red-500 transition duration-300">Merch</Link>
            </li>
           
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transform hover:scale-110 transition duration-300">
                Join the Chaos
              </button>
            
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
