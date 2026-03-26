import type { Language } from "@/context/LanguageContext";
import {
  House,
  UserSearch,
  Layers,
  FolderOpenDot,
  Contact,
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
  features: string[];
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
      title: "Portfolio Full-Stack Developer | Kevin",
    },
    navbar: {
      links: [
        { href: "#home", label: "Home", icon: House },
        { href: "#about", label: "Chi sono", icon: UserSearch },
        { href: "#stack", label: "Competenze", icon: Layers },
        { href: "#projects", label: "Progetti", icon: FolderOpenDot },
        { href: "#contact", label: "Contatti", icon: Contact },
      ],
      cta: "Contattami",
      languageLabel: "Lingua",
    },
    hero: {
      availability: "Disponibile per nuove opportunità",
      intro: "Ciao, sono",
      title: "Full-Stack Developer",
      tagline: "Creo esperienze web moderne",
      description:
        "Dall'idea al deploy realizzo web app scalabili, dashboard intuitive, workflow di automazione e API REST che portano valore concreto al business.",
      primaryCta: "Vedi progetti",
      secondaryCta: "Scarica CV",
      stackLabel: "Stack principale:",
      scrollLabel: "Scorri",
    },
    about: {
      badge: "Chi sono",
      title: "Chi",
      highlightedTitle: "Sono",
      description:
        "Sviluppatore appassionato, costruisco soluzioni web complete con attenzione a dettaglio, performance e solidita tecnica.",
      paragraphs: [
        "Sono un Full-Stack Developer appassionato di soluzioni web complete, dai frontend curati fino ai backend solidi e database ben strutturati.",
        "Il mio approccio unisce architettura pulita, codice manutenibile e una forte attenzione a performance ed esperienza utente. Ogni progetto e un'occasione per generare valore reale con scelte tecniche ragionate.",
        "Che si tratti di una web app per clienti, una dashboard interna o un flusso di automazione, porto sempre lo stesso livello di qualita e cura dei dettagli.",
      ],
      highlights: [
        {
          title: "UI Moderne",
          description:
            "Creo interfacce responsive e accessibili con React e strumenti di styling moderni.",
        },
        {
          title: "Backend Solidi",
          description:
            "Sviluppo API scalabili e logica applicativa con Django e Node.js.",
        },
        {
          title: "Dati Strutturati",
          description:
            "Progetto schemi dati efficienti con PostgreSQL e MongoDB.",
        },
        {
          title: "Performance First",
          description:
            "Ottimizzo velocita, manutenibilita ed esperienza utente.",
        },
      ],
    },
    skills: {
      badge: "Stack Tecnologico",
      title: "Competenze e",
      highlightedTitle: "Tecnologie",
      description:
        "Un toolkit completo per costruire applicazioni web moderne full-stack.",
      categories: {
        "Core Expertise": "Competenze Chiave",
        Languages: "Linguaggi",
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        "UI Libraries & Styling": "UI Library e Styling",
        Deployment: "Deploy",
        Knowledge: "Metodo",
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
        "Applicazioni reali che mostrano la mia esperienza nello sviluppo full-stack.",
      clientProjectsTitle: "Progetti Clienti",
      clientProjectsDescription: "Applicazioni pronte per la produzione",
      internalProjectsTitle: "Strumenti Aziendali Interni",
      internalProjectsDescription: "Applicazioni pronte per la produzione",
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
          type: "Web app per uno studio tatuaggi",
          hint: "Design pensato per mobile",
          goal: "Mostrare i lavori e gestire le prenotazioni",
          features: [
            "Galleria visuale dei tatuaggi realizzati",
            "Sistema di prenotazione con slot disponibili",
            "Slot sincronizzati con Google Calendar",
            "Salvataggio prenotazioni su database per reportistica",
            "Script Python per invio messaggi WhatsApp",
          ],
        },
        edilprojectmilano: {
          type: "Sito per impresa edile",
          goal: "Aumentare la visibilita online e presentare lavori e servizi",
          features: [
            "Portfolio dei lavori completati",
            "Sezione storia aziendale e servizi",
            "Form contatti con notifica email",
            "Setup della presenza Google Business Profile",
          ],
        },
        "safety-scheduler": {
          type: "Dashboard interna",
          goal: "Gestire obblighi formativi e scadenze attestati in base al ruolo",
          features: [
            "Anagrafica aziende e persone salvata su database",
            "Requisiti formativi basati sul ruolo",
            "Tracciamento attestati completati e mancanti",
            "Gestione scadenze per certificazione",
            "Dashboard con stato di conformita",
            "Filtri globali ed export Excel",
            "Autenticazione in ingresso",
          ],
        },
        "device-management": {
          type: "Sistema gestionale interno",
          goal: "Tracciare PC e assegnazioni ai dipendenti mantenendo lo storico",
          features: [
            "Anagrafica dispositivi e dipendenti",
            "Workflow di assegnazione con editor laterale",
            "Storico completo delle vecchie assegnazioni",
            "CRUD completo per dispositivi e persone",
          ],
        },
      },
    },
    contact: {
      badge: "Contatti",
      title: "Restiamo in",
      highlightedTitle: "Contatto",
      availability:
        "Disponibile per collaborazioni, freelance e nuove opportunita.",
      successTitle: "Messaggio inviato!",
      successDescription: "Grazie per avermi scritto. Ti rispondero presto.",
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "tua.email@example.com",
      messageLabel: "Messaggio",
      messagePlaceholder: "Raccontami del tuo progetto...",
      submit: "Invia messaggio",
      sideTitle: "Pronto a costruire qualcosa di valido?",
      sideDescription:
        "Se ti serve una web application completa, vuoi migliorare un progetto esistente o hai domande sul mio lavoro, scrivimi.",
      socialTitle: "Dove trovarmi",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
    },
  },
  en: {
    meta: {
      title: "Full-Stack Developer Portfolio | Kevin",
    },
    navbar: {
      links: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#stack", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ],
      cta: "Let's Work",
      languageLabel: "Language",
    },
    hero: {
      availability: "Open to new opportunities",
      intro: "Hi, I'm",
      title: "Full-Stack Developer",
      tagline: "Building Modern Web Experiences",
      description:
        "From concept to deployment, I build scalable web apps, intuitive dashboards, automation workflows, and REST APIs that deliver real business value.",
      primaryCta: "View Projects",
      secondaryCta: "Download CV",
      stackLabel: "Main Tech Stack:",
      scrollLabel: "Scroll",
    },
    about: {
      badge: "About Me",
      title: "Who",
      highlightedTitle: "I Am",
      description:
        "Passionate developer crafting complete web solutions with attention to detail, performance, and technical solidity.",
      paragraphs: [
        "I'm a Full-Stack Developer passionate about building complete web solutions, from polished frontends to robust backend systems and well-structured databases.",
        "My approach combines clean architecture, maintainable code, and a strong focus on performance and user experience. Every project is a chance to deliver real value through thoughtful engineering.",
        "Whether it's a client-facing web app, an internal dashboard, or an automation workflow, I bring the same commitment to quality and attention to detail.",
      ],
      highlights: [
        {
          title: "Modern UIs",
          description:
            "Crafting responsive, accessible interfaces with React and modern styling tools.",
        },
        {
          title: "Solid Backends",
          description:
            "Building scalable APIs and business logic with Django and Node.js.",
        },
        {
          title: "Structured Data",
          description:
            "Designing efficient database schemas with PostgreSQL and MongoDB.",
        },
        {
          title: "Performance First",
          description:
            "Optimizing for speed, maintainability, and exceptional user experience.",
        },
      ],
    },
    skills: {
      badge: "Tech Stack",
      title: "Skills &",
      highlightedTitle: "Technologies",
      description:
        "A comprehensive toolkit for building modern, full-stack web applications.",
      categories: {},
      skills: {},
    },
    projects: {
      badge: "Portfolio",
      title: "Featured",
      highlightedTitle: "Projects",
      description:
        "Real-world applications showcasing my expertise in full-stack development.",
      clientProjectsTitle: "Client Projects",
      clientProjectsDescription: "Production-ready applications",
      internalProjectsTitle: "Internal Enterprise Tools",
      internalProjectsDescription: "Production-ready applications",
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
          type: "Web app for a tattoo shop client",
          hint: "Mobile focused design",
          goal: "Showcase work and manage bookings",
          features: [
            "Visual gallery of tattoo works",
            "Booking system with available time slots",
            "Slots synced with Google Calendar",
            "Bookings stored in DB for reporting",
            "Python script sends WhatsApp messages",
          ],
        },
        edilprojectmilano: {
          type: "Website for a construction business",
          goal: "Increase web visibility and present work and services",
          features: [
            "Portfolio of completed work",
            "Company story and services section",
            "Contact form with email notification",
            "Google Business Profile setup",
          ],
        },
        "safety-scheduler": {
          type: "Internal dashboard web app",
          goal: "Manage training requirements and certificate expirations by role",
          features: [
            "Company and people registry stored in DB",
            "Role-based training requirements",
            "Certificate tracking: completed vs missing",
            "Expiration management per certificate",
            "Dashboard showing compliance status",
            "Global filters and Excel export",
            "Authentication at entry",
          ],
        },
        "device-management": {
          type: "Internal management system",
          goal: "Track PCs and employee assignments with full history",
          features: [
            "Registry of devices and employees",
            "Assignment workflow with sidebar editor",
            "Full history of previous assignments",
            "Full CRUD for devices and people",
          ],
        },
      },
    },
    contact: {
      badge: "Contact",
      title: "Let's",
      highlightedTitle: "Connect",
      availability: "Open to new opportunities.",
      successTitle: "Message Sent!",
      successDescription: "Thanks for reaching out. I'll get back to you soon.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      sideTitle: "Ready to build something great?",
      sideDescription:
        "Whether you need a complete web application, want to improve an existing project, or just have questions about my work, I'd love to hear from you.",
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
