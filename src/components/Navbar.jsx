import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  FileText,
  Briefcase,
  Layers,
  GitMerge,
  Sparkles,
  Code2,
  GraduationCap,
  Mail
} from 'lucide-react';
import { content } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);

      // Section tracker for active indicator
      const sections = ['work', 'what-i-bring', 'process', 'ai-workflow', 'stack', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work', icon: <Briefcase size={17} /> },
    { label: 'What I Bring', href: '#what-i-bring', id: 'what-i-bring', icon: <Layers size={17} /> },
    { label: 'Process', href: '#process', id: 'process', icon: <GitMerge size={17} /> },
    { label: 'AI Workflow', href: '#ai-workflow', id: 'ai-workflow', icon: <Sparkles size={17} /> },
    { label: 'Stack', href: '#stack', id: 'stack', icon: <Code2 size={17} /> },
    { label: 'Experience', href: '#experience', id: 'experience', icon: <GraduationCap size={17} /> },
  ];

  return (
    <>
      {/* Scroll Progress Bar at the top of the viewport */}
      <div className="scroll-progress-bar" id="scroll-progress"></div>

      <header className={`navbar-header ${scrolled ? 'is-shrunk-pill' : 'is-expanded'}`}>
        <div className="navbar-container">
          {/* 2x2 Logo Grid Mark */}
          <a href="#" className="navbar-logo" aria-label="Anirban Chatterjee Home">
            <div className="logo-grid-mark" aria-hidden="true">
              <span className="logo-dot dot-green"></span>
              <span className="logo-dot dot-lavender"></span>
              <span className="logo-dot dot-tan"></span>
              <span className="logo-dot dot-dark"></span>
            </div>
            <span className="logo-text">Anirban Chatterjee</span>
          </a>

          {/* Desktop Nav Links (Morphing between full text and sleek icons with tooltip badges) */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item-wrapper">
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                    aria-label={link.label}
                  >
                    <span className="nav-link-icon">{link.icon}</span>
                    <span className="nav-link-text">{link.label}</span>
                    <span className="nav-tooltip" aria-hidden="true">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <a
              href={content.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume-link"
              aria-label="View Resume PDF"
            >
              <FileText size={16} />
              <span className="resume-text">Resume</span>
            </a>
            <a href="#contact" className="btn-pill btn-primary-green nav-cta-btn">
              <span className="cta-text">Get in touch</span>
              <ArrowUpRight size={16} />
            </a>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mobile-link-icon">{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
                <li className="mobile-nav-extra">
                  <a
                    href={content.contact.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-resume-link"
                  >
                    <FileText size={18} />
                    <span>Resume (PDF)</span>
                  </a>
                </li>
              </ul>
              <a
                href="#contact"
                className="btn-pill btn-primary-green mobile-drawer-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
