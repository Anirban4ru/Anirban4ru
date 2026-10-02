import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, Globe, Eye, ChevronLeft, ChevronRight, X, Download } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { GithubIcon } from './Icons';
import { content } from '../data/content';
import './Projects.css';

// ── Lightbox Dialog ──────────────────────────────────────────────────────────
function Lightbox({ gallery, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(gallery.initialIndex ?? 0);
  const dialogRef   = useRef(null);
  const closeBtnRef = useRef(null);

  const total = gallery.images.length;

  // Declare navigation functions BEFORE the keydown effect
  const goNext = useCallback(
    () => setCurrentIndex((i) => (i + 1) % total),
    [total]
  );
  const goPrev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const closeAndReturn = () => {
    onClose();
    requestAnimationFrame(() => gallery.triggerRef?.current?.focus());
  };

  // Focus management + body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Focus trap + keyboard navigation inside dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e) => {
      if (e.key === 'Escape')      { closeAndReturn(); return; }
      if (e.key === 'ArrowRight')  { goNext(); return; }
      if (e.key === 'ArrowLeft')   { goPrev(); return; }
      if (e.key !== 'Tab') return;
      const focusable = dialog.querySelectorAll(
        'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      }
    };
    dialog.addEventListener('keydown', onKey);
    return () => dialog.removeEventListener('keydown', onKey);
  }, [closeAndReturn, goNext, goPrev]);

  const { images, title } = gallery;

  return (
    <div
      className="lightbox-overlay"
      onClick={closeAndReturn}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${title} — image gallery, ${currentIndex + 1} of ${total}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-header">
          <div className="lightbox-title-wrap">
            <h2 className="lightbox-title">{title}</h2>
            <span className="lightbox-counter" aria-live="polite" aria-atomic="true">
              {currentIndex + 1} / {total}
            </span>
          </div>
          <button
            ref={closeBtnRef}
            className="lightbox-close-btn"
            onClick={closeAndReturn}
            aria-label="Close image gallery"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="lightbox-stage">
          <img
            src={images[currentIndex]}
            alt={`${title} — screenshot ${currentIndex + 1} of ${total}`}
            className="lightbox-active-img"
            decoding="async"
          />
          {total > 1 && (
            <>
              <button
                className="lightbox-nav-btn prev-btn"
                onClick={goPrev}
                aria-label={`Previous image (${currentIndex === 0 ? total : currentIndex} of ${total})`}
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                className="lightbox-nav-btn next-btn"
                onClick={goNext}
                aria-label={`Next image (${(currentIndex + 2 > total ? 1 : currentIndex + 2)} of ${total})`}
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div className="lightbox-thumbnails" role="tablist" aria-label="Image thumbnails">
            {images.map((src, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`View screenshot ${i + 1}`}
                className={`lightbox-thumb ${i === currentIndex ? 'is-active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              >
                <img src={src} alt="" aria-hidden="true" decoding="async" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Projects Section ─────────────────────────────────────────────────────────
export default function Projects() {
  const { selectedWork } = content;
  const { featured, projects } = selectedWork;

  const sectionRef       = useRef(null);
  const featuredRef      = useRef(null);
  const secondaryGridRef = useRef(null);
  const featuredTriggerRef = useRef(null);

  const [activeGallery, setActiveGallery] = useState(null);

  // Entrance animation
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (featuredRef.current) {
            animate(featuredRef.current, {
              translateY: [40, 0],
              opacity: [0, 1],
              scale: [0.97, 1],
              duration: 900,
              ease: 'outExpo',
            });
          }

          if (secondaryGridRef.current) {
            const cards = secondaryGridRef.current.querySelectorAll('.project-grid-card');
            animate(cards, {
              translateY: [45, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              delay: stagger(130, { start: 220 }),
              duration: 900,
              ease: 'outExpo',
            });
          }

          observer.disconnect();
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openGallery = useCallback((project, triggerRef) => {
    if (project.images?.length > 0) {
      setActiveGallery({ title: project.title, images: project.images, initialIndex: 0, triggerRef });
    }
  }, []);

  const closeGallery = useCallback(() => setActiveGallery(null), []);

  return (
    <section className="section-wrapper projects-section" id="work" ref={sectionRef}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            <span>{selectedWork.eyebrow}</span>
          </div>
          <h2 className="section-headline">{selectedWork.headline}</h2>
        </div>

        {/* Featured Project */}
        <article className="featured-project-card" ref={featuredRef} aria-label={`Featured project: ${featured.title}`}>
          <button
            ref={featuredTriggerRef}
            className="featured-card-visual"
            onClick={() => openGallery(featured, featuredTriggerRef)}
            aria-label={`View ${featured.title} screenshot gallery (${featured.images?.length ?? 0} images)`}
            disabled={!featured.images?.length}
          >
            <img
              src={featured.image}
              alt={`${featured.title} — project preview`}
              className="featured-card-img"
              loading="eager"
              decoding="async"
            />
            {featured.images?.length > 1 && (
              <span className="gallery-peek-badge" aria-hidden="true">
                <Eye size={15} aria-hidden="true" />
                <span>View {featured.images.length} screens</span>
              </span>
            )}
          </button>

          <div className="featured-card-content">
            <div className="featured-card-top-row">
              <span className="badge-chip badge-green">{featured.badge}</span>
              <span className="project-year-tag">{featured.year}</span>
            </div>

            <h3 className="featured-project-title">{featured.title}</h3>
            <p className="featured-project-desc">{featured.description}</p>

            <div className="featured-outcome-box">
              <span className="outcome-label">OUTCOME &amp; ARCHITECTURE</span>
              <p className="outcome-text">{featured.outcome}</p>
            </div>

            <div className="project-stack-row">
              {featured.stack.map((tech, i) => (
                <span key={i} className="tech-chip">{tech}</span>
              ))}
            </div>

            <div className="project-actions-row">
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary-green project-link-btn"
                  aria-label={`View ${featured.title} live platform (opens in new tab)`}
                >
                  <Globe size={16} aria-hidden="true" />
                  <span>Live Platform</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-secondary-outline project-link-btn"
                  aria-label={`View ${featured.title} GitHub repository (opens in new tab)`}
                >
                  <GithubIcon size={16} aria-hidden="true" />
                  <span>View Repository</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
              {featured.images?.length > 0 && (
                <button
                  className="btn-pill btn-secondary-outline project-link-btn"
                  onClick={() => openGallery(featured, featuredTriggerRef)}
                  aria-label={`Explore ${featured.title} gallery`}
                >
                  <Eye size={16} aria-hidden="true" />
                  <span>Explore Gallery</span>
                </button>
              )}
            </div>
          </div>
        </article>

        {/* Secondary Projects Grid */}
        <div className="secondary-projects-grid" ref={secondaryGridRef}>
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              proj={proj}
              openGallery={openGallery}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeGallery && (
        <Lightbox gallery={activeGallery} onClose={closeGallery} />
      )}
    </section>
  );
}

// ── Project Card sub-component (has its own ref for focus return) ─────────────
function ProjectCard({ proj, openGallery }) {
  const triggerRef = useRef(null);

  return (
    <article className="project-grid-card" aria-label={proj.title}>
      <button
        ref={triggerRef}
        className="project-card-visual"
        onClick={() => proj.images?.length > 0 && openGallery(proj, triggerRef)}
        aria-label={
          proj.images?.length > 0
            ? `View ${proj.title} gallery (${proj.images.length} images)`
            : `${proj.title} project preview`
        }
        disabled={!proj.images?.length}
      >
        <img
          src={proj.image}
          alt={`${proj.title} — project screenshot`}
          className="project-card-img"
          loading="lazy"
          decoding="async"
        />
        {proj.images?.length > 1 && (
          <span className="gallery-peek-badge" aria-hidden="true">
            <Eye size={13} aria-hidden="true" />
            <span>{proj.images.length} screens</span>
          </span>
        )}
      </button>

      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="badge-chip badge-tan">{proj.category}</span>
          <span className="project-year-tag">{proj.year}</span>
        </div>

        <h3 className="project-card-title">{proj.title}</h3>
        <p className="project-card-desc">{proj.description}</p>

        {proj.outcome && (
          <p className="project-card-outcome">
            <strong>Outcome:</strong> {proj.outcome}
          </p>
        )}

        <div className="project-stack-row">
          {proj.stack.map((tech, i) => (
            <span key={i} className="tech-chip">{tech}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <div className="project-card-actions">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-repo-link"
                aria-label={`${proj.title} GitHub repository (opens in new tab)`}
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>GitHub</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
            {proj.apk && (
              <a
                href={proj.apk}
                target="_blank"
                rel="noopener noreferrer"
                className="project-apk-btn"
                aria-label={`Download ${proj.title} APK ${proj.apkVersion || ''} (opens in new tab)`}
              >
                <Download size={13} aria-hidden="true" />
                <span>{proj.apkLabel || `Download APK ${proj.apkVersion || ''}`.trim()}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
