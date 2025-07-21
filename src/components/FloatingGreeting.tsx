import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const FloatingGreeting = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating greeting text in space */}
          <motion.div
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ 
              scale: 0.1, 
              y: -200, 
              opacity: 0,
              rotateX: 90
            }}
            animate={{ 
              scale: 1, 
              y: 0, 
              opacity: 1,
              rotateX: 0
            }}
            exit={{ 
              scale: 0.1, 
              y: -200, 
              opacity: 0,
              rotateX: -90
            }}
            transition={{ 
              type: "spring",
              damping: 15,
              stiffness: 100,
              duration: 2
            }}
          >
            <div className="relative">
              {/* Main greeting card */}
              <div className="bg-gradient-to-br from-cyber-dark/95 to-purple-900/95 backdrop-blur-xl rounded-3xl p-8 border border-neon-cyan/30 max-w-md mx-4 relative overflow-hidden">
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-20"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                {/* Floating sparkles around the card */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <Sparkles size={12} className="text-neon-cyan" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    👋
                  </motion.div>

                  <motion.h2
                    className="text-4xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {greeting}!
                  </motion.h2>

                  <motion.p
                    className="text-gray-300 font-space-grotesk text-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Welcome to my AI-powered universe! 
                    <br />
                    <span className="text-neon-cyan">Ready to explore the future?</span>
                  </motion.p>

                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full font-semibold text-cyber-dark font-orbitron"
                    onClick={handleClose}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(0, 255, 213, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Begin the Journey
                  </motion.button>
                </div>

                {/* Holographic border effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-neon-cyan/50"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                />
              </div>

              {/* Floating particles around the greeting */}
              <div className="absolute inset-0 -m-20">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingGreeting;