import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Cloud, Wrench, Layers, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'TypeScript', 'Bash', 'Go', 'SQL'],
      color: '#00ffd5',
      gradient: 'from-neon-cyan to-cyber-blue'
    },
    {
      title: 'AI/ML Tools',
      icon: Bot,
      skills: ['LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI API', 'Vertex AI'],
      color: '#ff0080',
      gradient: 'from-neon-pink to-purple-500'
    },
    {
      title: 'DevOps Tools',
      icon: Wrench,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
      color: '#10b981',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Cloud & Infra',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'GCP', 'Linux', 'Redis', 'PostgreSQL'],
      color: '#f59e0b',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['React', 'Node.js', 'FastAPI', 'Django', 'Express', 'Next.js'],
      color: '#8b5cf6',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Specialties',
      icon: Star,
      skills: ['Prompt Engineering', 'MLOps', 'Agentic AI', 'System Design', 'Automation', 'Scaling'],
      color: '#eab308',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cyber-dark to-purple-900/20 relative overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="2"
              fill="#00ffd5"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
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
            Skills & Expertise
          </span>
        </motion.h2>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-neon-cyan/50 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: `0 20px 40px ${category.color}20`,
              }}
            >
              {/* Holographic Overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${category.color}40, transparent)`,
                }}
              />
              
              <div className="relative z-10">
                {/* Icon with Glow Effect */}
                <motion.div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.gradient} mb-6 relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <category.icon size={32} className="text-cyber-dark" />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: `0 0 20px ${category.color}60`,
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6 font-orbitron group-hover:text-neon-cyan transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: category.color }}
                        whileHover={{ scale: 2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-space-grotesk">
                        {skill}
                      </span>
                      
                      {/* Skill Level Indicator */}
                      <motion.div
                        className="ml-auto w-16 h-1 bg-gray-700 rounded-full overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                          transition={{ delay: skillIndex * 0.1, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                style={{
                  background: `radial-gradient(circle, ${category.color}40, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4 font-orbitron">
              Core Philosophy
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-space-grotesk">
              I believe in the convergence of AI and DevOps to create intelligent, self-managing systems. 
              My expertise spans from low-level infrastructure automation to high-level AI model deployment, 
              enabling me to build end-to-end solutions that are both scalable and intelligent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;