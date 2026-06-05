import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-top">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="bento-grid">
          {/* Education */}
          <div className="bento-card animate-fade-up">
            <div className="doc-header">
              <h3 className="doc-title">Bachelor of Technology — Computer Science Engineering | Minor: Data Analytics</h3>
              <span className="doc-date">2024 — 2028</span>
            </div>
            <h4 className="doc-subtitle">Quantum University, Roorkee, Uttarakhand</h4>
            <div className="doc-badge">CGPA: 8.01 / 10</div>
            
            <ul className="doc-bullets">
              <li>Awarded <strong className="highlight">merit scholarship of INR 40,000</strong> based on university entrance scholarship examination performance.</li>
              <li><strong className="highlight">Minor specialization in Data Analytics</strong> — coursework includes statistical modelling, data visualization, and business intelligence.</li>
              <li><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Management Systems, Machine Learning, Web Technologies, OOPS with Java, Computer Networks.</li>
            </ul>
          </div>

          {/* Internship */}
          <div className="bento-card animate-fade-up delay-1">
            <div className="doc-header">
              <h3 className="doc-title">Full Stack Development Intern</h3>
              <span className="doc-date">June 2024 — July 2024</span>
            </div>
            <h4 className="doc-subtitle">CodSoft | Virtual Internship (Remote)</h4>
            
            <ul className="doc-bullets">
              <li>Accomplished delivery of <strong className="highlight">3+ production-ready frontend projects</strong> (landing pages, personal portfolio with backend integration) as measured by successful deployment.</li>
              <li>Reduced UI inconsistencies across project components by applying <strong>responsive design principles and CSS animations</strong>.</li>
              <li>Enhanced backend connectivity for static frontend projects using <strong>basic server-side integration</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
