import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { content } from '../data/content';
import './Process.css';

export default function Process() {
  const { process } = content;
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (gridRef.current) {
              const cards = gridRef.current.querySelectorAll('.process-card');
              const badges = gridRef.current.querySelectorAll('.process-number-badge');

              // 1. Stagger Cards in with upward spring
              animate(cards, {
                translateY: [40, 0],
                opacity: [0, 1],
                scale: [0.94, 1],
                delay: stagger(120, { start: 150 }),
                duration: 850,
                ease: 'outExpo',
              });

              // 2. Pop number badges
              animate(badges, {
                scale: [0.6, 1],
                opacity: [0, 1],
                delay: stagger(120, { start: 250 }),
                duration: 650,
                ease: 'outBack',
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrapper process-section" id="process" ref={sectionRef}>
      <div className="site-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{process.eyebrow}</span>
          </div>
          <h2 className="section-headline">{process.headline}</h2>
          <p className="section-subheadline">{process.description}</p>
        </div>

        <div className="process-cards-grid" ref={gridRef}>
          {process.steps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="process-number-badge">{step.number}</div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
