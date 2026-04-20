# GigaCorp — Enterprise Technology Portfolio Website

A single-page portfolio website for GigaCorp, a digital services startup founded by Dalton B. Mangrum. Built with React, Vite, and Tailwind CSS.

GigaCorp is affiliated with [gigadude.com](https://gigadude.com) and [daltonmangrum.com](https://daltonmangrum.com).

## Sections

- **Navbar** — Fixed navigation header
- **Hero** — Animated particle canvas background with headline and CTAs
- **Stats** — Key company metrics
- **Services** — Cloud Infrastructure, AI & ML, Product Engineering, Data & Analytics, Cybersecurity, Digital Transformation
- **Portfolio** — Project showcase
- **About** — Company overview
- **Team** — Team member profiles
- **Testimonials** — Client testimonials
- **Contact** — Contact form
- **Footer** — Site footer with links

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling with custom brand and dark color palettes
- **ESLint** — Linting with React-specific plugins
- **Fonts** — Inter (body) and Syne (display headings)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Page section components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── About.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx          # Root component
├── App.css          # App-level styles
├── index.css        # Global/Tailwind styles
└── main.jsx         # Entry point
```
