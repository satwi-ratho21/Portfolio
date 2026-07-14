/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, Cpu, BookOpen, FileCheck, ShieldCheck, Network, ExternalLink } from 'lucide-react';
import { achievements, certifications } from '../data';
import LucideIcon from './LucideIcon';

export default function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#030014]/40">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Accolades & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Credentials</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3" />
          <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-widest">// Validated excellence indexes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Achievements & Honors */}
          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-amber-400 flex items-center space-x-2.5 pl-1 mb-2">
              <Trophy className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
              <span>Achievements & Honors</span>
            </h4>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
              id="achievements-list-container"
            >
              {achievements.map((ach) => (
                <motion.div
                  key={ach.id}
                  variants={itemVariants}
                  id={`achievement-card-${ach.id}`}
                  className="p-5 rounded-xl bg-[#0a081e]/30 border border-white/5 hover:border-amber-500/20 hover:bg-amber-500/5 transition-all duration-300 group flex items-start space-x-4 shadow-xl"
                >
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <LucideIcon name={ach.iconName} size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-amber-500 font-semibold tracking-wider">
                      {ach.year} // {ach.issuer}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {ach.title}
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed pt-1">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Certifications */}
          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-cyan-400 flex items-center space-x-2.5 pl-1 mb-2">
              <Award className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
              <span>Certifications</span>
            </h4>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
              id="certifications-list-container"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  id={`certification-card-${cert.id}`}
                  className="p-5 rounded-xl bg-[#0a081e]/30 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group flex items-start space-x-4 shadow-xl"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <LucideIcon name={cert.iconName} size={20} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider">
                      {cert.year} // {cert.provider}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {cert.title}
                    </h5>
                    {cert.credentialId && (
                      <p className="text-[10px] font-mono text-gray-500 pt-0.5">
                        CRED_ID: <span className="text-gray-400">{cert.credentialId}</span>
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
