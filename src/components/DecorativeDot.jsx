import { useEffect, useRef } from 'react';

export default function DecorativeDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    // Only show on pointer-fine (non-touch) devices without reduced motion
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!supportsHover || prefersReducedMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId;
    let isVisible = false;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        dot.style.opacity = '1';
        isVisible = true;
      }
    };

    const tick = () => {
      // Lerp for smooth trailing effect
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      // Direct DOM mutation — no React state
      dot.style.transform = `translate3d(${currentX + 12}px, ${currentY + 12}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    // Start hidden, reveal on first mouse move
    dot.style.opacity = '0';
    dot.style.display = 'block';

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="decorative-dot-root"
      style={{ display: 'none' }}
      aria-hidden="true"
    />
  );
}
