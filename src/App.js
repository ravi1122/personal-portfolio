import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load heavy components
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));

// Loading component for better UX
const LoadingFallback = ({ componentName }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading {componentName}...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback componentName="About" />}>
            <About />
          </Suspense>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback componentName="Skills" />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback componentName="Projects" />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback componentName="Experience" />}>
              <Experience />
            </Suspense>
          </ErrorBoundary>
          <Suspense fallback={<LoadingFallback componentName="Contact" />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;