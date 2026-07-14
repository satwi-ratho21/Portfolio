/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010008] border-t border-white/5 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & title */}
          <div className="text-center md:text-left">
            <span className="text-white font-display text-base font-bold tracking-widest uppercase">
              {portfolioOwner.name}
            </span>
            <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-wider">
              AI & IoT systems innovator // © 2026 All Rights Reserved
            </p>
          </div>

          {/* Social connections links */}
          <div className="flex items-center space-x-4">
            <a
              href={portfolioOwner.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/25 transition-all"
              id="footer-github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioOwner.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/25 transition-all"
              id="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioOwner.email}`}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/25 transition-all"
              id="footer-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            id="btn-scroll-to-top"
            className="p-3 rounded-full bg-white/2 border border-white/5 text-gray-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
