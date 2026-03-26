import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CircleArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const content = translations[language].navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const renderLanguageToggle = (compact = false) => (
    <div
      className={`relative z-10 flex flex-col items-center rounded-full border border-border/60 bg-secondary/60 p-1 backdrop-blur-xl ${
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
                ? "bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-glow-sm"
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
        {/* Glow effect - più pronunciato quando scrollato */}
        <motion.div
          className={`relative -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl transition-opacity duration-500 `}
        />

        <div
          className={`relative glass flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-2 transition-all duration-300 md:min-h-[75vh] md:w-auto md:flex-col md:items-center md:justify-start md:px-3 md:py-5 md:gap-5 ${
            isScrolled
              ? "backdrop-blur-2xl border-primary/30"
              : "backdrop-blur-xl"
          }`}
        >
          {/* Animated gradient overlay */}
          <div className="relative inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-lg font-bold gradient-text relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {profile.name.split(" ")[0] || "Developer"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-center gap-1 relative z-10">
            {content.links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-2 text-md text-muted-foreground hover:text-foreground transition-all duration-200 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent/10 hover:to-primary/10 relative group"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {link.icon && (
                  <link.icon className="w-4 h-6 inline-block mr-1 text-primary" />
                )}
                {/* Underline effect on hover */}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex flex-col items-center gap-5  relative z-10">
            {renderLanguageToggle()}
            <Button
              variant="hero"
              size="icon"
              onClick={() => scrollToSection("#contact")}
            >
              <CircleArrowDown className="w-5 h-4  animate-bounce" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary/10 hover:text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-60" />

            {/* Glass container */}
            <div className="relative glass rounded-2xl p-6 backdrop-blur-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 opacity-50 pointer-events-none" />

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
                    className="px-4 py-3 text-foreground hover:text-primary transition-all rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent/10 hover:to-primary/10 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: content.links.length * 0.05 }}
                >
                  <Button
                    variant="hero"
                    className="mt-2 w-full"
                    onClick={() => scrollToSection("#contact")}
                  >
                    {content.cta}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
