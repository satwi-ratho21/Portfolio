/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, AlertTriangle, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030014] to-[#010008]">
      {/* Background gradients for ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Initiate <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Comms</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3" />
          <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-widest">// Establish peer-to-peer link</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Comms brief info (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-lg font-bold font-display text-white">Let's build something epic together.</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  Whether you are looking to integrate machine learning workflows on edge devices, deploy redundant sensor pipelines, or simply want to chat about IoT innovation—my link is always open. Fill out the console fields or connect directly.
                </p>
              </div>

              {/* Directly Accessible Info */}
              <div className="space-y-3.5 pt-4">
                <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-white/2 border border-white/5 hover:border-cyan-500/25 transition-all">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-mono text-gray-500 uppercase">Primary Comms Channel</h5>
                    <p className="text-xs font-bold text-white font-mono mt-0.5">{portfolioOwner.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-white/2 border border-white/5 hover:border-purple-500/25 transition-all">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-mono text-gray-500 uppercase">Operational Base</h5>
                    <p className="text-xs font-bold text-white font-mono mt-0.5">India, APAC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote of Innovation */}
            <div className="p-4 rounded-xl bg-[#0a081e]/30 border border-purple-500/5 text-xs text-gray-400 font-mono italic">
              <span className="text-[#00f0ff] font-bold block mb-1">SYSTEM_NOTICE:</span>
              "Comms packets transit through encrypted channels and trigger immediate push notifications to my local development terminal."
            </div>
          </div>

          {/* Right Column: Console Form (Col span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-400/10 hover:border-cyan-400/25 transition-all duration-300 shadow-2xl relative h-full flex flex-col justify-between"
              id="contact-form-container"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-500 uppercase block">User Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Satya Nadella"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a081e]/50 border border-white/5 focus:outline-none focus:border-cyan-400/70 text-xs text-white transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-500 uppercase block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. satya@microsoft.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a081e]/50 border border-white/5 focus:outline-none focus:border-cyan-400/70 text-xs text-white transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-500 uppercase block">Subject Header</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Collaborative IoT Research Opportunity"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a081e]/50 border border-white/5 focus:outline-none focus:border-cyan-400/70 text-xs text-white transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-500 uppercase block">Message Payload *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details of your query or integration spec..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0a081e]/50 border border-white/5 focus:outline-none focus:border-cyan-400/70 text-xs text-white transition-all resize-none font-sans"
                  />
                </div>

                {/* Feedback notifications */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-400 flex items-center space-x-2"
                      id="contact-status-success"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0 animate-bounce" />
                      <span>Comms secure! Your message was submitted successfully to Satwi.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center space-x-2"
                      id="contact-status-error"
                    >
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>Input validation failure: Please complete all required fields.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-submit-contact"
                  className={`w-full py-3.5 rounded-lg border border-transparent font-display text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 relative overflow-hidden flex items-center justify-center space-x-2 cursor-pointer ${
                    isSubmitting ? 'opacity-80' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 hover:scale-[1.01]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting Comms...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
