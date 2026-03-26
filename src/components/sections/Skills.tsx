import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Code2,
  Monitor,
  Server,
  Database,
  Palette,
  Rocket,
  NotebookPen,
  Check,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Button } from "@/components/base/buttons/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Code2,
  Monitor,
  Server,
  Database,
  Palette,
  Rocket,
  NotebookPen,
};

export const Skills = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = translations[language].skills;

  return (
    <section id="stack" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-primary/8 via-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-container text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase mb-6 px-4 py-2 rounded-full glass"
          >
            <Layers className="w-4 h-4" />
            {content.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {content.title}{" "}
            <span className="gradient-text">{content.highlightedTitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
        </motion.div>

        {/* Skills Marquee */}
        <div className="section-container">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-background to-transparent" />

            <motion.div
              className="flex w-max gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {[...skillCategories, ...skillCategories].map(
                (category, categoryIndex) => {
                  const IconComponent = iconMap[category.icon] || Layers;

                  return (
                    <motion.div
                      key={`${category.title}-${categoryIndex}`}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay:
                          0.2 + (categoryIndex % skillCategories.length) * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="relative group shrink-0 w-[300px]"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                      <div className="relative glass p-6 sm:p-7 rounded-3xl card-interactive h-full min-h-[260px] flex flex-col">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-5">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-all relative overflow-hidden"
                          >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <IconComponent className="w-6 h-6 text-primary relative z-10 group-hover:text-primary transition-colors" />
                          </motion.div>

                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {content.categories[category.title] ??
                              category.title}
                          </h3>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 flex-1">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={`${skill}-${skillIndex}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.3,
                                delay:
                                  0.3 +
                                  (categoryIndex % skillCategories.length) *
                                    0.08 +
                                  skillIndex * 0.04,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              whileHover={{ scale: 1.05 }}
                              className="inline-flex items-center justify-center px-3 py-0.5 text-xs font-medium rounded-full bg-secondary/80 text-foreground/90 border border-border/50 transition-all duration-200 whitespace-nowrap hover:border-primary/50 hover:text-primary"
                            >
                              {content.skills[skill] ?? skill}
                            </motion.span>
                          ))}
                        </div>

                        {/* Decorative accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  );
                },
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
