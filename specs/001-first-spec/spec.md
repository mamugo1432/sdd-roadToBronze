# Spec 001 — Road to Bronze
 
## Context and objective
The Spanish women's national basketball team won the bronze medal at the 2026 FIBA Women's Basketball World Cup (Berlin), after losing in the semifinals to the United States and then beating host nation Germany in the third-place game. This project is a commemorative website that tells the story of the team's run through the tournament and introduces each player in the roster, as a piece to share and preserve this milestone.
 
## Users / actors
- Fans of the national team and of women's basketball who want to relive the team's run.
- Visitors arriving from social media looking for specific information about the bronze medal or about a particular player.
## User stories
- U1: As a fan, I want to see the team's full tournament run so I can understand how the bronze medal was won.
- U2: As a visitor, I want to check each player's profile to learn her position, club, and role in the tournament.
- U3: As a visitor, I want to browse the site from my phone so I can check it and share it on social media.
## Functional requirements (EARS acceptance criteria)
- FR-1: THE SYSTEM SHALL have a multi-page structure with distinct routes: Home, Tournament Path, and Players.
- FR-2: THE SYSTEM SHALL show, on the Tournament Path page, the team's progression: group stage, knockout rounds, the semifinal loss to the United States, and the bronze-medal win over Germany.
- FR-3: THE SYSTEM SHALL show, on the Players page, a profile for each of the 12 players in the final World Cup roster, including name, position, club, and a short note about the tournament (15–20 words maximum).
- FR-4: IF a specific data point (score, date, photo, or player detail) is not yet available, THEN THE SYSTEM SHALL display a visible "pending data" placeholder at that spot, instead of hiding the section.
- FR-5: THE SYSTEM SHALL source all tournament and player data from a local `data.json` file, populated from verified sources (FEB: feb.es, FIBA: fiba.basketball); no external API or CMS SHALL be used. Source URLs shall be documented in code comments adjacent to data entries.
- FR-6: THE SYSTEM SHALL present all content exclusively in Spanish; no language switcher or i18n mechanism SHALL be required. All user-facing text — including error messages, loading states, and placeholders — shall be in Spanish. Code, variable names, and comments remain in English per Constitution §9.
- FR-7: WHILE the user browses from a modern browser (latest versions of Chrome, Firefox, Safari, or Edge), THE SYSTEM SHALL work correctly; no support for legacy or outdated browsers SHALL be required.
## Non-functional requirements
- Responsive / mobile-first, since this is a site meant to be shared on social media. Breakpoints: ≤480px (mobile), ≤768px (tablet), >768px (desktop).
- Color palette: yellow (#FEBD09), white (#FFFFFF), red (#C8102E) — Spanish national team colors.
- UI components shall follow Web Interface Guidelines (Vercel).
- Baseline accessibility: sufficient color contrast, `alt` text on all player photos, and keyboard-operable UI.
- Strict TypeScript across the codebase (no unjustified `any`).
## Edge cases
- A group-stage match score is missing → show "pending data" (FR-4), never an invented value or an empty space.
- A player's photo is missing → show a visual placeholder, without breaking the layout.
- A player has incomplete data (e.g., unconfirmed club) → show the available fields and mark the rest as pending, never hide the player.
- Access to a route that doesn't exist (mistyped URL) → show a clear 404 page with a link back to Home.
- Visit from a very narrow or very wide viewport → content must not overflow or get clipped.
## Out of scope
- Internationalization / multi-language support.
- Support for legacy or outdated browsers.
- Integration with any external API, CMS, or backend/database.
- An admin panel or UI for editing tournament or player data.
- Hosting, deployment, or CI/CD setup.
- A formal accessibility audit beyond the baseline checks listed in Non-functional requirements.
- Content about other teams, tournaments, or players outside this roster and this World Cup.
## Completion criteria
- All tasks in `tasks.md` are completed.
- `npm run test` passes at 100%.
## Open questions
None 