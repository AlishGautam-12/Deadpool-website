import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton'; // Import BackToTopButton

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Social Media Links */}
        <motion.div
          className="mb-6 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF /> },
              { href: "https://twitter.com", icon: <FaTwitter /> },
              { href: "https://instagram.com", icon: <FaInstagram /> },
              { href: "https://github.com", icon: <FaGithub /> }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mb-6 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="mb-2">
            Email: <a href="mailto:contact@deadpool.com" className="text-red-400 hover:underline">contact@deadpool.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890" className="text-red-400 hover:underline">+1 (234) 567-890</a>
          </p>
        </motion.div>

        {/* Copyright Notice */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p>&copy; {new Date().getFullYear()} Deadpool Inc. All rights reserved.</p>
        </motion.div>
      </div>
      <BackToTopButton /> {/* Include BackToTopButton */}
    </footer>
  );
};

export default Footer;
