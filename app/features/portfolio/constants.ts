import type { Component } from 'vue';
import { BriefcaseBusiness, Code2, GraduationCap } from '@lucide/vue';

export type MilestoneId = 'education' | 'internship' | 'developer';

interface Milestone {
  id: MilestoneId;
  icon: Component;
}

// @export
export const milestones: Milestone[] = [
  {
    id: 'education',
    icon: GraduationCap,
  },
  {
    id: 'internship',
    icon: BriefcaseBusiness,
  },
  {
    id: 'developer',
    icon: Code2,
  },
];
