import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Volume2, VolumeX, Hexagon } from 'lucide-react';

const HolographicMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, color: '#00ffd5' },
    { id: 'about', label: 'About', icon: User, color: '#ff0080' },
    { id: 'skills', label: 'Skills', icon: Code, color: '#8b5cf6' },
    { id: 'projects', label: 'Projects', icon: Briefcase, color: '#0ea5e9' },
    { id: 'contact', label: 'Contact', icon: Mail, color: '#00ffd5' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const playHoverSound = () => {
    if (audioEnabled) {
      // Create a simple beep sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  return (
    <div className="fixed top-32 left-8 z-50">
      {/* Menu Toggle Button with Unique Design */}
      <motion.button
        className="relative group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={playHoverSound}
      >
        {/* Main hexagonal button */}
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center relative overflow-hidden transform rotate-45">
          <div className="transform -rotate-45">
            <Hexagon size={24} className="text-white z-10" />
          </div>
          
          {/* Pulsing effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 border-2 border-emerald-300 rounded-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.button>

      {/* Audio Toggle */}
      <motion.button
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyber-dark/80 backdrop-blur-sm border border-emerald-500/50 rounded-full flex items-center justify-center"
        onClick={() => setAudioEnabled(!audioEnabled)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {audioEnabled ? (
          <Volume2 size={16} className="text-emerald-400" />
        ) : (
          <VolumeX size={16} className="text-gray-500" />
        )}
      </motion.button>

      {/* Holographic Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-0 w-64 bg-cyber-dark/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 animate-hologram"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Holographic Scanlines */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-pulse rounded-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-emerald-400 font-orbitron font-bold text-lg mb-4 text-center">
                NAVIGATION
              </h3>
              
              <nav className="space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-emerald-500/20 hover:to-teal-500/20 border border-transparent hover:border-emerald-500/50 transition-all duration-300 group"
                    onClick={() => scrollToSection(item.id)}
                    onHoverStart={playHoverSound}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon 
                      size={20} 
                      className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                      style={{ filter: `drop-shadow(0 0 5px ${item.color})` }}
                    />
                    <span className="text-gray-300 group-hover:text-white font-space-grotesk">
                      {item.label}
                    </span>
                    
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}20, transparent)`,
                        boxShadow: `0 0 20px ${item.color}40`,
                      }}
                    />
                  </motion.button>
                ))}
              </nav>
              
              {/* System Status */}
              <div className="mt-6 pt-4 border-t border-emerald-500/30">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>SYSTEM STATUS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HolographicMenu;