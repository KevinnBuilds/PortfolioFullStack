import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const About = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = translations[language].about;

  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute left-1/4 top-1/4 h-[700px] w-[700px] rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl animate-float animation-delay-300" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 md:left-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 border-t border-border/60 pt-6"
          >
            <span className="mb-6 block font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              01 / ABOUT
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {content.title}{" "}
              <span className="gradient-text">{content.highlightedTitle}</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {content.description}
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative space-y-6 border-l border-primary/30 pl-6 sm:pl-8"
            >
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-glow-sm" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.paragraphs[0].split("Full-Stack Engineer")[0]}
                <span className="font-semibold text-foreground">
                  Full-Stack Engineer
                </span>
                {content.paragraphs[0].split("Full-Stack Engineer")[1]}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.paragraphs[1]}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.paragraphs[2]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="divide-y divide-border/60 border-y border-border/60"
            >
              {content.highlights.map((highlight, index) => (
                <motion.article
                  key={highlight.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                  className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr]"
                >
                  <span className="font-mono text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 h-px origin-left bg-gradient-to-r from-primary/40 via-accent/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};
