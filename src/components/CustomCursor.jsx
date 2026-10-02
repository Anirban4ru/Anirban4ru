import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const pointerRef  = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer-fine (mouse/trackpad) desktop devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const pointer  = pointerRef.current;
    const follower = followerRef.current;
    if (!pointer || !follower) return;

    // Enable cursor-hidden mode on root
    document.documentElement.classList.add('has-custom-cursor');

    // Coordinates and physics state
    let targetX   = -100;
    let targetY   = -100;
    let pointerX  = -100;
    let pointerY  = -100;
    let followerX = -100;
    let followerY = -100;

    let currentAngle = 0;
    let targetAngle  = 0;
    let currentScale = 1;
    let targetScale  = 1;

    let isHovered = false;
    let isMouseDown = false;
    let isVisible = false;
    let rafId;

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, .project-card-visual, .lightbox-thumb, .btn-pill, .tech-chip, .lightbox-nav-btn, .lightbox-close-btn';

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        pointer.style.opacity = '1';
        follower.style.opacity = '1';
        pointerX = targetX;
        pointerY = targetY;
        followerX = targetX;
        followerY = targetY;
        isVisible = true;
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
      targetScale = isHovered ? 1.2 : 0.8;
    };

    const onMouseUp = () => {
      isMouseDown = false;
      targetScale = isHovered ? 1.45 : 1;
    };

    const onMouseOver = (e) => {
      const interactive = e.target.closest(interactiveSelector);
      if (interactive) {
        isHovered = true;
        targetScale = isMouseDown ? 1.2 : 1.45;
        follower.classList.add('is-hovering');
        pointer.classList.add('is-hovering');
      } else {
        isHovered = false;
        targetScale = isMouseDown ? 0.8 : 1;
        follower.classList.remove('is-hovering');
        pointer.classList.remove('is-hovering');
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      pointer.style.opacity = '0';
      follower.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      pointer.style.opacity = '1';
      follower.style.opacity = '1';
    };

    // Physics Animation Loop
    const tick = () => {
      // Primary Pointer tracks target directly for 0ms input latency
      pointerX += (targetX - pointerX) * 0.92;
      pointerY += (targetY - pointerY) * 0.92;

      // Follower glides behind with silky smooth spring lerp
      const dx = targetX - followerX;
      const dy = targetY - followerY;
      followerX += dx * 0.16;
      followerY += dy * 0.16;

      // Scale lerp
      currentScale += (targetScale - currentScale) * 0.18;

      // Dynamic velocity angle: follower banks toward movement direction
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 1.8) {
        // +90 deg aligns apex (pointing up) with motion vector
        targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      }

      // Smooth shortest-path angular interpolation
      let angleDiff = targetAngle - currentAngle;
      while (angleDiff < -180) angleDiff += 360;
      while (angleDiff > 180) angleDiff -= 360;
      currentAngle += angleDiff * 0.14;

      // Direct GPU Transform updates — zero React re-renders
      pointer.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      follower.style.transform = `translate3d(${followerX - 18}px, ${followerY - 18}px, 0) rotate(${currentAngle}deg) scale(${currentScale})`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Primary Triangular Pointer: Apex is precisely at (0, 0) */}
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
          {/* Aerodynamic stealth delta triangle */}
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

      {/* Secondary Trailing Triangular Follower: Banks smoothly with motion inertia */}
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        aria-hidden="true"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="18,4 32,30 4,30"
            className="follower-triangle-polygon"
          />
          <circle cx="18" cy="21" r="2.2" className="follower-center-dot" />
        </svg>
      </div>
    </>
  );
}
