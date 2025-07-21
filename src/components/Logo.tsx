import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed top-8 left-8 z-50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Logo Symbol */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center relative overflow-hidden"
          animate={{
            boxShadow: isHovered 
              ? ["0 0 20px #00ffd5", "0 0 40px #ff0080", "0 0 20px #00ffd5"]
              : "0 0 10px #00ffd5"
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap size={28} className="text-cyber-dark" />
          
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 border-2 border-neon-cyan rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Holographic effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Text reveal on hover */}
        <motion.div
          className="absolute top-1/2 left-20 transform -translate-y-1/2 whitespace-nowrap"
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : -20,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-cyber-dark/90 backdrop-blur-xl border border-neon-cyan/30 rounded-lg px-4 py-2">
            <span className="text-2xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
              P/GENAI
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;