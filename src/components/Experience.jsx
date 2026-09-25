import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Award, Globe2, BookOpen } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { content } from '../data/content';
import './Experience.css';

export default function Experience() {
  const { experience } = content;
  const { education, work, honors, languages } = experience;

  const sectionRef = useRef(null);
  const gpaRef = useRef(null);
  const [displayedGpa, setDisplayedGpa] = useState('0.00');

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedGpa('8.01');
      return;
    }

    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 1. Stagger In Cards
            const cards = sectionRef.current.querySelectorAll('.exp-card');
            animate(cards, {
              translateY: [35, 0],
              opacity: [0, 1],
              scale: [0.96, 1],
              delay: stagger(120, { start: 100 }),
              duration: 850,
              ease: 'outExpo',
            });

            // 2. Count-Up GPA
            const counter = { val: 0 };
            animate(counter, {
              val: 8.01,
              duration: 1800,
              ease: 'outCubic',
              onUpdate: () => {
                setDisplayedGpa(counter.val.toFixed(2));
              },
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrapper experience-section" id="experience" ref={sectionRef}>
      <div className="site-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{experience.eyebrow}</span>
          </div>
          <h2 className="section-headline">{experience.headline}</h2>
        </div>

        <div className="experience-layout-grid">
          {/* Left Column: Education & Work Experience */}
          <div className="experience-main-col">
            {/* Education Card */}
            <div className="exp-card education-card">
              <div className="exp-card-header">
                <div className="exp-icon-wrap">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="exp-timeline-badge">{education.timeline}</span>
                  <h3 className="exp-title">{education.degree}</h3>
                  <p className="exp-subtitle">{education.minor}</p>
                </div>
              </div>

              <div className="exp-institution-row">
                <span className="institution-name">{education.institution}</span>
                <span className="gpa-pill" ref={gpaRef}>GPA: {displayedGpa} / 10.0</span>
              </div>

              <div className="coursework-block">
                <span className="coursework-label">
                  <BookOpen size={14} />
                  <span>Key Coursework:</span>
                </span>
                <div className="coursework-tags">
                  {education.coursework.map((course, idx) => (
                    <span key={idx} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="exp-card work-card">
              <div className="exp-card-header">
                <div className="exp-icon-wrap">
                  <Briefcase size={22} />
                </div>
                <div>
                  <span className="exp-timeline-badge">{work[0].period}</span>
                  <h3 className="exp-title">{work[0].role}</h3>
                  <p className="exp-subtitle">{work[0].company}</p>
                </div>
              </div>

              <ul className="exp-bullets-list">
                {work[0].bullets.map((bullet, idx) => (
                  <li key={idx} className="exp-bullet-item">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Honors, Certifications & Languages */}
          <div className="experience-side-col">
            {/* Honors & Certifications */}
            <div className="exp-card honors-card">
              <div className="exp-card-header">
                <div className="exp-icon-wrap honors-icon">
                  <Award size={22} />
                </div>
                <div>
                  <span className="exp-timeline-badge">RECOGNITION</span>
                  <h3 className="exp-title">Honors & Certifications</h3>
                </div>
              </div>

              <div className="honors-list">
                {honors.map((item, idx) => (
                  <div key={idx} className="honor-item">
                    <h4 className="honor-title">{item.title}</h4>
                    <p className="honor-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="exp-card languages-card">
              <div className="exp-card-header">
                <div className="exp-icon-wrap">
                  <Globe2 size={20} />
                </div>
                <div>
                  <span className="exp-timeline-badge">COMMUNICATION</span>
                  <h3 className="exp-title">Languages Spoken</h3>
                </div>
              </div>
              <div className="languages-tags">
                {languages.map((lang, idx) => (
                  <span key={idx} className="lang-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
