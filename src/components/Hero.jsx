import { useRef, useEffect, useState } from 'react';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.error("Video autoplay with sound failed:", e);
        // Fallback to muted if browser blocks autoplay with sound
        setIsMuted(true);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    if (!hasEnded) {
      setHasEnded(true);
      setIsMuted(true);
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.error("Loop play failed:", e));
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-video-container">
        <video 
          ref={videoRef}
          className="hero-video"
          src="/hero-video.mp4"
          playsInline
          muted={isMuted}
          loop={hasEnded}
          autoPlay
          onEnded={handleVideoEnd}
          aria-hidden="true"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container hero-container-split">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              <span className="hero-title-line">
                <span className="hero-title-text">{content.hero.name}.</span>
              </span>
              <span className="hero-title-line mt-1">
                <span className="hero-title-text hero-title-subtext">{content.hero.role}</span>
              </span>
            </h1>
          </div>

          <div className="hero-bio-container">
            <p className="hero-bio">
              {content.hero.bio}
            </p>
            
            <div className="hero-ctas">
              <a href="#work" className="btn btn-primary">
                View my work
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-subtle" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
              </a>
              <a href="#about" className="btn btn-secondary">
                About me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
