/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Terminal, ChevronRight, Map, Globe, ShieldAlert } from 'lucide-react';
import { portfolioOwner, featuredProjects } from '../data';
import RightSidebar from './RightSidebar';
import ProjectCard from './ProjectCard';
import TechStack from './TechStack';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onExploreWork: () => void;
}

export default function HeroSection({ onExploreProjects, onExploreWork }: HeroSectionProps) {
  const codeSnippet = `// Code is my language
// Innovation is my passion

const satwi = {
  build: 'solutions',
  impact: 'real-world',
  mission: 'empower & inspire'
};`;

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background radial gradients for ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-pink-900/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 3-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Intro + Code (Col span 5) */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            {/* Header pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.05)]"
              id="hero-header-pill"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                AI ENGINEER | EMBEDDED DEVELOPER | FULL STACK
              </span>
            </motion.div>

            {/* Title / Name */}
            <div className="space-y-1">
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white text-3xl sm:text-4xl font-display font-semibold tracking-tight"
              >
                Hi, I'm
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-7xl font-extrabold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_2px_15px_rgba(6,182,212,0.15)] pb-1"
                id="hero-name-heading"
              >
                SATWI
              </motion.h1>
            </div>

            {/* Bio brief sentence */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans max-w-md"
              id="hero-tagline-text"
            >
              Building intelligent systems that solve real-world problems through{' '}
              <span className="text-cyan-400 font-semibold text-glow-cyan">AI</span>,{' '}
              <span className="text-blue-400 font-semibold">IoT</span>, and{' '}
              <span className="text-purple-400 font-semibold text-glow-purple">Hardware Innovation</span>.
            </motion.p>

            {/* Call to Actions & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
              id="hero-cta-buttons"
            >
              {/* View Projects Solid Gradient Button */}
              <button
                onClick={onExploreProjects}
                id="btn-view-projects-hero"
                className="group relative px-5 py-3 rounded-lg flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
              >
                <span className="font-display">View Projects</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Explore My Work Outline Button */}
              <button
                onClick={onExploreWork}
                id="btn-explore-work-hero"
                className="group relative px-5 py-3 rounded-lg border border-white/10 hover:border-cyan-400/30 flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-[#030014]/50 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                <span className="font-display">Explore My Work</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Social icons */}
              <div className="flex items-center space-x-2.5">
                <a
                  href={portfolioOwner.github}
                  target="_blank"
                  rel="noreferrer"
                  id="link-github-hero"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all duration-300"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href={portfolioOwner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="link-linkedin-hero"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all duration-300"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>

            {/* Code Box Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative p-5 rounded-xl border border-cyan-400/25 glass-panel shadow-[0_10px_30px_rgba(6,182,212,0.06)] overflow-hidden font-mono group hover:border-cyan-400/40 transition-all duration-300"
              id="hero-code-terminal"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-full blur-xl group-hover:bg-cyan-400/10 transition-colors" />
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-gray-500 pl-2">satwi.js</span>
              </div>
              
              <pre className="text-xs text-gray-300 leading-relaxed overflow-x-auto whitespace-pre">
                <code className="text-glow-cyan">
                  <span className="text-gray-500">// Code is my language</span><br />
                  <span className="text-gray-500">// Innovation is my passion</span><br /><br />
                  <span className="text-pink-400">const</span> <span className="text-blue-400">satwi</span> = &#123;<br />
                  &nbsp;&nbsp;build: <span className="text-green-300">'solutions'</span>,<br />
                  &nbsp;&nbsp;impact: <span className="text-green-300">'real-world'</span>,<br />
                  &nbsp;&nbsp;mission: <span className="text-green-300">'empower & inspire'</span><br />
                  &#125;;
                </code>
              </pre>
            </motion.div>
          </div>

          {/* Column 2: Satwi Portrait + Globe (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[540px] lg:min-h-[560px]">
            {/* Spinning Holographic Globe background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 scale-90 sm:scale-120 lg:scale-130">
              {/* Outer Purple orbit ring */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-purple-500/20 animate-orbit" />
              
              {/* Glowing Purple Ring around her waist */}
              <div className="absolute w-[290px] h-[290px] rounded-full border-2 border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.3),inset_0_0_20px_rgba(168,85,247,0.1)] animate-orbit-reverse" />
              
              {/* Holographic Wireframe Globe circles */}
              <div className="absolute w-[260px] h-[260px] rounded-full border border-cyan-500/10 flex items-center justify-center">
                {/* Horizontal Grid */}
                <div className="absolute w-full h-[80px] rounded-full border border-cyan-500/10 transform rotate-12" />
                {/* Vertical Grid */}
                <div className="absolute h-full w-[80px] rounded-full border border-cyan-500/10 transform rotate-45" />
                {/* Spinning globe node sparks */}
                <div className="absolute w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" style={{ top: '15%', left: '30%' }} />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" style={{ bottom: '25%', right: '20%' }} />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400" style={{ top: '60%', left: '20%' }} />
              </div>
              
              {/* Globe Icon overlay for extra cyber texture */}
              <div className="absolute w-[220px] h-[220px] opacity-[0.08] text-cyan-400">
                <Globe className="w-full h-full animate-pulse-slow" strokeWidth={0.5} />
              </div>
            </div>

            {/* Satwi Portrait Image with referrerPolicy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[430px] xl:max-w-[460px] mx-auto select-none overflow-visible"
              id="hero-portrait-container"
            >
              {/* Ambient radial shadow behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-20 pointer-events-none" />
              
              <img
                src="/me.png"
                alt="Satwi"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover relative z-10 drop-shadow-[0_15px_30px_rgba(3,0,20,0.9)] rounded-b-2xl"
              />
              
              {/* Clean bottom fade gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none" />
            </motion.div>
          </div>

          {/* Column 3: Sidebar Widgets (Col span 3) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24">
            <RightSidebar />
          </div>

        </div>

        {/* Bottom Section 1: Featured Projects */}
        <div className="mt-20 pt-10 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
          
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#00f0ff] uppercase bg-[#00f0ff]/5 px-3 py-1 rounded border border-[#00f0ff]/10">
              Featured Projects
            </span>
            <p className="text-xs text-gray-400 mt-2">
              Select and hover over a card to view advanced capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Bottom Section 2: Tech Stack */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <TechStack />
        </div>

      </div>
    </section>
  );
}
