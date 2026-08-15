import { useState } from 'react';
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
  useScrollReveal(!loading);

  return (
    <div className="app-container">
      {loading && (
        <Preloader
          onUnravelStart={() => setUnraveling(true)}
          onFinish={() => setLoading(false)}
        />
      )}
      <div className={`site-content-unravel-wrap ${unraveling ? 'is-unraveled' : 'is-standby'}`}>
        <DecorativeDot />
        <Navbar />
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
