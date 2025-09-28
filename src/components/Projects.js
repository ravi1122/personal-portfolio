import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import portfolioData from '../data/portfolioData';
import OptimizedImage from './OptimizedImage';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const shouldReduceMotion = useReducedMotion();

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
    return (
      <motion.div
        variants={cardVariants}
        layout
        whileHover={shouldReduceMotion ? {} : { y: -10 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          {project.image ? (
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="w-full h-full transition-transform duration-500 group-hover:scale-110"
              placeholder="skeleton"
              aspectRatio="16/9"
              priority={true} // Set all project images as priority for mobile compatibility
              fallbackSrc={`${process.env.PUBLIC_URL}/images/profile.svg`} // Use our existing fallback
              onLoad={() => {
                console.log(`✓ Image loaded: ${project.title}`);
              }}
              onError={(e) => {
                console.warn(`✗ Failed to load image for ${project.title}:`, e);
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-laptop-code text-6xl text-white mb-4"></i>
                <p className="text-white font-semibold">{project.title}</p>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                <i className="fas fa-star mr-1"></i>
                Featured
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={`${project.id}-${tech}-${techIndex}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <i className="fab fa-github mr-2"></i>
                Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  });

  useEffect(() => {
    console.log('Projects component mounted');
  }, []);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900" style={{ border: '2px solid red' }}>
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
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 inline-flex shadow-lg">
              {filterOptions.map((filterOption) => (
                <motion.button
                  key={filterOption.key}
                  onClick={() => handleFilterChange(filterOption.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    filter === filterOption.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  <i className={filterOption.icon}></i>
                  <span>{filterOption.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
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

          {/* More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects and contributions to open source.
              </p>
              <motion.a
                href="https://github.com/ravi1122"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-github mr-2 text-xl"></i>
                View GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);