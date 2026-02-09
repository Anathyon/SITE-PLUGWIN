# Copilot instructions for Site Plugwin

This file gives focused, actionable guidance for AI coding agents working in this repository.

## Quick context
- Tech stack: React 19 + TypeScript + Vite. Styles: Tailwind CSS + `tailwind-merge`.
- Build tooling: `vite`, TypeScript project references. Tests: `vitest` (jsdom). Lint: `eslint`.

## How to run / build / test
- Start dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` — runs `tsc -b && vite build`. Important: `tsc -b` uses project references from `tsconfig.json`.
- Test: `npm run test` (vitest). Vitest config is in `vite.config.ts` and uses `src/test/setup.ts`.
- Lint: `npm run lint` (eslint).

## Project layout & big picture
- Entry: `src/main.tsx` mounts the app and uses `react-router-dom`.
- App routes and primary page composition live in `src/App.tsx` (routes map to components under `src/components/pages` and `src/components/sections`).
- UI primitives and small components live under `src/components/ui` (example: `Notification.tsx`).
- Data-driven content is in `src/data/content.ts` — pages/components read these arrays rather than fetching remote JSON.

## Important code patterns and conventions
- Use functional React components and prefer exports already used in `src/App.tsx` pattern.
- Styling: always compose classes using the helper in `src/utils/cn.ts` (`cn(...classes)`) which applies `clsx` + `tailwind-merge` to avoid Tailwind class conflicts.
- Animation: `framer-motion` is used; tests commonly mock it (see `src/components/ui/__tests__/Notification.test.tsx` which mocks `framer-motion` and uses `vi.useFakeTimers()` for timeouts).
- Routing: routes are declared in `src/App.tsx` — add pages under `src/components/pages` and register here.
- Typescript: project uses `strict: true` and `noEmit: true` in `tsconfig.app.json`. Keep explicit types and avoid `any` unless necessary.

## Testing specifics
- Vitest runs with `environment: 'jsdom'` and `setupFiles: ['./src/test/setup.ts']` (see `vite.config.ts`).
- Tests often mock animation libraries and use `vi.useFakeTimers()` for timeout assertions. Follow the `Notification` tests for examples.

## Files to check when making changes
- Routes / composition: `src/App.tsx` and `src/main.tsx`.
- Shared styling helpers: `src/utils/cn.ts`.
- Visual/animated components: `src/components/ui/*` and tests under `src/components/ui/__tests__/`.
- Static content: `src/data/content.ts`.

## External integrations & dependencies to be aware of
- Tailwind via `@tailwindcss/vite` plugin (declared in `vite.config.ts`).
- `lucide-react`, `framer-motion`, `zustand` (state library included in deps — search usage before adding global state).

## Generator guidelines for code changes
- Keep changes TypeScript-safe (`strict` mode). Update or add types in the same module when necessary.
- Prefer adding small, self-contained components under `src/components/*` and registering routes in `src/App.tsx`.
- Use `cn()` for className composition to avoid Tailwind ordering issues.
- For UI animations, maintain testability: mirror `Notification.test.tsx` approach (mock `framer-motion` during unit tests, use `vi.useFakeTimers()` for timers).

## Don'ts / gotchas
- Do not run `jest` — tests are configured with `vitest` (the `jest` package may be present but unused).
- Building requires running `tsc -b` due to project references — do not skip this step in CI or release builds.

## If you need to modify tests
- Update `src/test/setup.ts` for global test setup (imports `@testing-library/jest-dom`).
- When introducing timers or animation, use `vi.useFakeTimers()` in tests and remember to `act()` for timer advances.

---
If any specific area needs more detail (routing patterns, component props, or CI steps), tell me which file or feature and I will expand this guidance.
