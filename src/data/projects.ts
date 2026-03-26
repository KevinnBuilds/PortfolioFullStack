export interface Project {
  id: string;
  name: string;
  type: string;
  hint?: string;
  goal: string;
  features: string[];
  stack: string[];
  category: "featured" | "internal";
  liveUrl?: string;
  detailsUrl?: string;
}

export const projects: Project[] = [
  {
    id: "indelebiletatto",
    name: "Indelebiletatto",
    type: "Webapp for a tattoo shop client",
    hint: "Mobile focused design",
    goal: "Showcase work + manage bookings",
    features: [
      "Visual gallery of tattoo works",
      "Booking system with available time slots",
      "Slots synced with Google Calendar (read free slots + push bookings)",
      "Saves bookings to DB for reporting",
      "Python script sends WhatsApp messages",
    ],
    stack: [
      "React",
      "Chakra UI",
      "Node.js",
      "MongoDB",
      "Python",
      "Google Calendar API",
      "Vercel",
      "Render",
    ],
    category: "featured",
    liveUrl: "https://www.indelebiletattoo.com/",
    detailsUrl: "https://www.indelebiletattoo.com/",
  },
  {
    id: "edilprojectmilano",
    name: "EdilProjectMilano",
    type: "Website for a construction business",
    goal: "Increase web visibility + present work and services",
    features: [
      "Portfolio of completed work",
      "Company story and services section",
      "Contact form with email notification",
      "Google Business Profile / presence setup",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "featured",
    liveUrl: "https://edil-pro-milano.vercel.app/",
    detailsUrl: "https://edil-pro-milano.vercel.app/",
  },
  {
    id: "safety-scheduler",
    name: "Safety Training Scheduler",
    type: "Internal dashboard web app",
    goal: "Manage training requirements and certificate expirations by role",
    features: [
      "Company/person registry stored in DB",
      "Role-based training requirements",
      "Certificate tracking: completed vs missing",
      "Expiration management per certificate",
      "Dashboard showing compliance status",
      "Filters on all pages + Excel export",
      "Authentication at entry",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL"],
    category: "internal",
    liveUrl: "https://scadenziario-sicurezza.vercel.app/",
    detailsUrl: "https://scadenziario-sicurezza.vercel.app/",
  },
  {
    id: "device-management",
    name: "Device Management",
    type: "Internal management system",
    goal: "Track PCs and assignments to employees with history",
    features: [
      "Registry of devices and employees",
      "Assignment workflow with sidebar editor",
      "Save old assignments for full history",
      "Full CRUD for devices and people",
    ],
    stack: [
      "React",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
    ],
    category: "internal",
    liveUrl: "http://65.109.14.20/",
    detailsUrl: "#",
  },
];

export const featuredProjects = projects.filter(
  (p) => p.category === "featured",
);
export const internalProjects = projects.filter(
  (p) => p.category === "internal",
);
