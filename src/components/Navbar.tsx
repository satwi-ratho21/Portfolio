/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { portfolioOwner } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const simulateDownload = () => {
    // Generate a temporary resume content file and trigger download
    const resumeText = `
PORTFOLIO RESUME - SATWI
AI Engineer | Embedded Systems Developer | Full Stack Developer
Email: ${portfolioOwner.email}

CORE EXPERTISE:
- AI & Machine Learning: TensorFlow, OpenCV, Edge Impulse, Computer Vision, Dataset Curation
- Embedded Systems & Hardware: ESP32, Arduino, Custom Sensors, Actuators, KiCad PCB Layout
- Full Stack Web: React, Next.js, Node.js, Express, Tailwind CSS, TypeScript, Firebase, SQL

HIGHLIGHTED PROJECTS:
1. Human Trafficking Prevention System: AI-driven Computer Vision platform for detection and alerts.
2. Maternal Health Monitoring System: Wearable IoT system with ESP32 vital sensors & real-time emergency alert dispatch.
3. Smart Automation System: Industrial IoT automation platform with sensor logging and relay control.

ACHIEVEMENTS:
- 1st Place Winner, National Smart India Hackathon (SIH 2023)
- Winner, IoT Innovation Challenge
- Outstanding Young Innovator Award, State Tech Council
    `;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "Satwi_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#030014]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(3,0,20,0.8)]' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            id="nav-logo"
          >
            <span className="text-[#00f0ff] font-mono text-xl font-bold tracking-tighter text-glow-cyan transition-all duration-300 group-hover:scale-105">
              &lt;/&gt;
            </span>
            <span className="text-white font-display text-lg font-bold tracking-widest uppercase transition-all duration-300 group-hover:text-[#00f0ff]">
              {portfolioOwner.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-xs xl:text-sm font-medium font-display tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full nav-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Download Resume Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={simulateDownload}
              id="btn-download-resume-desktop"
              className="relative group overflow-hidden px-4 py-2.5 rounded-lg border border-transparent flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 cursor-pointer"
            >
              {/* Glowing Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Inner Border Border effect */}
              <div className="absolute inset-[1px] bg-[#030014] rounded-lg z-10 transition-colors duration-300 group-hover:bg-[#030014]/50" />
              
              <Download className="w-4 h-4 text-[#00f0ff] relative z-20 group-hover:animate-bounce" />
              <span className="relative z-20 font-display">Download Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="text-gray-400 hover:text-white focus:outline-none p-1.5 rounded-lg border border-white/5 bg-white/5"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            id="mobile-nav-panel"
            className="lg:hidden w-full bg-[#030014]/95 border-b border-white/10 glass-panel shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium font-display tracking-wider uppercase transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white border-l-4 border-cyan-400' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                  }`}
                >
                  <span className={activeSection === item.id ? 'text-[#00f0ff] font-bold text-glow-cyan mr-2' : 'mr-2 text-white/20'}>
                    //
                  </span>
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 px-4 flex justify-center">
                <button
                  onClick={simulateDownload}
                  id="btn-download-resume-mobile"
                  className="w-full relative group overflow-hidden px-4 py-3 rounded-lg border border-transparent flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500" />
                  <div className="absolute inset-[1px] bg-[#030014] rounded-lg z-10" />
                  <Download className="w-4 h-4 text-[#00f0ff] relative z-20" />
                  <span className="relative z-20 font-display">Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
