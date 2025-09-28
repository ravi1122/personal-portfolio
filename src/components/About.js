import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';
import OptimizedImage from './OptimizedImage';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[450px]">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform -rotate-6"></div>
                
                {/* Profile Image Container */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-3 shadow-2xl h-full">
                  {portfolioData.personal.avatar ? (
                    <div className="relative w-full h-full bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden">
                      <OptimizedImage
                        src={portfolioData.personal.avatar}
                        alt={`${portfolioData.personal.name} - Profile Picture`}
                        className="w-full h-full object-contain rounded-xl"
                        placeholder="skeleton"
                        priority={true}
                        onError={() => {
                          console.warn('Profile image failed to load');
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                      <div className="text-8xl text-primary-500 dark:text-primary-400">
                        <i className="fas fa-user"></i>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <i className="fas fa-code text-white text-2xl"></i>
                </motion.div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <i className="fas fa-laptop-code text-white text-xl"></i>
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Location & Title */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {portfolioData.personal.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <i className="fas fa-map-marker-alt mr-2 text-primary-500"></i>
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {portfolioData.about.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What I bring to the table:
                </h4>
                <div className="grid gap-3">
                  {portfolioData.about.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    8+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {portfolioData.projects.length}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
                </motion.div>
              </div>

              {/* Contact CTA & Certificate */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-6 space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Let's work together
                  </a>
                  
                  <a
                    href={portfolioData.personal.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <i className="fas fa-certificate mr-2"></i>
                    View AI Certificate
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;