import { useState, useEffect } from 'react';
import { throttle } from '../utils';

/**
 * Custom hook for detecting scroll position
 * @param {number} threshold - Scroll threshold in pixels (default: 100)
 * @returns {boolean} Whether the page has been scrolled past the threshold
 */
export const useScrollDetection = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > threshold);
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};