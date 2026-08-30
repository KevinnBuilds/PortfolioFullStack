export interface Project {
  id: string;
  name: string;
  type: string;
  hint?: string;
  goal: string;
  problem: string;
  solution: string;
  automation: string;
  features: string[];
  stack: string[];
  category: "featured" | "internal";
  liveUrl?: string;
  detailsUrl?: string;
  caseStudy: {
    context: string;
    analysis: string;
    solution: string;
    automation: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: "indelebiletatto",
    name: "Indelebile Tattoo",
    type: "Booking & Automation Platform",
    hint: "Booking and integrations",
    goal:
      "Complete web application for services, portfolio, and studio booking management.",
    problem:
      "The studio needed to present services and work while collecting bookings without fragmented manual handling.",
    solution:
      "Responsive application with Node.js backend, MongoDB persistence, and availability management.",
    automation:
      "Google Calendar API sync, Python automations, and personalized WhatsApp confirmations.",
    features: [
      "Booking management through a Node.js backend",
      "Updated availability and MongoDB persistence",
      "Google Calendar API integration",
      "Automatic booking synchronization",
      "Python automations and personalized WhatsApp confirmations",
      "Responsive frontend for services and portfolio",
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
    caseStudy: {
      context:
        "The project combines online presence, portfolio, and booking management.",
      analysis:
        "The booking flow was modeled around availability, customer data, and calendar operations.",
      solution:
        "React frontend with Chakra UI, Node.js backend, MongoDB database, and Vercel/Render deployment.",
      automation:
        "Bookings are synchronized with Google Calendar and supported by Python scripts for WhatsApp messages.",
      result:
        "The studio has a single digital channel to present itself and manage requests in a more structured way.",
    },
  },
  {
    id: "edilprojectmilano",
    name: "EdilProjectMilano",
    type: "Corporate Website & Local SEO",
    goal:
      "Responsive website focused on service presentation, credibility, and conversion.",
    problem:
      "The business lacked a professional web presence and needed stronger local visibility.",
    solution:
      "React/TypeScript website with clear structure for services, projects, contacts, and on-page SEO.",
    automation:
      "Contact flow and local presence setup through Google Business Profile.",
    features: [
      "React / TypeScript development",
      "Responsive UI oriented to conversion",
      "On-page SEO and local visibility structure",
      "Completed work portfolio and services presentation",
      "Web infrastructure deployment",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Ubuntu VPS"],
    category: "featured",
    liveUrl: "https://edil-pro-milano.vercel.app/",
    detailsUrl: "https://edil-pro-milano.vercel.app/",
    caseStudy: {
      context:
        "The client needed a more professional and credible digital presence.",
      analysis:
        "The information architecture was organized around services, completed work, and contact paths.",
      solution:
        "Responsive website developed with React, TypeScript, and Tailwind CSS.",
      automation:
        "Contact and local presence flows were prepared to make requests and discovery easier.",
      result:
        "The project provides a stronger web base for company presentation and local visibility.",
    },
  },
  {
    id: "safety-scheduler",
    name: "Safety Training Scheduler",
    type: "Internal Business Application",
    goal:
      "Centralized application that manages workforce, courses, and expirations while automatically calculating relevant dates.",
    problem:
      "Training expiration management was handled through static Excel files and manual updates.",
    solution:
      "Centralized system with dashboard, filters, Django backend, PostgreSQL, and structured data management.",
    automation:
      "Automatic expiration calculation and workforce updates through HR/personnel system API integration.",
    features: [
      "Automatic training expiration calculation",
      "Business dashboard with advanced filters",
      "Django backend and PostgreSQL database",
      "API integration with HR/personnel system",
      "Workforce updates and centralized data management",
      "Tracking for completed, missing, and expiring certificates",
    ],
    stack: [
      "React",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
      "Ubuntu VPS",
    ],
    category: "internal",
    liveUrl: "https://scadenziario-sicurezza.vercel.app/",
    detailsUrl: "https://scadenziario-sicurezza.vercel.app/",
    caseStudy: {
      context:
        "The training process required ongoing control over people, roles, courses, and expiration dates.",
      analysis:
        "The Excel workflow was decomposed into entities, business rules, and operational states.",
      solution:
        "React/TypeScript application with Shadcn/Tailwind UI, Django backend, and PostgreSQL.",
      automation:
        "Expiration dates are calculated by the system and workforce data is updated through an API integration.",
      result:
        "Management moved from static files to a centralized, queryable, and more maintainable system.",
    },
  },
  {
    id: "device-management",
    name: "Device Management",
    type: "Asset Management System",
    goal:
      "Centralized management system for devices, employees, assignments, and history.",
    problem:
      "Device management relied on Excel files, with assignment history easily lost.",
    solution:
      "System covering assets, employees, assignment workflow, dashboard, and traceability.",
    automation:
      "PostgreSQL persistence and Django backend logic preserve history and guide assignments.",
    features: [
      "Asset, employee, and assignment management",
      "Complete assignment history",
      "Dashboard and operational traceability",
      "Assignment workflow with sidebar editor",
      "Full CRUD with Django backend and PostgreSQL",
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
    caseStudy: {
      context:
        "Device tracking required clearer control over current state and previous assignments.",
      analysis:
        "The process was modeled by separating registries, assets, assignments, and history.",
      solution:
        "React/TypeScript management system with Shadcn/UI, Tailwind CSS, Django, and PostgreSQL.",
      automation:
        "Application logic preserves assignment history and makes the workflow more reliable.",
      result:
        "The system makes asset traceability clearer than a static spreadsheet process.",
    },
  },
];

export const featuredProjects = projects.filter(
  (p) => p.category === "featured",
);
export const internalProjects = projects.filter(
  (p) => p.category === "internal",
);
