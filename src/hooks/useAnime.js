import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

/**
 * useAnime hook:
 * Safely creates an anime.js animation on mount / dependency change,
 * automatically handling cleanup, pause, and prefers-reduced-motion.
 */
export function useAnime(animationConfig, deps = []) {
  const elementRef = useRef(null);
  const animInstanceRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !elementRef.current) return;

    // Execute animation
    const targets = elementRef.current;
    animInstanceRef.current = animate(targets, {
      ...animationConfig,
    });

    return () => {
      if (animInstanceRef.current) {
        if (typeof animInstanceRef.current.revert === 'function') {
          animInstanceRef.current.revert();
        } else if (typeof animInstanceRef.current.pause === 'function') {
          animInstanceRef.current.pause();
        }
      }
    };
  }, deps);

  return elementRef;
}
