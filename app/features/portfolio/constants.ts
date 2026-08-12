import type { Component } from 'vue';
import { BriefcaseBusiness, Code2, GraduationCap } from '@lucide/vue';

interface Milestone {
  period: string;
  title: string;
  organization: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
  icon: Component;
}

// @export
export const milestones: Milestone[] = [
  {
    period: 'Oct 2022 - Jun 2026',
    title: 'Bachelor of Information Technology',
    organization: 'FPT University',
    location: 'Ho Chi Minh City, Viet Nam',
    status: 'Graduated',
    description:
      'Focused on Software Engineering fundamentals, product thinking, and building reliable application workflows from idea to delivery.',
    highlights: ['Software Engineering', 'Degree Classification: Very Good', 'GPA 8.11/10'],
    icon: GraduationCap,
  },
  {
    period: 'Jan 2025 - Apr 2025',
    title: 'SAP Intern',
    organization: 'FPT Software',
    location: 'Ho Chi Minh City, Viet Nam',
    status: 'Internship',
    description:
      'Contributed to enterprise software delivery, learned SAP project practices, and sharpened collaboration skills within a production-focused team.',
    highlights: ['ABAP', 'SAP ecosystem', 'Enterprise workflow'],
    icon: BriefcaseBusiness,
  },
  {
    period: 'Apr 2025 - Present',
    title: 'Front-end Developer',
    organization: 'FTES',
    location: 'Remote / Ho Chi Minh City, Viet Nam',
    status: 'Current',
    description: 'Building responsive interfaces, reusable UI components, and polished user flows for modern web products.',
    highlights: ['React & Next.js', 'Design systems', 'Frontend architecture'],
    icon: Code2,
  },
];
