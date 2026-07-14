/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Trophy, 
  Rocket, 
  Code, 
  Heart, 
  Cpu, 
  Briefcase, 
  BookOpen, 
  Award, 
  Star, 
  FileCheck, 
  Network, 
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  ExternalLink,
  Terminal,
  MapPin,
  Calendar,
  Layers,
  GraduationCap,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy,
  Rocket,
  Code,
  Heart,
  Cpu,
  Briefcase,
  BookOpen,
  Award,
  Star,
  FileCheck,
  Network,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  ExternalLink,
  Terminal,
  MapPin,
  Calendar,
  Layers,
  GraduationCap,
  Sparkles,
  Zap,
  Check
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  const IconComponent = iconMap[name] || HelpIcon;
  return <IconComponent className={className} size={size} />;
}

function HelpIcon({ className = '', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
