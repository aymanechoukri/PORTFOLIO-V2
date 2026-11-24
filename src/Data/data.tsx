export type SkillType = {
  name: string;
  icon: string;
  category: string;
  learning?: boolean;
};

export const Skills: SkillType[] = [
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", category: "Frontend" },
  { name: "Responsive Web Design", icon: "📱", category: "Frontend" },
  { name: "Front-End Development", icon: "🧩", category: "Frontend" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
  { name: "Express.js", icon: "🚂", category: "Backend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Databases" },
  { name: "SQL", icon: "🗃️", category: "Currently Learning", learning: true },
  { name: "PHP", icon: "🐘", category: "Currently Learning", learning: true },
  { name: "Laravel", icon: "🔺", category: "Currently Learning", learning: true },
  { name: "Git", icon: "🔀", category: "Tools & Workflow" },
  { name: "GitHub", icon: "🐙", category: "Tools & Workflow" },
  { name: "Jira", icon: "📋", category: "Tools & Workflow" },
  { name: "Figma", icon: "🎨", category: "Tools & Workflow" },
  { name: "French", icon: "🇫🇷", category: "Languages" },
];

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  symbol: string;
  category: string;
  accent: string;
  repoUrl: string;
  liveUrl?: string;
  secondaryRepoUrl?: string;
  secondaryLiveUrl?: string;
};

export const Projects: ProjectType[] = [
  {
    id: 1,
    title: "Internship Platform",
    description:
      "A two-sided internship platform concept with student and employer dashboards, internship discovery, application workflows, and a separate Express/MongoDB backend API.",
    stack: ["React", "React Router", "Vite", "Tailwind CSS", "Express.js", "MongoDB"],
    symbol: "IP",
    category: "Full-Stack Project",
    accent: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
    repoUrl: "https://github.com/aymanechoukri/internship-platform-frontend",
    liveUrl: "https://internship-platform-frontend-five.vercel.app",
    secondaryRepoUrl: "https://github.com/aymanechoukri/internship-platform-backend",
    secondaryLiveUrl: "https://internship-platform-backend.vercel.app",
  },
  {
    id: 2,
    title: "Stream Flex",
    description:
      "A responsive movie discovery app with trending, popular and top-rated titles, debounced search, movie details, and a personal favourites list powered by TMDB.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
    symbol: "SF",
    category: "Movie Discovery",
    accent: "from-rose-500/30 via-red-500/20 to-orange-500/30",
    repoUrl: "https://github.com/aymanechoukri/NETFIX-CLONE",
    liveUrl: "https://clone-netmovis.vercel.app/",
  },
  {
    id: 3,
    title: "DevScope",
    description:
      "A recruiter-focused GitHub developer explorer. Search developer profiles, inspect public repositories, filter by language, and manage a shortlist of candidates.",
    stack: ["JavaScript", "HTML5", "Tailwind CSS", "GitHub REST API", "MockAPI"],
    symbol: "DS",
    category: "API Integration",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30",
    repoUrl: "https://github.com/aymanechoukri/DevScope",
    liveUrl: "https://dev-scope-plum.vercel.app",
  },
  {
    id: 4,
    title: "Tachkila — Atlas FC",
    description:
      "A football squad manager for adding players, organizing a team lineup, and preparing a 4-4-2 composition, with browser storage for saved data.",
    stack: ["JavaScript", "HTML5", "Tailwind CSS", "LocalStorage"],
    symbol: "FC",
    category: "Interactive Web App",
    accent: "from-emerald-500/30 via-teal-500/20 to-lime-500/30",
    repoUrl: "https://github.com/aymanechoukri/Tachkila-v2-Effectif-Matchs",
    liveUrl: "https://tachkila-v2-effectif-matchs.vercel.app",
  },
  {
    id: 5,
    title: "Photography Client Portfolio",
    description:
      "A responsive client portfolio for photography and videography, featuring an editorial image gallery, service sections, mobile navigation, and direct contact links.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    symbol: "PH",
    category: "Client Website",
    accent: "from-amber-500/30 via-orange-500/20 to-pink-500/30",
    repoUrl: "https://github.com/aymanechoukri/photography-client-portfolio",
    liveUrl: "https://oussamakajja.netlify.app/",
  },
  {
    id: 6,
    title: "BMW Showcase Store",
    description:
      "A responsive BMW showcase with model filtering, an interactive vehicle slider, and a shopping cart that keeps its state in LocalStorage.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    symbol: "BMW",
    category: "E-commerce UI",
    accent: "from-sky-500/30 via-blue-500/20 to-slate-400/30",
    repoUrl: "https://github.com/aymanechoukri/Market-Cars",
  },
];
