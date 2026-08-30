export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Chakra UI",
      "Shadcn/UI",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Python", "Django", "Node.js", "REST API"],
  },
  {
    title: "Data",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Data Modeling", "CRUD / Business Logic"],
  },
  {
    title: "Automation & Integration",
    icon: "Zap",
    skills: [
      "Python",
      "JavaScript",
      "REST API",
      "Google APIs",
      "System Integration",
      "Workflow Automation",
    ],
  },
  {
    title: "DevOps / Deployment",
    icon: "Rocket",
    skills: ["Docker", "Nginx", "Ubuntu VPS", "Git", "Vercel", "Render"],
  },
  {
    title: "Enterprise / IT",
    icon: "Layers",
    skills: [
      "Microsoft 365",
      "Entra ID",
      "Intune",
      "IAM",
      "MFA",
      "Conditional Access",
      "SharePoint",
    ],
  },
];

export const quickStackBadges = [
  "Python",
  "Django",
  "Node.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
];
