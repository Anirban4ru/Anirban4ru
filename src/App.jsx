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
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';

function App() {
  useScrollReveal(true);

  return (
    <div className="app-container">
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
  );
}

export default App;
