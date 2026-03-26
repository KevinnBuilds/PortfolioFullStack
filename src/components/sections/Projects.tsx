import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Wrench,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  featuredProjects,
  internalProjects,
  type Project,
} from "@/data/projects";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const getLocalizedProject = (project: Project, language: Language) => {
  const translatedProject = translations[language].projects.items[project.id];

  if (!translatedProject) {
    return project;
  }

  return {
    ...project,
    ...translatedProject,
  };
};

const ProjectCard = ({
  project,
  index,
  onOpenModal,
  language,
}: {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
  language: Language;
}) => {
  const isFeatured = project.category === "featured";
  const content = translations[language].projects;
  const localizedProject = getLocalizedProject(project, language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group w-[calc(100vw-3rem)] sm:w-[420px] flex-shrink-0 snap-center"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <div className="relative glass rounded-3xl p-5 sm:p-7 md:p-9 card-interactive h-full flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4 sm:mb-5">
          <div className="flex flex-col gap-2 sm:gap-3">
            {/* Project Type Badge */}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-fit ${
                isFeatured
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-accent/15 text-accent border border-accent/30"
              }`}
            >
              {localizedProject.type}
            </motion.span>

            {/* Hint Badge */}
            {localizedProject.hint && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`inline-flex items-center gap-2 text-xs font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-fit ${
                  isFeatured
                    ? "bg-primary/10 text-primary/90 border border-primary/20"
                    : "bg-accent/10 text-accent/90 border border-accent/20"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                {localizedProject.hint}
              </motion.div>
            )}
          </div>

          {!project.liveUrl && (
            <span className="text-xs text-muted-foreground/70 font-medium px-2 sm:px-3 py-1 rounded-full bg-muted/50 border border-border/50 flex-shrink-0">
              {content.soon}
            </span>
          )}
        </div>

        {/* Project Name */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.name}
        </h3>

        {/* Goal */}
        <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
          {localizedProject.goal}
        </p>

        {/* Features Preview */}
        <div className="flex-1 mb-4 sm:mb-6">
          <ul className="space-y-2 sm:space-y-2.5">
            {localizedProject.features.slice(0, 3).map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.1 + i * 0.05 }}
                className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 sm:gap-3"
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </motion.li>
            ))}
            {localizedProject.features.length > 3 && (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-xs sm:text-sm text-primary font-medium flex items-center gap-2 mt-2 sm:mt-3"
              >
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />+
                {localizedProject.features.length - 3} {content.moreFeatures}
              </motion.li>
            )}
          </ul>
        </div>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.stack.slice(0, 5).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 + 0.2 + i * 0.03 }}
              className="badge-tech text-xs"
            >
              {tech}
            </motion.span>
          ))}
          {project.stack.length > 5 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="badge-tech text-xs"
            >
              +{project.stack.length - 5}
            </motion.span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 pt-2">
          {project.liveUrl && (
            <Button
              variant="hero"
              size="sm"
              asChild
              className="flex-1 group/btn text-xs sm:text-sm"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform" />
                {content.liveSite}
              </a>
            </Button>
          )}
          <Button
            variant="glass"
            size="sm"
            onClick={() => onOpenModal(project)}
            className="flex-1 group/btn text-xs sm:text-sm"
          >
            {content.viewDetails}
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
  language,
}: {
  project: Project | null;
  onClose: () => void;
  language: Language;
}) => {
  if (!project) return null;

  const content = translations[language].projects;
  const localizedProject = getLocalizedProject(project, language);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Backdrop glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-heavy rounded-3xl p-5 sm:p-8 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-glass/50 transition-all"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Content */}
          <div className="pr-0 sm:pr-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span
                className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full ${
                  project.category === "featured"
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-accent/15 text-accent border border-accent/30"
                }`}
              >
                {localizedProject.type}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight pr-8 sm:pr-0"
            >
              {project.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
            >
              {localizedProject.goal}
            </motion.p>

            {/* All Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full" />
                {content.featuresTitle}
              </h3>
              <ul className="space-y-3">
                {localizedProject.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    className="text-muted-foreground flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Full Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full" />
                {content.stackTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 + i * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="badge-tech"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-3 pt-4 border-t border-border/50"
            >
              {project.liveUrl && (
                <Button variant="hero" asChild className="flex-1 group/btn">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    {content.visitLiveSite}
                  </a>
                </Button>
              )}
              <Button variant="glass" onClick={onClose} className="flex-1">
                {content.close}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCarousel = ({
  projects,
  onOpenModal,
  language,
}: {
  projects: Project[];
  onOpenModal: (project: Project) => void;
  language: Language;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-14 h-14 rounded-2xl glass flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-lg backdrop-blur-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-14 h-14 rounded-2xl glass flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-lg backdrop-blur-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide pl-4 sm:pl-0 pr-4 sm:pr-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenModal={onOpenModal}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = translations[language].projects;

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-primary/8 via-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" />

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
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase mb-6 px-4 py-2 rounded-full glass"
            >
              <Briefcase className="w-4 h-4" />
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
        </div>

        {/* Featured Projects */}
        <div className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="section-container mb-6 sm:mb-10"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center"
              >
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {content.clientProjectsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {content.clientProjectsDescription}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="px-0 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <ProjectCarousel
              projects={featuredProjects}
              onOpenModal={setSelectedProject}
              language={language}
            />
          </div>
        </div>

        {/* Internal Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="section-container mb-6 sm:mb-10"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center"
              >
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {content.internalProjectsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {content.internalProjectsDescription}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="px-0 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <ProjectCarousel
              projects={internalProjects}
              onOpenModal={setSelectedProject}
              language={language}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
