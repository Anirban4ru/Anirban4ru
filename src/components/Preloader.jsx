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
    } else {
      document.body.style.overflow = 'auto';
      onFinish();
    }
  }, [currentWordIndex, onFinish]);

  if (currentWordIndex >= words.length) return null;

  return (
    <div className="preloader-container">
      <div key={currentWordIndex} className="preloader-word">
        {words[currentWordIndex]}
      </div>
    </div>
  );
};

export default Preloader;
