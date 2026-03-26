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
  category: "featured-game" | "game-jam" | "miscellaneous";
  techStack: string[];
  duration?: string;
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
  bio: "I'm a game development student from Helsinki, Finland. Currently studying Bachelor of Engineering at Metropolia UAS, majoring in Video Game Development. I like to challenge myself to learn new things.",
  resumeUrl: "/CV_Anton_Iljina.pdf",
};

export const projects: Project[] = [
  {
    id: "featured-game-1",
    title: "Chess Engine - 2026",
    description:
      "A C++ chess engine built from scratch. Implemented minimax with alpha-beta pruning, move ordering, and PeSTO move tables.",
    media: "/projects/chess-engine.gif",
    mediaType: "image",
    category: "featured-game",
    techStack: ["C++", "Algorithms", "Optimization", "Data Structures"],
    duration: "2 months",
    githubUrl: "https://github.com/skillzz123jj/Chessbot",
  },
  {
    id: "featured-game-2",
    title: "Guess The Date - 2025",
    description:
      "A web-based geography game where players guess the date and locations of historical events. Built with a Python backend and a JavaScript frontend, utilizing Leaflet for interactive maps.",
    media: "/projects/guessthedate.gif",
    mediaType: "gif",
    category: "featured-game",
    techStack: ["Javascript", "Python Backend", "SQL", "Leaflet"],
    duration: "2 months",
    githubUrl: "https://github.com/RainbowFrogi/Date_Guesser",
  },
  {
    id: "featured-game-3",
    title: "Tap Matchers - 2022",
    description:
      "A candy crush style game where you need to tap matching sections of same colors. Made as a proof of skill for Rovio Entertainment. No AI was used in the developmnet of this game.",
    media: "/projects/tap-matchers.mp4",
    mediaType: "video",
    category: "featured-game",
    techStack: ["C#", "Unity", "Algorithms"],
    duration: "1 week",
    githubUrl: "https://github.com/skillzz123jj/Chessbot",
  },
  {
    id: "game-jam-1",
    title: "Spellsinger - 2025",
    description:
      "A writing game where you battle Kalevala style monsters by crafting poems that hurt your enemies the most.",
    media: "/projects/spellsinger.png",
    mediaType: "image",
    category: "game-jam",
    duration: "48-hour game jam",
    techStack: ["Unity", "C#"],
    githubUrl: "https://github.com/Aaroh4/FGJ2025",
    itchUrl: "https://rainbowfrogfin.itch.io/spellsinger"
  },
  {
    id: "game-jam-2",
    title: "Esa's Great Escape - 2025",
    description:
      "A side-scrolling fast paced puzzle game, where Esa's spacestation has exploded and he needs to collect all the parts he needs for his way back to Earth.",
    media: "/projects/EsasGreatEscape.gif",
    mediaType: "gif",
    category: "game-jam",
    duration: "48-hour game jam",
    techStack: ["Unity", "C#", "Git"],
    githubUrl: "https://github.com/skillzz123jj/Spaceship-Game-Jam",
    itchUrl: "https://igor-vossotski.itch.io/esas-great-escape",
  },
    {
    id: "game-jam-3",
    title: "Masks Please - 2026",
    description:
      "A papers please style game where at the start of every day you are given new rules to follow on which masks you let in and which you turn away. The game gets more and more difficult as you progress as you work under time pressure and there are more rules to follow.",
    media: "/projects/masks-please.gif",
    mediaType: "gif",
    category: "game-jam",
    duration: "48-hour game jam",
    techStack: ["Unity", "C#", "AI"],
    githubUrl: "https://github.com/RainbowFrogi/MaskBouncer",
    liveUrl: "https://rainbowfrogfin.itch.io/masks-please",
  },
  {
    id: "miscellaneous-1",
    title: "HRV(Heart Rate Variability) Monitor - 2025",
    description:
      "A Python application that connects to a heart rate monitor and visualizes the heart rate variability in real time. Used ",
    media: "/projects/hrv-monitor.jpg",
    mediaType: "image",
    category: "miscellaneous",
    techStack: ["MicroPython", "Sensor Integration", "Kubios", "Raspberry Pi"],
    githubUrl: "https://github.com/RainbowFrogi/HRV_Monitor_project",
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
  "DirectX",
  "3D Modeling",
  "Linux",
  "Jira",
];

export const experience: TimelineEntry[] = [
    {
    id: "exp-1",
    date: "Jul 2023 — Mar 2024",
    title: "Research Assistant",
    organization: "Finnish Defence Forces - Naval Academy",
    location: "Finland",
    description:
      "Served during military service as a research assistant working with simulation tools, Python, and Lua.",
  },
  {
    id: "exp-2",
    date: "Jan 2023 — May 2023",
    title: "Angry Birds Friends Developer Intern",
    organization: "Rovio Entertainment — Angry Birds Friends Team",
    location: "Espoo, Finland",
    description:
      "Contributed to the live-ops development of Angry Birds Friends. Fixed bugs and implemented new UX solutions within a large multilingual team.",
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
    title: "Volunteering in Finnish Games Industry",
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
