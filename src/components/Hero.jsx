import { useRef, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import { useMagnetic } from '../hooks/useMagnetic';
import './Hero.css';

export default function Hero() {
  const { hero } = content;
  const imageCardRef = useRef(null);

  const primaryBtnRef = useMagnetic(0.18);
  const secondaryBtnRef = useMagnetic(0.15);

  // Subtle 3D tilt — rAF-throttled, pointer-fine only, reduced-motion aware
  useEffect(() => {
    const card = imageCardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (prefersReducedMotion || !supportsHover) return;

    let pending = null;
    let targetRX = 0;
    let targetRY = 0;

    const applyTilt = () => {
      card.style.transform = `perspective(900px) rotateX(${targetRX.toFixed(2)}deg) rotateY(${targetRY.toFixed(2)}deg) translateY(-2px)`;
      pending = null;
    };

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Clamp to ±8 deg for subtlety
      targetRX = Math.max(-8, Math.min(8, -(y / rect.height) * 8));
      targetRY = Math.max(-8, Math.min(8, (x / rect.width) * 8));
      if (!pending) pending = requestAnimationFrame(applyTilt);
    };

    const handleMouseLeave = () => {
      if (pending) cancelAnimationFrame(pending);
      pending = null;
      card.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      setTimeout(() => { card.style.transition = ''; }, 560);
    };

    card.addEventListener('pointermove', handleMouseMove, { passive: true });
    card.addEventListener('pointerleave', handleMouseLeave);

    return () => {
      if (pending) cancelAnimationFrame(pending);
      card.removeEventListener('pointermove', handleMouseMove);
      card.removeEventListener('pointerleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="site-container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-col">
          <div className="hero-eyebrow-badge">
            <span className="eyebrow-live-pulse" aria-hidden="true"></span>
            <span className="eyebrow-text">{hero.eyebrow}</span>
          </div>

          <h1 className="hero-title">{hero.headline}</h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-cta-group">
            <a
              href={hero.primaryCta.link}
              className="btn-pill btn-primary-green hero-primary-btn"
              ref={primaryBtnRef}
            >
              <span>{hero.primaryCta.text}</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href={hero.secondaryCta.link}
              className="btn-pill btn-secondary-outline"
              ref={secondaryBtnRef}
            >
              <span>{hero.secondaryCta.text}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Photo Frame & Clean Badges */}
        <div className="hero-visual-col">
          <div className="hero-image-wrapper">
            <div className="hero-photo-card" ref={imageCardRef}>
              <img
                src="/profile.png"
                alt="Anirban Chatterjee — Full-Stack & Blockchain Developer"
                className="hero-profile-photo"
                loading="eager"
                decoding="async"
                width="400"
                height="400"
              />
            </div>

            {/* Tagline Badge */}
            <div className="hero-float-card card-tagline">
              <div className="float-card-icon-badge">
                <Sparkles size={16} />
              </div>
              <div className="float-card-content">
                <span className="float-card-label">CORE FOCUS</span>
                <p className="float-card-text">{hero.floatingTagline}</p>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="hero-float-card card-powered-by">
              <span className="float-card-eyebrow">KEY SPECIALIZATIONS</span>
              <div className="powered-chips-grid">
                {hero.poweredByChips.map((chip, idx) => (
                  <span key={idx} className="powered-chip">
                    <span className="chip-emoji">{chip.icon}</span>
                    <span className="chip-label">{chip.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

