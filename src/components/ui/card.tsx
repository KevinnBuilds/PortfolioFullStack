import React from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { translations } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";
import { ArrowDown, Download, Sparkles, Code2, SearchCode } from "lucide-react";

const Card = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { language } = useLanguage();
  const content = translations[language].hero;

  return (
    <div
      className="relative h-[260px] w-[340px] [perspective:1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className=" relative inset-0 rounded-3xl  flex items-center justify-center border border-white/10  p-6 text-primary bg-trasparent [backface-visibility:hidden]">
          <motion.span className="max-w-[22ch] flex items-center justify-center text-center text-2xl font-bold tracking-tight">
            <SearchCode className="w-6 h-6 mr-2 text-primary" />
            Cliccami e Scopri di più!
          </motion.span>
        </div>
        <div className="absolute inset-0 rounded-3xl flex flex-col gap-5 justify-center items-center border border-white/10  bg-trasparent p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center "
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <Code2 className="w-8 h-8 text-primary" />
              <p className="text-sm font-semibold leading-relaxed max-w-[22ch]">
                Visualizza i miei progetti o scarica il mio CV!
              </p>
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProjects}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.primaryCta}
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.25 }}>
            <Button variant="heroOutline" size="lg" asChild className="group">
              <a href={profile.cvUrl} download>
                <Download className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                {content.secondaryCta}
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
