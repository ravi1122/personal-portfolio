import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    try {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL without page reload - keep current path for GitHub Pages
        const currentPath = window.location.pathname;
        window.history.pushState({}, '', currentPath);
      }
    } catch (error) {
      console.warn('Error scrolling to section:', error);
    }
    setIsOpen(false);
  };

  const scrollToHome = () => {
    try {
      const element = document.querySelector('#home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Keep current path for GitHub Pages
        const currentPath = window.location.pathname;
        window.history.pushState({}, '', currentPath);
      }
    } catch (error) {
      console.warn('Error scrolling to home:', error);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={scrollToHome}
          >
            <h1 className="text-2xl font-bold text-gradient">
              RR
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-lg"></i>
              ) : (
                <i className="fas fa-moon text-lg"></i>
              )}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;