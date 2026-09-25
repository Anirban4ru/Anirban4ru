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

  // Subtle interactive 3D tilt on mouse move over the avatar card
  useEffect(() => {
    const card = imageCardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
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
                alt="Anirban Chatterjee"
                className="hero-profile-photo"
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

