/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Code, BrainCircuit, Terminal, Laptop } from 'lucide-react';
import { skills } from '../data';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<'languages' | 'frameworks' | 'hardware' | 'ai-ml' | 'tools'>('ai-ml');

  const categories = [
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: BrainCircuit },
    { id: 'hardware', label: 'Embedded & Hardware', icon: Cpu },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frameworks', label: 'Web Frameworks', icon: Laptop },
    { id: 'tools', label: 'Tools & Platforms', icon: Terminal },
  ];

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  // Generate deterministic proficiency values for demonstration metrics (since it's a portfolio)
  const getProficiency = (name: string): number => {
    switch (name) {
      case 'Python': return 92;
      case 'TypeScript': return 88;
      case 'C / C++': return 85;
      case 'JavaScript': return 90;
      case 'React': return 90;
      case 'Next.js': return 82;
      case 'Node.js': return 85;
      case 'Tailwind CSS': return 95;
      case 'Arduino': return 94;
      case 'ESP32 / ESP8266': return 92;
      case 'Sensors & Actuators': return 90;
      case 'PCB Design & KiCad': return 80;
      case 'TensorFlow': return 85;
      case 'Computer Vision (OpenCV)': return 88;
      case 'Edge Impulse (TinyML)': return 86;
      case 'Data Science & Pandas': return 80;
      case 'Git & GitHub': return 92;
      case 'Firebase': return 88;
      case 'Figma': return 80;
      case 'Docker': return 75;
      default: return 85;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030014] to-[#05021a]">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3" />
          <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-widest">// Technical capabilities array</p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" id="skills-tabs-container">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`btn-skill-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg border text-xs font-semibold font-display uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-900/35 to-cyan-900/35 text-white border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-[#0a081e]/30 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Bars Display */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
              id={`skills-grid-${activeCategory}`}
            >
              {filteredSkills.map((skill) => {
                const proficiency = getProficiency(skill.name);
                return (
                  <div key={skill.id} id={`skill-item-${skill.id}`} className="space-y-2 group">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[#00f0ff] font-semibold text-glow-cyan">
                        {proficiency}%
                      </span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Core Methodology Highlight */}
        <div className="max-w-3xl mx-auto mt-10 p-5 rounded-xl bg-[#0a081e]/30 border border-purple-500/5 text-center">
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            <strong className="text-white">Continuous Evolution:</strong> I consistently update my core stack, keeping pace with micro-architecture modifications, framework optimizations, and deep learning neural-network pruning mechanisms.
          </p>
        </div>

      </div>
    </section>
  );
}
