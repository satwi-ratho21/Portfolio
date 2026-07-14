/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface TechItem {
  name: string;
  color: string; // Tailwind glow class
  svg: React.ReactNode;
}

export default function TechStack() {
  const techList: TechItem[] = [
    {
      name: "Python",
      color: "hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#3776AB" className="hidden" />
          {/* Custom Python Vector */}
          <path d="M11.75 3c-2.4 0-4.25.1-4.25 1.5v1.25H11.5c1.4 0 2.5 1.1 2.5 2.5V11h1.25C16.9 11 17 9.15 17 6.75 17 4.35 15.15 3 11.75 3z" fill="#306998" />
          <path d="M12.25 21c2.4 0 4.25-.1 4.25-1.5v-1.25H12.5c-1.4 0-2.5-1.1-2.5-2.5V13H8.75C7.1 13 7 14.85 7 17.25 7 19.65 8.85 21 12.25 21z" fill="#FFD43B" />
          <circle cx="9.5" cy="4.5" r="0.5" fill="white" />
          <circle cx="14.5" cy="19.5" r="0.5" fill="black" />
        </svg>
      )
    },
    {
      name: "React",
      color: "hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
      svg: (
        <svg className="w-8 h-8 animate-spin-slow" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "Next.js",
      color: "hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="3" />
          <path d="M149.508 157.52L69.142 54H54v72h13.254V69.41l73.13 94.368c3.04-2.015 5.918-4.204 8.624-6.558z" fill="url(#nextG1)" />
          <path d="M117 54H103.75v72H117V54z" fill="url(#nextG2)" />
          <defs>
            <linearGradient id="nextG1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nextG2" x1="110.5" y1="54" x2="110.5" y2="108.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Node.js",
      color: "hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm-1 14.75V11H6v4.25l5 2.5zm7-2.5h-5V11h5v3.25z" fill="#68A063" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      color: "hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 6.036c-2.28-3.78-6.84-4.86-10.26-1.62-3.42 3.24-2.85 9.18 1.14 11.88 2.28 1.54 5.13.81 7.41-1.62l1.71 1.62c-2.28 3.78-6.84 4.86-10.26 1.62-3.42-3.24-2.85-9.18-1.14-11.88 1.14-.77 2.28-.99 3.42-.99 2.28 0 4.56.9 6.27 2.61L12 6.036zm10.26-1.62c-3.42-3.24-7.98-2.16-10.26 1.62L13.71 7.66c1.71-1.71 3.99-2.61 6.27-2.61 1.14 0 2.28.22 3.42.99 1.71 2.7 1.14 8.64-1.14 11.88-3.42 3.24-7.98 2.16-10.26-1.62L10.29 14.68c1.71 1.71 3.99 2.61 6.27 2.61 1.14 0 2.28-.22 3.42-.99 1.71-2.7 2.28-8.64-1.14-11.88z" fill="#38bdf8" />
        </svg>
      )
    },
    {
      name: "Firebase",
      color: "hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M3.89 15.55L7.22 3.12c.11-.42.71-.42.82 0l1.83 6.84L3.89 15.55z" fill="#FFC229" />
          <path d="M15.42 15.55L12.12 3.12c-.11-.42-.71-.42-.82 0L9.47 9.96l5.95 5.59z" fill="#FFA000" />
          <path d="M3.89 15.55l8.11 4.7c.31.18.69.18 1 0l8.11-4.7-5.95-11.13L3.89 15.55z" fill="#F44336" />
        </svg>
      )
    },
    {
      name: "Arduino",
      color: "hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="12" r="5" stroke="#00979C" strokeWidth="2" />
          <circle cx="16" cy="12" r="5" stroke="#00979C" strokeWidth="2" />
          <path d="M12 12h-2m1-1v2M14 12h2" stroke="#00979C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "ESP32",
      color: "hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#e04006" strokeWidth="2" fill="rgba(224,64,6,0.1)" />
          <path d="M7 7h10v10H7z" fill="#e04006" />
          <path d="M9 12h6M12 9v6" stroke="white" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "TensorFlow",
      color: "hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.9v9.8L12 22 3.5 16.7V6.9L12 2z" stroke="#FF6F00" strokeWidth="2" />
          <path d="M12 5.5v11.5M7 12.5h10" stroke="#FF6F00" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "Git",
      color: "hover:border-orange-600 hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M2.3 12L12 2.3a1.5 1.5 0 0 1 2.1 0l7.6 7.6a1.5 1.5 0 0 1 0 2.1L12 21.7a1.5 1.5 0 0 1-2.1 0L2.3 14.1a1.5 1.5 0 0 1 0-2.1z" fill="#F05032" />
          <circle cx="12" cy="12" r="2.5" fill="white" />
          <circle cx="16" cy="10" r="1.5" fill="white" />
          <circle cx="8" cy="14" r="1.5" fill="white" />
          <path d="M8 14l4-2M12 12l4-2" stroke="white" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: "Figma",
      color: "hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M8 2c-1.66 0-3 1.34-3 3s1.34 3 3 3h3V2H8zm0 6c-1.66 0-3 1.34-3 3s1.34 3 3 3h3V8H8zm0 6c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.66 0 3-1.34 3-3v-3H8zm6-12c-1.66 0-3 1.34-3 3h3c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 6c-1.66 0-3 1.34-3 3s1.34 3 3 3h3V8h-3z" fill="#F24E1E" className="hidden" />
          {/* Custom Figma paths */}
          <path d="M8 5a3 3 0 000 6h3V5H8z" fill="#F24E1E" />
          <path d="M14 5a3 3 0 10-3 3h3V5z" fill="#A259FF" />
          <path d="M8 11a3 3 0 000 6h3v-6H8z" fill="#1ABC9C" />
          <path d="M14 11a3 3 0 10-3 3V11h3z" fill="#0ACF83" />
          <path d="M8 17a3 3 0 003 3v-3H8z" fill="#FF7262" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full">
      <h4 className="text-[10px] font-display font-bold tracking-widest text-purple-400 uppercase mb-4 text-center sm:text-left pl-1">
        Tech Stack
      </h4>
      
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
        {techList.map((tech, idx) => (
          <motion.div
            key={tech.name}
            id={`tech-logo-${tech.name.toLowerCase().replace(/\s/g, '-')}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -4 }}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-[#0a081e]/40 border border-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 ${tech.color}`}
          >
            {tech.svg}
            <span className="text-[9px] font-medium text-gray-400 mt-1.5 uppercase tracking-tighter">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
