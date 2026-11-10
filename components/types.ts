export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "Flagship" | "Full-Stack" | "Hardware / AI" | "Frontend & UI";
  status: "In Active Development" | "Live Application" | "Completed" | "Prototype";
  featured: boolean;
  bentoSpan?: string;
  description: string;
  fullOverview: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: {
    label: string;
    value: string;
  }[];
  accentColor: string;
  glowColor: string;
  interactiveType?: "piksy-cart" | "mess-calc" | "voice-demo" | "fashion-preview" | "food-portal";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    description?: string;
  }[];
}

