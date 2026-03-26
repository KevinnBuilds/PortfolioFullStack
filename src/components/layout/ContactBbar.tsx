import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, Mail, Linkedin, Github, CheckCircle } from "lucide-react";

export const ContactBar = () => {
  return (
    <div
      className={`relative glass flex w- items-center justify-between gap-3 rounded-2xl px-4 py-2 transition-all duration-300 md:min-h-[90vh] md:w-auto md:flex-col md:items-center md:justify-start md:px-3 md:py-5 md:gap-5 `}
    ></div>
  );
};
