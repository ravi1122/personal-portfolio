import React, { useState, useCallback, useMemo } from 'react';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  // Memoize tab options for performance
  const tabOptions = useMemo(() => [
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' }
  ], []);

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional experience and educational background
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 inline-flex">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'experience' ? (
            portfolioData.experience && portfolioData.experience.length > 0 ? (
              portfolioData.experience.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {item.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <div className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        {item.duration}
                      </div>
                      {item.location && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {item.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No experience data available.</p>
              </div>
            )
          ) : (
            portfolioData.education && portfolioData.education.length > 0 ? (
              portfolioData.education.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {item.school}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <div className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        {item.duration}
                      </div>
                      {item.location && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {item.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No education data available.</p>
              </div>
            )
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <i className="fas fa-envelope mr-2"></i>
                Send Email
              </a>
              <a
                href="/Resume.docx"
                download="Ravi_Ranjan_Resume.docx"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
