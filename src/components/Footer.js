import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            © {currentYear} Ravi Ranjan. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://linkedin.com/in/raviranjan946"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
            <motion.a
              href="https://github.com/ravi1122"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a
              href="mailto:raviranjan35@outlook.com"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <i className="fas fa-envelope text-xl"></i>
            </motion.a>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 mx-auto block p-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;