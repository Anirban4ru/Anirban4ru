import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

/**
 * useMagnetic:
 * Attaches smooth magnetic physics to interactive elements (CTAs, badges, buttons).
 * Element tracks the cursor within its bounds and springs elastically back into place.
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let anim = null;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      if (anim) anim.pause();

      anim = animate(el, {
        translateX: relX * strength,
        translateY: relY * strength,
        duration: 350,
        ease: 'outQuad',
      });
    };

    const handleMouseLeave = () => {
      if (anim) anim.pause();

      anim = animate(el, {
        translateX: 0,
        translateY: 0,
        duration: 800,
        ease: 'outElastic(1, 0.4)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (anim) anim.pause();
    };
  }, [strength]);

  return ref;
}
