# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
npm run preview      # Preview production build
```

## Architecture

**Hannah's Food Duet** is a meal planning SPA built with React + TypeScript + Vite. It's a two-user app: Hannah selects meals, Stefan views them.

### Data Layer

All persistence uses **localStorage** — there is no backend or API:
- `"hannahs-meals"` — available meal options (`Meal[]`)
- `"meal-history"` — selection history (`MealSelection[]`)

CRUD operations are centralized in `src/data/meals.ts`.

### Routing (4 pages)

| Route | Page | Purpose |
|-------|------|---------|
| `/` | MealsPage | Hannah selects today's meal |
| `/verwalten` | ManageMealsPage | Add/delete meal options |
| `/verlauf` | HistoryPage | Chronological selection history |
| `/stefan` | StefanPage | Read-only view of latest selection for Stefan |

### Key Conventions

- **Path alias:** `@/*` maps to `./src/*`
- **Class names:** Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- **UI components:** shadcn/ui components live in `src/components/ui/` — prefer these over custom alternatives
- **TypeScript:** Strict mode is disabled; implicit `any` and unused vars are allowed by config
- **Language:** UI text is in German throughout

### Tech Stack

- **React 18** + **React Router v6** + **TanStack React Query v5**
- **Tailwind CSS** + **shadcn/ui** (Radix UI primitives)
- **React Hook Form** + **Zod** for form validation
- **Vitest** + **Testing Library** for tests (jsdom environment)
- **Sonner** for toast notifications
