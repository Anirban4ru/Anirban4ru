import { content } from '../data/content';
import './MarqueeTicker.css';

export default function MarqueeTicker() {
  const { ticker } = content;
  // Duplicate ticker items to ensure infinite seamless scrolling
  const tickerItems = [...ticker, ...ticker, ...ticker];

  return (
    <div className="marquee-ticker-wrap" aria-hidden="true">
      <div className="marquee-track">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span className="marquee-text">{item}</span>
            <span className="marquee-glyph">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
