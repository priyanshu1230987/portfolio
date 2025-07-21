import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Logo from './components/Logo';
import IntroScreen from './components/IntroScreen';
import HolographicMenu from './components/HolographicMenu';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Show greeting after intro
    setTimeout(() => {
      setShowGreeting(true);
    }, 500);
  };

  return (
    <div className="bg-cyber-dark text-white overflow-x-hidden">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {showIntro && isLoaded && (
          <IntroScreen onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Floating Greeting */}
      {/* {showGreeting && <FloatingGreeting />} */}

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Logo />
          <HolographicMenu />
          
          <div id="home">
            <Hero />
          </div>
          
          <div id="about">
            <About />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="contact">
            <Contact />
          </div>

          <AIAssistant />
        </motion.div>
      )}
    </div>
  );
}

export default App;