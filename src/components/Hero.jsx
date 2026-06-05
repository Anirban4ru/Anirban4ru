import React from 'react';
import { Mail, MessageSquare, Download } from 'lucide-react';
import './Hero.css';

const LinkedinIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-bento animate-fade-up">
          {/* Left Column: Big Profile Photo */}
          <div className="hero-image-col">
            <img 
              src="/profile.jpg" 
              alt="Anirban Chatterjee" 
              className="hero-avatar"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/400x500?text=Photo';
              }}
            />
          </div>
          
          {/* Right Column: Text & Actions */}
          <div className="hero-text-col">
            <h1 className="name delay-1">
              Hi, I'm <span className="text-gradient">Anirban</span>
            </h1>
            <h2 className="roles delay-2">Data Analyst & Full Stack Developer</h2>
            
            <p className="bio delay-3">
              Driven Computer Science undergraduate bridging complex technical domains—from building <span className="highlight">decentralized blockchain-AI applications</span> to <span className="highlight">SEO-driven digital strategies</span>. Currently seeking opportunities to create measurable business value through <span className="highlight">analytical rigor</span> and engineering depth.
            </p>
            
            <div className="hero-actions delay-4">
              <a href="mailto:anirban4ru@gmail.com" className="btn btn-primary">
                Email Me
              </a>
              <a href="sms:+917365026356" className="btn btn-outline">
                SMS
              </a>
              <a href="/resume.pdf" download className="btn btn-outline">
                Download Resume
              </a>
              <a href="https://linkedin.com/in/anirban4ru" target="_blank" rel="noreferrer" className="btn btn-outline btn-icon" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/Anirban4ru" target="_blank" rel="noreferrer" className="btn btn-outline btn-icon" aria-label="GitHub">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
