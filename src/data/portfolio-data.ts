// ============================================================================
// PORTFOLIO DATA — Edit this file to update your portfolio content.
// ============================================================================

export interface SocialLink {
  platform: string;
  url: string;
}

export interface IntroData {
  name: string;
  title: string;
  bio: string;
  resumeUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  media: string;
  mediaType: "video" | "gif" | "image";
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  itchUrl?: string;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/RainbowFrogi",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/anton-iljina",
  },
];

export const introData: IntroData = {
  name: "Anton Iljina",
  title: "Game Developer",
  bio: "I'm a game development student from Helsinki, Finland. Currently studying Information Technology at Metropolia UAS, majoring in Video Game Development. I like building immersive game experiences and challenging myself to learn new things.",
  resumeUrl: "/resume.pdf",
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Neon Drift",
    description:
      "A high-speed arcade racer set in a cyberpunk city. Features procedural track generation and online leaderboards.",
    media: "/projects/neon-drift.mp4",
    mediaType: "video",
    techStack: ["Unity", "C#", "Shader Graph", "Blender"],
    githubUrl: "https://github.com/RainbowFrogi/neon-drift",
  },
  {
    id: "project-2",
    title: "Hollow Depths",
    description:
      "A 2D metroidvania with hand-drawn art and tight combat mechanics. Explore a vast underground world.",
    media: "/projects/hollow-depths.mp4",
    mediaType: "video",
    techStack: ["Unity", "C#", "Aseprite"],
    githubUrl: "https://github.com/RainbowFrogi/hollow-depths",
  },
  {
    id: "project-3",
    title: "Starforge",
    description:
      "A real-time strategy game where you build and command a fleet of starships across procedurally generated galaxies.",
    media: "/projects/starforge.mp4",
    mediaType: "video",
    techStack: ["Unity", "C#", "SQLite"],
    githubUrl: "https://github.com/RainbowFrogi/starforge",
  },
  {
    id: "project-4",
    title: "Liminal Loop",
    description:
      "A first-person psychological horror experience. Navigate impossible architecture and uncover the mystery.",
    media: "/projects/liminal-loop.mp4",
    mediaType: "video",
    techStack: ["Unity", "C#", "Blender"],
    githubUrl: "https://github.com/RainbowFrogi/liminal-loop",
  },
];

export const skills: string[] = [
  "C#",
  "Unity",
  "Python",
  "Lua",
  "JavaScript",
  "HTML / CSS",
  "SQL",
  "Git",
  "Blender",
  "Game Design",
  "Linux",
  "Jira",
];

export const experience: TimelineEntry[] = [
  {
    id: "exp-1",
    date: "Jan 2023 — May 2023",
    title: "Game Developer",
    organization: "Rovio Entertainment — Angry Birds Friends Team",
    location: "Espoo, Finland",
    description:
      "Contributed to the live-ops development of Angry Birds Friends. Fixed bugs and implemented new UX solutions within a large multilingual team.",
  },
  {
    id: "exp-2",
    date: "Jul 2023 — Mar 2024",
    title: "Research Assistant",
    organization: "Finnish Defence Forces (Merisotakoulu)",
    location: "Finland",
    description:
      "Served during military service as a research assistant working with simulation tools, Python, and Lua.",
  },
  {
    id: "exp-3",
    date: "Jan 2021 — Mar 2021",
    title: "Technical Support Engineer Intern",
    organization: "Gigantti Forum",
    location: "Helsinki, Finland",
    description:
      "Provided technical support to customers, troubleshooting hardware and software issues.",
  },
  {
    id: "exp-4",
    date: "2023 — Present",
    title: "Volunteer",
    organization: "IGDA Finland",
    location: "Helsinki, Finland",
    description:
      "Active volunteer in the Finnish games industry community, attending events and building professional connections.",
  },
];

export const education: TimelineEntry[] = [
  {
    id: "edu-1",
    date: "2024 — Present",
    title: "B.Eng. Information Technology",
    organization: "Metropolia University of Applied Sciences",
    location: "Helsinki, Finland",
    description:
      "Majoring in Video Game Development. Studying game design, engine programming, and interactive systems.",
  },
  {
    id: "edu-2",
    date: "2020 — 2023",
    title: "Vocational Qualification in ICT — Game Development",
    organization: "Helsinki Business College",
    location: "Helsinki, Finland",
    description:
      "Three-year programme focused on game development. Learned Unity, C#, Git, and SQLite. Completed 5 game projects.",
  },
];

export const contactInfo: ContactInfo = {
  email: "anton.iljina@outlook.com",
  location: "Helsinki, Finland",
};
