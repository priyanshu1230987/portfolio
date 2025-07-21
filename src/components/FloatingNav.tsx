import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Floating Navigation */}
      <nav className="hidden md:flex fixed top-1/2 right-8 transform -translate-y-1/2 z-50 flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative p-4 rounded-full border transition-all duration-300 hover:scale-110 ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent text-white'
                : 'bg-white/10 backdrop-blur-sm border-white/20 text-white/70 hover:text-white hover:bg-white/20'
            }`}
          >
            <item.icon size={20} />
            <span className="absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm border-l border-white/10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-20 px-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;