# U9GO UIKit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

**A UIKit-style React component and design-system template** built with iOS 26 visual language — glass morphism, spring-physics animations, semantic design tokens, and full dark mode. Optimized for AI-assisted development with Cursor.

> Live demo → **[kakenboku.github.io/U9GO](https://kakenboku.github.io/U9GO)**

---

## Why U9GO?

Most React starter templates ship bare-bones components with no visual identity. U9GO is opinionated:

- **iOS 26 design language** — `backdrop-blur`, layered glass surfaces, rounded everything
- **Spring-physics animations** — Framer Motion presets that feel native
- **Design token system** — colors, spacing, and radius defined once in `src/uikit/tokens.ts`
- **AI-dev ready** — `.cursorrc` config with project context, component conventions, and prompt hints pre-loaded
- **Page templates included** — Login, Dashboard, Settings, iOS-style list — ready to copy and ship

---

## Demo Pages

| Page | Route | Description |
|------|-------|-------------|
| Component Showcase | `/` | All components in one view |
| Interactive Gallery | `/example` | Live component playground |
| iOS 26 Style | `/ios26` | Glass-morphism demo with imagery |
| Login | `/login` | Sign-in / Sign-up page template |
| Dashboard | `/dashboard` | Admin dashboard with stats + table |
| Settings | `/settings` | iOS-style settings with toggles |

---

## Quick Start

```bash
git clone https://github.com/Kakenboku/U9GO.git
cd U9GO
npm install
npm run dev
```

Visit `http://localhost:5173`

---

## Components

| Component | Description |
|-----------|-------------|
| `Button` | 7 variants · 4 sizes · loading state · icon slots |
| `Card` | Standard card with Header / Content / Footer |
| `CardGlass` | Glass-morphism card with blur and hover lift |
| `Input` | Focus glow · icon prefix/suffix · error state |
| `Loading` | Spinner with optional label |
| `Logo` | Image + text fallback · 3 sizes |
| `ThemeToggle` | Light / dark mode switcher |
| `Navigation` | Horizontal nav bar |
| `GlassCircleButton` | Circular glass icon button |

---

## Design Tokens

```typescript
// src/uikit/tokens.ts
UIKitTokens.spacing     // xs → xxl (4px → 48px)
UIKitTokens.borderRadius // sm → full
UIKitTokens.fontSize     // xs → xxl
UIKitTokens.fontWeight   // normal → bold

// src/uikit/colors.ts
UIKitColors.primary   // #007AFF — iOS blue
UIKitColors.success   // #34C759
UIKitColors.danger    // #FF3B30
UIKitColors.warning   // #FF9500
```

---

## Animation Presets

```typescript
// src/lib/motion.ts
motionVariants.fadeInUp      // slide up + fade in on mount
motionVariants.fadeInDown    // slide down (for headers)
motionVariants.scaleIn       // scale from 95% + fade
motionVariants.glassHover    // scale 1.02 on hover, 0.98 on tap
```

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| React | 18.3 | UI framework |
| TypeScript | 5.6 | Type safety |
| Tailwind CSS | 3.4 | Utility styling |
| tailwind-variants | 0.2 | Component variant management |
| Framer Motion | 12 | Animations |
| Vite | 5 | Build tool |
| lucide-react | 0.344 | Icons |

---

## Project Structure

```
src/
├── components/ui/     # Reusable UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── card-glass.tsx
│   ├── input.tsx
│   ├── loading.tsx
│   ├── logo.tsx
│   ├── navigation.tsx
│   ├── theme-toggle.tsx
│   └── glass-circle-button.tsx
├── uikit/             # Design system
│   ├── tokens.ts      # Spacing, radius, typography
│   └── colors.ts      # Semantic color palette
├── lib/
│   ├── motion.ts      # Framer Motion presets
│   └── utils.ts       # cn() and helpers
└── pages/             # Full page templates
    ├── Example.tsx    # Component gallery
    ├── iOS26Demo.tsx  # Glass-style demo
    ├── LoginDemo.tsx  # Sign-in template
    ├── DashboardDemo.tsx
    └── SettingsDemo.tsx
```

---

## Contributing

We welcome contributions of all kinds. See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions, component checklist, and commit format.

---

## Roadmap

See [ROADMAP.md](ROADMAP.md) for planned components, page templates, npm publishing, and CLI tooling.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

## License

[MIT](LICENSE) © 2024 U9GO Team
