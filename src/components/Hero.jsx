import { ArrowUpRight, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import './Hero.css';

export default function Hero() {
  const { hero } = content;

  return (
    <section className="hero-section" id="hero">
      <div className="site-container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-col">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="hero-title">{hero.headline}</h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-cta-group">
            <a href={hero.primaryCta.link} className="btn-pill btn-primary-green hero-primary-btn">
              <span>{hero.primaryCta.text}</span>
              <ArrowUpRight size={18} />
            </a>
            <a href={hero.secondaryCta.link} className="btn-pill btn-secondary-outline">
              <span>{hero.secondaryCta.text}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Organic Blob Photo & Floating Badges */}
        <div className="hero-visual-col">
          <div className="hero-image-wrapper">
            <div className="blob-image-container">
              <img
                src="/profile.jpg"
                alt="Anirban Chatterjee"
                className="hero-profile-blob"
              />
            </div>

            {/* Floating Card 1: Tagline */}
            <div className="hero-float-card card-tagline">
              <div className="float-card-icon-badge">
                <Sparkles size={16} />
              </div>
              <div className="float-card-content">
                <span className="float-card-label">FOCUS & PASSION</span>
                <p className="float-card-text">{hero.floatingTagline}</p>
              </div>
            </div>

            {/* Floating Card 2: Powered By Chips */}
            <div className="hero-float-card card-powered-by">
              <span className="float-card-eyebrow">POWERED BY</span>
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
