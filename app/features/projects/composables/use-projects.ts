import { projectDefinitions } from '../constants';
import type { Project, ProjectImages, ProjectTranslation } from '../types';

type MessageResolver = (message: unknown) => string;

function resolveMessageTree(value: unknown, rt: MessageResolver): unknown {
  if (typeof value === 'string') return rt(value);
  if (Array.isArray(value)) return value.map((item) => resolveMessageTree(item, rt));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveMessageTree(item, rt)]));
  }
  return value;
}

export function useProjects() {
  const { tm, rt } = useI18n();

  const projects = computed<Project[]>(() =>
    projectDefinitions.map((definition) => {
      const translation = resolveMessageTree(
        tm(`projects.items.${definition.id}`),
        rt as MessageResolver,
      ) as ProjectTranslation;

      return {
        slug: definition.slug,
        title: definition.title,
        summary: translation.summary,
        category: translation.category,
        year: definition.year,
        media: {
          cover: { ...definition.media.cover, ...translation.media.cover },
          images: definition.media.images.map((image, index) => ({
            ...image,
            ...translation.media.images[index],
          })) as ProjectImages,
        },
        links: definition.links,
        metadata: { ...translation.metadata, status: definition.status },
        stack: definition.stack.map((group, index) => ({
          label: translation.stackLabels[index] ?? '',
          items: group.items,
        })),
        overview: translation.overview,
        objectives: translation.objectives,
        features: translation.features,
        responsibilities: translation.responsibilities,
        challenges: translation.challenges,
        outcomes: translation.outcomes,
      };
    }),
  );

  function getProjectBySlug(slug: string) {
    return projects.value.find((project) => project.slug === slug);
  }

  return { projects, getProjectBySlug };
}
