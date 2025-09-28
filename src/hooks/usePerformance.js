import { useEffect, useState } from 'react';

// Hook for Intersection Observer with performance optimizations
export const useIntersectionObserver = (threshold = 0.1, rootMargin = '50px') => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true);
          // Disconnect after first intersection for performance
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, hasBeenVisible]);

  return [setRef, isVisible];
};

// Hook for debounced scroll events
export const useDebounceScroll = (callback, delay = 16) => {
  useEffect(() => {
    let timeoutId;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
        ticking = true;
      }
    };

    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, delay);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};

// Hook for preloading images
export const useImagePreloader = (imageSources = []) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageSources.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageSources.length;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [src]: true }));
          loadedCount++;
          if (loadedCount === totalImages) {
            setIsLoading(false);
          }
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload images with small delay to avoid blocking
    const preloadWithDelay = async () => {
      for (const src of imageSources) {
        try {
          await preloadImage(src);
          // Small delay to prevent blocking
          await new Promise(resolve => setTimeout(resolve, 10));
        } catch (error) {
          console.warn(`Failed to preload image: ${src}`, error);
        }
      }
    };

    preloadWithDelay();
  }, [imageSources]);

  return { loadedImages, isLoading };
};

// Hook for reducing motion based on user preference
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};
