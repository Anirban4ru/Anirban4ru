import { content } from '../data/content';
import './Process.css';

export default function Process() {
  const { process } = content;

  return (
    <section className="section-wrapper process-section" id="process">
      <div className="site-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{process.eyebrow}</span>
          </div>
          <h2 className="section-headline">{process.headline}</h2>
          <p className="section-subheadline">{process.description}</p>
        </div>

        <div className="process-cards-grid">
          {process.steps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="process-number-badge">{step.number}</div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
