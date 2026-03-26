import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Layout,
  Zap,
  User,
  Sparkles,
  Code,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const highlightIcons = [
  {
    icon: Layout,
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: Code,
    gradient: "from-accent/20 via-accent/10 to-transparent",
  },
  {
    icon: Database,
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    icon: Zap,
    gradient: "from-accent/20 via-primary/10 to-transparent",
  },
];

export const About = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = translations[language].about;

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/3 via-accent/3 to-primary/3 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 md:left-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-container  mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase mb-6 px-4 py-2 rounded-full glass"
          >
            <User className="w-4 h-4" />
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
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl  leading-relaxed"
          >
            {content.description}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 relative"
            >
              {/* Glow effect behind text */}
              <div className="absolute -left-8 top-0 w-32 h-full bg-gradient-to-r from-primary/5 to-transparent blur-2xl" />

              <div className="relative glass rounded-3xl p-8 sm:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {content.paragraphs[0].split("Full-Stack Developer")[0]}
                    <span className="text-foreground font-semibold relative">
                      <span className="relative z-10">
                        Full-Stack Developer
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-0" />
                    </span>
                    {content.paragraphs[0].split("Full-Stack Developer")[1]}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {content.paragraphs[1]}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {content.paragraphs[2]}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlightIcons.map((item, index) => (
                <motion.div
                  key={content.highlights[index].title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative glass p-6 rounded-3xl card-interactive h-full flex flex-col">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/10 to-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/40 transition-all relative overflow-hidden"
                    >
                      {/* Animated background gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <item.icon className="w-7 h-7 text-primary relative z-10 group-hover:text-primary transition-colors" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {content.highlights[index].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {content.highlights[index].description}
                    </p>

                    {/* Decorative accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="section-container mt-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 via-accent/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
