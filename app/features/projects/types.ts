export type ProjectStatus = 'completed' | 'in-development' | 'maintained' | 'archived';
export type ProjectId = 'funnyCode' | 'reactFioriStyle' | 'game2048' | 'portfolioV2';

export interface ProjectImage {
  id: string;
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

export type ProjectImages = [ProjectImage, ProjectImage, ProjectImage, ProjectImage];

export interface ProjectMedia {
  cover: ProjectImage;
  images: ProjectImages;
}

export interface ProjectLinks {
  demo?: string;
  source?: string;
  documentation?: string;
}

export interface ProjectMetadata {
  role: string;
  timeline: string;
  status: ProjectStatus;
  teamSize?: string;
  platform?: string;
}

export interface ProjectStackGroup {
  label: string;
  items: string[];
}

export interface ProjectContentItem {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectOutcome {
  value: string;
  label: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  media: ProjectMedia;
  links: ProjectLinks;
  metadata: ProjectMetadata;
  stack: ProjectStackGroup[];
  overview: string[];
  objectives: ProjectContentItem[];
  features: ProjectContentItem[];
  responsibilities: string[];
  challenges: ProjectChallenge[];
  outcomes: ProjectOutcome[];
}

export type ProjectAssetImage = Omit<ProjectImage, 'alt' | 'caption'>;

export interface ProjectDefinition {
  id: ProjectId;
  slug: string;
  title: string;
  year: string;
  media: {
    cover: ProjectAssetImage;
    images: [ProjectAssetImage, ProjectAssetImage, ProjectAssetImage, ProjectAssetImage];
  };
  links: ProjectLinks;
  status: ProjectStatus;
  stack: Array<{ items: string[] }>;
}

export interface ProjectImageTranslation {
  alt: string;
  caption?: string;
}

export interface ProjectTranslation {
  summary: string;
  category: string;
  media: {
    cover: ProjectImageTranslation;
    images: [ProjectImageTranslation, ProjectImageTranslation, ProjectImageTranslation, ProjectImageTranslation];
  };
  metadata: Omit<ProjectMetadata, 'status'>;
  stackLabels: string[];
  overview: string[];
  objectives: ProjectContentItem[];
  features: ProjectContentItem[];
  responsibilities: string[];
  challenges: ProjectChallenge[];
  outcomes: ProjectOutcome[];
}
