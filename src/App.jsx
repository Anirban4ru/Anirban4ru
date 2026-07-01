import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Extras from './components/Extras';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      <CustomCursor />
      
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Extras />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
