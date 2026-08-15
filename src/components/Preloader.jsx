import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader({ onFinish, onUnravelStart }) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Code., 1: Create., 2: Anirban.
  const [unwrapping, setUnwrapping] = useState(false);

  useEffect(() => {
    // Step 0: "Code."
    const timer1 = setTimeout(() => {
      setCurrentStep(1); // "Create."
    }, 650);

    // Step 1: "Create." -> "Anirban."
    const timer2 = setTimeout(() => {
      setCurrentStep(2); // "Anirban."
    }, 1350);

    // Step 2: Trigger organic unwrap
    const timer3 = setTimeout(() => {
      setUnwrapping(true);
      if (onUnravelStart) onUnravelStart();
    }, 2100);

    // Step 3: Complete and unmount
    const timer4 = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3050);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onFinish, onUnravelStart]);

  return (
    <div className={`preloader-screen ${unwrapping ? 'is-unwrapping' : ''}`} aria-hidden="true">
      {/* Secondary accent wave curtain for luxurious depth */}
      <div className="preloader-curtain-accent"></div>

      <div className="preloader-content-wrap">
        {/* Step 0: Code. */}
        <div
          className={`preloader-word-box ${
            currentStep === 0 ? 'is-active' : currentStep > 0 ? 'is-passed' : ''
          }`}
        >
          <span className="preloader-word">Code.</span>
        </div>

        {/* Step 1: Create. */}
        <div
          className={`preloader-word-box ${
            currentStep === 1 ? 'is-active' : currentStep > 1 ? 'is-passed' : ''
          }`}
        >
          <span className="preloader-word">Create.</span>
        </div>

        {/* Step 2: Anirban. */}
        <div
          className={`preloader-word-box word-anirban ${
            currentStep === 2 ? 'is-active' : currentStep > 2 ? 'is-passed' : ''
          }`}
        >
          <div className="preloader-brand-grid">
            <span className="preloader-dot dot-green"></span>
            <span className="preloader-dot dot-lavender"></span>
            <span className="preloader-dot dot-tan"></span>
            <span className="preloader-dot dot-dark"></span>
          </div>
          <span className="preloader-word accent-word">Anirban.</span>
        </div>
      </div>

      {/* Elegant bottom progress line */}
      <div className="preloader-bottom-track">
        <div className={`preloader-progress-bar ${unwrapping ? 'is-full' : ''}`}></div>
      </div>
    </div>
  );
}
