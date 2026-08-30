import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Skills = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = translations[language].skills;

  return (
    <section id="stack" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-t from-primary/8 via-accent/5 to-transparent blur-3xl" />
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
          className="mb-16 border-t border-border/60 pt-6 text-center"
        >
          <span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            04 / ENGINEERING STACK
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {content.title}{" "}
            <span className="gradient-text">{content.highlightedTitle}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="overflow-hidden border-y border-border/60"
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + categoryIndex * 0.06,
                }}
                className="border-b border-border/50 py-7 md:px-6 md:[&:nth-child(odd)]:border-r xl:border-r xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    {content.categories[category.title] ?? category.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground/70">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={`${category.title}-${skill}`}
                      className="font-mono text-xs leading-6 text-foreground/85"
                    >
                      {content.skills[skill] ?? skill}
                      {index < category.skills.length - 1 && (
                        <span className="ml-3 text-primary/50">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
