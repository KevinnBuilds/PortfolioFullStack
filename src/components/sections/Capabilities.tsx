import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const capabilities = {
  it: [
    {
      title: "Business Applications",
      description:
        "Dashboard, gestionali e applicazioni interne progettate intorno ai processi reali dell'azienda.",
      items: ["Dashboard", "CRUD complessi", "Ruoli e permessi", "Workflow", "Reporting"],
    },
    {
      title: "Process Automation",
      description:
        "Automazioni software per ridurre attivita manuali, errori e operazioni ripetitive.",
      items: ["Python automation", "Workflow automatici", "Notifiche", "Schedulazioni", "Sync dati"],
    },
    {
      title: "API & System Integration",
      description:
        "Integrazione tra software, servizi esterni e database attraverso API e processi sincronizzati.",
      items: ["REST API", "Google APIs", "Sistemi HR", "Database", "Servizi esterni"],
    },
    {
      title: "AI-Driven Workflows",
      description:
        "Uso strumenti e modelli AI nei workflow software quando possono supportare analisi, classificazione, generazione o operativita.",
      items: ["AI automation", "Supporto operativo", "Classificazione", "Generazione", "Workflow assistiti"],
    },
  ],
  en: [
    {
      title: "Business Applications",
      description:
        "Dashboards, management systems, and internal applications designed around real company processes.",
      items: ["Dashboards", "Complex CRUD", "Roles and permissions", "Workflows", "Reporting"],
    },
    {
      title: "Process Automation",
      description:
        "Software automations that reduce manual work, errors, and repetitive operations.",
      items: ["Python automation", "Automatic workflows", "Notifications", "Scheduling", "Data sync"],
    },
    {
      title: "API & System Integration",
      description:
        "Integration between software, external services, and databases through APIs and synchronized processes.",
      items: ["REST API", "Google APIs", "HR systems", "Databases", "External services"],
    },
    {
      title: "AI-Driven Workflows",
      description:
        "I use AI tools and models inside software workflows when they can support analysis, classification, generation, or operations.",
      items: ["AI automation", "Operational support", "Classification", "Generation", "Assisted workflows"],
    },
  ],
};

export const Capabilities = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = capabilities[language];

  return (
    <section
      id="capabilities"
      className="section-cream relative overflow-hidden py-28 sm:py-36"
    >
      <div className="absolute inset-0 section-cream-grid opacity-45" />
      <div className="absolute left-1/2 top-1/4 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 border-t border-black/10 pt-6"
        >
          <span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            02 / SYSTEMS
          </span>
          <h2 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {language === "it" ? "Dal Processo al " : "From Process to "}
            <span className="gradient-text">{language === "it" ? "Sistema" : "System"}</span>
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {language === "it"
              ? "Analizzo il problema, progetto il workflow e sviluppo la soluzione end-to-end."
              : "I analyze the problem, design the workflow, and build the end-to-end solution."}
          </p>
        </motion.div>

        <div className="relative grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-l border-primary/45 pl-6"
          >
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.24em] text-primary">
              SYS.CAPABILITY_MAP
            </span>
            <h3 className="text-2xl font-bold leading-tight text-[var(--ink)]">
              Business systems built from connected capabilities.
            </h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary/65 via-black/15 to-accent/45 lg:left-0 lg:top-8 lg:h-px lg:w-full" />
            <div className="grid gap-8 lg:grid-cols-4">
              {content.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                  className="relative pl-12 lg:pl-0 lg:pt-16"
                >
                  <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-[var(--cream)] text-[10px] font-bold text-primary lg:top-5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mb-4 h-px w-12 bg-primary/40 max-lg:hidden" />
                  <h3 className="mb-3 text-xl font-bold leading-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <p className="font-mono text-xs leading-6 text-ink-soft">
                    {item.items.join(" / ")}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
