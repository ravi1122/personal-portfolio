import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Performance monitoring configuration
const ANALYTICS_ENDPOINT = process.env.REACT_APP_ANALYTICS_ENDPOINT;
const PERFORMANCE_THRESHOLD = {
  CLS: 0.1,    // Good: < 0.1
  FID: 100,    // Good: < 100ms
  FCP: 1800,   // Good: < 1.8s
  LCP: 2500,   // Good: < 2.5s
  TTFB: 800    // Good: < 800ms
};

// Send analytics data
const sendToAnalytics = ({ name, delta, value, id, rating }) => {
  // In production, you would send this to your analytics service
  if (process.env.NODE_ENV === 'development') {
    console.group(`🔍 Web Vital: ${name}`);
    console.log(`Value: ${value}ms (${delta}ms)`);
    console.log(`Rating: ${rating}`);
    console.log(`Threshold: ${PERFORMANCE_THRESHOLD[name] || 'N/A'}`);
    console.log(`ID: ${id}`);
    console.groupEnd();
  }

  // Send to analytics service in production
  if (ANALYTICS_ENDPOINT && process.env.NODE_ENV === 'production') {
    navigator.sendBeacon(ANALYTICS_ENDPOINT, JSON.stringify({
      metric: name,
      value,
      delta,
      id,
      rating,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }));
  }

  // Store in localStorage for debugging
  if (process.env.NODE_ENV === 'development') {
    const perfData = JSON.parse(localStorage.getItem('webVitals') || '[]');
    perfData.push({
      metric: name,
      value,
      delta,
      rating,
      timestamp: Date.now(),
      url: window.location.pathname
    });
    
    // Keep only last 50 entries
    if (perfData.length > 50) {
      perfData.splice(0, perfData.length - 50);
    }
    
    localStorage.setItem('webVitals', JSON.stringify(perfData));
  }
};

// Performance observer for custom metrics
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.initializeObservers();
  }

  initializeObservers() {
    // Long Task Observer
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) { // Tasks longer than 50ms
              console.warn(`🐌 Long Task detected: ${entry.duration.toFixed(2)}ms`);
              this.recordMetric('long-task', entry.duration);
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.set('longtask', longTaskObserver);
      } catch (e) {
        console.warn('Long Task Observer not supported');
      }

      // Layout Shift Observer
      try {
        const layoutShiftObserver = new PerformanceObserver((list) => {
          let cumulativeScore = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              cumulativeScore += entry.value;
            }
          }
          if (cumulativeScore > 0) {
            this.recordMetric('layout-shift', cumulativeScore);
          }
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.set('layout-shift', layoutShiftObserver);
      } catch (e) {
        console.warn('Layout Shift Observer not supported');
      }

      // Memory Usage Observer
      if ('memory' in performance) {
        this.monitorMemoryUsage();
      }
    }
  }

  recordMetric(name, value) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name).push({
      value,
      timestamp: Date.now()
    });
  }

  monitorMemoryUsage() {
    const checkMemory = () => {
      if (performance.memory) {
        const memory = performance.memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        };
        
        this.recordMetric('memory-usage', memoryUsage.used);
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`💾 Memory Usage: ${memoryUsage.used}MB / ${memoryUsage.total}MB (Limit: ${memoryUsage.limit}MB)`);
        }
      }
    };

    // Check memory every 30 seconds
    setInterval(checkMemory, 30000);
    checkMemory(); // Initial check
  }

  getMetrics() {
    const result = {};
    for (const [name, values] of this.metrics.entries()) {
      result[name] = {
        count: values.length,
        average: values.reduce((sum, item) => sum + item.value, 0) / values.length,
        latest: values[values.length - 1]?.value,
        max: Math.max(...values.map(item => item.value))
      };
    }
    return result;
  }

  disconnect() {
    for (const observer of this.observers.values()) {
      observer.disconnect();
    }
    this.observers.clear();
  }
}

// Initialize performance monitoring
let performanceMonitor;

export const initializePerformanceMonitoring = () => {
  // Initialize Web Vitals
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);

  // Initialize custom performance monitor
  performanceMonitor = new PerformanceMonitor();

  // Log performance tips in development
  if (process.env.NODE_ENV === 'development') {
    setTimeout(() => {
      console.group('🚀 Performance Tips');
      console.log('• Check the Network tab for unused JavaScript');
      console.log('• Use React DevTools Profiler to identify slow components');
      console.log('• Check localStorage for webVitals data');
      console.log('• Monitor Long Tasks and Layout Shifts in the console');
      console.groupEnd();
    }, 5000);
  }
};

export const getPerformanceMetrics = () => {
  return performanceMonitor?.getMetrics() || {};
};

export const cleanupPerformanceMonitoring = () => {
  performanceMonitor?.disconnect();
};

// Bundle size analyzer helper
export const logBundleInfo = () => {
  if (process.env.NODE_ENV === 'development') {
    console.group('📦 Bundle Analysis');
    console.log('Main bundle loaded');
    console.log('Check webpack-bundle-analyzer for detailed bundle analysis');
    console.log('Run: npm install --save-dev webpack-bundle-analyzer');
    console.log('Add to package.json: "analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"');
    console.groupEnd();
  }
};
