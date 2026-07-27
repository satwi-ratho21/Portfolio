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

  // Generate proficiency values matching skills
  const getProficiency = (name: string): number => {
    const lower = name.toLowerCase();
    if (lower.includes('python')) return 95;
    if (lower.includes('gemini')) return 94;
    if (lower.includes('prompt') || lower.includes('agent')) return 93;
    if (lower.includes('llm') || lower.includes('orchestration')) return 91;
    if (lower.includes('typescript')) return 90;
    if (lower.includes('react')) return 92;
    if (lower.includes('next.js')) return 88;
    if (lower.includes('node.js')) return 89;
    if (lower.includes('tailwind')) return 95;
    if (lower.includes('firebase')) return 90;
    if (lower.includes('vision') || lower.includes('opencv')) return 88;
    if (lower.includes('arduino') || lower.includes('microcontroller')) return 94;
    if (lower.includes('esp32')) return 92;
    if (lower.includes('cursor')) return 96;
    if (lower.includes('c / c++') || lower.includes('c++')) return 86;
    if (lower.includes('javascript')) return 91;
    if (lower.includes('pcb') || lower.includes('kicad')) return 85;
    return 88;
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
        <div className="max-w-3xl mx-auto mt-10 p-5 rounded-xl bg-[#0a081e]/30 border border-purple-500/10 text-center">
          <p className="text-xs text-gray-300 font-sans leading-relaxed">
            <strong className="text-[#00f0ff]">AI-Native & Vibe-Coding Workflow:</strong> Combining rapid full-stack prototyping, generative AI API orchestration, and agentic coding workflows with clean architecture and robust hardware-software integration.
          </p>
        </div>

      </div>
    </section>
  );
}
