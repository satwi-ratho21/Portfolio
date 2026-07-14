/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import FullProjectsSection from './components/FullProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VoiceGreeting from './components/VoiceGreeting';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 160; // Offset for navbar and margin triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // offset of fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#030014] text-white min-h-screen relative font-sans selection:bg-cyan-500/30 selection:text-[#00f0ff] overflow-x-hidden">
      {/* Dynamic scanlines or background effect for cyber atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(rgba(18,16,45,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
      
      {/* Header / Nav */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main className="relative">
        <HeroSection 
          onExploreProjects={() => handleScrollToSection('projects')} 
          onExploreWork={() => handleScrollToSection('about')} 
        />
        <AboutSection />
        <SkillsSection />
        <FullProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Voice Greeting Overlay */}
      <VoiceGreeting />
    </div>
  );
}
