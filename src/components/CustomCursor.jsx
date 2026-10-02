import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const pointerRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer-fine (mouse/trackpad) desktop devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const pointer = pointerRef.current;
    if (!pointer) return;

    // Enable cursor-hidden mode on root
    document.documentElement.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, .project-card-visual, .lightbox-thumb, .btn-pill, .tech-chip, .lightbox-nav-btn, .lightbox-close-btn';

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        pointer.style.opacity = '1';
        isVisible = true;
      }

      pointer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseDown = () => {
      pointer.classList.add('is-clicking');
    };

    const onMouseUp = () => {
      pointer.classList.remove('is-clicking');
    };

    const onMouseOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        pointer.classList.add('is-hovering');
      } else {
        pointer.classList.remove('is-hovering');
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      pointer.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      pointer.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={pointerRef}
      className="custom-cursor-pointer"
      aria-hidden="true"
    >
      <svg
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cursorGrad" x1="0" y1="0" x2="22" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#02332D" />
            <stop offset="100%" stopColor="#0A4D43" />
          </linearGradient>
          <filter id="cursorGlow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="rgba(0, 0, 0, 0.35)" />
          </filter>
        </defs>
        {/* Precision triangular stealth delta pointer */}
        <path
          d="M1.5 1.5 L20.5 9.5 L12 13.5 L8.5 23.5 L1.5 1.5 Z"
          fill="url(#cursorGrad)"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#cursorGlow)"
        />
        {/* Subtle inner emerald core facet */}
        <path
          d="M3.5 4.5 L15 10.2 L10 12.6 L8 18.2 Z"
          fill="rgba(16, 185, 129, 0.3)"
        />
      </svg>
    </div>
  );
}
