import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  // Memoize categories array to prevent unnecessary re-renders
  const categories = useMemo(() => [
    { id: 'frontend', name: 'Frontend', icon: 'fas fa-paint-brush' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: 'fas fa-cloud' },
    { id: 'tools', name: 'Tools & Testing', icon: 'fas fa-tools' }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const SkillCard = ({ skill, index, activeCategory }) => {
    return (
      <motion.div
        key={`${skill.name}-${index}`}
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className={`${skill.icon} text-white`}></i>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base min-w-0 flex-1">
              <span className="block sm:inline">{skill.name}</span>
            </h4>
          </div>
          <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2">
            {skill.level}%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
            key={`progress-${skill.name}-${activeCategory}`}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                delay: (index * 0.15) + 1.2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 inline-flex flex-wrap gap-1 max-w-full">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  <i className={category.icon}></i>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8"
            >
              {portfolioData.skills[activeCategory]?.length > 0 ? (
                portfolioData.skills[activeCategory].map((skill, index) => (
                  <SkillCard key={`${activeCategory}-${skill.name}`} skill={skill} index={index} activeCategory={activeCategory} />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No skills found for this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Certifications
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-search text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Algolia Certified Developer
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Search & Discovery Platform
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-network-wired text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    MuleSoft Certified
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    API 3.8 & Integration Developer
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-building text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Aspiring Certified Architect
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Capgemini Level 0
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Skills);