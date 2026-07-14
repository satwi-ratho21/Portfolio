/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Briefcase, Trophy, Cpu, BookOpen } from 'lucide-react';
import { timeline } from '../data';
import LucideIcon from './LucideIcon';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#05021a] to-[#030014]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-900/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Roadmap</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3" />
          <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-widest">// Career milestones timeline</p>
        </div>

        {/* Detailed Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-4 sm:pl-0" id="experience-timeline-container">
          {/* Vertical center Line (Hidden on mobile, left-aligned) */}
          <div className="absolute left-[15px] sm:left-1/2 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500/30 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id}
                  id={`experience-timeline-card-${item.id}`}
                  className="relative flex flex-col sm:flex-row items-start sm:justify-between"
                >
                  {/* Circle Dot with Icon on central axis */}
                  <div className="absolute left-[15px] sm:left-1/2 top-1.5 -translate-x-[15px] sm:-translate-x-1/2 z-20">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0a081e] border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] hover:border-pink-500 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all duration-300">
                      <LucideIcon name={item.iconName} className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Left Side Content (Placeholder on desktop to push actual content) */}
                  <div className={`hidden sm:block w-[45%] ${isEven ? 'order-1 text-right' : 'order-3'}`}>
                    {isEven && (
                      <div className="pr-8 space-y-1.5">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/5 px-2.5 py-1 rounded border border-[#00f0ff]/10">
                          {item.year}
                        </span>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider pt-2">
                          {item.company}
                        </h4>
                      </div>
                    )}
                  </div>

                  {/* Right Side Content (Actual card) */}
                  <div className={`w-full sm:w-[45%] pl-8 sm:pl-0 ${isEven ? 'order-3' : 'order-1 sm:text-right'}`}>
                    {!isEven && (
                      <div className="sm:hidden mb-2">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/5 px-2.5 py-1 rounded border border-[#00f0ff]/10">
                          {item.year}
                        </span>
                      </div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                      className={`p-5 rounded-xl glass-panel border border-white/5 hover:border-cyan-400/25 transition-all duration-300 shadow-xl ${
                        isEven ? 'sm:text-left' : 'sm:text-right'
                      }`}
                    >
                      {!isEven && (
                        <div className="hidden sm:block mb-3">
                          <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/5 px-2.5 py-1 rounded border border-[#00f0ff]/10">
                            {item.year}
                          </span>
                        </div>
                      )}

                      <h4 className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors leading-tight">
                        {item.role}
                      </h4>
                      <h5 className="text-[11px] font-mono text-[#00f0ff] mt-1 uppercase tracking-wide">
                        {item.company}
                      </h5>
                      <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>

                    {isEven && (
                      <div className="sm:hidden mt-2 pl-1">
                        <span className="text-xs font-mono font-bold tracking-widest text-gray-400">
                          {item.company}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Year display for non-even elements on desktop */}
                  <div className={`hidden sm:block w-[45%] ${!isEven ? 'order-3 text-left pl-8' : 'order-1'}`}>
                    {!isEven && (
                      <div className="space-y-1.5">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/5 px-2.5 py-1 rounded border border-[#00f0ff]/10">
                          {item.year}
                        </span>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider pt-2">
                          {item.company}
                        </h4>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
