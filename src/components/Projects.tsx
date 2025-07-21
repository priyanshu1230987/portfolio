import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Bot, Cloud, Filter, X } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered DevOps Assistant',
      description: 'An intelligent assistant that automatically optimizes CI/CD pipelines, predicts deployment failures, and suggests infrastructure improvements using advanced ML models.',
      longDescription: 'This revolutionary system combines machine learning with DevOps practices to create a self-optimizing deployment pipeline. It analyzes historical deployment data, monitors system performance, and proactively suggests improvements before issues occur.',
      techStack: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'FastAPI'],
      icon: Bot,
      gradient: 'from-neon-cyan to-cyber-blue',
      color: '#00ffd5',
      category: 'ai',
      demoLink: '#',
      githubLink: '#',
      features: ['Predictive Analytics', 'Auto-scaling', 'Performance Monitoring', 'Intelligent Alerts']
    },
    {
      id: 2,
      title: 'Agentic Infrastructure Orchestrator',
      description: 'A self-healing infrastructure system that uses agentic AI to monitor, diagnose, and automatically resolve system issues while scaling resources based on predictive analysis.',
      longDescription: 'Built with autonomous agents that can make intelligent decisions about infrastructure management. The system learns from past incidents and continuously improves its response strategies.',
      techStack: ['Go', 'Python', 'AWS', 'Terraform', 'LangChain'],
      icon: Cloud,
      gradient: 'from-neon-pink to-purple-500',
      color: '#ff0080',
      category: 'devops',
      demoLink: '#',
      githubLink: '#',
      features: ['Self-healing', 'Predictive Scaling', 'Cost Optimization', 'Multi-cloud Support']
    },
    {
      id: 3,
      title: 'GenAI Code Review Agent',
      description: 'An intelligent code review system that understands context, suggests optimizations, identifies potential bugs, and ensures code quality using advanced language models.',
      longDescription: 'This AI-powered code reviewer goes beyond traditional static analysis by understanding code context, business logic, and providing human-like feedback with actionable suggestions.',
      techStack: ['Node.js', 'OpenAI API', 'GitHub Actions', 'TypeScript', 'PostgreSQL'],
      icon: Zap,
      gradient: 'from-green-400 to-emerald-500',
      color: '#10b981',
      category: 'ai',
      demoLink: '#',
      githubLink: '#',
      features: ['Context-aware Analysis', 'Security Scanning', 'Performance Optimization', 'Learning from Feedback']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-cyber-dark relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 213, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 213, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
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
            Featured Projects
          </span>
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 font-orbitron ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-pink text-cyber-dark'
                  : 'bg-cyber-dark/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-neon-cyan/50 hover:text-white'
              }`}
              onClick={() => setSelectedFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={16} className="inline mr-2" />
              {filter.label} ({filter.count})
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-neon-cyan/50 transition-all duration-500 cursor-pointer"
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: `0 20px 40px ${project.color}20`,
                }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Holographic Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                  }}
                />
                
                <div className="relative z-10">
                  {/* Project Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${project.gradient} mb-6 relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <project.icon size={32} className="text-cyber-dark" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: `0 0 20px ${project.color}60`,
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300 font-orbitron">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed font-space-grotesk">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-cyber-dark/70 rounded-full text-sm text-gray-300 border border-gray-600 hover:border-neon-cyan/50 transition-colors duration-300 font-space-grotesk"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg text-cyber-dark font-semibold font-orbitron"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 font-orbitron"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.button>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${project.color}40, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-cyber-dark/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neon-cyan/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-bold text-neon-cyan font-orbitron">
                          {project.title}
                        </h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                          <X size={24} className="text-gray-400" />
                        </button>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed font-space-grotesk">
                        {project.longDescription}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3 font-orbitron">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-300 font-space-grotesk">
                                <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3 font-orbitron">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-neon-cyan/20 rounded-full text-sm text-neon-cyan border border-neon-cyan/30 font-space-grotesk"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg text-cyber-dark font-semibold font-orbitron">
                          <ExternalLink size={20} />
                          View Live Demo
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 border border-neon-cyan rounded-lg text-neon-cyan hover:bg-neon-cyan/10 transition-colors duration-300 font-orbitron">
                          <Github size={20} />
                          View Source Code
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full font-semibold overflow-hidden font-orbitron"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 213, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-cyber-dark">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;