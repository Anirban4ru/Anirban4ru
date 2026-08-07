import { content } from '../data/content';
import ProjectGraphic from './ProjectGraphic';
import './Projects.css';

const Projects = () => {
  return (
    <section id="labs" className="section-padding bg-ink text-white">
      <div className="container labs-container">
        
        <div className="labs-header">
          <div className="labs-header-content">
            <span className="eyebrow">Labs</span>
            <h2 className="section-title">
              Projects I shipped,<br/>
              <span className="text-accent">designed & built.</span>
            </h2>
          </div>
          <div className="labs-header-desc-container">
            <p className="labs-header-desc">
              Repositories and experiments from my GitHub where I code, learn, and iterate.
            </p>
          </div>
        </div>

        <div className="labs-grid">
          {content.projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="lab-card reveal group">
              <div className="lab-card-media">
                <ProjectGraphic projectId={project.id} />
              </div>
              
              <div className="lab-card-inner">
                <div className="lab-card-content">
                  <div className="lab-card-title">
                    {project.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lab-card-arrow" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </div>
                  
                  <div className="lab-card-desc">
                    {project.description}
                  </div>
                  
                  <div className="lab-card-meta">
                    {project.stack} · {project.year}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
