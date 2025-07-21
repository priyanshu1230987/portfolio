import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello there! 🤖 I'm Priyanshu's AI assistant. I'm here to help you navigate through his amazing portfolio and answer any questions about his work in AI/ML and DevOps. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    'skills': "Priyanshu specializes in AI/ML, Python, JavaScript, Docker, Kubernetes, AWS, and many other cutting-edge technologies. He's particularly skilled in creating intelligent automation systems and GenAI+Ops solutions! 🚀",
    'projects': "His featured projects include an AI-Powered DevOps Assistant, Agentic Infrastructure Orchestrator, and GenAI Code Review Agent. Each project showcases his expertise in combining AI with DevOps practices! 💡",
    'experience': "Priyanshu has 1+ years of focused experience in AI/ML, with expertise in building intelligent, self-managing systems that bridge AI research and production deployment. 🎯",
    'contact': "You can reach Priyanshu at buggatihttp@gmail.com. He's currently available for exciting projects and collaborations! 📧",
    'location': "Priyanshu is based in India but works with clients globally across different time zones. Distance is no barrier to great collaboration! 🌍",
    'hello': "Hello! Great to meet you! 👋 I'm here to help you learn more about Priyanshu's incredible work in AI and DevOps. What sparks your curiosity?",
    'hi': "Hi there! 😊 I'm Priyanshu's friendly AI assistant. Feel free to ask me anything about his skills, projects, or experience!",
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    
    if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence')) {
      return "Priyanshu is passionate about Agentic AI and GenAI+Ops! 🤖 He creates intelligent systems that can think, learn, and adapt autonomously. His work focuses on building AI-powered infrastructure that can self-heal and optimize. Pretty cool, right?";
    }
    
    if (lowerInput.includes('devops')) {
      return "Priyanshu combines DevOps practices with AI to create next-generation infrastructure! 🔧 He specializes in CI/CD automation, container orchestration, and cloud-native solutions that leverage machine learning for optimization. It's the future of tech!";
    }
    
    return "That's an interesting question! 🤔 While I can provide information about Priyanshu's skills, projects, and experience, I'd recommend reaching out to him directly at buggatihttp@gmail.com for more detailed discussions. He loves talking about AI and DevOps!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button with Robot AI Design */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: isOpen 
            ? "0 0 0 0 rgba(59, 130, 246, 0.4)" 
            : ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 20px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0.4)"]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: isOpen ? 0 : Infinity }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="robot"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Bot size={24} className="text-white" />
              {/* Robot eyes animation */}
              <motion.div
                className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-1 left-1 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-8 z-40 w-96 h-[500px] bg-cyber-dark/95 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
                  <Bot size={20} className="text-white" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-orbitron">AI Assistant</h3>
                  <p className="text-blue-400 text-xs font-space-grotesk">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                        : 'bg-gray-600'
                    }`}>
                      {message.isBot ? (
                        <Bot size={16} className="text-white" />
                      ) : (
                        <User size={16} className="text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-blue-500/20 border border-blue-500/30 text-white'
                        : 'bg-purple-500/20 border border-purple-500/30 text-white'
                    }`}>
                      <p className="text-sm font-space-grotesk leading-relaxed">{message.text}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-blue-500/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 bg-cyber-dark/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm font-space-grotesk"
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;