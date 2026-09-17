# AGENTS.md — Road to Bronze (2026 FIBA Women's World Cup)
 
## Project
Commemorative website about the journey of the Spanish women's national basketball team at the 2026 FIBA Women's World Cup, held in Berlin, where the team won the bronze medal. It covers the team's path through the tournament (group stage, knockout rounds, the semifinal loss to the US, and the bronze-medal win over Germany) and features a profile for each player in the roster. SPA built with React + TypeScript.
 
## Commands
- Run: `npm run dev`
- Tests: `npm run test`
## Style and conventions
- Strict TypeScript (`strict: true`), no `any` without an explicit justification comment.
- Functional React components with Hooks; no class components.
- Component names in PascalCase, custom hooks prefixed with `use`, everything else in camelCase.
- Code, variable/function names, and comments in English; UI text and content in Spanish.
- One component per file; test file next to the component (`Component.test.tsx`).
## Rules
- Read `docs/constitution.md` and the active spec (`spec.md` / `plan.md` / `tasks.md`) before touching any code.
- Do not implement any task that isn't in `tasks.md` without asking first.
- Do not invent game data, scores, or player bios: if a fact is missing, mark it as `[TBD]` and ask instead of filling it in with a guess.
- Do not add new libraries (UI, animation, state management, etc.) without explicit approval.
- Do not change the agreed stack (React + TypeScript + Vitest) or the folder structure defined in `design.md` without approval.
## When finishing any task
- Run `npm run test`; it must pass before considering the task done.
- Update `tasks.md` marking the task as done.