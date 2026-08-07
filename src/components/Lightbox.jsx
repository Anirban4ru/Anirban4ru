import { useState, useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ isOpen, images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen) return null;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button className="lightbox-nav lightbox-prev" onClick={handlePrev} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
          </button>
        )}
        
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="lightbox-image" />
        
        {images.length > 1 && (
          <button className="lightbox-nav lightbox-next" onClick={handleNext} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
          </button>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="lightbox-indicators">
          {images.map((_, i) => (
            <div key={i} className={`lightbox-dot ${i === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
