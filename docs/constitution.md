# Project Constitution — Road to Bronze
 
1. **Fixed stack:** React + TypeScript + Vitest. No stack changes without explicit approval.
2. **Strict TypeScript:** `strict: true` in `tsconfig`; zero `any` usages without a justification comment.
3. **Coverage per task:** no task in `tasks.md` is closed without its tests in the same commit.
4. **Green tests:** `npm run test` must pass 100% before closing any task.
5. **Zero invented data:** no score, marker, or player bio is written without a verified source; if missing, mark it `[TBD]`.
6. **Closed scope:** only implement what's listed in `tasks.md`; nothing new without asking first.
7. **No new dependencies** (UI, state, animation, etc.) without explicit approval.
8. **One component, one file:** functional components with Hooks; no class components.
9. **Language:** code and comments in English; website content in Spanish.
10. **Spec before code:** any architectural change goes through `design.md` first, never straight to code.
 
