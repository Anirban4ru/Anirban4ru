import { useEffect } from 'react';

const useScrollReveal = (isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Give a slight delay to allow DOM to render
    const timeout = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isActive]);
};

export default useScrollReveal;
