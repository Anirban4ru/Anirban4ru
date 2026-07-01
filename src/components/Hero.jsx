import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Try to start unmuted as requested
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEndedOnce, setHasEndedOnce] = useState(false);

  useEffect(() => {
    // Attempt to play the video with sound automatically
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Autoplay with sound was blocked. Falling back to muted autoplay.", error);
        // Fallback: mute it and play
        setIsMuted(true);
        videoRef.current.muted = true;
        videoRef.current.play().catch(e => console.error("Video playback failed:", e));
      });
    }
  }, []);

  const handleVideoEnd = () => {
    if (!hasEndedOnce) {
      setHasEndedOnce(true);
      setIsMuted(true);
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.loop = true;
        videoRef.current.play().catch(e => console.error("Video playback failed on loop:", e));
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-video-container">
        <div className="video-overlay"></div>
          <video 
            ref={videoRef}
            className="hero-video"
            src="/hero-video.mp4"
            playsInline
            muted={isMuted}
            onEnded={handleVideoEnd}
            aria-label="Anirban Chatterjee Portfolio Background Video"
            title="Anirban Chatterjee Full Stack Developer Background"
          />
      </div>

      <div className="hero-content">
        <header className="hero-header animate-fade-up">
          <div className="brand">
            <span>PORTFOLIO</span>
            <span>2026</span>
          </div>
          <div className="date-info">
            <span>FULL STACK</span>
            <span>DEVELOPER</span>
          </div>
        </header>

        <div className="hero-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="badge">
            <span className="circle">1</span>
            <span className="circle">0</span>
            <span className="circle">1</span>
          </div>
          <h1 className="hero-title" aria-label="Anirban Chatterjee, Full Stack Developer">
            ANIRBAN<br/>CHATTERJEE
            <span style={{ display: 'none' }}>Full Stack Software Engineer, React and Node.js Developer</span>
          </h1>
        </div>

        <div className="hero-footer animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button className="mute-btn" onClick={toggleMute} aria-label="Toggle sound">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <div className="cta-container">
            <span className="cta-label">EXPLORE PROJECTS</span>
            <a href="#projects" className="book-cta">
              GO AHEAD
            </a>
            <div className="hero-action-buttons mt-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anirban4ru@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-hero-action">Email Me</a>
              <a href="sms:+917365026356" className="btn-hero-action">SMS</a>
              <a href="/resume.pdf" download className="btn-hero-action">Resume</a>
              <a href="https://linkedin.com/in/anirban4ru" target="_blank" rel="noreferrer" className="btn-hero-action btn-icon-only" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://github.com/Anirban4ru" target="_blank" rel="noreferrer" className="btn-hero-action btn-icon-only" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.16 0-1.57-.56-2.83-1.48-3.81.15-.37.64-1.8-.14-3.76 0 0-1.21-.39-3.96 1.47a13.38 13.38 0 0 0-7.2 0c-2.75-1.86-3.96-1.47-3.96-1.47-.78 1.96-.29 3.39-.14 3.76-.92.98-1.48 2.24-1.48 3.81 0 5.59 3.31 6.8 6.51 7.15A4.8 4.8 0 0 0 8 18v4"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
