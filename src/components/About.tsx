import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Target, Calendar, MapPin } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  const [location, setLocation] = useState('Loading...');

  useEffect(() => {
    // Get user's location with full address
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            const fullAddress = `${data.locality}, ${data.principalSubdivision}, ${data.countryName}`;
            setLocation(fullAddress || `${data.city}, ${data.countryName}`);
          } catch (error) {
            setLocation('India • Remote Worldwide');
          }
        },
        () => {
          setLocation('India • Remote Worldwide');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 600000 }
      );
    } else {
      setLocation('India • Remote Worldwide');
    }
  }, []);

  const timelineEvents = [
    {
      year: '2023',
      title: 'Started AI/ML Journey',
      description: 'Began exploring machine learning and automation',
      icon: Brain,
    },
    {
      year: '2023',
      title: 'DevOps Integration',
      description: 'Specialized in cloud infrastructure and CI/CD',
      icon: Cpu,
    },
    {
      year: '2024',
      title: 'Agentic AI Focus',
      description: 'Pioneered intelligent automation systems',
      icon: Zap,
    },
    {
      year: '2024',
      title: 'GenAI+Ops Innovation',
      description: 'Leading the future of AI-powered operations',
      icon: Target,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-gradient-to-b from-cyber-dark via-purple-900/10 to-cyber-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Profile Photo */}
            <motion.div
              className="group relative mx-auto w-80 h-80"
              variants={itemVariants}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-neon-cyan shadow-2xl relative">
                <img 
                  src={profileImg}
                  alt="Priyanshu Sharma"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-neon-cyan rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Personal Info Cards */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-neon-cyan" size={20} />
                  <h3 className="text-lg font-semibold text-white font-orbitron">Location</h3>
                </div>
                <p className="text-gray-300 font-space-grotesk">{location}</p>
              </div>
              
              <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-neon-pink" size={20} />
                  <h3 className="text-lg font-semibold text-white font-orbitron">Experience</h3>
                </div>
                <p className="text-gray-300 font-space-grotesk">1+ Years in AI/ML</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Content & Timeline */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* About Cards */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-neon-cyan group-hover:animate-pulse" size={24} />
                  <h3 className="text-xl font-semibold text-white font-orbitron">Who am I?</h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-space-grotesk">
                  I'm a passionate AI/ML enthusiast and GenAI+Ops Engineer who bridges the gap between cutting-edge AI research and scalable production systems. My journey began with a fascination for automation and has evolved into architecting intelligent systems that think, learn, and adapt.
                </p>
              </div>
              
              <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-neon-pink group-hover:animate-pulse" size={24} />
                  <h3 className="text-xl font-semibold text-white font-orbitron">Why AI + DevOps?</h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-space-grotesk">
                  The convergence of AI and DevOps represents the future of technology. I believe in creating self-healing, self-optimizing systems that not only deploy code but understand it, improve it, and evolve with it. It's about building the infrastructure for tomorrow's AI-first world.
                </p>
              </div>
              
              <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-cyber-purple group-hover:animate-pulse" size={24} />
                  <h3 className="text-xl font-semibold text-white font-orbitron">Unique Value</h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-space-grotesk">
                  I don't just implement AI solutions; I architect intelligent ecosystems that anticipate needs, optimize themselves, and scale autonomously. My work combines the precision of DevOps with the creativity of AI to build systems that are truly futuristic.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neon-cyan font-orbitron mb-6">Journey Timeline</h3>
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    className="flex items-start gap-4 p-4 bg-cyber-dark/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center">
                      <event.icon size={20} className="text-cyber-dark" />
                    </div>
                    <div>
                      <div className="text-neon-cyan font-orbitron font-bold text-lg">{event.year}</div>
                      <div className="text-white font-semibold font-space-grotesk">{event.title}</div>
                      <div className="text-gray-400 text-sm font-space-grotesk">{event.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;