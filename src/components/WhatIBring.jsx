import { useEffect, useRef } from 'react';
import { ArrowUpRight, Layers, Cpu, ShieldCheck, Smartphone } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { content } from '../data/content';
import { useMagnetic } from '../hooks/useMagnetic';
import './WhatIBring.css';

export default function WhatIBring() {
  const { whatIBring } = content;
  const gridRef = useRef(null);
  const ctaRef = useMagnetic(0.25);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = gridRef.current.querySelectorAll('.panel-glass-card');
            animate(cards, {
              translateY: [40, 0],
              opacity: [0, 1],
              scale: [0.94, 1],
              delay: stagger(110, { start: 100 }),
              duration: 850,
              ease: 'outExpo',
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  // Icon mapping
  const getIcon = (id) => {
    switch (id) {
      case 'fullstack':
        return <Layers size={22} />;
      case 'web3':
        return <ShieldCheck size={22} />;
      case 'ai':
        return <Cpu size={22} />;
      case 'ui':
        return <Smartphone size={22} />;
      default:
        return <Layers size={22} />;
    }
  };

  return (
    <section className="section-wrapper what-i-bring-section" id="what-i-bring">
      <div className="site-container">
        <div className="dark-panel-container">
          {/* Top Panel Header */}
          <div className="panel-header-row">
            <div className="panel-header-left">
              <span className="panel-status-pill">{whatIBring.badge}</span>
              <h2 className="panel-headline">{whatIBring.headline}</h2>
              <p className="panel-description">{whatIBring.description}</p>
            </div>
            <div className="panel-header-right">
              <a
                href={whatIBring.cta.link}
                className="btn-pill btn-light-pill"
                ref={ctaRef}
              >
                <span>{whatIBring.cta.text}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* 4 Semi-Transparent Glass Cards */}
          <div className="panel-cards-grid" ref={gridRef}>
            {whatIBring.cards.map((card) => (
              <div key={card.id} className="panel-glass-card">
                <div className="glass-card-top">
                  <div className="glass-card-icon-wrap">{getIcon(card.id)}</div>
                  <span className="glass-card-number">{card.number}</span>
                </div>
                <h3 className="glass-card-title">{card.title}</h3>
                <p className="glass-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
