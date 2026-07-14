/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Rocket, 
  Code, 
  Heart, 
  Cpu, 
  Network, 
  Layers, 
  Figma, 
  BrainCircuit,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';
import { stats, timeline } from '../data';
import LucideIcon from './LucideIcon';

export default function RightSidebar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Panel 1: Opportunities */}
      <motion.div 
        variants={itemVariants}
        id="sidebar-panel-opportunities"
        className="relative group p-5 rounded-xl glass-panel border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-500/5 rounded-full blur-xl" />
        
        <h4 className="text-[10px] font-display font-bold tracking-widest text-purple-400 uppercase mb-3">
          Opportunities
        </h4>

        {/* Pulse Available */}
        <div className="flex items-center space-x-2.5 mb-4 px-3 py-1.5 rounded-lg bg-green-500/5 border border-green-500/20 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-xs font-semibold tracking-wide">
            Available for Opportunities
          </span>
        </div>

        {/* Opportunities List */}
        <div className="space-y-3.5 pl-1">
          <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium tracking-wide">AI Engineering</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
            <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium tracking-wide">Embedded Systems</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
            <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
              <Network className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium tracking-wide">IoT Development</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium tracking-wide">Full Stack Development</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Figma className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium tracking-wide">UI/UX Development</span>
          </div>
        </div>

        {/* Hackathon highlight divider */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center space-x-2.5 text-amber-400">
          <Trophy className="w-5 h-5 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] animate-bounce" />
          <span className="text-xs font-bold tracking-wider uppercase">
            5X Hackathon Winner
          </span>
        </div>
      </motion.div>

      {/* Panel 2: Quick Stats */}
      <motion.div 
        variants={itemVariants}
        id="sidebar-panel-quick-stats"
        className="p-5 rounded-xl glass-panel border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
      >
        <h4 className="text-[10px] font-display font-bold tracking-widest text-purple-400 uppercase mb-4">
          Quick Stats
        </h4>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#00f0ff] transition-colors">
                  {stat.value}
                </span>
                <div className={`p-1 rounded bg-gradient-to-br ${stat.color} text-white`}>
                  <LucideIcon name={stat.iconName} size={14} />
                </div>
              </div>
              <p className="text-[10px] font-medium text-gray-400 group-hover:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Panel 3: Experience Journey */}
      <motion.div 
        variants={itemVariants}
        id="sidebar-panel-experience-journey"
        className="relative p-5 rounded-xl glass-panel border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
        
        <h4 className="text-[10px] font-display font-bold tracking-widest text-purple-400 uppercase mb-4">
          Experience Journey
        </h4>

        {/* Timeline */}
        <div className="relative pl-3 space-y-4">
          {/* Vertical center Line */}
          <div className="absolute left-[3px] top-1.5 bottom-1.5 w-[1.5px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500/30" />

          {timeline.map((item, idx) => (
            <div 
              key={item.id}
              id={`timeline-card-${item.id}`}
              className="relative pl-5 group"
            >
              {/* Timeline dot with glowing effect */}
              <div className="absolute -left-[16.5px] top-[4px] flex items-center justify-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 group-hover:bg-pink-500 transition-colors"></span>
                </span>
              </div>

              {/* Header */}
              <div className="flex flex-col mb-1">
                <span className="text-[10px] font-mono text-[#00f0ff] tracking-wider">
                  {item.year}
                </span>
                <span className="text-xs font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                  {item.role}
                </span>
              </div>
              
              <p className="text-[11px] text-gray-400 group-hover:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
