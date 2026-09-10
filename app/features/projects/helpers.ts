import type { Project } from './types';
import { projectDefinitions } from './constants';

export function hasProjectSlug(slug: string) {
  return projectDefinitions.some((project) => project.slug === slug);
}

export function getProjectTechnologies(project: Project): string[] {
  return project.stack.flatMap((group) => group.items);
}
