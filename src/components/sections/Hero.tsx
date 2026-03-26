import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Card from "../ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";
import { quickStackBadges } from "@/data/skills";
import { translations } from "@/data/translations";

export const Hero = () => {
  const { language } = useLanguage();
  const content = translations[language].hero;

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute top-1/4 left-1/4 h-[700px] w-[700px] rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/8 via-accent/5 to-primary/8 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full md:left-20">
        <div className="section-container">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
            <div className="w-full max-w-3xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
                <span>{content.availability}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-foreground"
                >
                  {content.intro}{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="gradient-text relative inline-block"
                >
                  {profile.name}
                  <motion.span
                    className="absolute right-0 -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 text-xl text-muted-foreground sm:text-2xl md:text-3xl"
              >
                <span className="font-semibold text-foreground">
                  {content.title}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-3 text-primary"
                >
                  •
                </motion.span>
                <span className="text-primary/90">{content.tagline}</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                {content.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <span className="mr-2 text-xs font-medium text-muted-foreground/70">
                  {content.stackLabel}
                </span>
                {quickStackBadges.map((badge, index) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex min-w-fit cursor-default items-center justify-center whitespace-nowrap rounded-full border border-border/50 bg-secondary/80 px-3 py-1.5 text-xs font-medium text-foreground/90 transition-all duration-200 hover:border-primary/50 hover:text-primary"
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center lg:justify-self-center lg:translate-x-4"
            >
              <div className="flex justify-center ">
                <Card />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs font-medium uppercase tracking-wider opacity-70 transition-opacity group-hover:opacity-100">
            {content.scrollLabel}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-light flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/30 p-2 transition-colors group-hover:border-primary/60"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};
