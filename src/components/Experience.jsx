import { useState } from 'react';
import { content } from '../data/content';
import ImageSlideshow from './ImageSlideshow';
import Lightbox from './Lightbox';
import './Experience.css';

const Experience = () => {
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [] });

  const openLightbox = (e, images) => {
    e.preventDefault(); // Stop navigation
    e.stopPropagation();
    setLightboxData({ isOpen: true, images });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="work" className="section-padding bg-background">
      <div className="container work-container">
        
        <div className="work-header">
          <div className="work-header-content">
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title">Selected work</h2>
          </div>
          <p className="work-header-desc">
            Work I'm most proud of - projects I built that showcase depth and impact.
          </p>
        </div>

        <div className="work-grid">
          {content.selectedWork.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="work-card reveal group">
              <div 
                className="work-card-media"
                onClick={(e) => {
                  if (project.images && project.images.length > 0 && (!project.videoUrl || project.videoUrl === '/demo-placeholder.mp4')) {
                    openLightbox(e, project.images);
                  }
                }}
              >
                {project.videoUrl && project.videoUrl !== '/demo-placeholder.mp4' ? (
                  <video 
                    src={project.videoUrl} 
                    className="work-card-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                ) : project.images && project.images.length > 0 ? (
                  <ImageSlideshow images={project.images} />
                ) : (
                  <div className="work-card-placeholder"></div>
                )}
                <div className="work-card-overlay">
                  {project.images && project.images.length > 0 && (!project.videoUrl || project.videoUrl === '/demo-placeholder.mp4') && (
                    <span className="expand-hint">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
                    </span>
                  )}
                </div>
              </div>
              
              <div className="work-card-content">
                <div className="work-card-meta">
                  <span className="eyebrow">{project.category}</span>
                  <span className="eyebrow">{project.year}</span>
                </div>
                
                <h3 className="work-card-title">
                  {project.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="work-card-arrow" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </h3>
                
                <p className="work-card-desc">
                  {project.outcome}
                </p>
              </div>
            </a>
          ))}
        </div>

        <Lightbox 
          isOpen={lightboxData.isOpen} 
          images={lightboxData.images} 
          onClose={closeLightbox} 
        />

      </div>
    </section>
  );
};

export default Experience;
