import { useState, useEffect, useRef, useCallback } from 'react';
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
  GraduationCap
} from 'lucide-react';
import { content } from '../data/content';
import { useMagnetic } from '../hooks/useMagnetic';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Work',        href: '#work',         id: 'work',         icon: <Briefcase size={17} /> },
  { label: 'What I Bring', href: '#what-i-bring', id: 'what-i-bring', icon: <Layers size={17} /> },
  { label: 'Process',     href: '#process',       id: 'process',      icon: <GitMerge size={17} /> },
  { label: 'AI Workflow', href: '#ai-workflow',   id: 'ai-workflow',  icon: <Sparkles size={17} /> },
  { label: 'Stack',       href: '#stack',         id: 'stack',        icon: <Code2 size={17} /> },
  { label: 'Experience',  href: '#experience',    id: 'experience',   icon: <GraduationCap size={17} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState('');

  const drawerRef   = useRef(null);
  const menuBtnRef  = useRef(null);
  const resumeBtnRef = useMagnetic(0.24);
  const ctaBtnRef    = useMagnetic(0.26);

  // ── Scroll: only used for navbar shrink + scroll-progress bar ────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 90);

      // Scroll progress bar
      const bar = document.getElementById('scroll-progress');
      if (bar) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress  = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        bar.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── IntersectionObserver for active-section detection ────────────────────
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers  = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Mobile drawer accessibility ───────────────────────────────────────────
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    // Return focus to the toggle button
    requestAnimationFrame(() => menuBtnRef.current?.focus());
  }, []);

  // Escape key closes drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeMobileMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen, closeMobileMenu]);

  // Body scroll lock while drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Move focus into the drawer on open
      requestAnimationFrame(() => {
        const first = drawerRef.current?.querySelector('a, button');
        first?.focus();
      });
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" id="scroll-progress" role="progressbar" aria-hidden="true" />

      <header className={`navbar-header ${scrolled ? 'is-shrunk-pill' : 'is-expanded'}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="navbar-logo" aria-label="Anirban Chatterjee — Home">
            <div className="logo-grid-mark" aria-hidden="true">
              <span className="logo-dot dot-green" />
              <span className="logo-dot dot-lavender" />
              <span className="logo-dot dot-tan" />
              <span className="logo-dot dot-dark" />
            </div>
            <span className="logo-text">Anirban Chatterjee</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="nav-item-wrapper">
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                    aria-current={activeSection === link.id ? 'true' : undefined}
                  >
                    <span className="nav-link-icon" aria-hidden="true">{link.icon}</span>
                    <span className="nav-link-text">{link.label}</span>
                    <span className="nav-tooltip" aria-hidden="true">{link.label}</span>
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
              aria-label="View Resume PDF (opens in new tab)"
              ref={resumeBtnRef}
            >
              <FileText size={16} aria-hidden="true" />
              <span className="resume-text">Resume</span>
            </a>
            <a
              href="#contact"
              className="btn-pill btn-primary-green nav-cta-btn"
              ref={ctaBtnRef}
            >
              <span className="cta-text">Get in touch</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              ref={menuBtnRef}
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav-drawer"
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={closeMobileMenu}
          >
            <nav
              ref={drawerRef}
              className="mobile-nav-content"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile navigation"
            >
              <ul className="mobile-nav-list" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={closeMobileMenu}
                      aria-current={activeSection === link.id ? 'true' : undefined}
                    >
                      <span className="mobile-link-icon" aria-hidden="true">{link.icon}</span>
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
                    aria-label="View Resume PDF (opens in new tab)"
                  >
                    <FileText size={18} aria-hidden="true" />
                    <span>Resume (PDF)</span>
                  </a>
                </li>
              </ul>
              <a
                href="#contact"
                className="btn-pill btn-primary-green mobile-drawer-cta"
                onClick={closeMobileMenu}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
