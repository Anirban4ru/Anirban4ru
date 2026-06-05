import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "Solidity", "HTML5", "CSS3", "Dart (Flutter)"]
    },
    {
      title: "Frontend",
      skills: ["React.js (Vite)", "React Native", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Node.js", "Web3.py", "Ethers.js", "Firebase"]
    },
    {
      title: "Blockchain",
      skills: ["Solidity", "Hardhat", "Ethereum DApp"]
    },
    {
      title: "AI / ML",
      skills: ["XGBoost", "YOLOv8", "CNN", "SSD", "LSTM", "Random Forest", "NSGA-II", "Scikit-learn"]
    },
    {
      title: "Data & Analytics",
      skills: ["MySQL", "Oracle Data Modeler", "SPSS", "Hadoop", "Data Viz", "Statistical Modelling"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Hardhat Test Suite"]
    }
  ];

  return (
    <section id="skills" className="section-padding border-top">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-bento-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bento-card animate-fade-up delay-${(index % 4) + 1}`}>
              <h3 className="skill-bento-title">{category.title}</h3>
              <div className="skill-bento-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
