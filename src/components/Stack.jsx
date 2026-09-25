import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import * as Logos from './TechLogos';
import { content } from '../data/content';
import './Stack.css';

export default function Stack() {
  const { stack } = content;
  const [activeCategory, setActiveCategory] = useState('all');
  const gridRef = useRef(null);

  const filteredTools =
    activeCategory === 'all'
      ? stack.tools
      : stack.tools.filter((tool) => tool.category === activeCategory);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridRef.current) return;

    const items = gridRef.current.querySelectorAll('.tool-squircle-item');
    animate(items, {
      scale: [0.75, 1],
      opacity: [0, 1],
      delay: stagger(28),
      duration: 500,
      ease: 'outBack',
    });
  }, [activeCategory]);

  return (
    <section className="section-wrapper stack-section" id="stack">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header stack-header-wrap">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{stack.eyebrow}</span>
          </div>
          <h2 className="section-headline">{stack.headline}</h2>
          <p className="section-subheadline">{stack.description}</p>

          {/* Interactive Category Filter Pills */}
          <div className="stack-filter-tabs" role="tablist" aria-label="Filter technologies by domain">
            {stack.categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`stack-filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Squircle Brand Logo Cards Grid */}
        <div className="tools-squircle-grid" ref={gridRef}>
          {filteredTools.map((tool) => {
            const LogoComponent = Logos[tool.logo];
            return (
              <div
                key={tool.name}
                className="tool-squircle-item"
                style={{ '--tool-glow': tool.glowColor }}
              >
                <div className="tool-squircle-card">
                  {LogoComponent ? (
                    <LogoComponent size={40} />
                  ) : (
                    <span className="tool-fallback-char">{tool.name[0]}</span>
                  )}
                  {tool.tag && <span className="tool-card-hover-tag">{tool.tag}</span>}
                </div>
                <span className="tool-squircle-name">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
