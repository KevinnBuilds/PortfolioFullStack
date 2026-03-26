# Portfolio - Full-Stack Developer

Sito portfolio moderno e responsive pensato per presentare il mio lavoro come Full-Stack Developer. Il progetto e sviluppato come Single Page Application con React, TypeScript, Vite e un'interfaccia glassmorphism animata.

## Panoramica

Il sito include sezioni dedicate a:

- presentazione personale
- competenze tecniche
- progetti selezionati
- contatti e link social

L'applicazione supporta anche il cambio lingua `italiano/inglese` tramite contesto React e persistenza in `localStorage`.

## Funzionalita principali

- Interfaccia moderna con stile glassmorphism, gradienti e animazioni fluide
- Layout responsive ottimizzato per mobile, tablet e desktop
- Navigazione single-page con scroll fluido tra le sezioni
- Sezioni `Hero`, `About`, `Skills`, `Projects` e `Contact`
- Progetti mostrati con contenuti dettagliati e struttura dati separata
- Supporto multilingua `IT/EN`
- Analytics integrate con `@vercel/analytics`
- Build veloce e sviluppo rapido grazie a `Vite`

## Nota importante sul form contatti

Il form presente nella sezione contatti e attualmente **solo dimostrativo**: al submit non invia dati a un backend o a un servizio esterno, ma esegue un `console.log` locale e mostra uno stato di successo simulato.

Se vuoi usare il portfolio in produzione con un form reale, va integrato con un provider esterno o con una API dedicata.

## Stack tecnologico

### Core

- `React 18`
- `TypeScript`
- `Vite`
- `React Router DOM`

### UI e styling

- `Tailwind CSS`
- `shadcn/ui`
- `Radix UI`
- `Framer Motion`
- `Lucide React`
- `CSS Custom Properties`

### Stato, form e validazione

- `@tanstack/react-query`
- `react-hook-form`
- `zod`

### Librerie aggiuntive

- `sonner`
- `date-fns`
- `class-variance-authority`
- `tailwind-merge`
- `next-themes`

### Tooling

- `ESLint`
- `typescript-eslint`
- `PostCSS`
- `Autoprefixer`

## Struttura del progetto

```text
Portfolio/
├── public/
│   ├── code.png
│   ├── cv.pdf
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── base/
│   │   ├── foundations/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── ARCHITECTURE.md
├── eslint.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Architettura dei contenuti

I dati principali del portfolio sono separati dal rendering:

- `src/data/profile.ts`: informazioni personali e link
- `src/data/projects.ts`: elenco dei progetti
- `src/data/skills.ts`: categorie e competenze
- `src/data/translations.ts`: testi localizzati in italiano e inglese
- `src/context/LanguageContext.tsx`: gestione della lingua corrente

Per una panoramica piu tecnica dell'architettura del progetto, consulta `ARCHITECTURE.md`.

## Avvio del progetto

### Prerequisiti

- `Node.js` 18 o superiore
- `npm`, `yarn` o `bun`

### Installazione

```bash
npm install
```

### Avvio in sviluppo

```bash
npm run dev
```

Il server di sviluppo parte di default su `http://localhost:8080`.

### Build di produzione

```bash
npm run build
```

L'output viene generato nella cartella `dist/`.

### Anteprima della build

```bash
npm run preview
```

## Script disponibili

- `npm run dev`: avvia il server di sviluppo
- `npm run build`: crea la build di produzione
- `npm run build:dev`: crea una build in modalita development
- `npm run preview`: esegue l'anteprima locale della build
- `npm run lint`: esegue il linting del progetto

## Personalizzazione

### Aggiornare i contenuti

- Modifica `src/data/profile.ts` per nome, titolo, descrizione, contatti e CV
- Modifica `src/data/projects.ts` per aggiungere o aggiornare i progetti
- Modifica `src/data/skills.ts` per aggiornare stack e categorie
- Modifica `src/data/translations.ts` per mantenere allineate le versioni italiana e inglese

### Aggiornare stile e design system

- `src/index.css`: variabili CSS globali, gradienti e classi custom
- `tailwind.config.ts`: tema Tailwind, font, animazioni e shadow
- componenti in `src/components/`: struttura UI e sezioni del sito

## Deployment

Il progetto e adatto al deploy su piattaforme per siti statici, ad esempio:

- Vercel
- Netlify
- Cloudflare Pages
- Render
- GitHub Pages

## Cosa mancava o non era corretto nel README precedente

- Diverse sezioni erano formattate male e risultavano difficili da leggere
- La struttura del progetto riportava `dev-showcase/`, ma il repository attuale e `Portfolio`
- Non veniva menzionato il supporto multilingua presente nel codice
- Il form contatti era descritto in modo troppo implicito, senza chiarire che oggi non invia dati reali
- Mancava un riferimento esplicito a `ARCHITECTURE.md`
- Alcuni elenchi di componenti e librerie erano poco utili per chi legge il README e non riflettevano bene le priorita del progetto

## Licenza

Progetto personale e privato.

## Autore

Kevin

- Email: `kevins.dvp@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/kevin-marku-832831304/`
- GitHub: `https://github.com/KevinMakeMoney`
