import { content } from '../data/content';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background text-white">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-col-left reveal">
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>About</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>About me.</h2>
          </div>
          
          <div className="about-col-right">
            <div className="about-bio-large reveal">
              <p className="about-bio-text">
                {content.about.bio}
              </p>
            </div>

            <div className="about-sub-grid reveal">
              <div className="about-text-content">
                <p className="text-muted">
                  {content.about.achievements}
                </p>
                <p className="text-muted mt-4">
                  {content.about.reflection}
                </p>
              </div>

              <div className="about-chips-container">
                <div className="about-chips">
                  {content.about.chips.map((chip, i) => (
                    <div key={i} className="about-chip">
                      <span className="chip-text">{chip.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="skills-section reveal">
              <h3 className="skills-title">Technical Expertise</h3>
              <div className="skills-list">
                {content.about.skills.map((skillGroup, i) => (
                  <div key={i} className="skill-row">
                    <div className="skill-category">
                      <h4>{skillGroup.category}</h4>
                    </div>
                    <div className="skill-tags">
                      {skillGroup.items.map((skill, j) => (
                        <span key={j} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
