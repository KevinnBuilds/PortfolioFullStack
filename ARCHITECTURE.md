# Architecture DocumentationThis document provides a comprehensive guide to the project architecture, patterns, and conventions for AI assistants working on this codebase.## 📋 Table of Contents1. [Project Overview](#project-overview)2. [Tech Stack](#tech-stack)3. [Project Structure](#project-structure)4. [Design System](#design-system)5. [Component Architecture](#component-architecture)6. [Data Management](#data-management)7. [Styling Conventions](#styling-conventions)8. [Animation Patterns](#animation-patterns)9. [Routing](#routing)10. [Conventions & Best Practices](#conventions--best-practices)---## Project OverviewThis is a **modern portfolio website** for a Full-Stack Developer built as a Single Page Application (SPA). The site features:- **Glassmorphism design** with Apple-like effects- **Smooth animations** using Framer Motion- **Responsive design** for all devices- **Single-page navigation** with smooth scrolling- **Interactive sections**: Hero, About, Skills, Projects, Contact### Key Characteristics- **Type-safe**: Full TypeScript implementation- **Component-based**: React functional components with hooks- **Performance-focused**: Vite for fast builds, optimized animations- **Modern UI**: shadcn/ui components + custom glassmorphism effects---## Tech Stack### Core Framework- **React 18.3** - UI library (functional components, hooks)- **TypeScript 5.8** - Type safety- **Vite 5.4** - Build tool and dev server- **React Router DOM 6.30** - Client-side routing### UI & Styling- **Tailwind CSS 3.4** - Utility-first CSS framework- **shadcn/ui** - Component library (Radix UI primitives)- **Framer Motion 12.23** - Animation library- **Lucide React 0.462** - Icon library- **CSS Custom Properties** - Theming system### State Management- **TanStack Query (React Query) 5.83** - Server state (currently minimal usage)- **React Hooks** - Local component state (`useState`, `useEffect`, `useRef`)- **Framer Motion** - Animation state### Form Handling- **React Hook Form 7.61** - Form management- **Zod 3.25** - Schema validation### Development Tools- **ESLint** - Code linting- **TypeScript ESLint** - TS-specific linting- **PostCSS** - CSS processing- **Autoprefixer** - Vendor prefixes### Analytics- **Vercel Analytics 1.6** - Web analytics---## Project Structure

dev-showcase/
├── src/
│ ├── components/
│ │ ├── base/ # Base components (custom buttons)
│ │ ├── foundations/ # Foundation components
│ │ ├── layout/ # Layout components
│ │ │ ├── Navbar.tsx # Navigation bar with glass effect
│ │ │ └── Footer.tsx # Footer with social links
│ │ ├── sections/ # Page sections (main content)
│ │ │ ├── Hero.tsx # Hero section with intro
│ │ │ ├── About.tsx # About section with highlights
│ │ │ ├── Skills.tsx # Skills/tech stack section
│ │ │ ├── Projects.tsx # Projects showcase with modals
│ │ │ └── Contact.tsx # Contact form section
│ │ └── ui/ # shadcn/ui components (don't modify)
│ ├── data/ # Static data files
│ │ ├── profile.ts # Profile information
│ │ ├── projects.ts # Projects data with interfaces
│ │ └── skills.ts # Skills categories data
│ ├── hooks/ # Custom React hooks
│ │ ├── use-mobile.tsx # Mobile detection hook
│ │ └── use-toast.ts # Toast notifications hook
│ ├── lib/ # Utility functions
│ │ ├── utils.ts # cn() function (clsx + tailwind-merge)
│ │ └── utils/ # Additional utilities
│ ├── pages/ # Page components
│ │ ├── Index.tsx # Main page (renders all sections)
│ │ └── NotFound.tsx # 404 page
│ ├── App.tsx # Root component with providers
│ ├── main.tsx # Entry point
│ └── index.css # Global styles + CSS variables
├── public/ # Static assets
│ ├── cv.pdf # CV file
│ └── ...
├── package.json # Dependencies
├── vite.config.ts # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json # TypeScript configuration
---## Design System### Color PaletteDefined in `src/index.css` using CSS custom properties:--primary: 175 80% 50% /_ Cyan/Teal _/--accent: 265 90% 60% /_ Purple _/--background: 222 47% 6% /_ Dark background _/--foreground: 210 40% 98% /_ Light text _/--secondary: 222 47% 12% /_ Secondary background _/--muted: 222 30% 15% /_ Muted elements _/--border: 202 30% 18% /_ Borders _/
Glassmorphism System
Three glass variants defined in src/index.css:
.glass - Standard glass effect (bg-glass/80 backdrop-blur-xl)
.glass-light - Lighter variant (bg-glass/50 backdrop-blur-lg)
.glass-heavy - Heavier variant (bg-glass/90 backdrop-blur-2xl)
Gradient System
Custom gradients defined in CSS variables:
--gradient-primary: Primary gradient (cyan → blue → purple)
--gradient-text: Text gradient for headings
--gradient-card: Card background gradient
--gradient-glow: Glow effect gradient
Typography
Font Family: Inter (sans-serif), JetBrains Mono (monospace)
Headings: Bold, tight tracking
Body: Regular weight, relaxed leading
Spacing & Layout
Section Container: .section-container class (max-w-7xl, centered, responsive padding)
Section Padding: py-24 sm:py-32 (vertical padding)
Card Padding: p-6 sm:p-7 (responsive padding)
Border Radius: rounded-2xl (cards), rounded-3xl (larger elements), rounded-full (badges)
Component Architecture
Component Types
Layout Components (components/layout/)
Navbar.tsx: Fixed navigation with glass effect, scroll detection, mobile menu
Footer.tsx: Footer with social links and copyright
Section Components (components/sections/)
Each section is a self-contained component
Uses useInView from Framer Motion for scroll animations
Follows consistent structure: Background effects → Content → Animations
UI Components (components/ui/)
shadcn/ui components - DO NOT MODIFY unless necessary
Built on Radix UI primitives
Styled with Tailwind CSS
Base Components (components/base/)
Custom button component with variants
Component Patterns
Section Component Structure
export const SectionName = () => { const ref = useRef(null); const isInView = useInView(ref, { once: true, margin: "-100px" }); return ( <section id="section-id" className="relative py-24 sm:py-32 overflow-hidden"> {/_ Background Effects _/} <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" /> <div className="absolute ... bg-primary/5 rounded-full blur-3xl animate-float" /> {/_ Grid Pattern _/} <div className="absolute inset-0 opacity-[0.015]" style={{...}} /> <div ref={ref} className="relative z-10"> {/_ Section Header _/} <motion.div className="section-container text-center mb-20"> {/_ Badge, Title, Description _/} </motion.div> {/_ Content _/} <div className="section-container"> {/_ Main content _/} </div> </div> </section> );};
Glass Effect Pattern (Apple-like)
Used in cards and interactive elements:

<div className="relative group">  {/* Glow effect on hover */}  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />    {/* Glass container */}  <div className="relative glass p-6 rounded-3xl card-interactive">    {/* Icon with gradient overlay */}    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-primary/20 ...">      <div className="absolute inset-0 bg-gradient-to-br ... opacity-0 group-hover:opacity-100 transition-opacity" />      <Icon className="w-5 h-5 text-primary relative z-10" />    </div>        {/* Content */}  </div></div>
Data Management
Data Files (src/data/)
All static data is stored in TypeScript files with proper interfaces:
profile.ts
export const profile = {  name: "Kevin",  title: "Full-Stack Developer",  tagline: "Building Modern Web Experiences",  description: "...",  heroDescription: "...",  email: "kevins.dvp@gmail.com",  linkedin: "...",  github: "...",  cvUrl: "/cv.pdf",  availability: "...",};
projects.ts
Defines Project interface
Exports projects array and filtered arrays (featuredProjects, internalProjects)
Each project has: id, name, type, hint, goal, features[], stack[], category, liveUrl, detailsUrl
skills.ts
Defines SkillCategory interface
Exports skillCategories array
Exports quickStackBadges for Hero section
Data Usage Pattern
import { profile } from "@/data/profile";import { featuredProjects } from "@/data/projects";import { skillCategories } from "@/data/skills";
Important: Always import from @/data/ using the @ alias.
Styling Conventions
Tailwind CSS Usage
Utility Classes: Use Tailwind utilities directly in JSX
Responsive Design: Mobile-first approach (sm:, md:, lg:, xl:)
Custom Classes: Use cn() utility for conditional classes
CSS Variables: Access via hsl(var(--variable-name))
Class Naming
Use Tailwind utilities directly
Custom classes: .glass, .glass-light, .glass-heavy, .gradient-text, .badge-tech, .card-interactive, .section-container
No BEM or custom naming conventions needed
Color Usage
// Text colorsclassName="text-foreground"        // Primary textclassName="text-muted-foreground"  // Muted textclassName="text-primary"           // Primary accentclassName="text-accent"            // Accent color// Background colorsclassName="bg-background"          // Main backgroundclassName="bg-secondary"           // Secondary backgroundclassName="bg-primary/20"           // Primary with opacityclassName="bg-accent/10"           // Accent with opacity
Spacing
Use Tailwind spacing scale (0.25rem increments)
Common: gap-2, gap-3, gap-4, gap-6
Padding: p-4, p-6, p-8
Margin: mb-4, mb-6, mb-8, mb-10, mb-20
Animation Patterns
Framer Motion Usage
Scroll-triggered Animations
const ref = useRef(null);const isInView = useInView(ref, { once: true, margin: "-100px" });<motion.div  initial={{ opacity: 0, y: 30 }}  animate={isInView ? { opacity: 1, y: 0 } : {}}  transition={{ duration: 0.6, delay: 0.1 }}>
Hover Animations
<motion.div  whileHover={{ scale: 1.05, y: -4 }}  whileTap={{ scale: 0.95 }}  transition={{ duration: 0.2 }}>
Staggered Animations
{items.map((item, index) => (  <motion.div    key={item.id}    initial={{ opacity: 0, y: 20 }}    animate={isInView ? { opacity: 1, y: 0 } : {}}    transition={{ delay: 0.1 + index * 0.1 }}  >
Animation Easing
Standard easing function used throughout:
ease: [0.22, 1, 0.36, 1]  // Custom cubic-bezier
Common Animations
Fade In: opacity: 0 → 1
Slide Up: y: 30 → 0
Scale: scale: 0.95 → 1
Float: CSS animation animate-float (6s infinite)
Routing
Current Setup
Single Page Application (SPA)
React Router DOM for routing structure
Main route: / → Index.tsx
404 route: * → NotFound.tsx
Navigation Pattern
Smooth Scroll Navigation (not using React Router links):
const scrollToSection = (href: string) => {  const element = document.querySelector(href);  if (element) {    element.scrollIntoView({ behavior: "smooth" });  }};<a href="#about" onClick={(e) => {  e.preventDefault();  scrollToSection("#about");}}>
Section IDs
All sections have IDs matching navigation:
#home - Hero section
#about - About section
#stack - Skills section
#projects - Projects section
#contact - Contact section
Conventions & Best Practices
File Naming
Components: PascalCase (Hero.tsx, Navbar.tsx)
Utilities: camelCase (utils.ts, use-mobile.tsx)
Data files: camelCase (profile.ts, projects.ts)
Import Order
React and React-related imports
Third-party libraries
UI components
Custom components
Utilities and hooks
Data files
Types and interfaces
import { useState, useRef } from "react";import { motion, useInView } from "framer-motion";import { Code2, Database } from "lucide-react";import { Button } from "@/components/ui/button";import { profile } from "@/data/profile";
Component Structure
// 1. Imports// 2. Types/Interfaces (if needed)// 3. Constants (if needed)// 4. Componentexport const ComponentName = () => {  // 5. Hooks  // 6. State  // 7. Effects  // 8. Handlers  // 9. Render  return (...);};
TypeScript
Always use TypeScript - no any types
Define interfaces for data structures
Use type inference where possible
Export types/interfaces when shared
Accessibility
Use semantic HTML (<section>, <nav>, <footer>)
Add aria-label to icon-only buttons
Use proper heading hierarchy (h1 → h2 → h3)
Ensure keyboard navigation works
Performance
Use once: true in useInView to prevent re-animations
Lazy load images if needed
Optimize animations (use will-change sparingly)
Use React.memo for expensive components if needed
Responsive Design
Mobile-first: Base styles for mobile, then sm:, md:, lg:, xl:
Test on multiple screen sizes
Use use-mobile hook when needed for conditional rendering
Code Style
Functional components only (no class components)
Hooks for state and side effects
Arrow functions for components
Destructuring for props and state
Template literals for dynamic strings
Comments
Use comments for complex logic
Document non-obvious decisions
Remove TODO comments when done
Keep comments concise and clear
Common Patterns
Section Background Pattern
{/* Enhanced Background */}<div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" /><div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl animate-float" /><div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float animation-delay-300" />{/* Grid Pattern */}<div  className="absolute inset-0 opacity-[0.015]"  style={{    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,    backgroundSize: "60px 60px",  }}/>
Badge Pattern
<span className="inline-flex items-center justify-center min-w-fit px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/80 text-foreground/90 border border-border/50 transition-all duration-200 whitespace-nowrap hover:border-primary/50 hover:text-primary">  Badge Text</span>
Button Pattern
<Button  variant="hero"        // or "heroOutline", "glass"  size="sm"            // or "md", "lg"  onClick={handler}  className="group"    // for group hover effects>  Button Text  <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
Important Notes for AI Assistants
⚠️ DO NOT:
Modify shadcn/ui components in components/ui/ unless absolutely necessary
Change the data structure in data/ files without updating interfaces
Remove glassmorphism effects - they're core to the design
Break responsive design - always test mobile-first
Add unnecessary dependencies - check if functionality exists first
Use inline styles - use Tailwind classes instead
Create new CSS files - use Tailwind or add to index.css
✅ DO:
Follow existing patterns - check similar components first
Use TypeScript - type everything properly
Maintain consistency - match existing style and structure
Test animations - ensure smooth performance
Use semantic HTML - proper HTML structure
Keep components focused - single responsibility
Update this doc - if architecture changes significantly
🔍 When Adding Features:
Check if similar functionality exists
Follow existing patterns and conventions
Use existing utility functions (cn(), etc.)
Maintain design system consistency
Test on multiple screen sizes
Ensure animations are smooth
Quick Reference
Path Aliases
@/ → src/
Use @/components/... for component imports
Use @/data/... for data imports
Use @/lib/... for utility imports
Common Utilities
cn(...) - Merge Tailwind classes (from @/lib/utils)
useInView(ref, { once: true, margin: "-100px" }) - Scroll detection
section-container - Container class for sections
Common Classes
.glass - Glassmorphism effect
.gradient-text - Gradient text effect
.badge-tech - Tech badge styling
.card-interactive - Interactive card with hover effects
.section-container - Responsive section container
