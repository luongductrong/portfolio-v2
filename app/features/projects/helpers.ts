import { projects } from './constants';
import type { Project, ProjectStatus } from './types';

export const projectStatusLabels: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-development': 'In development',
  maintained: 'Actively maintained',
  archived: 'Archived',
};

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectTechnologies(project: Project): string[] {
  return project.stack.flatMap((group) => group.items);
}
