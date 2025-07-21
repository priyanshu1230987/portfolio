import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle, MapPin, Clock, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

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
    <section className="py-20 bg-gradient-to-b from-cyber-dark to-purple-900/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
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
            Let's Connect
          </span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Email Card */}
              <motion.div
                className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 group"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 255, 213, 0.2)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-neon-cyan to-cyber-blue rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Mail size={24} className="text-cyber-dark" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-orbitron">Email</h3>
                    <p className="text-neon-cyan font-space-grotesk">buggatihttp@gmail.com</p>
                  </div>
                </div>
                <p className="text-gray-400 font-space-grotesk">
                  Feel free to reach out for collaborations, projects, or just to say hello!
                </p>
              </motion.div>
              
              {/* Availability Card */}
              <motion.div
                className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 group"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255, 0, 128, 0.2)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-neon-pink to-purple-500 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Clock size={24} className="text-cyber-dark" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-orbitron">Availability</h3>
                    <p className="text-neon-pink font-space-grotesk">Open for opportunities</p>
                  </div>
                </div>
                <p className="text-gray-400 font-space-grotesk">
                  Currently available for freelance projects and full-time opportunities in AI and DevOps.
                </p>
              </motion.div>

              {/* Location Card */}
              <motion.div
                className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all duration-300 group"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-cyber-purple to-indigo-500 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <MapPin size={24} className="text-cyber-dark" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-orbitron">Location</h3>
                    <p className="text-cyber-purple font-space-grotesk">India • Remote Worldwide</p>
                  </div>
                </div>
                <p className="text-gray-400 font-space-grotesk">
                  Based in India, working with clients globally across different time zones.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-neon-cyan" size={24} />
                <h3 className="text-2xl font-bold text-white font-orbitron">Send Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-space-grotesk">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-dark/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 font-space-grotesk"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-space-grotesk">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-dark/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 font-space-grotesk"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-space-grotesk">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-cyber-dark/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 resize-none font-space-grotesk"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg font-semibold overflow-hidden font-orbitron"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 213, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-cyber-dark">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-cyber-dark border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Contact Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Response Time', value: '< 24 hours', icon: Clock },
            { label: 'Projects Completed', value: '50+', icon: Zap },
            { label: 'Client Satisfaction', value: '100%', icon: MessageCircle },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-cyber-dark/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="text-neon-cyan mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-white font-orbitron">{stat.value}</div>
              <div className="text-gray-400 font-space-grotesk">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;