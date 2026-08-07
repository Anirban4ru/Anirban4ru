import './ProjectGraphic.css';

const ProjectGraphic = ({ projectId }) => {
  const renderGraphic = () => {
    switch (projectId) {
      case 'pharmatrace':
        // Supply chain / Blockchain / Hexagons
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <defs>
              <linearGradient id="grad-pharma" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path d="M100 100 L150 70 L200 100 L200 160 L150 190 L100 160 Z" fill="url(#grad-pharma)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M200 40 L250 10 L300 40 L300 100 L250 130 L200 100 Z" fill="url(#grad-pharma)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="200" y1="100" x2="150" y2="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="200" y1="100" x2="250" y2="130" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="150" cy="70" r="4" fill="currentColor" opacity="0.6" />
            <circle cx="200" cy="100" r="4" fill="currentColor" opacity="0.6" />
            <circle cx="250" cy="130" r="4" fill="currentColor" opacity="0.6" />
            <circle cx="200" cy="40" r="4" fill="currentColor" opacity="0.6" />
          </svg>
        );
      case 'nourish':
        // AI / Network / Connections
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <defs>
              <radialGradient id="grad-nourish" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="100" r="80" fill="url(#grad-nourish)" />
            <path d="M140 100 Q 200 40 260 100 Q 200 160 140 100 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M200 40 Q 140 100 200 160 Q 260 100 200 40 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="200" cy="40" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="200" cy="160" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="140" cy="100" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="260" cy="100" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="200" cy="100" r="6" fill="currentColor" opacity="0.8" />
          </svg>
        );
      case 'repostosocial':
        // Automation / Nodes / Pipeline
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <line x1="100" y1="100" x2="300" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <rect x="80" y="80" width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            <rect x="180" y="80" width="40" height="40" rx="20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
            <rect x="280" y="80" width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M120 100 L 180 100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow)" />
            <path d="M220 100 L 280 100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity="0.6" />
              </marker>
            </defs>
          </svg>
        );
      case 'cryptopay':
        // Finance / Blocks / Graph
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <path d="M100 150 L 150 90 L 200 120 L 250 60 L 300 100" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M100 150 L 150 90 L 200 120 L 250 60 L 300 100 L 300 200 L 100 200 Z" fill="currentColor" fillOpacity="0.05" />
            <circle cx="150" cy="90" r="4" fill="currentColor" opacity="0.8" />
            <circle cx="200" cy="120" r="4" fill="currentColor" opacity="0.8" />
            <circle cx="250" cy="60" r="4" fill="currentColor" opacity="0.8" />
            <circle cx="300" cy="100" r="4" fill="currentColor" opacity="0.8" />
            <line x1="150" y1="90" x2="150" y2="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <line x1="200" y1="120" x2="200" y2="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <line x1="250" y1="60" x2="250" y2="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
        );
      case 'ipvault':
        // Storage / Vault / Security
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <rect x="150" y="70" width="100" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M170 70 V 50 A 30 30 0 0 1 230 50 V 70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="200" cy="110" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
            <line x1="200" y1="120" x2="200" y2="135" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
            <line x1="100" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          </svg>
        );
      case 'dupecleaner':
        // Utility / Layers / Filtering
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <rect x="160" y="60" width="80" height="80" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" transform="rotate(15 200 100)" />
            <rect x="160" y="60" width="80" height="80" rx="8" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="175" y1="80" x2="225" y2="80" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="175" y1="100" x2="225" y2="100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="175" y1="120" x2="200" y2="120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
          </svg>
        );
      default:
        // Generic wireframe graphic
        return (
          <svg viewBox="0 0 400 200" className="project-svg" aria-hidden="true">
            <rect x="100" y="50" width="200" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="150" cy="100" r="20" fill="currentColor" opacity="0.1" />
            <line x1="190" y1="90" x2="270" y2="90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="190" y1="110" x2="240" y2="110" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
        );
    }
  };

  return (
    <div className="project-graphic-container">
      {renderGraphic()}
      <div className="project-graphic-overlay"></div>
    </div>
  );
};

export default ProjectGraphic;
