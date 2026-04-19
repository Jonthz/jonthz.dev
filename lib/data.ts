export type RoleType = "work" | "research" | "community";

export const now: { role: string; org: string; type: RoleType }[] = [
  { role: "Freelance Android Developer", org: "Broadnet S.A.", type: "work" },
  {
    role: "Deep Learning Researcher",
    org: "Computational Neuroimaging · Vision Transformers · ABIDE",
    type: "research",
  },
  {
    role: "Treasurer & Chapter Leader",
    org: "IEEE CIS ESPOL",
    type: "community",
  },
];

export const skillGroups = [
  { label: "Languages", skills: ["Python", "Java", "JavaScript", "R"] },
  {
    label: "AI & Deep Learning",
    skills: ["PyTorch", "Vision Transformers", "NLP", "Hugging Face"],
  },
  {
    label: "Dev & Web",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Android Studio",
      "Docker",
      "MySQL",
      "SQLite",
    ],
  },
];

export type ProjectStatus = "shipped" | "pitched";

export const projects: {
  id: string;
  name: string;
  tag: string;
  desc: string;
  tech: string[];
  status: ProjectStatus;
}[] = [
  {
    id: "cosmoview",
    name: "CosmoView",
    tag: "🥈 NASA Space Apps 2025",
    desc: "Exoplanet classification model trained on Kepler/TESS light curve data. Placed 2nd at NASA Space Apps Challenge Guayaquil.",
    tech: ["Python", "PyTorch", "Astronomy Data"],
    status: "shipped",
  },
  {
    id: "manglarwatch",
    name: "ManglarWatch",
    tag: "SpaceHACK 2026 · ASU",
    desc: "Coastal mangrove ecosystem monitoring concept using Sentinel-2 & CHIRPS satellite data for real-time degradation detection.",
    tech: ["Sentinel-2", "CHIRPS", "Remote Sensing", "GIS"],
    status: "pitched",
  },
];

export const research = [
  {
    title: "Bibliometric Analysis of AI Applied to Health Research",
    venue: "IEEE Xplore",
    date: "July 2025",
    role: "Co-author",
    desc: "Systematic review mapping the landscape of AI-driven health research using bibliometric methods across major academic databases.",
  },
];

