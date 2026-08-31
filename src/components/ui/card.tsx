import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";

const Card = () => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();

  const copy = {
    label: "SELECTED WORK / 01",
    title: language === "it" ? "Esplora il mio lavoro" : "Explore My Work",
    description:
      language === "it"
        ? "Sistemi, automazioni e software costruiti attorno a processi reali."
        : "Systems, automations, and software built around real processes.",
    projects: language === "it" ? "Vedi i progetti" : "View Projects",
    cv: language === "it" ? "Scarica il CV" : "Download CV",
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.aside
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-[min(420px,calc(100vw-2rem))]"
      aria-label={copy.title}
    >
      <div
        aria-hidden="true"
        className="absolute -right-4 top-8 hidden h-20 w-20 rounded-full bg-primary/7 blur-2xl transition-opacity duration-300 group-hover:opacity-70 sm:block"
      />

      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/32 p-5 shadow-card backdrop-blur-xl transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-secondary/42 sm:p-6"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-primary/45 via-primary/15 to-transparent"
        />

        <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_112px] sm:items-center">
          <div className="relative z-10">
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/80">
              {copy.label}
            </p>

            <h2 className="max-w-[13ch] font-sans text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              {copy.title}
            </h2>

            <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
              {copy.description}
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group/action inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-accent/35 bg-gradient-to-r from-accent via-cyan-400 to-primary px-5 text-sm font-semibold text-primary-foreground outline-none transition-all duration-200 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary/55"
              >
                <span>{copy.projects}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/action:translate-x-0.5 group-focus-visible/action:translate-x-0.5" />
              </button>

              <a
                href={profile.cvUrl}
                download
                className="group/action inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border/60 bg-background/22 px-5 text-sm font-semibold text-foreground outline-none transition-all duration-200 hover:border-primary/35 hover:bg-primary/8 focus-visible:ring-2 focus-visible:ring-primary/55"
              >
                <Download className="h-4 w-4 text-accent transition-transform duration-200 group-hover/action:translate-y-0.5 group-focus-visible/action:translate-y-0.5" />
                <span>{copy.cv}</span>
              </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none hidden border-l border-border/50 pl-5 sm:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70">
              SYSTEMS
            </p>
            <div className="mt-4 space-y-2">
              <span className="block h-px w-20 bg-primary/35" />
              <span className="block h-px w-12 bg-accent/35" />
              <span className="block h-px w-16 bg-border" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default Card;
