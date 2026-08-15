import { Compass, Zap, ShieldCheck } from 'lucide-react';
import { content } from '../data/content';
import './AiWorkflow.css';

export default function AiWorkflow() {
  const { aiWorkflow } = content;

  const getIcon = (id) => {
    switch (id) {
      case 'exploration':
        return <Compass size={24} />;
      case 'acceleration':
        return <Zap size={24} />;
      case 'rigor':
        return <ShieldCheck size={24} />;
      default:
        return <Compass size={24} />;
    }
  };

  return (
    <section className="section-wrapper ai-workflow-section" id="ai-workflow">
      <div className="site-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>{aiWorkflow.eyebrow}</span>
          </div>
          <h2 className="section-headline">{aiWorkflow.headline}</h2>
          <p className="section-subheadline">{aiWorkflow.description}</p>
        </div>

        <div className="ai-spectrum-grid">
          {aiWorkflow.cards.map((card) => (
            <div key={card.id} className={`ai-spectrum-card theme-${card.theme}`}>
              <div className="spectrum-card-header">
                <div className="spectrum-icon-wrap">{getIcon(card.id)}</div>
                <span className="spectrum-tag-pill">{card.tag}</span>
              </div>
              <h3 className="spectrum-title">{card.title}</h3>
              <p className="spectrum-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
