import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section bg-background text-white">
      <div className="container footer-container">
        
        <div className="footer-top">
          <div className="footer-heading-col">
            <h2 className="footer-title">
              Let's build<br/>
              <span className="text-accent">something</span><br/>
              great.
            </h2>
            <a href={`mailto:${content.contact.email}`} className="btn btn-primary mt-8 inline-flex">
              Say hello 👋
            </a>
          </div>

          <div className="footer-info-grid">
            <div className="footer-col">
              <span className="eyebrow mb-4">Contact</span>
              <a href={`mailto:${content.contact.email}`} className="footer-link">
                {content.contact.email}
              </a>
            </div>

            <div className="footer-col">
              <span className="eyebrow mb-4">Elsewhere</span>
              <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
            </div>

            <div className="footer-col">
              <span className="eyebrow mb-4">Based In</span>
              <p className="footer-text">
                {content.contact.location}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {content.hero.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
