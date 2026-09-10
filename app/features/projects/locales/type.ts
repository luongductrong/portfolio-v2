import type { ProjectId, ProjectTranslation } from '../types';

export type ProjectsI18n = {
  seo: {
    title: string;
    detailTitle: string;
    description: string;
  };
  gallery: {
    eyebrow: string;
    firstLine: string;
    secondLine: string;
    note: string;
    archive: string;
    count: string;
  };
  card: {
    viewLabel: string;
    technologies: string;
    viewCaseStudy: string;
  };
  statuses: {
    completed: string;
    inDevelopment: string;
    maintained: string;
    archived: string;
  };
  detail: {
    allProjects: string;
    liveDemo: string;
    sourceCode: string;
    quickHighlights: string;
    overview: string;
    objectives: string;
    features: string;
    challengesAndDecisions: string;
    challenge: string;
    decision: string;
    contribution: string;
    information: string;
    facts: string;
    role: string;
    timeline: string;
    team: string;
    platform: string;
    technologyStack: string;
    resources: string;
    readDocumentation: string;
  };
  media: {
    previewImage: string;
    showImage: string;
    thumbnails: string;
    dialogTitle: string;
    dialogDescription: string;
    previousImage: string;
    nextImage: string;
  };
  items: Record<ProjectId, ProjectTranslation>;
};
