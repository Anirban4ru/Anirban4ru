import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Background from './components/Background';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal(!loading);

  return (
    <div className="app-container">
      <CustomCursor />
      
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Background />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
