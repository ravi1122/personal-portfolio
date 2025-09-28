import React from 'react';

const ProjectsSimple = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              E-commerce Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A modern e-commerce platform built with React and Node.js
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              webOS TV Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Smart TV applications for LG webOS platform
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              IoT Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive IoT monitoring dashboard for Shell Netherlands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSimple;
