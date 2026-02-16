
export interface Project {
  title: string;
  description: string;
  tools: string[];
  metrics?: string;
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

export interface Internship {
  role: string;
  company: string;
  period: string;
  description: string; // High-level role summary
  achievements: string[]; // STAR method bullet points
}

export interface Course {
  name: string;
  platform: string;
  duration?: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    gpa: string;
  };
  internships: Internship[];
  projects: Project[];
  skillGroups: SkillGroup[];
  courses: Course[];
  languages: {
    language: string;
    level: string;
  }[];
}
