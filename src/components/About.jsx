import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding border-top">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p>
            I am a driven and detail-oriented Computer Science undergraduate (B.Tech, 2028) at Quantum University, 
            with a minor specialization in <span className="highlight">Data Analytics</span>. I have a proven ability to bridge complex technical domains — 
            from building <span className="highlight">decentralized blockchain-AI applications</span> to co-authoring peer-reviewed research in <span className="highlight">computational nutrition</span>.
          </p>
          <p>
            My experience spans <span className="highlight">full-stack development</span>, <span className="highlight">machine learning</span>, and SEO-driven digital strategies. I am also a 
            collaborative leader with demonstrated impact as Vice President of a college music organization and an active 
            Student Council member.
          </p>
          <p>
            Currently, I am seeking opportunities at forward-thinking MNCs where analytical rigor and engineering depth 
            create measurable business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
