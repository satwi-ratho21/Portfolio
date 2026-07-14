/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { User, Cpu, BookOpen, MapPin, Mail, Award, GraduationCap } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030014]/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Satwi</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3" />
          <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-widest">// Engineering physical intelligence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio Story (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
              id="about-bio-container"
            >
              <div className="flex items-center space-x-2.5 text-cyan-400">
                <User className="w-5 h-5" />
                <h4 className="text-sm font-mono uppercase tracking-wider">The Innovation Mindset</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                {portfolioOwner.about}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed text-justify">
                Whether deploying machine learning models on low-power microcontrollers (TinyML), sketching schematic boards for medical nodes, or crafting fluid responsive dashboards, I strive for high performance and architectural integrity. My work aims to create real-world impact by tackling actual human problems with smart technical answers.
              </p>
            </motion.div>

            {/* Core Values / Focus highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 group hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all"
                id="about-value-hardware"
              >
                <Cpu className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider">Hardware Integration</h5>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                    Custom PCB layout, sensor calibration, wireless transceivers (LoRa, ESP32, BLE), and microcontroller optimizations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 group hover:border-purple-500/20 hover:bg-purple-500/5 transition-all"
                id="about-value-ai"
              >
                <Award className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider">Edge Intelligence</h5>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                    Deploying deep learning models, computer vision arrays, and quantized TinyML networks on resource-constrained devices.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Spec Readout Panel (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative p-6 rounded-2xl glass-panel border border-cyan-400/10 shadow-2xl overflow-hidden group hover:border-cyan-400/25 transition-all duration-300"
            id="about-spec-panel"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition-all duration-300" />
            
            <h4 className="text-xs font-mono tracking-wider text-cyan-400 uppercase mb-4 pb-2 border-b border-white/5 flex items-center justify-between">
              <span>SYSTEM_SPECS_READOUT</span>
              <span className="text-[9px] text-gray-500 animate-pulse">● ONLINE</span>
            </h4>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 flex items-center space-x-1.5 flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>EDUCATION</span>
                </span>
                <span className="text-gray-300 text-right ml-4">
                  B.Tech in ECE, Vignan's Institute of Engineering for Women
                </span>
              </div>

              <div className="flex items-start justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 flex items-center space-x-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PRIMARY_CORES</span>
                </span>
                <span className="text-gray-300 text-right">AI / IoT / Embedded Systems</span>
              </div>

              <div className="flex items-start justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GEOLOCATION</span>
                </span>
                <span className="text-gray-300 text-right">Andhra Pradesh, India</span>
              </div>

              <div className="flex items-start justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>COMMS_PORT</span>
                </span>
                <span className="text-gray-300 text-right hover:text-[#00f0ff] transition-colors">
                  <a href={`mailto:${portfolioOwner.email}`}>{portfolioOwner.email}</a>
                </span>
              </div>

              <div className="flex items-start justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CURRENT_FOCUS</span>
                </span>
                <span className="text-gray-300 text-right">Generative AI, AI Wearables & IoT</span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-gray-400 leading-relaxed font-mono">
              <span className="text-cyan-400 font-bold mr-1">&gt; STATUS:</span> 
              "Integrating deep machine learning with embedded microcontrollers to engineer intelligent physical devices for societal impact."
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
