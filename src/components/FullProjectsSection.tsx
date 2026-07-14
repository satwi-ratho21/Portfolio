/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Eye, Search, Layers } from 'lucide-react';
import { allProjects } from '../data';
import ProjectCard from './ProjectCard';

export default function FullProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'iot' | 'hardware'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'hardware', label: 'Hardware & Robotics' }
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030014]/30">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Innovative <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Ventures</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3" />
          <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-widest">// End-to-end engineered solutions</p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 pb-6 border-b border-white/5">
          {/* Filters */}
          <div className="flex flex-wrap gap-2" id="project-filters-container">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                id={`btn-proj-filter-${opt.id}`}
                onClick={() => setFilter(opt.id as any)}
                className={`px-4 py-2 rounded-lg border text-xs font-semibold uppercase tracking-wider font-display transition-all duration-200 cursor-pointer ${
                  filter === opt.id
                    ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-[#ec4899] text-white shadow-[0_0_15px_rgba(236,72,153,0.15)]'
                    : 'bg-[#0a081e]/30 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs" id="project-search-container">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0a081e]/40 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 font-sans"
            />
          </div>
        </div>

        {/* Projects Grid with Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="projects-all-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16" id="projects-empty-state">
            <Layers className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h4 className="text-sm font-bold text-gray-400">No projects match your current query</h4>
            <p className="text-xs text-gray-500 mt-1">Try adjusting your filters or resetting the search string</p>
            <button
              onClick={() => { setFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
