import { Project, TimelineItem, SkillItem, StatItem, Achievement, Certification } from './types';

export const portfolioOwner = {
  name: "Satwi",
  fullName: "Satwika Ratho (Satwi)",
  title: "AI Engineer | Embedded Systems Developer | Full Stack Developer | UI/UX Designer",
  tagline: "Building intelligent, scalable, and impactful solutions by combining Artificial Intelligence, Embedded Systems, and Modern Software.",
  about: "I am a passionate Electronics and Communication Engineering student with a strong interest in Artificial Intelligence, Embedded Systems, IoT, Full Stack Development, and UI/UX Design. I enjoy building innovative technology solutions that solve real-world problems in education, healthcare, women safety, and community development.\n\nI have experience in designing and developing AI-powered applications, embedded hardware systems, modern web applications, and interactive user interfaces. I actively participate in hackathons and innovation challenges, where I enjoy transforming ideas into working products.\n\nBeyond technical development, I have experience in leadership, project management, product design, PCB designing and fabrication, AI model training, and web deployment. I am also a classical dancer and enjoy combining creativity with technology.",
  resumeUrl: "/resume.png",
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
    id: "time-3",
    year: "May 2026 - Jul 2026",
    role: "Signal & Telecom Intern",
    company: "Rail Vikas Nigam Limited (RVNL)",
    description: "Worked on railway signalling and telecommunication systems. Gained practical exposure to communication infrastructure and field engineering. Learned industrial workflows and technical documentation.",
    iconName: "Layers",
    category: "internship"
  },
  {
    id: "time-freelance-ai",
    year: "2025 - Present",
    role: "Freelance AI/ML Projects Developer",
    company: "Self-Employed",
    description: "Designing, training, and deploying customized AI models, computer vision systems, smart automation platforms, and generative AI features utilizing modern software APIs.",
    iconName: "Sparkles",
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
    description: "An interactive educational platform designed to bridge the gap between multinational corporations (MNCs) and engineering students.",
    longDescription: "An innovative, comprehensive EdTech platform built to bridge the gap between corporate giants (MNCs) and engineering colleges/students. Connect-Ed facilitates modern skill mapping, industry-aligned career preparation, direct corporate mentoring channels, and interactive modules that connect tech recruiters directly with student talent.",
    image: "connect_ed",
    tags: ["React", "Node.js", "Firebase", "EdTech", "Career Bridging"],
    category: "web",
    githubUrl: "https://github.com",
    demoUrl: "https://connect-ed-orcin.vercel.app/",
    highlights: [
      "Bridges the gap between MNCs & engineering students",
      "Industry-standard mock tests & assessment modules",
      "Direct technical skill mapping with recruiter guidelines",
      "Personalized learning roadmaps & career resources"
    ]
  },
  {
    id: "proj-2",
    title: "SheShield: A Maternal Safety Pendent",
    description: "An IoT-enabled wearable smart safety pendent designed for maternal and women's health monitoring with emergency SOS systems.",
    longDescription: "A comprehensive IoT hardware solution featuring an Arduino Nano, HC-05 Bluetooth transceiver, and specialized bio-sensors designed for maternal health tracking and emergency distress response. SheShield connects to mobile companion apps to dispatch automated geolocation alerts, sound panic buzzers, and monitor real-time heart rate and temperature vitals.",
    image: "sheshield",
    tags: ["Arduino Nano", "HC-05 Bluetooth", "IoT Hardware", "Maternal Care", "Bio-Sensors"],
    category: "hardware",
    githubUrl: "https://github.com/satwi-ratho21/SheShield-A-Maternal-Safety-Pendent",
    demoUrl: "https://github.com/satwi-ratho21/SheShield-A-Maternal-Safety-Pendent",
    highlights: [
      "Integrated maternal vital monitoring (Heart Rate, Temperature)",
      "Auto-triggering SOS and instant GPS geolocation dispatch",
      "Robust Arduino Nano & HC-05 Bluetooth peer-to-peer transmission",
      "Optimized low-power firmware with buzzer alarm feedback"
    ]
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
    demoUrl: "https://example.com",
    highlights: [
      "Intelligent text processing & community report extraction",
      "Guardian alert monitoring and notification logs",
      "Secure database architecture keeping reporter anonymity",
      "Real-time active community alert broadcasts"
    ]
  }
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: "proj-5",
    title: "Gesture Controlled Robotic Arm",
    description: "An interactive, low-latency robotic arm driven by hand gestures via computer vision and ESP32.",
    longDescription: "Developed a robotic arm that mimics human arm gestures. Hand coordinates are captured via webcam using MediaPipe Hand Landmarker, processed in real-time, and sent via WebSockets/UDP to an ESP32 microcontroller that drives high-torque servo motors smoothly with PID feedback.",
    image: "robotic_arm",
    tags: ["Hardware", "Computer Vision", "ESP32"],
    category: "hardware",
    githubUrl: "https://github.com"
  }
];

export const skills: SkillItem[] = [
  // AI & ML (AI-Native & Vibe Coding Core)
  { id: "s1", name: "Multimodal LLM APIs & SDKs", category: "ai-ml", color: "from-[#00f0ff] to-cyan-500" },
  { id: "s2", name: "Prompt Engineering & AI Agents", category: "ai-ml", color: "from-purple-400 to-indigo-500" },
  { id: "s3", name: "LLM Orchestration & GenAI Pipelines", category: "ai-ml", color: "from-pink-400 to-rose-500" },
  { id: "s4", name: "Computer Vision (OpenCV & MediaPipe)", category: "ai-ml", color: "from-blue-500 to-purple-500" },
  { id: "s5", name: "OpenAI & Multi-Model Integration", category: "ai-ml", color: "from-cyan-400 to-blue-600" },
  { id: "s6", name: "TensorFlow & Model Inference", category: "ai-ml", color: "from-orange-400 to-amber-600" },

  // Embedded & Hardware
  { id: "s7", name: "Arduino & Microcontrollers", category: "hardware", color: "from-teal-500 to-cyan-600" },
  { id: "s8", name: "ESP32 & Wireless IoT", category: "hardware", color: "from-red-500 to-orange-500" },
  { id: "s9", name: "HC-05 Bluetooth & Telemetry", category: "hardware", color: "from-blue-400 to-purple-600" },
  { id: "s10", name: "Sensors & Actuators Interfacing", category: "hardware", color: "from-cyan-400 to-teal-500" },
  { id: "s11", name: "PCB Design & KiCad Fabrication", category: "hardware", color: "from-emerald-400 to-teal-600" },
  { id: "s12", name: "SCADA & Industrial Automation", category: "hardware", color: "from-purple-500 to-pink-500" },

  // Languages
  { id: "s13", name: "Python (AI & Data)", category: "languages", color: "from-yellow-400 to-blue-500" },
  { id: "s14", name: "TypeScript", category: "languages", color: "from-blue-500 to-indigo-600" },
  { id: "s15", name: "JavaScript (ES6+ Modern)", category: "languages", color: "from-yellow-300 to-amber-500" },
  { id: "s16", name: "C / C++ (Embedded)", category: "languages", color: "from-blue-600 to-cyan-500" },
  { id: "s17", name: "Java", category: "languages", color: "from-red-500 to-red-700" },
  { id: "s18", name: "HTML5 & CSS3 Syntax", category: "languages", color: "from-teal-400 to-cyan-500" },

  // Web Frameworks
  { id: "s19", name: "React 18 & Vite", category: "frameworks", color: "from-cyan-400 to-blue-500" },
  { id: "s20", name: "Next.js & App Router", category: "frameworks", color: "from-slate-700 to-slate-900" },
  { id: "s21", name: "Node.js & Express APIs", category: "frameworks", color: "from-green-400 to-emerald-600" },
  { id: "s22", name: "Firebase & Firestore Realtime", category: "frameworks", color: "from-amber-400 to-orange-500" },
  { id: "s23", name: "Tailwind CSS & Framer Motion", category: "frameworks", color: "from-cyan-400 to-teal-500" },
  { id: "s24", name: "REST APIs & Modern Web Stack", category: "frameworks", color: "from-green-500 to-emerald-700" },

  // Tools & Platforms
  { id: "s25", name: "Cursor & AI Coding Assistants", category: "tools", color: "from-pink-400 to-rose-500" },
  { id: "s26", name: "VS Code & Cloud Workspaces", category: "tools", color: "from-[#00f0ff] to-cyan-600" },
  { id: "s27", name: "Git & GitHub Version Control", category: "tools", color: "from-orange-600 to-red-500" },
  { id: "s28", name: "Figma & UI/UX Prototyping", category: "tools", color: "from-purple-400 to-pink-500" },
  { id: "s29", name: "Vercel & Cloud Deployment", category: "tools", color: "from-slate-800 to-black" },
  { id: "s30", name: "Postman & API Testing", category: "tools", color: "from-orange-500 to-amber-600" }
];

export const achievements: Achievement[] = [
  {
    id: "a-1",
    title: "Google TechSprint On-Campus Hackathon Winner",
    issuer: "Google TechSprint Team",
    year: "2026",
    description: "Secured 1st prize for building an high-performance intelligent system solving critical community problems under Google mentor guidelines.",
    iconName: "Trophy"
  },
  {
    id: "a-2",
    title: "3rd Prize – Hogwarts Hackathon",
    issuer: "GVP College of Engineering",
    year: "2025",
    description: "Recognized for developing outstanding embedded hardware coupled with responsive web interfaces.",
    iconName: "Award"
  },
  {
    id: "a-3",
    title: "2nd Prize – Visakha College Hackathon",
    issuer: "Visakha College of Engineering",
    year: "2026",
    description: "Awarded for exceptional product design, system architecture, and rapid prototype implementation.",
    iconName: "Star"
  },
  {
    id: "a-4",
    title: "Top 4 Finalist – JNTU Vizianagaram Hackathon",
    issuer: "JNTU Vizianagaram",
    year: "2025",
    description: "Selected out of hundreds of technical teams for a full-featured real-world community monitoring application.",
    iconName: "Trophy"
  },
  {
    id: "a-5",
    title: "Runner-Up – Vignan TechFest Hardware Hackathon",
    issuer: "Vignan Group of Institutions",
    year: "2025",
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
    year: "2026",
    credentialId: "RVNL-ST-INTERN",
    iconName: "BookOpen"
  },
  {
    id: "c-5",
    title: "Hackathon Excellence Credentials",
    provider: "Various Institutions",
    year: "2025 - Present",
    credentialId: "HACK-EXCELLENCE-MULTIPLE",
    iconName: "ShieldCheck"
  }
];
