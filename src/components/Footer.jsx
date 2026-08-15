import { ArrowUpRight, Mail, FileText, Calendar, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { content } from '../data/content';
import './Footer.css';

export default function Footer() {
  const { footer } = content;

  const getLinkIcon = (name) => {
    switch (name) {
      case 'LinkedIn':
        return <LinkedinIcon size={18} />;
      case 'GitHub':
        return <GithubIcon size={18} />;
      case 'Resume (PDF)':
        return <FileText size={18} />;
      case 'Calendly':
        return <Calendar size={18} />;
      default:
        return <ArrowUpRight size={18} />;
    }
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="site-container">
        <div className="footer-dark-panel">
          <div className="footer-top-content">
            <span className="footer-eyebrow">GET IN TOUCH</span>
            <h2 className="footer-headline">{footer.headline}</h2>
            <p className="footer-tagline">{footer.tagline}</p>

            {/* Direct Email Box (Opens in new tab/email client) */}
            <div className="footer-email-box-wrap">
              <a
                href={`mailto:${footer.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-email-action-box"
                aria-label={`Send direct email to ${footer.email}`}
              >
                <div className="email-icon-circle">
                  <Mail size={22} />
                </div>
                <div className="email-text-wrap">
                  <span className="email-subtext">Direct Email</span>
                  <span className="email-maintext">{footer.email}</span>
                </div>
                <div className="email-arrow-circle">
                  <ArrowUpRight size={20} />
                </div>
              </a>
            </div>
          </div>

          {/* Social & Reference Links Grid (All open in new tab) */}
          <div className="footer-links-grid">
            {footer.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-card"
              >
                <div className="footer-link-left">
                  <span className="footer-link-icon">{getLinkIcon(link.name)}</span>
                  <span className="footer-link-name">{link.name}</span>
                </div>
                <span className="footer-link-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            ))}
          </div>

          <div className="footer-divider"></div>

          {/* Bottom Bar with Location */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">{footer.copyright}</p>
            <div className="footer-location-tag">
              <MapPin size={14} className="location-pin-icon" />
              <span>{footer.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
