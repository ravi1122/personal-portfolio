import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/usePerformance';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  placeholder = 'blur',
  aspectRatio,
  sizes = '100vw',
  priority = false,
  quality = 75,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);
  const [setRef, isVisible] = useIntersectionObserver(0.1, '50px');

  // Generate placeholder for blur effect
  const blurPlaceholder = useMemo(() => {
    if (placeholder === 'blur') {
      return `data:image/svg+xml;base64,${btoa(
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#f3f4f6"/>
          <rect x="25" y="35" width="50" height="30" fill="#e5e7eb" rx="2"/>
          <circle cx="35" cy="45" r="3" fill="#d1d5db"/>
          <path d="M45 50 L55 42 L65 50 L65 60 L45 60 Z" fill="#d1d5db"/>
        </svg>`
      )}`;
    }
    return null;
  }, [placeholder]);

  // Check if it's an SVG
  const isSvg = useMemo(() => src?.endsWith('.svg'), [src]);

  // Generate srcSet for responsive images
  const generateSrcSet = useMemo(() => {
    if (!src) return '';
    
    const breakpoints = [640, 768, 1024, 1280, 1920];
    
    if (isSvg) return ''; // Don't use srcSet for SVG
    
    // For external URLs, return as is
    if (src.startsWith('http') || src.startsWith('/images/')) {
      return src;
    }
    
    return breakpoints
      .map(width => `${src}?w=${width}&q=${quality} ${width}w`)
      .join(', ');
  }, [src, quality, isSvg]);

  // Handle intersection observer and SVG immediate loading
  useEffect(() => {
    if (isVisible || priority || isSvg) {
      setCurrentSrc(src);
    }
  }, [isVisible, src, priority, isSvg]);

  // Handle image loading
  const handleLoad = () => {
    setIsLoaded(true);
    if (process.env.NODE_ENV === 'development') {
      console.log(`✓ Image loaded successfully: ${src}`);
    }
    onLoad?.();
  };

  const handleError = (event) => {
    setHasError(true);
    console.warn(`✗ Failed to load image: ${src}`, event);
    if (fallbackSrc) {
      console.log(`→ Trying fallback: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    }
    onError?.(event);
  };

  const wrapperStyle = aspectRatio 
    ? { aspectRatio, position: 'relative', overflow: 'hidden' } 
    : {};

  return (
    <div 
      ref={(el) => {
        setRef(el);
        if (imgRef) imgRef.current = el;
      }}
      className={`relative ${className}`}
      style={wrapperStyle}
    >
      {/* Blur placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <img
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && placeholder === 'skeleton' && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"></div>
        </div>
      )}

      {/* Main image */}
      {currentSrc && (
        <motion.img
          src={currentSrc}
          srcSet={isSvg ? undefined : generateSrcSet}
          sizes={isSvg ? undefined : sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full ${isSvg ? 'object-contain' : 'object-cover'} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={isSvg ? { maxWidth: '100%', height: 'auto' } : {}}
          {...props}
        />
      )}

      {/* Error fallback */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400 dark:text-gray-500">
            <i className="fas fa-image text-2xl mb-2"></i>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(OptimizedImage);
