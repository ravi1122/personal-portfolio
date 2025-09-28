import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  // Helper function to get project-specific gradient and theme
  const getProjectTheme = (projectId, title) => {
    const themes = {
      1: { 
        gradient: 'from-blue-600 via-indigo-600 to-purple-600', 
        icon: 'fas fa-shopping-cart',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20'
      },
      2: { 
        gradient: 'from-green-500 via-teal-500 to-cyan-500', 
        icon: 'fas fa-tv',
        color: 'text-teal-500',
        bgColor: 'bg-teal-50 dark:bg-teal-900/20'
      },
      3: { 
        gradient: 'from-orange-500 via-red-500 to-pink-500', 
        icon: 'fas fa-chart-line',
        color: 'text-orange-500',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20'
      },
      4: { 
        gradient: 'from-purple-600 via-violet-600 to-indigo-600', 
        icon: 'fas fa-car',
        color: 'text-purple-500',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20'
      },
      5: { 
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500', 
        icon: 'fas fa-code',
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
      },
      6: { 
        gradient: 'from-yellow-500 via-orange-500 to-red-500', 
        icon: 'fas fa-robot',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
      }
    };
    return themes[projectId] || { 
      gradient: 'from-blue-500 to-purple-500', 
      icon: 'fas fa-laptop-code',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    };
  };

  const handleFilterChange = useCallback((filterType) => {
    setFilter(filterType);
  }, []);

  // Memoize filter options for performance
  const filterOptions = useMemo(() => [
    { key: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
    { key: 'featured', label: 'Featured', icon: 'fas fa-star' },
  ], []);

  // Optimized motion variants for reduced motion support
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        staggerDirection: -1
      }
    }
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { y: shouldReduceMotion ? 0 : 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4
      }
    },
    exit: {
      y: shouldReduceMotion ? 0 : -10,
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3
      }
    }
  }), [shouldReduceMotion]);

  const cardVariants = useMemo(() => ({
    hidden: { scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4
      }
    },
    exit: {
      scale: shouldReduceMotion ? 1 : 0.8,
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3
      }
    }
  }), [shouldReduceMotion]);

  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => 
        filter === 'featured' ? project.featured : false
      );

  console.log('Filtered Projects:', filteredProjects); // Debug log

  const ProjectCard = React.memo(({ project, index }) => {
    const theme = getProjectTheme(project.id, project.title);
    
    return (
      <motion.div
        variants={cardVariants}
        layout
        whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
        className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        {/* Header Section with Icon and Badges */}
        <div className={`relative px-6 pt-6 pb-4 ${theme.bgColor} border-b border-gray-100 dark:border-gray-700`}>
          <div className="flex items-start justify-between">
            {/* Project Icon and Title */}
            <div className="flex items-center space-x-4 flex-1">
              <div className={`w-16 h-16 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <i className={`${theme.icon} text-2xl text-white`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  {project.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      <i className="fas fa-star mr-1"></i>
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies Grid */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <i className="fas fa-code text-gray-400 mr-2"></i>
              Technologies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {project.technologies.slice(0, 6).map((tech, techIndex) => (
                <div
                  key={`${project.id}-${tech}-${techIndex}`}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${theme.gradient}`}></div>
                  <span className="truncate">{tech}</span>
                </div>
              ))}
              {project.technologies.length > 6 && (
                <div className="flex items-center justify-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400">
                  +{project.technologies.length - 6} more
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="flex items-center justify-center px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg"
              >
                <i className="fab fa-github mr-2"></i>
                View Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className={`flex items-center justify-center px-4 py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 shadow-md`}
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
      </motion.div>
    );
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Featured{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A showcase of my AI-powered solutions, full-stack applications, and innovative projects 
                that demonstrate expertise in modern technologies and problem-solving.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-xs"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-xs"></div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 inline-flex shadow-xl border border-gray-200 dark:border-gray-700">
              {filterOptions.map((filterOption) => (
                <motion.button
                  key={filterOption.key}
                  onClick={() => handleFilterChange(filterOption.key)}
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    filter === filterOption.key
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <i className={filterOption.icon}></i>
                  <span>{filterOption.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${filter}-${project.id}`}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-600 shadow-xl">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <i className="fab fa-github text-3xl text-white"></i>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Explore More Projects
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                    Discover additional projects, open-source contributions, and code snippets on my GitHub profile. 
                    Let's connect and collaborate on innovative solutions!
                  </p>
                </div>
                <motion.a
                  href="https://github.com/ravi1122"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg"
                >
                  <i className="fab fa-github mr-3 text-xl"></i>
                  Visit GitHub Profile
                  <i className="fas fa-arrow-right ml-3"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);