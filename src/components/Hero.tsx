import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Download, ChevronDown, Zap } from 'lucide-react';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const texts = ['Agentic AI Specialist', 'GenAI+Ops Engineer'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Wait for 2 seconds, then start erasing
        setTimeout(() => {
          const eraseText = () => {
            if (currentCharIndex > 0) {
              setDisplayText(currentText.slice(0, currentCharIndex - 1));
              setCurrentCharIndex(prev => prev - 1);
              setTimeout(eraseText, 50);
            } else {
              // Move to next text
              setCurrentTextIndex(prev => (prev + 1) % texts.length);
            }
          };
          eraseText();
        }, 2000);
      }
    };

    const typingTimer = setTimeout(typeText, 100);
    return () => clearTimeout(typingTimer);
  }, [currentCharIndex, currentTextIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyber-dark via-purple-900/20 to-cyber-dark">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 213, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 213, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'matrix-rain 20s linear infinite',
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* System Time & Status */}
        <motion.div
          className="absolute top-8 right-8 text-right"
          variants={itemVariants}
        >
          <div className="text-neon-cyan font-orbitron text-sm">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="text-gray-400 text-xs">
            SYSTEM ONLINE
          </div>
        </motion.div>

        {/* Logo with Holographic Effect */}
        <motion.div
          className="mb-8 relative"
          variants={itemVariants}
        >
          <div className="text-6xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent animate-hologram">
            P/GENAI
          </div>
          <motion.div
            className="absolute inset-0 text-6xl font-orbitron font-bold text-neon-cyan opacity-30 blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            P/GENAI
          </motion.div>
        </motion.div>

        {/* Main Title with Typewriter Effect */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white text-center mb-6 font-orbitron"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <motion.span
            className="bg-gradient-to-r from-neon-cyan via-neon-pink to-cyber-purple bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Priyanshu Sharma
          </motion.span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.h2
          className="text-2xl md:text-3xl text-center mb-4 font-space-grotesk h-16 flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="text-neon-cyan animate-glow-pulse">
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-8 bg-neon-cyan ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg text-gray-400 text-center mb-12 font-space-grotesk"
          variants={itemVariants}
        >
          "Automating intelligence at scale"
        </motion.p>

        {/* CTA Buttons with Advanced Hover Effects */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full font-semibold overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 213, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2 text-cyber-dark font-orbitron">
              <Download size={20} />
              Download Resume
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
          
          <motion.button
            className="group relative px-8 py-4 border-2 border-neon-cyan rounded-full font-semibold overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(0, 255, 213, 0.3)",
              borderColor: "#ff0080"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-neon-cyan group-hover:text-cyber-dark transition-colors font-orbitron">
              View My Work
            </span>
            <motion.div
              className="absolute inset-0 bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </motion.button>
        </motion.div>

        {/* Social Links with 3D Hover Effects */}
        <motion.div
          className="flex gap-6 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: "https://github.com/priyanshu1230987/DEVOPS", color: "#00ffd5" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-sharma-124a42367/", color: "#ff0080" },
            { icon: Code, href: "https://www.hackerrank.com/profile/buggatihttp", color: "#8b5cf6" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-cyber-dark/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-neon-cyan transition-all duration-300"
              whileHover={{ 
                scale: 1.2, 
                rotateY: 15,
                boxShadow: `0 0 20px ${social.color}60`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon 
                size={24} 
                className="text-gray-400 group-hover:text-neon-cyan transition-colors"
              />
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${social.color}20, transparent)`,
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* AI Status Indicator */}
        <motion.div
          className="flex items-center gap-3 mb-8 px-6 py-3 bg-cyber-dark/50 backdrop-blur-sm rounded-full border border-neon-cyan/30"
          variants={itemVariants}
        >
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-neon-cyan font-orbitron text-sm">AI SYSTEMS ACTIVE</span>
          <Zap size={16} className="text-neon-cyan" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-neon-cyan animate-glow-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;