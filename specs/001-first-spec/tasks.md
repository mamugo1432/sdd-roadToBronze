# Tasks — Road to Bronze

## Phase 1: Project Setup

- [x] **T1.1** Initialize Vite + React + TypeScript project
  - FR: NFR (Strict TypeScript)
  - Hecho cuando: `npm run dev` starts without errors, `tsconfig.json` has `strict: true`

- [x] **T1.2** Install react-router-dom and configure basic routing
  - FR: FR-1
  - Hecho quando: Three routes render Home, TournamentPath, Players components; navigation works

- [x] **T1.3** Create folder structure (components/, pages/, data/, types/)
  - FR: NFR
  - Hecho cuando: Folder structure matches plan.md Section 5

- [x] **T1.4** Create TypeScript types (Match, Player, Tournament)
  - FR: FR-5, NFR
  - Hecho quando: Types compile without errors; match data.json structure in plan.md

- [x] **T1.5** Create `data.json` with [TBD] placeholders
  - FR: FR-4, FR-5
  - Hecho cuando: data.json exists; `import data from './data.json'` works in TypeScript

## Phase 2: Shared Components

- [x] **T2.1** Create PendingData component
  - FR: FR-4
  - Hecho cuando: Renders "Dato pendiente" text; has aria-label; test passes

- [x] **T2.2** Create Layout component (header, footer, responsive wrapper)
  - FR: FR-1, FR-6
  - Hecho cuando: Header shows site name in Spanish; footer exists; layout wraps pages; test passes

- [x] **T2.3** Create color tokens in CSS (yellow, white, red, black, gray)
  - FR: NFR (color palette)
  - Hecho cuando: CSS variables defined; `var(--color-yellow)` applies #FEBD09

- [x] **T2.4** Create breakpoint CSS (≤480px, ≤768px, >768px)
  - FR: NFR (responsive)
  - Hecho cuando: Media queries exist; layout adapts at each breakpoint

## Phase 3: PlayerCard + Players Page

- [x] **T3.1** Create PlayerCard component
  - FR: FR-3, FR-4
  - Hecho cuando: Renders name, position, club, note; shows PendingData for null fields; test passes

- [x] **T3.2** Create Players page
  - FR: FR-1, FR-3
  - Hecho cuando: Renders 12 PlayerCards from data.json; all profiles display; test passes

- [x] **T3.3** Validate player notes are 15–20 words
  - FR: FR-3
  - Hecho cuando: Test checks every player note length is between 15 and 20 words

## Phase 4: MatchCard + TournamentPath Page

- [x] **T4.1** Create MatchCard component
  - FR: FR-2, FR-4
  - Hecho cuando: Renders stage, date, opponent, score; shows PendingData for null score; test passes

- [x] **T4.2** Create TournamentPath page with timeline layout
  - FR: FR-1, FR-2
  - Hecho quando: Renders all matches in chronological order; stages visually distinct; test passes

- [x] **T4.3** Validate match order (group → knockout → semifinal → bronze)
  - FR: FR-2
  - Hecho quando: Test asserts matches appear in correct stage order

## Phase 5: Home Page

- [x] **T5.1** Create Home page with hero section
  - FR: FR-1
  - Hecho quando: Renders hero with bronze medal highlight; navigation links to TournamentPath and Players; test passes

- [x] **T5.2** Apply national team colors to Home
  - FR: NFR (color palette)
  - Hecho quando: Hero uses yellow/red/white; test verifies color application

## Phase 6: Responsive + Accessibility

- [x] **T6.1** Test mobile layout (≤480px)
  - FR: NFR (responsive)
  - Hecho quando: Cards stack vertically; text readable; no horizontal overflow

- [x] **T6.2** Test tablet layout (≤768px)
  - FR: NFR (responsive)
  - Hecho quando: Cards in 2-column grid; spacing appropriate

- [x] **T6.3** Test desktop layout (>768px)
  - FR: NFR (responsive)
  - Hecho quando: Cards in 3+ column grid; max-width applied

- [x] **T6.4** Add alt text to all player photos
  - FR: NFR (accessibility)
  - Hecho quando: All `<img>` tags have `alt` attribute; test verifies

- [x] **T6.5** Add keyboard navigation to interactive elements
  - FR: NFR (accessibility)
  - Hecho quando: All links and buttons focusable via Tab; focus visible

## Phase 7: Data Validation

- [x] **T7.1** Verify all [TBD] placeholders render PendingData
  - FR: FR-4
  - Hecho quando: Test scans data.json; every null/missing field shows PendingData component

- [x] **T7.2** Verify no invented data in codebase
  - FR: FR-5, Constitution §5
  - Hecho quando: Grep confirms no hardcoded scores/bios; all data from data.json

## Phase 8: Final Validation

- [x] **T8.1** Run `npm run test` — all tests pass
  - FR: Constitution §4
  - Hecho quando: 0 failures; coverage report generated

- [x] **T8.2** Run TypeScript type check
  - FR: NFR (Strict TypeScript)
  - Hecho quando: `tsc --noEmit` passes with zero errors

- [x] **T8.3** Manual responsive test (mobile, tablet, desktop)
  - FR: NFR (responsive)
  - Hecho quando: Site looks correct at all breakpoints; no clipping/overflow

- [x] **T8.4** Manual Spanish text verification
  - FR: FR-6
  - Hecho quando: All UI text in Spanish; no English visible to user
