import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { content } from '../data/content';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76 0-1.5-.5-2.7-1.4-3.6.1-.3.6-1.7-.1-3.5 0 0-1.1-.4-3.6 1.3-1-.3-2.2-.4-3.3-.4-1.1 0-2.3.1-3.3.4-2.5-1.7-3.6-1.3-3.6-1.3-.7 1.8-.2 3.2-.1 3.5-.9.9-1.4 2.1-1.4 3.6 0 5.2 3 6.4 6 6.76-.7.6-1 1.6-1 2.9v4" />
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SunIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check initial preference (safe for CSR)
    return !document.documentElement.classList.contains('light-mode');
  });

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add('light-mode');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('light-mode');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#labs' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          <a href="#home" className="logo group">
            <span className="logo-icon">●</span>
            <span className="logo-text">Anirban<span>.</span></span>
          </a>

          <nav className="desktop-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                <span className="nav-link-text">{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <div className="nav-socials">
              <button onClick={toggleTheme} className="nav-icon-link theme-toggle-btn" aria-label="Toggle theme">
                {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
              </button>
              <a href="/resume.pdf" download className="nav-icon-link" aria-label="Resume">
                <FileText size={18} />
              </a>
              <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
            </div>
            
            <a href="#contact" className="say-hi-btn">
              Say Hi <span aria-hidden="true">👋</span>
            </a>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Say Hi 👋
          </a>
          <div className="mobile-socials">
            <a href="/resume.pdf" download className="mobile-social-link">
              <FileText size={24} />
            </a>
            <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <LinkedinIcon size={24} />
            </a>
            <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <GithubIcon size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
