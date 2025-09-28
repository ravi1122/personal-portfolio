import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useDebounceScroll } from '../hooks/usePerformance';

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const shouldReduceMotion = useReducedMotion();

  // Optimized scroll handler with debouncing
  const handleScrollOptimized = useCallback(() => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const shouldShow = scrolled < windowHeight * 0.5;
    
    if (shouldShow !== showScrollIndicator) {
      setShowScrollIndicator(shouldShow);
    }
  }, [showScrollIndicator]);

  // Use debounced scroll hook
  useDebounceScroll(handleScrollOptimized, 16);

  const scrollToContact = useCallback(() => {
    try {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.warn('Error scrolling to contact section:', error);
    }
  }, []);

  const scrollToProjects = useCallback(() => {
    try {
      const element = document.querySelector('#projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.warn('Error scrolling to projects section:', error);
    }
  }, []);

  // Memoize the TypeAnimation sequence for performance
  const typeAnimationSequence = useMemo(() => [
    'AI-Powered Full Stack Developer',
    2000,
    'ML Engineering Specialist',
    2000,
    'MERN Stack Expert',
    2000,
    'Team Lead & Architect',
    2000,
    'AWS AI/ML Expert',
    2000,
    'AI Innovation Leader',
    2000,
  ], []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-animation"></div>
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-light px-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6 leading-tight px-4 text-responsive"
          >
            Ravi Ranjan
          </motion.h1>

          {/* Animated Title */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white/90 mb-8 h-12 sm:h-16 flex items-center justify-center px-4">
            <TypeAnimation
              sequence={typeAnimationSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Building scalable solutions and leading high-performance teams
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <i className="fas fa-code mr-2"></i>
              View My Work
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-8"
          >
            <motion.a
              href="/Resume.docx"
              download="Ravi_Ranjan_Resume.docx"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              key="scroll-indicator"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "loop"
                }}
                className="text-white/80 text-center cursor-pointer hover:text-white transition-all duration-300 select-none"
                onClick={() => {
                  try {
                    const aboutSection = document.querySelector('#about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } catch (error) {
                    console.warn('Error scrolling to about section:', error);
                  }
                }}
              >
                <div className="mb-1 text-xs font-medium tracking-wide uppercase">Scroll Down</div>
                <div className="w-8 h-8 mx-auto flex items-center justify-center rounded-full border border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <i className="fas fa-chevron-down text-sm"></i>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default React.memo(Hero);