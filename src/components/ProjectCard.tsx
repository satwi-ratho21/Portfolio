/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Activity, Cpu, ArrowUpRight, Github, ExternalLink, X, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  key?: React.Key;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine icon and colors based on project metadata or image name
  const renderProjectIcon = () => {
    switch (project.image) {
      case 'human_trafficking':
        return (
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-blue-950/45 border-2 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <ShieldAlert className="w-10 h-10 text-blue-400 drop-shadow-[0_0_8px_#3b82f6]" />
            <span className="absolute inset-0 rounded-full border border-blue-400/20 animate-ping opacity-25" />
          </div>
        );
      case 'maternal_health':
        return (
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-pink-950/45 border-2 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            <Activity className="w-10 h-10 text-pink-400 drop-shadow-[0_0_8px_#ec4899]" />
            <span className="absolute inset-0 rounded-full border border-pink-400/20 animate-pulse opacity-30" />
          </div>
        );
      case 'smart_automation':
        return (
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-purple-950/45 border-2 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Cpu className="w-10 h-10 text-purple-400 drop-shadow-[0_0_8px_#a855f7]" />
            <span className="absolute inset-0 rounded-full border border-purple-400/20 animate-pulse opacity-30" />
          </div>
        );
      default:
        return (
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-cyan-950/45 border-2 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Cpu className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]" />
          </div>
        );
    }
  };

  const getBorderColor = () => {
    switch (project.category) {
      case 'ai': return 'hover:border-blue-500/30';
      case 'iot': return 'hover:border-pink-500/30';
      case 'hardware': return 'hover:border-purple-500/30';
      default: return 'hover:border-cyan-500/30';
    }
  };

  const getCardTheme = () => {
    switch (project.category) {
      case 'ai': return 'from-blue-500/5 via-transparent to-transparent';
      case 'iot': return 'from-pink-500/5 via-transparent to-transparent';
      case 'hardware': return 'from-purple-500/5 via-transparent to-transparent';
      default: return 'from-cyan-500/5 via-transparent to-transparent';
    }
  };

  return (
    <>
      <motion.div
        id={`featured-project-${project.id}`}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`relative group flex flex-col justify-between p-6 rounded-xl glass-panel border border-white/5 ${getBorderColor()} transition-all duration-300 cursor-pointer h-full overflow-hidden bg-gradient-to-br ${getCardTheme()}`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full blur-2xl group-hover:bg-white/5 transition-all duration-300" />
        
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start space-y-4">
          {/* Project Illustration */}
          <div className="mx-auto sm:mx-0 mb-2">
            {renderProjectIcon()}
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors duration-200 line-clamp-1">
              {project.title}
            </h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>

        {/* Action, Tags and Footer */}
        <div className="mt-5 space-y-4 pt-4 border-t border-white/5">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#0a081e] border border-white/10 text-gray-400 group-hover:text-white transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project trigger */}
          <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors duration-300">
            <span className="font-display">View Project</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </motion.div>

      {/* Expanded Project Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#030014]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl glass-panel-neon border border-purple-500/20 p-6 md:p-8 shadow-2xl z-10"
              id={`project-modal-${project.id}`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 rounded-lg border border-white/10 bg-white/5 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row md:items-start gap-6 pt-2">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  {renderProjectIcon()}
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/5 px-2 py-1 rounded border border-[#00f0ff]/10">
                      Featured Project // {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-3 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed text-justify md:text-left">
                    {project.longDescription || project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="bg-white/2 border border-white/5 rounded-xl p-4 space-y-2.5 text-left">
                    <h4 className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                      Key Capabilities & Technologies
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#00f0ff] flex-shrink-0" />
                        <span>High-frequency data streaming</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#00f0ff] flex-shrink-0" />
                        <span>Low-power deep-sleep ESP32 configuration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#00f0ff] flex-shrink-0" />
                        <span>Edge AI inference pipeline</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#00f0ff] flex-shrink-0" />
                        <span>Real-time dashboard visualization</span>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center space-x-2 text-xs font-bold text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 flex items-center space-x-2 text-xs font-bold text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
