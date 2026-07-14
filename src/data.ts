/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, TimelineItem, SkillItem, StatItem, Achievement, Certification } from './types';

export const portfolioOwner = {
  name: "Satwi",
  fullName: "Satwika Ratho (Satwi)",
  title: "AI Engineer | Embedded Systems Developer | Full Stack Developer | UI/UX Designer",
  tagline: "Building intelligent, scalable, and impactful solutions by combining Artificial Intelligence, Embedded Systems, and Modern Software.",
  about: "I am a passionate Electronics and Communication Engineering student with a strong interest in Artificial Intelligence, Embedded Systems, IoT, Full Stack Development, and UI/UX Design. I enjoy building innovative technology solutions that solve real-world problems in education, healthcare, women safety, and community development.\n\nI have experience in designing and developing AI-powered applications, embedded hardware systems, modern web applications, and interactive user interfaces. I actively participate in hackathons and innovation challenges, where I enjoy transforming ideas into working products.\n\nBeyond technical development, I have experience in leadership, project management, product design, PCB designing and fabrication, AI model training, and web deployment. I am also a classical dancer and enjoy combining creativity with technology.",
  resumeUrl: "#",
  email: "satwi033@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const stats: StatItem[] = [
  {
    id: "stat-1",
    label: "Hackathon Wins",
    value: "5× Wins",
    iconName: "Trophy",
    color: "from-amber-400 to-orange-500",
    description: "National & local competitions"
  },
  {
    id: "stat-2",
    label: "Projects Completed",
    value: "12+",
    iconName: "Rocket",
    color: "from-cyan-500 to-blue-500",
    description: "Deployed IoT & full-stack apps"
  },
  {
    id: "stat-3",
    label: "Core Specialization",
    value: "AI & IoT",
    iconName: "Cpu",
    color: "from-purple-500 to-pink-500",
    description: "Multi-disciplinary approach"
  },
  {
    id: "stat-4",
    label: "Active Leadership",
    value: "Lead",
    iconName: "Star",
    color: "from-violet-500 to-purple-600",
    description: "CRT Coordinator & Team Lead"
  }
];

export const timeline: TimelineItem[] = [
  {
    id: "time-1",
    year: "Jan 2024 - Present",
    role: "Core Team Lead & AI/IoT Developer",
    company: "Community Innovation Hub",
    description: "Directing project lifecycles for AI-powered career assistants and remote safety wearables. Training small-scale ML classifiers and designing prototype motherboards.",
    iconName: "Cpu",
    category: "projects"
  },
  {
    id: "time-2",
    year: "Jul 2023 - Dec 2023",
    role: "Industrial SCADA, PLC & PCB Intern",
    company: "APSSDC",
    description: "Gained hands-on expertise in SCADA monitoring networks, PLC automation routines, HMI interfacing, CNC operations, robotic arm kinematics, PCB design, fabrication, and industrial electrical basics.",
    iconName: "Briefcase",
    category: "internship"
  },
  {
    id: "time-3",
    year: "May 2022 - Jun 2022",
    role: "Signal & Telecom Intern",
    company: "Rail Vikas Nigam Limited (RVNL)",
    description: "Analyzed complex railway signaling systems, field telecommunication protocols, route relay interlocks, and telemetry transmission workflows under professional engineering guidance.",
    iconName: "Layers",
    category: "internship"
  },
  {
    id: "time-4",
    year: "Ongoing",
    role: "Freelance General Manager",
    company: "Bhoomata Real Estate",
    description: "Spearheading branding strategies, coordinating digital outreach campaigns, managing client engagement directories, and organizing operational workflows.",
    iconName: "Briefcase",
    category: "experience"
  },
  {
    id: "time-5",
    year: "2025",
    role: "Digital Marketing Associate",
    company: "Miss & Mrs. Universal India 2025",
    description: "Assisted in running end-to-end promotional social campaigns, developing online brand visibility assets, and coordinating public relations media outreach.",
    iconName: "Sparkles",
    category: "marketing"
  }
];

export const featuredProjects: Project[] = [
  {
    id: "proj-1",
    title: "Connect-Ed",
    description: "AI-powered Career Guidance Platform driving customized professional pathways for students.",
    longDescription: "An advanced, end-to-end AI platform built to guide students in their careers. It features intelligent resume parsing and analysis, dynamically detects skill gaps, recommends curated and personalized learning roadmaps, integrates an interactive AI mentoring companion, simulates smart mock interviews, and produces tailormade career recommendations.",
    image: "connect_ed",
    tags: ["React", "Node.js", "Firebase", "Gemini API", "Machine Learning"],
    category: "ai",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: "proj-2",
    title: "SheShield",
    description: "Wearable smart safety pendant designed for women, combining emergency SOS with vital checks.",
    longDescription: "A highly innovative, wearable safety device that protects and monitors women. Integrating an Arduino Nano with an HC-05 Bluetooth module, the system links seamlessly to a smartphone to offer instant Bluetooth SOS triggers, heart rate variability monitoring, automated panic alerts, manual SOS overrides, and health parameters checking.",
    image: "sheshield",
    tags: ["Arduino Nano", "HC-05 Bluetooth", "Embedded Systems", "Sensors"],
    category: "hardware",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: "proj-3",
    title: "Human Trafficking Prevention",
    description: "AI-assisted security platform combining community crowdsourcing and guardian warning logs.",
    longDescription: "A secure, smart reporting platform to help communities and guardians prevent human trafficking. Features intelligent report processing, comprehensive guardian dashboards for tracking alerts, real-time emergency communication broadcasts, and active community participation channels.",
    image: "human_trafficking",
    tags: ["AI/ML", "Web Platform", "Safety Tech", "Dashboard"],
    category: "ai",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  }
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: "proj-4",
    title: "Community AI & IoT Projects",
    description: "Designed and developed multiple AI, IoT, Embedded Systems, and automation projects.",
    longDescription: "A portfolio of various interactive engineering projects addressing local community needs, ranging from smart home automation sensors to intelligent sorting systems, customized agricultural monitors, and industrial microcontrollers.",
    image: "smart_automation",
    tags: ["IoT", "Embedded Systems", "Automation", "Real-world Impact"],
    category: "iot",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: "proj-5",
    title: "Gesture Controlled Robotic Arm",
    description: "An interactive, low-latency robotic arm driven by hand gestures via computer vision and ESP32.",
    longDescription: "Developed a robotic arm that mimics human arm gestures. Hand coordinates are captured via webcam using MediaPipe Hand Landmarker, processed in real-time, and sent via WebSockets/UDP to an ESP32 microcontroller that drives high-torque servo motors smoothly with PID feedback.",
    image: "robotic_arm",
    tags: ["Hardware", "Computer Vision", "ESP32"],
    category: "hardware",
    githubUrl: "https://github.com"
  },
  {
    id: "proj-6",
    title: "Autonomous Firefighting Rover",
    description: "An autonomous hardware rover equipped with flame sensors, thermal imaging, and carbon dioxide extinguishers.",
    longDescription: "A rugged robotic vehicle designed to locate and extinguish structural fires. Uses custom optical flame-sensing arrays and a micro thermal-vision camera to navigate autonomously. Equipped with a remote-controlled pump and specialized fire-suppression chemical dispersion modules.",
    image: "fire_rover",
    tags: ["Hardware", "Arduino", "Robotics"],
    category: "hardware",
    githubUrl: "https://github.com"
  }
];

export const skills: SkillItem[] = [
  // AI & ML
  { id: "s1", name: "Google Gemini API", category: "ai-ml", color: "from-[#00f0ff] to-cyan-500" },
  { id: "s2", name: "OpenAI API", category: "ai-ml", color: "from-purple-400 to-indigo-500" },
  { id: "s3", name: "TensorFlow", category: "ai-ml", color: "from-orange-400 to-amber-600" },
  { id: "s4", name: "Computer Vision", category: "ai-ml", color: "from-blue-500 to-purple-500" },
  { id: "s5", name: "Prompt Engineering", category: "ai-ml", color: "from-pink-400 to-rose-500" },
  { id: "s6", name: "Machine Learning", category: "ai-ml", color: "from-cyan-400 to-blue-600" },

  // Embedded & Hardware
  { id: "s7", name: "Arduino", category: "hardware", color: "from-teal-500 to-cyan-600" },
  { id: "s8", name: "ESP32", category: "hardware", color: "from-red-500 to-orange-500" },
  { id: "s9", name: "HC-05 Bluetooth Module", category: "hardware", color: "from-blue-400 to-purple-600" },
  { id: "s10", name: "Sensors & Actuators", category: "hardware", color: "from-cyan-400 to-teal-500" },
  { id: "s11", name: "Microcontrollers", category: "hardware", color: "from-purple-500 to-pink-500" },
  { id: "s12", name: "PCB Designing", category: "hardware", color: "from-emerald-400 to-teal-600" },

  // Languages
  { id: "s13", name: "Python", category: "languages", color: "from-yellow-400 to-blue-500" },
  { id: "s14", name: "Java", category: "languages", color: "from-red-500 to-red-700" },
  { id: "s15", name: "C", category: "languages", color: "from-blue-600 to-cyan-500" },
  { id: "s16", name: "C++", category: "languages", color: "from-blue-700 to-indigo-600" },
  { id: "s17", name: "JavaScript", category: "languages", color: "from-yellow-300 to-amber-500" },
  { id: "s18", name: "TypeScript", category: "languages", color: "from-blue-500 to-indigo-600" },

  // Web Frameworks
  { id: "s19", name: "React", category: "frameworks", color: "from-cyan-400 to-blue-500" },
  { id: "s20", name: "Next.js", category: "frameworks", color: "from-slate-700 to-slate-900" },
  { id: "s21", name: "Node.js", category: "frameworks", color: "from-green-400 to-emerald-600" },
  { id: "s22", name: "Firebase", category: "frameworks", color: "from-amber-400 to-orange-500" },
  { id: "s23", name: "MongoDB", category: "frameworks", color: "from-green-500 to-emerald-700" },
  { id: "s24", name: "Tailwind CSS", category: "frameworks", color: "from-cyan-400 to-teal-500" },

  // Tools & Platforms
  { id: "s25", name: "Figma", category: "tools", color: "from-pink-400 to-rose-500" },
  { id: "s26", name: "Canva", category: "tools", color: "from-blue-400 to-cyan-400" },
  { id: "s27", name: "Git & GitHub", category: "tools", color: "from-orange-600 to-red-500" },
  { id: "s28", name: "Google AI Studio", category: "tools", color: "from-[#00f0ff] to-cyan-600" },
  { id: "s29", name: "Tinkercad", category: "tools", color: "from-teal-400 to-emerald-500" },
  { id: "s30", name: "Vercel", category: "tools", color: "from-slate-800 to-black" }
];

export const achievements: Achievement[] = [
  {
    id: "a-1",
    title: "Google TechSprint On-Campus Hackathon Winner",
    issuer: "Google TechSprint Team",
    year: "2024",
    description: "Secured 1st prize for building an high-performance intelligent system solving critical community problems under Google mentor guidelines.",
    iconName: "Trophy"
  },
  {
    id: "a-2",
    title: "3rd Prize – Hogwarts Hackathon",
    issuer: "GVP College of Engineering",
    year: "2023",
    description: "Recognized for developing outstanding embedded hardware coupled with responsive web interfaces.",
    iconName: "Award"
  },
  {
    id: "a-3",
    title: "2nd Prize – Visakha College Hackathon",
    issuer: "Visakha College of Engineering",
    year: "2023",
    description: "Awarded for exceptional product design, system architecture, and rapid prototype implementation.",
    iconName: "Star"
  },
  {
    id: "a-4",
    title: "Top 4 Finalist – JNTU Vizianagaram Hackathon",
    issuer: "JNTU Vizianagaram",
    year: "2023",
    description: "Selected out of hundreds of technical teams for a full-featured real-world community monitoring application.",
    iconName: "Trophy"
  },
  {
    id: "a-5",
    title: "Runner-Up – Vignan TechFest Hardware Hackathon",
    issuer: "Vignan Group of Institutions",
    year: "2022",
    description: "Gained recognition for custom PCB design and embedded sensory controller execution.",
    iconName: "Cpu"
  }
];

export const certifications: Certification[] = [
  {
    id: "c-1",
    title: "Python for Data Science",
    provider: "NPTEL",
    year: "2023",
    credentialId: "NPTEL-PY-DATA-SCI",
    iconName: "FileCheck"
  },
  {
    id: "c-2",
    title: "Automation, Mechatronics, IoT & SCADA Basics",
    provider: "SIEMENS Centre, Andhra University",
    year: "2023",
    credentialId: "AU-SIEMENS-AUTO-101",
    iconName: "Cpu"
  },
  {
    id: "c-3",
    title: "Graphic Designing Basics",
    provider: "Youvah",
    year: "2022",
    credentialId: "YV-GRAPHIC-BAS",
    iconName: "Award"
  },
  {
    id: "c-4",
    title: "Summer Internship (Signal & Telecom)",
    provider: "RVNL",
    year: "2022",
    credentialId: "RVNL-ST-INTERN",
    iconName: "BookOpen"
  },
  {
    id: "c-5",
    title: "Hackathon Excellence Credentials",
    provider: "Various Institutions",
    year: "2022 - 2024",
    credentialId: "HACK-EXCELLENCE-MULTIPLE",
    iconName: "ShieldCheck"
  }
];
