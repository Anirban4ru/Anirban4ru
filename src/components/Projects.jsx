import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Globe, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { content } from '../data/content';
import './Projects.css';

export default function Projects() {
  const { selectedWork } = content;
  const { featured, projects } = selectedWork;

  // Active gallery lightbox state
  const [activeGallery, setActiveGallery] = useState(null);

  const openGallery = (project) => {
    if (project.images && project.images.length > 0) {
      setActiveGallery({
        title: project.title,
        images: project.images,
        currentIndex: 0
      });
    }
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  return (
    <section className="section-wrapper projects-section" id="work">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{selectedWork.eyebrow}</span>
          </div>
          <h2 className="section-headline">{selectedWork.headline}</h2>
        </div>

        {/* Featured Card: MediTrace */}
        <div className="featured-project-card">
          <div className="featured-card-visual" onClick={() => openGallery(featured)}>
            <img
              src={featured.image}
              alt={featured.title}
              className="featured-card-img"
              loading="lazy"
            />
            {featured.images && featured.images.length > 1 && (
              <button
                className="gallery-peek-badge"
                onClick={(e) => {
                  e.stopPropagation();
                  openGallery(featured);
                }}
              >
                <Eye size={15} />
                <span>View {featured.images.length} screens</span>
              </button>
            )}
          </div>

          <div className="featured-card-content">
            <div className="featured-card-top-row">
              <span className="badge-chip badge-green">{featured.badge}</span>
              <span className="project-year-tag">{featured.year}</span>
            </div>

            <h3 className="featured-project-title">{featured.title}</h3>

            <p className="featured-project-desc">{featured.description}</p>

            <div className="featured-outcome-box">
              <span className="outcome-label">OUTCOME & ARCHITECTURE</span>
              <p className="outcome-text">{featured.outcome}</p>
            </div>

            <div className="project-stack-row">
              {featured.stack.map((tech, i) => (
                <span key={i} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions-row">
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary-green project-link-btn"
                >
                  <Globe size={16} />
                  <span>Live Platform</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-secondary-outline project-link-btn"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              {featured.images && (
                <button
                  className="btn-pill btn-secondary-outline project-link-btn"
                  onClick={() => openGallery(featured)}
                >
                  <Eye size={16} />
                  <span>Explore Gallery</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="secondary-projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-grid-card">
              <div
                className="project-card-visual"
                onClick={() => proj.images?.length > 0 && openGallery(proj)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-card-img"
                  loading="lazy"
                />
                {proj.images && proj.images.length > 1 && (
                  <button
                    className="gallery-peek-badge"
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(proj);
                    }}
                  >
                    <Eye size={13} />
                    <span>{proj.images.length} screens</span>
                  </button>
                )}
              </div>

              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="badge-chip badge-tan">{proj.category}</span>
                  <span className="project-year-tag">{proj.year}</span>
                </div>

                <h4 className="project-card-title">{proj.title}</h4>

                <p className="project-card-desc">{proj.description}</p>

                {proj.outcome && (
                  <p className="project-card-outcome">
                    <strong>Impact:</strong> {proj.outcome}
                  </p>
                )}

                <div className="project-stack-row">
                  {proj.stack.map((tech, i) => (
                    <span key={i} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-repo-link"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeGallery && (
        <div className="lightbox-overlay" onClick={closeGallery} role="dialog" aria-modal="true">
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-title-wrap">
                <h3 className="lightbox-title">{activeGallery.title}</h3>
                <span className="lightbox-counter">
                  {activeGallery.currentIndex + 1} / {activeGallery.images.length}
                </span>
              </div>
              <button
                className="lightbox-close-btn"
                onClick={closeGallery}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="lightbox-stage">
              <img
                src={activeGallery.images[activeGallery.currentIndex]}
                alt={`${activeGallery.title} preview ${activeGallery.currentIndex + 1}`}
                className="lightbox-active-img"
              />
              {activeGallery.images.length > 1 && (
                <>
                  <button
                    className="lightbox-nav-btn prev-btn"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="lightbox-nav-btn next-btn"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
