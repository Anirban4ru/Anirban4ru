import { useEffect } from 'react';

const useScrollReveal = (isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    // 1. Scroll progress bar updater
    const handleScrollProgress = () => {
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });

    // 2. Intersection Observer with kinetic staggered reveals
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const timeout = setTimeout(() => {
      // Observe all section elements and cards
      const revealElements = document.querySelectorAll(
        '.section-wrapper, .featured-project-card, .project-grid-card, .panel-glass-card, .process-card, .ai-spectrum-card, .tool-squircle-item, .exp-card, .footer-dark-panel'
      );
      
      revealElements.forEach((el, idx) => {
        el.classList.add('reveal-on-scroll');
        // Add subtle staggered delays for siblings
        if (el.classList.contains('project-grid-card') || el.classList.contains('panel-glass-card') || el.classList.contains('process-card') || el.classList.contains('ai-spectrum-card')) {
          const siblingIndex = Array.from(el.parentNode.children).indexOf(el);
          el.style.transitionDelay = `${siblingIndex * 0.09}s`;
        }
        observer.observe(el);
      });
    }, 60);

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isActive]);
};

export default useScrollReveal;
