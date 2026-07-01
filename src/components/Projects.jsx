import React from 'react';
import { ExternalLink, Code2, Database, Shield, MonitorPlay } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Q_Encore',
    description: 'A modern music queue and playback system with a sleek interface and seamless audio streaming capabilities.',
    techStack: ['React', 'Node.js', 'Web Audio API'],
    githubUrl: 'https://github.com/Anirban4ru/Q_Encore.git',
    icon: <MonitorPlay size={32} />,
    color: '#E85D04'
  },
  {
    id: 2,
    title: 'DupeCleaner-Pro',
    description: 'An advanced file management dashboard that intelligently scans and removes duplicate files with high precision.',
    techStack: ['Python', 'React', 'Electron'],
    githubUrl: 'https://github.com/Anirban4ru/DupeCleaner-Pro.git',
    icon: <Database size={32} />,
    color: '#3F37C9'
  },
  {
    id: 3,
    title: 'Billing System',
    description: 'Professional, minimalist invoice and billing management system tailored for small businesses.',
    techStack: ['React', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Anirban4ru/billing-system.git',
    icon: <Code2 size={32} />,
    color: '#43AA8B'
  },
  {
    id: 4,
    title: 'Decentralized IP Vault',
    description: 'A secure, blockchain-inspired vault for protecting intellectual property using decentralized storage.',
    techStack: ['Solidity', 'React', 'IPFS'],
    githubUrl: 'https://github.com/Anirban4ru/decentralized-ip-vault.git',
    icon: <Shield size={32} />,
    color: '#F72585'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <header className="projects-header animate-fade-up">
          <h2 className="section-title">FINEST PROJECTS</h2>
          <p className="section-subtitle">A SELECTION OF MY BEST WORK</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="project-visual" style={{ background: `linear-gradient(135deg, ${project.color}22 0%, #FFFDF2 100%)` }}>
                <div className="visual-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                {/* Fallback pattern/gradient since images are placeholders */}
                <div className="visual-overlay"></div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Source on GitHub">
                    <svg xmlns="http://www.द्योगिकorg/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.16 0-1.57-.56-2.83-1.48-3.81.15-.37.64-1.8-.14-3.76 0 0-1.21-.39-3.96 1.47a13.38 13.38 0 0 0-7.2 0c-2.75-1.86-3.96-1.47-3.96-1.47-.78 1.96-.29 3.39-.14 3.76-.92.98-1.48 2.24-1.48 3.81 0 5.59 3.31 6.8 6.51 7.15A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    <span>SOURCE CODE</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
