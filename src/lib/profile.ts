export const profile = {
  name: "Hani",
  firstName: "Hani",
  role: "IT student",
  email: "hello@hani.dev",
  availability: "Open to internships and projects",
  tagline:
    "I'm an IT student who likes taking ideas apart, understanding how they work, and building them back on the web.",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Fast, accessible interfaces built to last.",
    items: ["TypeScript", "React", "TanStack", "Tailwind CSS", "Next.js", "Vite"],
  },
  {
    title: "Design",
    description: "From rough idea to pixel-precise systems.",
    items: ["Figma", "Design Systems", "Prototyping", "Typography", "Motion"],
  },
  {
    title: "Backend",
    description: "Just enough server to make products real.",
    items: ["Node.js", "PostgreSQL", "REST & GraphQL", "Edge Functions"],
  },
  {
    title: "Craft",
    description: "The details that make it feel right.",
    items: ["Accessibility", "Performance", "Animation", "Testing"],
  },
  {
    title: "Tooling",
    description: "Workflows that keep teams moving.",
    items: ["Git", "CI/CD", "Storybook", "Vitest", "Playwright"],
  },
  {
    title: "Collaboration",
    description: "Clear communication, shared ownership.",
    items: ["Workshops", "Mentoring", "Product Strategy", "Remote-first"],
  },
];
