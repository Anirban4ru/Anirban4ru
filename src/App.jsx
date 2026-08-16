import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import Projects from './components/Projects';
import WhatIBring from './components/WhatIBring';
import Process from './components/Process';
import AiWorkflow from './components/AiWorkflow';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Footer from './components/Footer';
import DecorativeDot from './components/DecorativeDot';
import Preloader from './components/Preloader';
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [unraveling, setUnraveling] = useState(false);

  // Force scroll to top on mount and prevent scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    if (loading) {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleFinishPreloader = () => {
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setLoading(false);
  };

  useScrollReveal(!loading);

  return (
    <div className="app-container">
      {loading && (
        <Preloader
          onUnravelStart={() => {
            window.scrollTo(0, 0);
            setUnraveling(true);
          }}
          onFinish={handleFinishPreloader}
        />
      )}
      
      {/* Fixed Navbar placed at top-level so position:fixed is always relative to the viewport */}
      <Navbar />
      
      <div className={`site-content-unravel-wrap ${unraveling ? 'is-unraveled' : 'is-standby'}`}>
        <DecorativeDot />
        <main>
          <Hero />
          <MarqueeTicker />
          <Projects />
          <WhatIBring />
          <Process />
          <AiWorkflow />
          <Stack />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
