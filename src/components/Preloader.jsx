import React, { useState, useEffect } from 'react';
import './Preloader.css';

const words = ["Code.", "Create.", "Innovate.", "ANIRBAN."];

const Preloader = ({ onFinish }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const wordDuration = 700; // Match animation duration from CSS
    
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, wordDuration);
      return () => clearTimeout(timer);
    }
    // We don't auto-finish anymore to allow for a user interaction (click)
  }, [currentWordIndex]);

  if (currentWordIndex >= words.length) {
    return (
      <div 
        className="preloader-container" 
        onClick={() => {
          document.body.style.overflow = 'auto';
          onFinish();
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="preloader-word" style={{ animation: 'none', opacity: 1, fontSize: '1.2rem', letterSpacing: '0.3em' }}>
          [ CLICK TO ENTER ]
        </div>
      </div>
    );
  }

  return (
    <div className="preloader-container">
      <div key={currentWordIndex} className="preloader-word">
        {words[currentWordIndex]}
      </div>
    </div>
  );
};

export default Preloader;
