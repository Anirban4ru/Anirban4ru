import React, { useState, useEffect } from 'react';
import './Preloader.css';

const words = ["Code.", "Create.", "Innovate.", "ANIRBAN."];

const Preloader = ({ onFinish }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const wordDuration = 700;
    
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, wordDuration);
      return () => clearTimeout(timer);
    } else {
      setShowEnter(true);
    }
  }, [currentWordIndex]);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      onFinish();
    }, 800); // Wait for the slide-up animation to finish
  };

  return (
    <div className={`preloader-container ${isExiting ? 'exiting' : ''}`}>
      {currentWordIndex < words.length ? (
        <div key={currentWordIndex} className="preloader-word">
          {words[currentWordIndex]}
        </div>
      ) : showEnter ? (
        <div className="enter-button" onClick={handleEnter}>
          <span className="enter-text">ENTER</span>
          <div className="enter-line"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Preloader;
