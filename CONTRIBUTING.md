# Contributing to U9GO UIKit

Thank you for your interest in contributing! U9GO UIKit is an open-source React component library built for modern AI-assisted development workflows.

## Ways to Contribute

- **Report bugs** — Open an issue with a clear description and reproduction steps
- **Request features** — Open an issue tagged `enhancement`
- **Submit PRs** — Fix bugs, add components, improve docs
- **Share examples** — Add page templates to `src/pages/`

## Development Setup

```bash
git clone https://github.com/Kakenboku/U9GO.git
cd U9GO
npm install
npm run dev
```

Visit `http://localhost:5173` to see the component showcase.

## Adding a New Component

1. Create `src/components/ui/<component-name>.tsx`
2. Use `tailwind-variants` (`tv`) for variant management
3. Export from `src/components/ui/index.ts`
4. Add a usage demo to `src/pages/Example.tsx` or create a new page
5. Document props via TypeScript interfaces — no separate docs file needed

### Component Checklist

- [ ] Fully typed props with TypeScript
- [ ] Dark mode support via `dark:` Tailwind classes
- [ ] Keyboard accessible (tab-navigable, visible focus ring)
- [ ] Uses design tokens from `src/uikit/tokens.ts`
- [ ] Framer Motion animations follow patterns in `src/lib/motion.ts`

## Commit Message Format

```
feat: add Switch component with iOS-style animation
fix: Button loading state clears icon on re-render
docs: add Dashboard example page
chore: bump framer-motion to 12.x
```

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Include a short description of **why** the change is needed
- Screenshots or screen recordings are welcome for visual changes
- PRs must pass `npm run type-check` and `npm run lint`

## Design Principles

U9GO UIKit follows iOS 26 visual language:
- **Glass morphism** — `backdrop-blur` + semi-transparent backgrounds
- **Spring physics** — `stiffness: 400, damping: 17` for button interactions
- **Semantic color tokens** — always use `UIKitColors` / `UIKitTokens`, never hardcode hex values
- **Minimal surface area** — prefer composing existing primitives over new abstractions

## Code of Conduct

Be constructive and kind. We welcome contributors of all experience levels.
