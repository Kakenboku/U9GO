# Changelog

All notable changes to U9GO UIKit are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [0.1.0] — 2024-06

### Added

- **Core component library**
  - `Button` — 7 variants (primary, secondary, outline, danger, success, warning, ghost), 4 sizes, loading state, left/right icon slots
  - `Card` / `CardGlass` — standard and glass-morphism card with Header, Content, Footer sub-components
  - `Input` — focus glow, icon prefix/suffix, error state
  - `Loading` — spinner with optional label text
  - `Logo` — image + text fallback, 3 sizes
  - `ThemeToggle` — light/dark mode switcher
  - `Navigation` — horizontal nav bar
  - `GlassCircleButton` — circular glass-effect icon button

- **Design system**
  - `UIKitTokens` — spacing, border radius, font size/weight tokens
  - `UIKitColors` — iOS 26 semantic color palette
  - `motionVariants` — Framer Motion presets: fadeInUp, fadeInDown, scaleIn, glassHover

- **Demo pages**
  - `/` — component showcase and quick-start guide
  - `/example` — interactive component gallery with code snippets
  - `/ios26` — full iOS 26 glass-style demo with background imagery
  - `/login` — sign-in page template
  - `/dashboard` — admin dashboard template
  - `/settings` — settings page template

- **Project files**
  - MIT License
  - CONTRIBUTING.md
  - ROADMAP.md
  - Vercel deployment config
  - GitHub Actions deploy workflow

### Tech Stack

- React 18.3 + TypeScript 5.6
- Tailwind CSS 3.4 + tailwind-variants
- Framer Motion 12
- Vite 5
- lucide-react icons
