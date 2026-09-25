import { useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { content } from '../data/content';
import { useMagnetic } from '../hooks/useMagnetic';
import './Hero.css';

export default function Hero() {
  const { hero } = content;

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const badgeRef = useRef(null);
  const avatarBlobRef = useRef(null);
  const haloRef = useRef(null);
  const cardTaglineRef = useRef(null);
  const cardPoweredRef = useRef(null);

  const primaryBtnRef = useMagnetic(0.28);
  const secondaryBtnRef = useMagnetic(0.25);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 1. Kinetic Typography Stagger
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.hero-kinetic-word');
      animate(words, {
        translateY: [32, 0],
        opacity: [0, 1],
        filter: ['blur(8px)', 'blur(0px)'],
        delay: stagger(80, { start: 150 }),
        duration: 900,
        ease: 'outExpo',
      });
    }

    // 2. Eyebrow & Description Smooth Reveal
    if (badgeRef.current) {
      animate(badgeRef.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 750,
        ease: 'outExpo',
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        delay: 350,
        duration: 850,
        ease: 'outExpo',
      });
    }

    // 3. Living Organic Avatar Morphing
    let blobAnim = null;
    if (avatarBlobRef.current) {
      blobAnim = animate(avatarBlobRef.current, {
        borderRadius: [
          '58% 42% 65% 35% / 45% 55% 45% 55%',
          '42% 58% 35% 65% / 55% 45% 55% 45%',
          '50% 50% 40% 60% / 60% 40% 50% 50%',
          '65% 35% 55% 45% / 45% 55% 35% 65%',
          '58% 42% 65% 35% / 45% 55% 45% 55%',
        ],
        duration: 9000,
        ease: 'inOutSine',
        loop: true,
      });
    }

    // 4. Subtle Rotating Aura Halo
    let haloAnim = null;
    if (haloRef.current) {
      haloAnim = animate(haloRef.current, {
        rotate: 360,
        duration: 20000,
        ease: 'linear',
        loop: true,
      });
    }

    // 5. Idle Floating Physics for Float Cards
    let floatAnim1 = null;
    let floatAnim2 = null;
    if (cardTaglineRef.current) {
      floatAnim1 = animate(cardTaglineRef.current, {
        translateY: [-6, 6],
        duration: 3200,
        ease: 'inOutQuad',
        alternate: true,
        loop: true,
      });
    }
    if (cardPoweredRef.current) {
      floatAnim2 = animate(cardPoweredRef.current, {
        translateY: [6, -6],
        duration: 3600,
        delay: 400,
        ease: 'inOutQuad',
        alternate: true,
        loop: true,
      });
    }

    return () => {
      if (blobAnim) blobAnim.pause();
      if (haloAnim) haloAnim.pause();
      if (floatAnim1) floatAnim1.pause();
      if (floatAnim2) floatAnim2.pause();
    };
  }, []);

  // Split headline words for kinetic reveal
  const headlineWords = hero.headline.split(' ');

  return (
    <section className="hero-section" id="hero">
      <div className="site-container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-col">
          <div className="hero-eyebrow-badge" ref={badgeRef}>
            <span className="eyebrow-live-pulse" aria-hidden="true"></span>
            <span className="eyebrow-text">{hero.eyebrow}</span>
          </div>

          <h1 className="hero-title" ref={titleRef}>
            {headlineWords.map((word, idx) => (
              <span key={idx} className="hero-kinetic-word-wrap">
                <span className="hero-kinetic-word">{word}&nbsp;</span>
              </span>
            ))}
          </h1>

          <p className="hero-description" ref={descRef}>{hero.description}</p>

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

        {/* Right Column: Organic Blob Photo & Floating Badges */}
        <div className="hero-visual-col">
          <div className="hero-image-wrapper">
            {/* Ambient Kinetic Halo Aura */}
            <div className="hero-avatar-halo" ref={haloRef} aria-hidden="true"></div>

            <div className="blob-image-container" ref={avatarBlobRef}>
              <img
                src="/profile.png"
                alt="Anirban Chatterjee"
                className="hero-profile-blob"
              />
            </div>

            {/* Floating Card 1: Tagline */}
            <div className="hero-float-card card-tagline" ref={cardTaglineRef}>
              <div className="float-card-icon-badge">
                <Sparkles size={16} />
              </div>
              <div className="float-card-content">
                <span className="float-card-label">FOCUS & PASSION</span>
                <p className="float-card-text">{hero.floatingTagline}</p>
              </div>
            </div>

            {/* Floating Card 2: Powered By Chips */}
            <div className="hero-float-card card-powered-by" ref={cardPoweredRef}>
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

