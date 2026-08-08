import { projects } from './constants';

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
