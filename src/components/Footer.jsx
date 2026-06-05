import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-logo">Anirban.</h2>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="footer-links">
            <a href="https://linkedin.com/in/anirban4ru" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/Anirban4ru" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="mailto:anirban4ru@gmail.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
            <button onClick={scrollToTop} className="social-link" aria-label="Scroll to top" title="Scroll to top">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
