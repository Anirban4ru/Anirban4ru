import { useState, useEffect } from 'react';
import './ImageSlideshow.css';

const ImageSlideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return <div className="slideshow-placeholder"></div>;
  }

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
