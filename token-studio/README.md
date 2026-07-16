# Razieh.dev Portfolio

One-page portfolio for Razieh Dorrazaei, built with React, TypeScript and Vite.

The page presents a frontend developer profile, selected work, skills, process and contact links in one scrollable experience.

## Current Status

This project is in active portfolio development.

Already done:

- one-page structure
- hero section with slogan: `Engineered for the Web`
- animated abstract reflection background
- project cards
- contact section
- project specification
- audit and task checklist
- basic development guidelines

Still planned:

- replace placeholder projects with final real projects
- clean up unused dependencies from earlier experiments
- split large files into smaller components
- improve README screenshots and deployment notes
- add automated tests

## Tech Stack

- React 19
- TypeScript
- Vite 8
- CSS custom properties
- Lucide React icons
- ESLint

Some dependencies from earlier experiments are still installed but not currently used in the app, for example TanStack Router, Tailwind CSS, DaisyUI and Zustand. See [AUDIT.md](./AUDIT.md) for the cleanup plan.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run lint` | Runs ESLint |
| `npm run build` | Runs TypeScript build and Vite production build |
| `npm run preview` | Serves the production build locally |

## Project Structure

```text
.
├── public/
│   ├── glow-shop-home.png
│   ├── lifestyle-quiz-home.png
│   └── updated-CV.pdf
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── components/
│   ├── lib/
│   ├── store/
│   └── main.tsx
├── AGENTS.md
├── AUDIT.md
├── spec.md
└── README.md
```

The current implementation still keeps most UI and data in `src/App.tsx` and most styling in `src/App.css`. The planned direction is to split the app into `components/`, `sections/` and `data/` modules.

## Main Files

- [src/App.tsx](./src/App.tsx): portfolio content, sections and project cards
- [src/App.css](./src/App.css): global styling, hero design, responsive layout and animations
- [AGENTS.md](./AGENTS.md): development rules for junior developers and AI agents
- [AUDIT.md](./AUDIT.md): ordered checklist for finishing the project
- [spec.md](./spec.md): product and technical specification

## Design Direction

The design uses:

- dark cinematic background
- soft purple, blue and orange reflection effects
- large expressive hero typography
- warm cream and gold text colors
- responsive project grids
- simple one-page navigation

The hero slogan is:

```text
Engineered
for the Web
```

## Development Principles

This project should stay understandable for junior developers.

Follow:

- KISS: keep the implementation simple
- YAGNI: do not build features before they are needed
- SOLID: keep components focused and props clear

Read [AGENTS.md](./AGENTS.md) before making larger changes.

## Quality Checklist

Before pushing changes, run:

```bash
npm run lint
npm run build
```

Also check:

- the page works on mobile and desktop
- links are not broken
- project cards do not show empty buttons
- text is readable on the animated background
- no placeholder content is accidentally presented as final work

## Documentation

This repository includes three project documents:

- [spec.md](./spec.md): what the portfolio should be and how it should work
- [AUDIT.md](./AUDIT.md): step-by-step checklist for finishing the project
- [AGENTS.md](./AGENTS.md): coding and collaboration rules

Use them together:

1. Read `spec.md` to understand the product.
2. Use `AUDIT.md` to choose the next task.
3. Follow `AGENTS.md` while implementing.

## Deployment

The project is a Vite app. A production build is generated in `dist/`.

```bash
npm run build
```

Possible hosting options:

- GitHub Pages
- Netlify
- Vercel

If the site is deployed under a subpath, configure the Vite `base` option before building.

## Repository

GitHub repository:

```text
git@github.com:razidorra/Portfolio.git
```

## Author

Razieh Dorrazaei

- GitHub: [github.com/razidorra](https://github.com/razidorra)
- LinkedIn: [linkedin.com/in/Razidorra](https://linkedin.com/in/Razidorra)
- Email: [dorra.razi@gmail.com](mailto:dorra.razi@gmail.com)
