import { useState, useEffect } from 'react';
import './Preloader.css';

const SESSION_KEY = 'ac_portfolio_visited';

export default function Preloader({ onFinish, onUnravelStart }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [unwrapping, setUnwrapping] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasVisited = sessionStorage.getItem(SESSION_KEY);

    // Skip preloader on return visit or reduced motion — show content instantly
    if (prefersReducedMotion || hasVisited) {
      sessionStorage.setItem(SESSION_KEY, '1');
      if (onUnravelStart) onUnravelStart();
      if (onFinish) onFinish();
      return;
    }

    // Mark visited so subsequent navigation in this session skips
    sessionStorage.setItem(SESSION_KEY, '1');

    // Compressed timing: 400ms → 800ms → 1300ms → 1900ms (total ~1.9s)
    const t1 = setTimeout(() => setCurrentStep(1), 400);
    const t2 = setTimeout(() => setCurrentStep(2), 850);
    const t3 = setTimeout(() => {
      setUnwrapping(true);
      if (onUnravelStart) onUnravelStart();
    }, 1300);
    const t4 = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish, onUnravelStart]);

  return (
    <div className={`preloader-screen ${unwrapping ? 'is-unwrapping' : ''}`} aria-hidden="true">
      <div className="preloader-curtain-accent"></div>

      <div className="preloader-content-wrap">
        <div className={`preloader-word-box ${currentStep === 0 ? 'is-active' : currentStep > 0 ? 'is-passed' : ''}`}>
          <span className="preloader-word">Code.</span>
        </div>

        <div className={`preloader-word-box ${currentStep === 1 ? 'is-active' : currentStep > 1 ? 'is-passed' : ''}`}>
          <span className="preloader-word">Create.</span>
        </div>

        <div className={`preloader-word-box word-anirban ${currentStep === 2 ? 'is-active' : currentStep > 2 ? 'is-passed' : ''}`}>
          <div className="preloader-brand-grid">
            <span className="preloader-dot dot-green"></span>
            <span className="preloader-dot dot-lavender"></span>
            <span className="preloader-dot dot-tan"></span>
            <span className="preloader-dot dot-dark"></span>
          </div>
          <span className="preloader-word accent-word">Anirban.</span>
        </div>
      </div>

      <div className="preloader-bottom-track">
        <div className={`preloader-progress-bar ${unwrapping ? 'is-full' : ''}`}></div>
      </div>
    </div>
  );
}
