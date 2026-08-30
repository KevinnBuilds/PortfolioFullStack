import type { Language } from "@/context/LanguageContext";
import {
  House,
  UserSearch,
  Layers,
  FolderOpenDot,
  Contact,
  Workflow,
  BriefcaseBusiness,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon?: React.ElementType;
};

type HighlightTranslation = {
  title: string;
  description: string;
};

type ProjectTranslation = {
  type: string;
  hint?: string;
  goal: string;
  problem: string;
  solution: string;
  automation: string;
  features: string[];
  caseStudy: {
    context: string;
    analysis: string;
    solution: string;
    automation: string;
    result: string;
  };
};

type Translations = {
  meta: {
    title: string;
  };
  navbar: {
    links: NavLink[];
    cta: string;
    languageLabel: string;
  };
  hero: {
    availability: string;
    intro: string;
    title: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stackLabel: string;
    scrollLabel: string;
  };
  about: {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    paragraphs: string[];
    highlights: HighlightTranslation[];
  };
  skills: {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    categories: Record<string, string>;
    skills: Record<string, string>;
  };
  projects: {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    clientProjectsTitle: string;
    clientProjectsDescription: string;
    internalProjectsTitle: string;
    internalProjectsDescription: string;
    soon: string;
    moreFeatures: string;
    liveSite: string;
    visitLiveSite: string;
    viewDetails: string;
    featuresTitle: string;
    stackTitle: string;
    close: string;
    items: Record<string, ProjectTranslation>;
  };
  contact: {
    badge: string;
    title: string;
    highlightedTitle: string;
    availability: string;
    successTitle: string;
    successDescription: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sideTitle: string;
    sideDescription: string;
    socialTitle: string;
  };
  footer: {
    rights: string;
  };
};

export const translations: Record<Language, Translations> = {
  it: {
    meta: {
      title: "Portfolio Full-Stack Engineer | Kevin",
    },
    navbar: {
      links: [
        { href: "#home", label: "Home", icon: House },
        { href: "#about", label: "Chi sono", icon: UserSearch },
        { href: "#capabilities", label: "Capabilities", icon: Workflow },
        { href: "#stack", label: "Tech", icon: Layers },
        { href: "#projects", label: "Progetti", icon: FolderOpenDot },
        { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
        { href: "#contact", label: "Contatti", icon: Contact },
      ],
      cta: "Contattami",
      languageLabel: "Lingua",
    },
    hero: {
      availability: "Disponibile per nuove opportunità",
      intro: "Ciao, sono",
      title: "Full-Stack Engineer",
      tagline: "Automation Systems Builder",
      description:
        "Progetto software, workflow e automazioni che trasformano processi aziendali complessi in sistemi efficienti e scalabili. Dall'analisi del processo al deployment: frontend, backend, database, API, integrazioni e automazione.",
      primaryCta: "Scopri i progetti",
      secondaryCta: "Scarica il CV",
      stackLabel: "Stack principale:",
      scrollLabel: "Scorri",
    },
    about: {
      badge: "Chi sono",
      title: "Chi",
      highlightedTitle: "Sono",
      description:
        "Full-Stack Engineer focalizzato su applicazioni business, sistemi gestionali, integrazioni e automazioni.",
      paragraphs: [
        "Sono un Full-Stack Engineer focalizzato sulla progettazione di applicazioni business, sistemi gestionali e automazioni.",
        "Il mio lavoro parte spesso dall'analisi di un processo esistente: studio workflow, dati, dipendenze e attivita manuali, individuo i punti critici e trasformo il processo in una soluzione software strutturata.",
        "Seguo lo sviluppo end-to-end: frontend, backend, database, API, integrazioni, automazioni e deployment. L'obiettivo non e solo sviluppare funzionalita, ma costruire sistemi affidabili, manutenibili e realmente utili al business.",
      ],
      highlights: [
        {
          title: "Process Analysis",
          description:
            "Analizzo workflow, dati e attivita manuali per individuare inefficienze e opportunita di automazione.",
        },
        {
          title: "Full-Stack Systems",
          description:
            "Progetto applicazioni complete con frontend, backend, API e database.",
        },
        {
          title: "Automation",
          description:
            "Automatizzo workflow e integrazioni tramite Python, JavaScript e servizi esterni.",
        },
        {
          title: "System Integration",
          description:
            "Connetto applicazioni, database, API e servizi aziendali creando flussi affidabili.",
        },
      ],
    },
    skills: {
      badge: "Stack Tecnologico",
      title: "Competenze e",
      highlightedTitle: "Tecnologie",
      description:
        "Uso lo stack come strumento per progettare sistemi che risolvono processi reali.",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Data: "Data",
        "Automation & Integration": "Automation & Integration",
        "DevOps / Deployment": "DevOps / Deployment",
        "Enterprise / IT": "Enterprise / IT",
      },
      skills: {
        "Full-Stack Development": "Sviluppo Full-Stack",
        "Version Control (Git)": "Versionamento (Git)",
        "Responsive Design": "Responsive Design",
        "Critical Thinking": "Pensiero Critico",
        "Business Mindset": "Mentalita di Business",
        "Agile Methodologies": "Metodologie Agile",
        "Problem Solving": "Problem Solving",
        "Git Workflows": "Workflow Git",
      },
    },
    projects: {
      badge: "Portfolio",
      title: "Progetti",
      highlightedTitle: "Selezionati",
      description:
        "Applicazioni reali presentate dal punto di vista del processo, della soluzione e delle integrazioni.",
      clientProjectsTitle: "Progetti Clienti",
      clientProjectsDescription: "Software e siti orientati a processi reali",
      internalProjectsTitle: "Strumenti Aziendali Interni",
      internalProjectsDescription: "Sistemi per digitalizzare workflow aziendali",
      soon: "Presto",
      moreFeatures: "altre funzionalita",
      liveSite: "Sito live",
      visitLiveSite: "Visita il sito",
      viewDetails: "Vedi dettagli",
      featuresTitle: "Funzionalita",
      stackTitle: "Tech Stack",
      close: "Chiudi",
      items: {
        indelebiletatto: {
          type: "Booking & Automation Platform",
          hint: "Prenotazioni e integrazioni",
          goal:
            "Web application completa per servizi, portfolio e gestione delle prenotazioni dello studio.",
          problem:
            "Uno studio aveva bisogno di presentare servizi e lavori, raccogliendo prenotazioni senza gestioni manuali frammentate.",
          solution:
            "Applicazione responsive con backend Node.js, persistenza MongoDB e gestione delle disponibilita.",
          automation:
            "Sincronizzazione con Google Calendar API, automazioni Python e conferme WhatsApp personalizzate.",
          features: [
            "Gestione prenotazioni tramite backend Node.js",
            "Disponibilita aggiornate e persistenza dati MongoDB",
            "Integrazione Google Calendar API",
            "Sincronizzazione automatica delle prenotazioni",
            "Automazioni Python e conferme WhatsApp personalizzate",
            "Frontend responsive per servizi e portfolio",
          ],
          caseStudy: {
            context:
              "Il progetto non e un semplice sito vetrina: combina presenza online, portfolio e booking.",
            analysis:
              "Il flusso di prenotazione e stato modellato intorno a disponibilita, dati cliente e calendario operativo.",
            solution:
              "Frontend React con Chakra UI, backend Node.js, database MongoDB e deployment su Vercel/Render.",
            automation:
              "Le prenotazioni vengono sincronizzate con Google Calendar e supportate da script Python per messaggi WhatsApp.",
            result:
              "Lo studio dispone di un canale digitale unico per presentarsi e gestire richieste in modo piu strutturato.",
          },
        },
        edilprojectmilano: {
          type: "Corporate Website & Local SEO",
          goal:
            "Sito responsive orientato a presentazione servizi, credibilita e conversione.",
          problem:
            "Azienda senza una presenza web professionale e con necessita di maggiore visibilita locale.",
          solution:
            "Sito React/TypeScript con struttura chiara per servizi, lavori, contatti e SEO on-page.",
          automation:
            "Form di contatto e setup della presenza locale tramite Google Business Profile.",
          features: [
            "Sviluppo React / TypeScript",
            "Responsive UI orientata alla conversione",
            "SEO on-page e struttura per visibilita locale",
            "Portfolio lavori e presentazione servizi",
            "Deployment su infrastruttura web",
          ],
          caseStudy: {
            context:
              "Il cliente aveva bisogno di una presenza digitale piu professionale e credibile.",
            analysis:
              "La struttura informativa e stata organizzata intorno a servizi, lavori completati e canali di contatto.",
            solution:
              "Sito responsive sviluppato con React, TypeScript e Tailwind CSS.",
            automation:
              "Il flusso di contatto e la presenza locale sono stati impostati per facilitare richieste e reperibilita.",
            result:
              "Il progetto offre una base web piu solida per presentazione aziendale e visibilita locale.",
          },
        },
        "safety-scheduler": {
          type: "Internal Business Application",
          goal:
            "Applicazione centralizzata che gestisce organico, corsi e scadenze calcolando automaticamente le date rilevanti.",
          problem:
            "La gestione delle scadenze formative veniva effettuata tramite file Excel statici e aggiornamenti manuali.",
          solution:
            "Sistema centralizzato con dashboard, filtri, backend Django, PostgreSQL e gestione strutturata dei dati.",
          automation:
            "Calcolo automatico delle scadenze e aggiornamento dell'organico tramite integrazione API con sistema HR/personale.",
          features: [
            "Calcolo automatico delle scadenze formative",
            "Dashboard aziendale con filtri avanzati",
            "Backend Django e database PostgreSQL",
            "Integrazione API con sistema HR/personale",
            "Aggiornamento organico e gestione centralizzata dei dati",
            "Tracciamento attestati completati, mancanti e in scadenza",
          ],
          caseStudy: {
            context:
              "Il processo formativo richiedeva controllo continuo su persone, ruoli, corsi e date di scadenza.",
            analysis:
              "Il workflow Excel e stato scomposto in entita, regole di business e stati operativi.",
            solution:
              "Applicazione React/TypeScript con UI Shadcn/Tailwind, backend Django e PostgreSQL.",
            automation:
              "Le scadenze vengono calcolate dal sistema e l'organico viene aggiornato tramite integrazione API.",
            result:
              "La gestione passa da file statici a un sistema centralizzato, consultabile e piu manutenibile.",
          },
        },
        "device-management": {
          type: "Asset Management System",
          goal:
            "Gestionale centralizzato per dispositivi, dipendenti, assegnazioni e storico.",
          problem:
            "Gestione dispositivi tramite Excel con perdita dello storico delle assegnazioni.",
          solution:
            "Sistema con asset, dipendenti, workflow di assegnazione, dashboard e tracciabilita.",
          automation:
            "Persistenza PostgreSQL e logica backend Django per conservare lo storico e guidare le assegnazioni.",
          features: [
            "Gestione asset, dipendenti e assegnazioni",
            "Storico completo delle assegnazioni",
            "Dashboard e tracciabilita operativa",
            "Workflow di assegnazione con editor laterale",
            "CRUD completo con backend Django e PostgreSQL",
          ],
          caseStudy: {
            context:
              "Il tracking dei dispositivi richiedeva piu controllo su stato corrente e assegnazioni passate.",
            analysis:
              "Il processo e stato modellato separando anagrafiche, asset, assegnazioni e storico.",
            solution:
              "Gestionale React/TypeScript con Shadcn/UI, Tailwind CSS, Django e PostgreSQL.",
            automation:
              "La logica applicativa mantiene lo storico delle assegnazioni e rende piu affidabile il workflow.",
            result:
              "Il sistema rende piu chiara la tracciabilita degli asset rispetto alla gestione su fogli statici.",
          },
        },
      },
    },
    contact: {
      badge: "Contatti",
      title: "Restiamo in",
      highlightedTitle: "Contatto",
      availability:
        "Hai un processo che potrebbe essere automatizzato?",
      successTitle: "Messaggio inviato!",
      successDescription: "Grazie per avermi scritto. Ti rispondero presto.",
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "tua.email@example.com",
      messageLabel: "Messaggio",
      messagePlaceholder: "Raccontami del tuo progetto...",
      submit: "Invia messaggio",
      sideTitle: "Parliamone",
      sideDescription:
        "Possiamo analizzarlo e capire come trasformarlo in un'applicazione, un workflow o un sistema integrato.",
      socialTitle: "Dove trovarmi",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
    },
  },
  en: {
    meta: {
      title: "Full-Stack Engineer Portfolio | Kevin",
    },
    navbar: {
      links: [
        { href: "#home", label: "Home", icon: House },
        { href: "#about", label: "About", icon: UserSearch },
        { href: "#capabilities", label: "Capabilities", icon: Workflow },
        { href: "#stack", label: "Tech", icon: Layers },
        { href: "#projects", label: "Projects", icon: FolderOpenDot },
        { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
        { href: "#contact", label: "Contact", icon: Contact },
      ],
      cta: "Let's Work",
      languageLabel: "Language",
    },
    hero: {
      availability: "Open to new opportunities",
      intro: "Hi, I'm",
      title: "Full-Stack Engineer",
      tagline: "Automation Systems Builder",
      description:
        "I design software, workflows, and automations that turn complex business processes into efficient, scalable systems. From process analysis to deployment: frontend, backend, databases, APIs, integrations, and automation.",
      primaryCta: "Explore Projects",
      secondaryCta: "Download CV",
      stackLabel: "Main Tech Stack:",
      scrollLabel: "Scroll",
    },
    about: {
      badge: "About Me",
      title: "Who",
      highlightedTitle: "I Am",
      description:
        "Full-Stack Engineer focused on business applications, internal systems, integrations, and automations.",
      paragraphs: [
        "I'm a Full-Stack Engineer focused on designing business applications, internal systems, and automations.",
        "My work often starts from an existing process: I study workflows, data, dependencies, and manual activities, identify the critical points, and turn the process into structured software.",
        "I follow the full path end to end: frontend, backend, databases, APIs, integrations, automation, and deployment. The goal is not just to ship features, but to build reliable, maintainable systems that are useful to the business.",
      ],
      highlights: [
        {
          title: "Process Analysis",
          description:
            "I analyze workflows, data, and manual activities to identify inefficiencies and automation opportunities.",
        },
        {
          title: "Full-Stack Systems",
          description:
            "I design complete applications with frontend, backend, APIs, and databases.",
        },
        {
          title: "Automation",
          description:
            "I automate workflows and integrations through Python, JavaScript, and external services.",
        },
        {
          title: "System Integration",
          description:
            "I connect applications, databases, APIs, and business services into reliable flows.",
        },
      ],
    },
    skills: {
      badge: "Tech Stack",
      title: "Skills &",
      highlightedTitle: "Technologies",
      description:
        "I use technologies as tools to design systems that solve real business processes.",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Data: "Data",
        "Automation & Integration": "Automation & Integration",
        "DevOps / Deployment": "DevOps / Deployment",
        "Enterprise / IT": "Enterprise / IT",
      },
      skills: {},
    },
    projects: {
      badge: "Portfolio",
      title: "Featured",
      highlightedTitle: "Projects",
      description:
        "Real-world applications presented through process, solution, automation, and integrations.",
      clientProjectsTitle: "Client Projects",
      clientProjectsDescription: "Software and websites built around real workflows",
      internalProjectsTitle: "Internal Enterprise Tools",
      internalProjectsDescription: "Systems that digitize business workflows",
      soon: "Soon",
      moreFeatures: "more features",
      liveSite: "Live Site",
      visitLiveSite: "Visit Live Site",
      viewDetails: "View Details",
      featuresTitle: "Features",
      stackTitle: "Tech Stack",
      close: "Close",
      items: {
        indelebiletatto: {
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
        edilprojectmilano: {
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
        "safety-scheduler": {
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
        "device-management": {
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
      },
    },
    contact: {
      badge: "Contact",
      title: "Let's",
      highlightedTitle: "Connect",
      availability: "Do you have a process that could be automated?",
      successTitle: "Message Sent!",
      successDescription: "Thanks for reaching out. I'll get back to you soon.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      sideTitle: "Let's talk",
      sideDescription:
        "We can analyze it and understand how to turn it into an application, a workflow, or an integrated system.",
      socialTitle: "Connect With Me",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export const getTranslation = <T>(
  language: Language,
  italianValue: T,
  englishValue: T,
) => (language === "it" ? italianValue : englishValue);
