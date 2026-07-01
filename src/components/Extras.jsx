import React from 'react';
import './Extras.css';

const Extras = () => {
  return (
    <section id="extras" className="section-padding border-top">
      <div className="container">
        
        <h2 className="section-title">Leadership & Activities</h2>
        
        <div className="bento-grid mb-extra">
          <div className="bento-card animate-fade-up">
            <div className="doc-header">
              <h3 className="doc-title">Vice President — Q Encore (Music Club)</h3>
              <span className="doc-date">2024 — Present</span>
            </div>
            <ul className="doc-bullets">
              <li>Accomplished recognition as a <strong>top-2 performer</strong> in 7+ consecutive inter-college events by leading musical direction and coordinating ensembles of 20-47 participants.</li>
              <li>Organized and executed <strong>4+ large-scale events</strong> (Open Mic, Freshers' Party, Farewell, Annual College Fest) managing end-to-end event logistics and artist coordination.</li>
            </ul>
          </div>
          
          <div className="bento-card animate-fade-up delay-1">
            <div className="doc-header">
              <h3 className="doc-title">Active Member — Student Council</h3>
              <span className="doc-date">2024 — Present</span>
            </div>
            <ul className="doc-bullets">
              <li>Represented student interests in institutional governance, contributing to policy discussions, event planning, and campus community initiatives.</li>
            </ul>
          </div>
        </div>

        <h2 className="section-title">Certifications & Information</h2>
        
        <div className="bento-grid">
          <div className="bento-card animate-fade-up delay-2">
            <div className="doc-header">
              <h3 className="doc-title">Workshop: Agentic AI, Gemini, Claude & ChatGPT</h3>
              <span className="doc-date">2025</span>
            </div>
            <p className="extra-desc">Hands-on workshop covering agentic AI workflows, prompt engineering, and multi-model LLM integration strategies.</p>
          </div>
          
          <div className="bento-card animate-fade-up delay-3">
            <div className="doc-header">
              <h3 className="doc-title">CodSoft Full Stack Development Internship Certificate</h3>
              <span className="doc-date">2024</span>
            </div>
            <p className="extra-desc">Awarded upon successful completion of 1-month virtual internship with production-ready project deliverables.</p>
          </div>
        </div>
        
        <div className="info-grid-minimal mt-extra bento-card animate-fade-up delay-4">
          <h3 className="doc-title" style={{ marginBottom: '1.5rem' }}>Personal Profile</h3>
          <div className="info-row">
            <span className="info-key">Languages</span>
            <span className="info-val">English (Professional), Hindi (Fluent), Bengali (Native)</span>
          </div>
          <div className="info-row">
            <span className="info-key">Musical Expertise</span>
            <span className="info-val">Multi-instrumentalist (Guitar, Drums, Keyboard, Sarod, Flute, Brass & Percussion)</span>
          </div>
          <div className="info-row">
            <span className="info-key">Athletics</span>
            <span className="info-val">Football (Competitive Club-Level Attacking Midfielder)</span>
          </div>
          <div className="info-row">
            <span className="info-key">Core Interests</span>
            <span className="info-val">Open Source Contribution, Web3 & Blockchain, AI/ML Research, Audio Production</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Extras;
