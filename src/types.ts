export type MediaFormat = 'image' | 'video';

export interface ProjectMedia {
  type: MediaFormat;
  url: string;
  poster?: string;
  caption?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  filterTag: 'social' | 'content' | 'influencer' | 'creative' | 'seo';
  description: string;
  longDescription: string;
  deliverables: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  theme: 'dark' | 'light' | 'sand' | 'warm';
  media: ProjectMedia;
  secondaryMedia?: ProjectMedia[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface StatItem {
  number: string;
  label: string;
  detail: string;
}
