# Plan — Road to Bronze

## 1. Modules

| Module | Responsibility | Covers FR |
|--------|---------------|-----------|
| `routing` | Route definitions and navigation (react-router-dom) | FR-1 |
| `pages/Home` | Hero section with bronze medal highlight, visual appeal | FR-1 |
| `pages/TournamentPath` | Timeline of matches (group → knockout → semifinal → bronze) | FR-1, FR-2 |
| `pages/Players` | Grid/list of 12 player profiles | FR-1, FR-3 |
| `components/PlayerCard` | Individual player display (name, position, club, note) | FR-3 |
| `components/MatchCard` | Match card for timeline (score, date, opponent, stage) | FR-2 |
| `components/PendingData` | Placeholder for missing data points | FR-4 |
| `components/Layout` | Shared header, footer, responsive wrapper | FR-1, NFR |
| `data` | `data.json` loader and type definitions | FR-5 |
| `types` | TypeScript interfaces for Match, Player, Stage | FR-5, NFR |

---

## 2. Data Model

### `data.json` structure

```typescript
// types/match.ts
interface Match {
  id: string;
  stage: "group" | "round16" | "quarterfinal" | "semifinal" | "bronze";
  date: string;            // ISO 8601
  opponent: string;
  scoreSpain: number | null;
  scoreOpponent: number | null;
  venue?: string;
  source?: string;         // FEB/FIBA URL
}

// types/player.ts
interface Player {
  id: string;
  name: string;
  position: string;
  club: string;
  photo?: string;          // path or TBD
  note: string;            // 15-20 words max
  source?: string;         // FEB/FIBA URL
}

// types/tournament.ts
type Tournament = {
  team: string;
  year: number;
  competition: string;
  hostCity: string;
  result: string;
  matches: Match[];
  roster: Player[];
};
```

### Sample `data.json`

```json
{
  "team": "España",
  "year": 2026,
  "competition": "Copa del Mundo FIBA",
  "hostCity": "Berlín",
  "result": "Medalla de bronce",
  "matches": [
    {
      "id": "group-1",
      "stage": "group",
      "date": "2026-09-XX",
      "opponent": "[TBD]",
      "scoreSpain": null,
      "scoreOpponent": null,
      "source": "https://fiba.basketball"
    }
  ],
  "roster": [
    {
      "id": "player-1",
      "name": "[TBD]",
      "position": "[TBD]",
      "club": "[TBD]",
      "note": "[TBD]"
    }
  ]
}
```

---

## 3. Architectural Decisions

### D1: Routing — react-router-dom

| Chosen | Justification |
|--------|---------------|
| react-router-dom | Constitution §1 fixes stack to React + TypeScript. SPA routing sufficient for 3 static pages. Industry-standard, well-documented, zero-config for this use case. |

**FR coverage:** FR-1

---

### D2: Styling — CSS Modules

| Chosen | Discarded | Justification |
|--------|-----------|---------------|
| CSS Modules | Tailwind CSS | Constitution §7 restricts new dependencies. CSS Modules ship with React tooling, zero config. Tailwind would require new dependency. |
| CSS Modules | styled-components | CSS Modules are lighter, no runtime overhead, aligns with Web Interface Guidelines preference for standard CSS. |
| CSS Modules | Inline styles | CSS Modules support media queries (breakpoints), pseudo-classes, and better separation. |

**FR coverage:** NFR (responsive, color palette, Web Interface Guidelines)

---

### D3: Component Structure — One Component Per File

| Chosen | Discarded | Justification |
|--------|-----------|---------------|
| One component/file | Multi-component barrel files | Constitution §8 mandates one component per file. Simplifies imports and test discovery. |

**FR coverage:** Constitution §8

---

### D4: Data Loading — Static Import

| Chosen | Discarded | Justification |
|--------|-----------|---------------|
| Static import (`import data from './data.json'`) | Fetch API | Constitution §5 + FR-5: local data only, no external calls. Static import ensures type safety at build time. |
| Static import | JSON.parse at runtime | Static import catches JSON errors during compilation, not at runtime. |

**FR coverage:** FR-5

---

### D5: Placeholder Strategy — Conditional Rendering

| Chosen | Discarded | Justification |
|--------|-----------|---------------|
| `value ?? <PendingData />` | Hiding the field | FR-4 requires visible placeholder, not hiding. |
| `value ?? <PendingData />` | Tooltip on hover | Tooltip not visible on mobile; breaks U3 (share on social media). |

**FR coverage:** FR-4

---

### D6: Image Handling — Placeholder with Aspect Ratio

| Chosen | Discarded | Justification |
|--------|-----------|---------------|
| Placeholder with fixed aspect ratio | Cropped image | Edge case: missing photo must not break layout. |
| Placeholder with fixed aspect ratio | Text-only fallback | Visual placeholder maintains consistent card heights. |

**FR coverage:** FR-4, Edge case (missing photo)

---

## 4. Test Strategy

### 4.1 Unit Tests (per component)

| Component | Test Cases | Covers FR |
|-----------|-----------|-----------|
| `PlayerCard` | Renders name, position, club; shows note; handles missing photo; handles [TBD] fields | FR-3, FR-4 |
| `MatchCard` | Renders score, date, opponent, stage; handles missing score; handles null values | FR-2, FR-4 |
| `PendingData` | Renders placeholder text; applies correct styles; accessible (aria-label) | FR-4 |
| `Layout` | Renders header, footer; responsive behavior at breakpoints | FR-1, NFR |

### 4.2 Page Tests

| Page | Test Cases | Covers FR |
|------|-----------|-----------|
| `Home` | Renders hero section; displays bronze medal highlight; navigation links present | FR-1 |
| `TournamentPath` | Renders all stages; timeline order correct; all matches displayed | FR-2 |
| `Players` | Renders 12 players; all profiles have required fields; notes ≤20 words | FR-3 |

### 4.3 Integration Tests

| Test | Cases | Covers FR |
|------|-------|-----------|
| Navigation | Route changes render correct pages; browser back/forward works | FR-1 |
| Data loading | `data.json` loads correctly; types match runtime data | FR-5 |
| Responsive | Layout adapts at ≤480px, ≤768px, >768px | NFR |

### 4.4 Type Tests

| Test | Purpose | Covers |
|------|---------|--------|
| `Match` type | Ensures all match fields match `data.json` structure | FR-5, NFR |
| `Player` type | Ensures all player fields match `data.json` structure | FR-5, NFR |
| `Tournament` type | Ensures root data structure is correct | FR-5 |

### 4.5 Test Commands

```bash
npm run test          # All tests
npm run test -- --coverage  # Coverage report
```

---

## 5. Folder Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx
│   │   ├── Layout.module.css
│   │   └── Layout.test.tsx
│   ├── MatchCard/
│   │   ├── MatchCard.tsx
│   │   ├── MatchCard.module.css
│   │   └── MatchCard.test.tsx
│   ├── PendingData/
│   │   ├── PendingData.tsx
│   │   ├── PendingData.module.css
│   │   └── PendingData.test.tsx
│   └── PlayerCard/
│       ├── PlayerCard.tsx
│       ├── PlayerCard.module.css
│       └── PlayerCard.test.tsx
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.module.css
│   │   └── Home.test.tsx
│   ├── TournamentPath/
│   │   ├── TournamentPath.tsx
│   │   ├── TournamentPath.module.css
│   │   └── TournamentPath.test.tsx
│   └── Players/
│       ├── Players.tsx
│       ├── Players.module.css
│       └── Players.test.tsx
├── data/
│   └── data.json
├── types/
│   ├── match.ts
│   ├── player.ts
│   └── tournament.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## 6. Color Tokens

```css
:root {
  --color-yellow: #FEBD09;
  --color-white: #FFFFFF;
  --color-red: #C8102E;
  --color-black: #1A1A1A;       /* text */
  --color-gray-light: #F5F5F5;  /* backgrounds */
  --color-gray: #666666;        /* secondary text */
}
```

---

## 7. Breakpoints

```css
/* Mobile-first */
/* Default: >768px (desktop) */

@media (max-width: 768px) { /* tablet */ }
@media (max-width: 480px) { /* mobile */ }
```

---

## 8. Pending Decisions

| Decision | Status | Notes |
|----------|--------|-------|
| Image optimization (lazy loading, WebP) | Deferred | Depends on data source availability |
| SEO meta tags (Open Graph) | Deferred | Not in current scope per Out of Scope |
| 404 page styling | Pending | Edge case in spec, needs design approval |

---

## 9. Traceability Matrix

| FR | Module | Component | Test |
|----|--------|-----------|------|
| FR-1 | routing, Layout | Layout, App | Navigation test |
| FR-2 | TournamentPath | MatchCard | TournamentPath test, MatchCard test |
| FR-3 | Players | PlayerCard | Players test, PlayerCard test |
| FR-4 | PendingData | PendingData | PendingData test, PlayerCard test, MatchCard test |
| FR-5 | data, types | — | Data loading test, type tests |
| FR-6 | (all components) | (all UI text) | Manual review |
| FR-7 | (browser compatibility) | — | Browser testing |
| NFR | CSS Modules, Layout | — | Responsive test |
