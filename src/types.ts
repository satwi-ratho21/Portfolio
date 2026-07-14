/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  category: 'ai' | 'iot' | 'web' | 'hardware';
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  iconName: string;
  category: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'frameworks' | 'hardware' | 'tools' | 'ai-ml';
  iconUrl?: string; // or lucide name
  color: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  iconName: string;
  color: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  year: string;
  credentialId?: string;
  url?: string;
  iconName: string;
}
