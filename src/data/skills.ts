export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Expertise",
    icon: "Layers",
    skills: [
      "Full-Stack Development",
      "REST APIs",
      "Version Control (Git)",
      "CI/CD & Deployment",
      "Responsive Design",
    ],
  },
  {
    title: "Languages",
    icon: "Code2",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: ["React", "Vite", "Next.js"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Django", "Node.js"],
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "UI Libraries & Styling",
    icon: "Palette",
    skills: ["Tailwind CSS", "Shadcn/UI", "Chakra UI", "MUI"],
  },
  {
    title: "Deployment",
    icon: "Rocket",
    skills: ["Vercel", "Render", "Git Workflows"],
  },
  {
    title: "Knowledge",
    icon: "NotebookPen",
    skills: [
      "Critical Thinking",
      "Business Mindset",
      "Agile Methodologies",
      "Problem Solving",
    ],
  },
];

export const quickStackBadges = [
  "React",
  "TypeScript",
  "Django",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
];
