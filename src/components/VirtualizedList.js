import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

const VirtualizedList = ({ 
  items, 
  renderItem, 
  itemHeight = 100, 
  containerHeight = 400, 
  overscan = 5,
  className = '',
  ...motionProps 
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerRef, setContainerRef] = useState(null);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const end = Math.min(items.length - 1, start + visibleCount + overscan * 2);
    
    return { start, end };
  }, [scrollTop, itemHeight, containerHeight, overscan, items.length]);

  // Get visible items
  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end + 1);
  }, [items, visibleRange]);

  // Handle scroll with RAF throttling
  const handleScroll = useCallback((e) => {
    requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop);
    });
  }, []);

  // Calculate total height and offset
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return (
    <motion.div
      ref={setContainerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
      {...motionProps}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'relative'
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={visibleRange.start + index}
              style={{ height: itemHeight }}
            >
              {renderItem(item, visibleRange.start + index)}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(VirtualizedList);
