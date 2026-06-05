import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-top">
      <div className="container">
        <h2 className="section-title">Key Projects</h2>
        
        <div className="bento-grid">
          {/* Project 1 */}
          <div className="bento-card animate-fade-up">
            <div className="doc-header">
              <h3 className="doc-title">PharmaTrace</h3>
              <div className="project-links">
                <a href="#" className="project-link" aria-label="GitHub Repository">
                  <GithubIcon />
                </a>
                <a href="#" className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h4 className="doc-subtitle">Pharma Supply Chain Traceability & Counterfeit Detection System</h4>
            
            <p className="project-desc">
              Architected a full-stack decentralized application (DApp) integrating Ethereum smart contracts and an AI engine to track pharmaceutical batches from manufacturing to consumer.
            </p>
            
            <ul className="doc-bullets">
              <li>Accomplished <strong className="highlight">100% ML classification accuracy</strong> on a 5,000-sample dataset using XGBoost Classifier.</li>
              <li>Achieved <strong className="highlight">9/9 passing backend AI tests</strong> and authored 17 Solidity unit tests.</li>
              <li>Delivered a functional React DApp with pre-loaded batch data for live stakeholder demonstrations.</li>
            </ul>
            
            <div className="project-tags-text">
              <strong>Tech Stack:</strong> Solidity, Hardhat, Ethers.js, Python, FastAPI, XGBoost, React, Tailwind CSS
            </div>
          </div>

          {/* Project 2 */}
          <div className="bento-card animate-fade-up delay-1">
            <div className="doc-header">
              <h3 className="doc-title">Intelligent Dietary System</h3>
              <div className="project-links">
                <a href="#" className="project-link" aria-label="GitHub Repository">
                  <GithubIcon />
                </a>
                <a href="#" className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h4 className="doc-subtitle">AI-Powered Nutrition & Meal Planning Engine</h4>
            
            <p className="project-desc">
              Research project bridging Computer Vision, Evolutionary Algorithms, and Clinical Nutrition. Co-authored a research paper outlining the multi-modal food recognition pipeline.
            </p>
            
            <ul className="doc-bullets">
              <li>Designed a multi-modal food recognition pipeline using <strong className="highlight">YOLOv8, CNN, and SSD architectures</strong> for real-time object detection.</li>
              <li>Implemented a multi-objective nutritional optimization engine using <strong className="highlight">NSGA-II Evolutionary Algorithm</strong>.</li>
              <li>Built behavioral and food-waste prediction models using <strong className="highlight">LSTM neural networks</strong>.</li>
            </ul>
            
            <div className="project-tags-text">
              <strong>Tech Stack:</strong> YOLOv8, CNN, LSTM, Random Forest, NSGA-II, React Native, Firebase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
