import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const content = translations[language].navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const anchorLine = window.scrollY + window.innerHeight * 0.38;
      const currentLink = content.links.reduce((current, link) => {
        const section = document.querySelector<HTMLElement>(link.href);

        if (section && section.offsetTop <= anchorLine) {
          return link.href;
        }

        return current;
      }, content.links[0]?.href ?? "#home");

      setActiveHref(currentLink);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [content.links]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      setActiveHref(href);
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const renderLanguageToggle = (compact = false) => (
    <div
      className={`relative z-10 flex flex-col items-center rounded-full border border-border/50 bg-secondary/55 p-1 backdrop-blur-xl ${
        compact ? "w-full justify-center" : ""
      }`}
      aria-label={content.languageLabel}
      role="group"
    >
      {(["it", "en"] as const).map((option) => {
        const isActive = language === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            className={`rounded-full px-2.5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-foreground shadow-glow-sm"
                : "text-muted-foreground hover:text-foreground"
            } ${compact ? "flex-1" : ""}`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-3 right-3 z-50 transition-all duration-300 md:left-5 md:right-auto md:top-6 md:w-auto md:max-w-none"
      >
        {/* Soft contour */}
        <motion.div
          className="relative -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/12 via-accent/8 to-primary/12 blur-lg transition-opacity duration-500"
        />

        <div
          className={`relative glass flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-2 transition-all duration-300 md:min-h-[75vh] md:w-auto md:flex-col md:items-center md:justify-start md:px-3 md:py-5 md:gap-5 ${
            isScrolled
              ? "border-primary/25 backdrop-blur-2xl"
              : "backdrop-blur-xl"
          }`}
        >
          {/* Animated gradient overlay */}
          <div className="pointer-events-none relative inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/4 to-primary/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-lg font-bold gradient-text relative z-10"
            aria-label="Home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {profile.name.split(" ")[0] || "Developer"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-center gap-1 relative z-10">
            {content.links.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  aria-label={link.label}
                  title={link.label}
                  className={`text-md relative rounded-lg px-4 py-2 text-muted-foreground transition-all duration-200 hover:bg-primary/8 hover:text-foreground group ${
                    isActive ? "bg-primary/10 text-primary" : ""
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {link.icon && (
                    <link.icon className="w-4 h-6 inline-block mr-1 text-primary" />
                  )}
                  <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 rounded-lg border border-border/60 bg-secondary px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-card transition-opacity group-hover:opacity-100">
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          <div className="hidden md:flex flex-col items-center gap-5  relative z-10">
            {renderLanguageToggle()}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary/10 hover:text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-3 right-3 z-40 rounded-2xl p-2 md:hidden"
          >
            {/* Glow effect for mobile menu */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/12 via-accent/8 to-primary/12 blur-lg opacity-70" />

            {/* Glass container */}
            <div className="relative glass rounded-2xl p-6 backdrop-blur-2xl">
              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 opacity-50" />

              <div className="flex flex-col gap-4 relative z-10">
                {renderLanguageToggle(true)}
                {content.links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative rounded-lg px-4 py-3 text-foreground transition-all hover:bg-primary/8 hover:text-primary"
                  >
                    {link.label}
                    <span className="absolute bottom-2 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
