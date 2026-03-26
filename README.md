# Portfolio - Full-Stack Developer

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with cutting-edge web technologies and featuring a sleek glassmorphism design with smooth animations.

## Features

- **Modern UI/UX**: Glassmorphism design with gradient effects and smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Interactive Sections**:
  - **Hero**: Introduction with quick tech stack badges
  - **About**: Personal story and core competencies
  - **Skills**: Comprehensive tech stack organized by categories
  - **Projects**: Featured client projects and internal tools with detailed modals
  - **Contact**: Contact form and social links
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Analytics**: Integrated Vercel Analytics for insights

## Tech Stack

### Core Framework

- **React 18.3** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library built on Radix UI
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **CSS Custom Properties** - Theming system

### UI Components (Radix UI)

- Accordion, Alert Dialog, Avatar, Checkbox, Dialog
- Dropdown Menu, Hover Card, Popover, Progress
- Select, Separator, Slider, Switch, Tabs
- Toast, Tooltip, and more

### State Management & Data

- **TanStack Query (React Query)** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Additional Libraries

- **Sonner** - Toast notifications
- **date-fns** - Date utilities
- **class-variance-authority** - Component variants
- **tailwind-merge** - Merge Tailwind classes
- **next-themes** - Theme management

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Analytics & Deployment

- **Vercel Analytics** - Web analytics

dev-showcase/
├── src/
│ ├── components/
│ │ ├── base/ # Base components
│ │ ├── foundations/ # Foundation components
│ │ ├── layout/ # Layout components (Navbar, Footer)
│ │ ├── sections/ # Page sections (Hero, About, Skills, Projects, Contact)
│ │ └── ui/ # shadcn/ui components
│ ├── data/ # Data files (profile, projects, skills)
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions
│ ├── pages/ # Page components
│ ├── App.tsx # Main app component
│ ├── main.tsx # Entry point
│ └── index.css # Global styles
├── public/ # Static assets
├── package.json # Dependencies
├── vite.config.ts # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json # TypeScript configuration

## 🎨 Design System### Color Palette- **Primary**: Cyan/Teal gradient (`hsl(175 80% 50%)`)- **Accent**: Purple gradient (`hsl(265 90% 60%)`)- **Background**: Dark theme with glassmorphism effects- **Custom gradients**: Primary, text, card, and glow gradients### Key Features- Glassmorphism effects with backdrop blur- Smooth animations and transitions- Responsive grid layouts- Interactive hover states- Gradient text effects- Custom scroll indicators## 🚀 Getting Started### Prerequisites- **Node.js** (v18 or higher recommended)- **npm** or **yarn** or **bun**### Installation1. **Clone the repository** git clone <YOUR_GIT_URL> cd dev-showcase

Install dependencies
npm install # or yarn install # or bun install
Start the development server
npm run dev # or yarn dev # or bun dev
Open your browser
Navigate to http://localhost:8080 (or the port shown in terminal)
Build for Production
npm run build
The production build will be in the dist/ directory.
Preview Production Build
npm run preview
📝 Customization
Update Profile Information
Edit src/data/profile.ts:
Name, title, tagline
Description and hero description
Contact information (email, LinkedIn, GitHub)
CV URL
Availability status
Add/Edit Projects
Edit src/data/projects.ts:
Add new projects to the projects array
Include project details, features, tech stack
Set category as "featured" or "internal"
Add live URL if available
Update Skills
Edit src/data/skills.ts:
Modify skill categories
Add or remove skills
Update quick stack badges in Hero section
Styling
Global styles: src/index.css
Tailwind config: tailwind.config.ts
Component styles: Inline Tailwind classes in components
🎯 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run build:dev - Build in development mode
npm run preview - Preview production build
npm run lint - Run ESLint
🌐 Deployment
Vercel (Recommended)
Push your code to GitHub
Import project in Vercel
Deploy automatically on push
Other Platforms
The project can be deployed to any platform that supports static sites:
Netlify
GitHub Pages
Render
Cloudflare Pages
📄 License
This project is private and personal.
👤 Author
Kevin
Email: kevins.dvp@gmail.com
LinkedIn: Kevin Marku
GitHub: @KevinMakeMoney
