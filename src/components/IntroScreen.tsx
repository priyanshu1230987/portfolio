import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 2500);
    const timer3 = setTimeout(() => setStage(3), 4000);
    const timer4 = setTimeout(() => onComplete(), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-cyber-dark flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-neon-cyan text-xs font-mono animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>

        {/* Spaceship Door Animation */}
        <div className="relative w-96 h-96">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: stage >= 1 ? 1 : 0, rotate: stage >= 1 ? 360 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute inset-4 bg-cyber-dark rounded-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 1 ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              className="text-6xl font-orbitron font-bold text-neon-cyan"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: stage >= 2 ? 1 : 0, scale: stage >= 2 ? 1 : 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              P/GENAI
            </motion.div>
          </motion.div>

          {/* Holographic Effects */}
          <motion.div
            className="absolute inset-0 border-2 border-neon-cyan rounded-full animate-glow-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 3 ? 1 : 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          className="absolute bottom-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 20 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="text-neon-cyan font-orbitron text-xl mb-4">
            INITIALIZING AI SYSTEMS...
          </div>
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-neon-cyan rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroScreen;