/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Sparkles, X, ShieldAlert } from 'lucide-react';

const SCRIPT_TEXT = "Hello! I'm Satwi, an AI Engineer and Embedded Systems Developer passionate about building technology that creates real-world impact. From AI-powered career guidance platforms to innovative women's safety wearables and intelligent IoT systems, I enjoy transforming ideas into practical solutions. Feel free to explore my projects, achievements, and journey. Thank you for visiting my portfolio.";

export default function VoiceGreeting() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const resumeIntervalRef = useRef<number | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  // Load voices dynamically
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const synth = window.speechSynthesis;

    const loadVoices = () => {
      setVoices(synth.getVoices());
    };

    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }

    return () => {
      synth.cancel();
      if (resumeIntervalRef.current) {
        clearInterval(resumeIntervalRef.current);
      }
    };
  }, []);

  // Find the best available female voice
  const findFemaleVoice = (voiceList: SpeechSynthesisVoice[]) => {
    const priorityNames = [
      'samantha',         // macOS/iOS
      'google us english', // Chrome
      'zira',             // Windows
      'karen',            // Australia
      'moira',            // Ireland
      'tessa',            // South Africa
      'susan',            // UK
      'hazel',            // UK Windows
      'veena',            // India
      'female'
    ];

    const englishVoices = voiceList.filter(v => v.lang.startsWith('en'));
    
    for (const name of priorityNames) {
      const found = englishVoices.find(v => v.name.toLowerCase().includes(name));
      if (found) return found;
    }

    const genericFemale = englishVoices.find(v => v.name.toLowerCase().includes('female'));
    if (genericFemale) return genericFemale;

    if (englishVoices.length > 0) return englishVoices[0];
    return voiceList[0] || null;
  };

  // Speaks the greeting using fresh instantiation to prevent browser freeze bugs
  const speakGreeting = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const synth = window.speechSynthesis;
    
    // Clear any previous speaking & intervals
    synth.cancel();
    if (resumeIntervalRef.current) {
      clearInterval(resumeIntervalRef.current);
    }

    const currentVoices = synth.getVoices();
    const bestVoice = findFemaleVoice(currentVoices || voices);

    const utterance = new SpeechSynthesisUtterance(SCRIPT_TEXT);
    utterance.rate = 0.95; // Slightly slower, highly professional pace
    utterance.pitch = 1.05; // Friendly female pitch
    
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      isPlayingRef.current = true;
      setHasInteracted(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (resumeIntervalRef.current) {
        clearInterval(resumeIntervalRef.current);
      }
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis error:", e);
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (resumeIntervalRef.current) {
        clearInterval(resumeIntervalRef.current);
      }
    };

    // Chrome Bug Fix: Long speeches freeze/pause after 15 seconds. 
    // Periodically calling resume keeps the engine alive.
    resumeIntervalRef.current = window.setInterval(() => {
      if (synth.speaking && !synth.paused) {
        synth.pause();
        synth.resume();
      }
    }, 5000);

    synth.speak(utterance);
    setIsPlaying(true);
    isPlayingRef.current = true;
    setHasInteracted(true);
  };

  // Toggle voice playback manually from the toast
  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (resumeIntervalRef.current) {
        clearInterval(resumeIntervalRef.current);
      }
    } else {
      speakGreeting();
    }
  };

  // Attempt autoplay immediately as soon as voices are loaded/ready
  useEffect(() => {
    if (voices.length > 0 && !hasInteracted && !isPlayingRef.current) {
      speakGreeting();
    }
  }, [voices]);

  // Fallback interaction listener to guarantee trigger right as the page is viewed/scrolled/clicked
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlayingRef.current) {
        speakGreeting();
      }
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);

    return cleanup;
  }, [voices]);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-auto" id="voice-greeting-root">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="p-3.5 rounded-xl border border-cyan-500/20 bg-[#0a081e]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center space-x-3 max-w-[280px] sm:max-w-xs relative group"
          >
            {/* Ambient indicator glow */}
            <div className={`absolute -inset-px rounded-xl bg-gradient-to-r ${isPlaying ? 'from-cyan-500/20 to-purple-500/20 animate-pulse' : 'from-transparent to-transparent'} pointer-events-none`} />

            {/* Micro voice avatar representation */}
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 relative transition-all duration-300 ${
              isPlaying ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-gray-400'
            }`}>
              {isPlaying ? (
                <div className="flex items-end justify-center space-x-[2px] h-4 w-4">
                  <span className="w-[3px] bg-cyan-400 rounded-full animate-[bounce_0.8s_infinite_100ms] h-3" />
                  <span className="w-[3px] bg-cyan-400 rounded-full animate-[bounce_0.8s_infinite_200ms] h-4" />
                  <span className="w-[3px] bg-cyan-400 rounded-full animate-[bounce_0.8s_infinite_300ms] h-2.5" />
                </div>
              ) : (
                <Sparkles className="w-4.5 h-4.5 text-cyan-400" />
              )}
            </div>

            {/* Main Details */}
            <div className="flex-1 space-y-0.5 min-w-0">
              <span className="text-[9px] font-mono font-bold tracking-wider text-cyan-400 uppercase block">
                {isPlaying ? "Satwi's AI Voice" : "Welcome Greeting"}
              </span>
              <p className="text-[11px] text-gray-300 font-sans leading-tight truncate">
                {isPlaying ? "Speaking welcome brief..." : "Click to play voice intro"}
              </p>
            </div>

            {/* Play/Pause CTA */}
            <button
              onClick={toggleSpeech}
              id="btn-toggle-voice"
              className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isPlaying 
                  ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20' 
                  : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20'
              }`}
              title={isPlaying ? "Mute Greeting" : "Play Greeting"}
            >
              {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Dismiss toast */}
            <button
              onClick={() => setShowToast(false)}
              id="btn-dismiss-voice-toast"
              className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-black/60 border border-white/10 text-gray-400 hover:text-white hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
