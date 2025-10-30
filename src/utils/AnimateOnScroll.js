// src/utils/AnimateOnScroll.js

import { useEffect, useRef } from 'react';

const useAnimateOnScroll = (threshold = 0.2) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        } else {
          // Optional: Remove class if it exits, to allow re-animation on scroll back
          entry.target.classList.remove('animate-visible');
        }
      });
    }, {
      threshold: threshold // Percentage of the target element which is visible to trigger callback
    });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [threshold]);

  const addElementRef = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addElementRef;
};

export default useAnimateOnScroll;