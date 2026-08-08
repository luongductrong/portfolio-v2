export type ProjectGoalIcon = 'performance' | 'scalability' | 'reliability';

export interface ProjectGoal {
  title: string;
  description: string;
  icon: ProjectGoalIcon;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  coverImage: string;
  heroImage?: string;
  imageAlt: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
  overview: string[];
  goals: ProjectGoal[];
  challenge: ProjectChallenge;
  role: string;
  timeline: string;
  status: string;
}
