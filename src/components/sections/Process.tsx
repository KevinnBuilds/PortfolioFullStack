import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const steps = {
  it: [
    ["01", "Analisi", "Workflow, utenti, dati, criticita e attivita manuali."],
    ["02", "Progettazione", "Requisiti, architettura, modello dati e logiche di business."],
    ["03", "Sviluppo", "Frontend, backend, API e database."],
    ["04", "Automazione & Integrazione", "Workflow automatici, servizi esterni e sincronizzazione dati."],
    ["05", "Deploy & Iterazione", "Container, VPS, monitoraggio e miglioramento continuo."],
  ],
  en: [
    ["01", "Analysis", "Workflows, users, data, critical points, and manual activities."],
    ["02", "Design", "Requirements, architecture, data model, and business logic."],
    ["03", "Development", "Frontend, backend, APIs, and databases."],
    ["04", "Automation & Integration", "Automatic workflows, external services, and data synchronization."],
    ["05", "Deploy & Iteration", "Containers, VPS, monitoring, and continuous improvement."],
  ],
};

export const Process = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 border-t border-border/60 pt-6"
        >
          <span className="mb-5 block font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            03 / PROCESS PIPELINE
          </span>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {language === "it"
              ? "Come trasformo un processo in software"
              : "How I turn a process into software"}
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
            FROM ANALYSIS TO PRODUCTION
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-border to-accent/60 lg:hidden"
          />
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-5 hidden h-px w-full origin-left bg-gradient-to-r from-primary via-border to-accent/60 lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-5">
            {steps[language].map(([number, title, description], index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                className="relative pl-12 lg:pl-0 lg:pt-14"
              >
                <span className="absolute left-0 top-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-primary/60 bg-background font-mono text-[10px] font-bold text-primary lg:left-0 lg:top-2">
                  {number}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute left-7 top-3 hidden h-px w-[calc(100%-1.75rem)] bg-border/70 lg:block"
                />
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">
                  {title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
