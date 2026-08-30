import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Organization = {
  name: string;
  label: string;
  description: {
    it: string;
    en: string;
  };
  tags: string[];
  logoSrc?: string;
  logoAlt: string;
  initials: string;
};

const organizations: Organization[] = [
  {
    name: "Inovys Logistics S.p.A.",
    label: "Professional Experience",
    description: {
      it: "Sviluppo di applicazioni business e strumenti interni per digitalizzare processi aziendali, con frontend, backend, database, API e automazioni a supporto dei workflow operativi.",
      en: "Development of business applications and internal tools to digitize company processes, with frontend, backend, databases, APIs, and automations supporting operational workflows.",
    },
    tags: [
      "Business Applications",
      "Process Automation",
      "Frontend / Backend",
      "Database",
      "API Integration",
    ],
    logoAlt: "Logo Inovys Logistics S.p.A.",
    initials: "IL",
  },
  {
    name: "Omnicom Public Relations Group",
    label: "Collaboration",
    description: {
      it: "Analisi di processi aziendali, individuazione di inefficienze automatizzabili e progettazione di soluzioni software, calcoli automatizzati, dashboard BI e flussi informativi piu strutturati.",
      en: "Business process analysis, identification of automatable inefficiencies, and design of software solutions, automated calculations, BI dashboards, and more structured information flows.",
    },
    tags: [
      "Process Analysis",
      "Software Solutions",
      "Automation Design",
      "BI Reporting",
      "Information Flows",
    ],
    logoAlt: "Logo Omnicom Public Relations Group",
    initials: "OP",
  },
];

const LogoSlot = ({ organization }: { organization: Organization }) => {
  if (organization.logoSrc) {
    return (
      <img
        src={organization.logoSrc}
        alt={organization.logoAlt}
        className="max-h-10 max-w-[150px] object-contain"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="flex h-14 w-14 items-center justify-center border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary"
      aria-label={`${organization.logoAlt} non disponibile negli asset locali`}
      title="Logo asset non presente nel repository"
    >
      {organization.initials}
    </div>
  );
};

export const Experience = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-primary/8 via-accent/5 to-transparent blur-3xl" />
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
          className="mb-16 border-t border-border/60 pt-6"
        >
          <span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            06 / EXPERIENCE
          </span>
          <h2 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {language === "it" ? "Con chi ho " : "Who I've "}
            <span className="gradient-text">
              {language === "it" ? "lavorato" : "Worked With"}
            </span>
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {language === "it"
              ? "Esperienze reali, processi complessi e soluzioni costruite sul campo."
              : "Real experience, complex processes, and solutions built in the field."}
          </p>
        </motion.div>

        <div className="border-y border-border/60">
          {organizations.map((organization, index) => (
            <motion.article
              key={organization.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="grid gap-8 border-b border-border/60 py-10 last:border-b-0 lg:grid-cols-[220px_1fr] lg:gap-14"
            >
              <div>
                <LogoSlot organization={organization} />
                <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {organization.label}
                </p>
              </div>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(260px,0.55fr)]">
                <div>
                  <h3 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
                    {organization.name}
                  </h3>
                  <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {organization.description[language]}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-x-3 gap-y-2 border-t border-border/50 pt-5 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0">
                  {organization.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="font-mono text-xs leading-6 text-foreground/85"
                    >
                      {tag}
                      {tagIndex < organization.tags.length - 1 && (
                        <span className="ml-3 text-primary/50">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
