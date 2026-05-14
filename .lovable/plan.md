## athme Expansion Playbook — Interactive Web Guide

A single-page internal playbook the athme team uses every time they launch in a new city. Branded with athme's identity, structured for daily operational use, and built from the Copenhagen + Aarhus learnings.

### Visual identity (from your brand guideline)

- Logo: athme wordmark + symbol (uploaded version)
- Gradient: blue `#00B2F3` → cyan `#00DEEB` → mint `#00E9BA` → green `#00DC7D` → `#00E900`
- Typography: League Spartan for headings, Open Sans for body
- Tone: clean, fresh, energetic — matches "The Athlete in Me"

### Page layout

Single long page with a **sticky left sidebar** that lists every section, highlights the section currently in view, and lets the team jump anywhere instantly. Mobile collapses the sidebar into a top menu.

```text
┌─────────────────────────────────────────────────────────┐
│  athme logo                              Expansion v1.0 │
├──────────────┬──────────────────────────────────────────┤
│ ▸ Summary    │  HERO: "Expansion Playbook"              │
│ ▸ City Fit   │  Subtitle + gradient accent              │
│ ▸ City Mgr   │                                          │
│ ▸ Partners   │  ── Section 1 ──────────────────         │
│ ▸ Promo      │  Narrative intro + operational bullets   │
│ ▸ Launch Wknd│  Callout boxes for "Aarhus learning"     │
│ ▸ Hosts      │                                          │
│ ▸ Feedback   │  ── Section 2 ──────────────────         │
│ ▸ Stabilize  │  ...                                     │
│ ▸ Checklist  │                                          │
│ ▸ Risks      │                                          │
└──────────────┴──────────────────────────────────────────┘
```

### Sections (in order)

1. **Hero + intro** — athme logo, title, one-line purpose, version tag.
2. **What makes a city a good fit for athme?** — short narrative summary at the top.
3. **City Selection & Validation** — population threshold, expat presence, why internationals matter, Facebook group research method, sports ecosystem audit (venue count, sport feasibility, ownership, booking access), and a simple Go / Maybe / No-Go decision framework rendered as a card grid.
4. **City Manager** — role definition, ideal profile, three engagement models (student job, part-time paid, volunteer) with paid noted as preferred, identification & onboarding steps.
5. **Partnerships Before Launch** — why pre-launch deals matter, target venue types (padel, bouldering, halls, etc.), example deal structures.
6. **Promotion Before Launch** — Facebook group strategy (expat + sports-specific), an example message template in a styled callout, word-of-mouth tactics, ESN / student community partnership emphasis.
7. **Launch Weekend Strategy** — Friday→Sunday format rendered as a visual 3-day timeline. Friday social (bar, drinks, mingling, presentation, giveaway) with goals listed (awareness, trust, curiosity, community). Saturday/Sunday multi-sport schedule with example sport mix.
8. **Host Recruitment During Launch** — why it starts on day one, what to look for (proactive, reliable, engaged, sports-passionate, available), how Aarhus built its first host team.
9. **Feedback & Local Insights** — questions to ask participants, venue evaluation, signals of long-term potential vs. structural limits.
10. **Stabilizing Operations After Launch** — first-month playbook: review, adapt, maintain cadence, support hosts & city manager, protect quality.
11. **Minimum Requirements Checklist** — clean checklist before any launch (population, expat presence, city manager secured, ≥1 venue partnership, promo posted in ≥3 groups, launch weekend booked, etc.).
12. **Common Risks When Expanding Too Early** — final warning section with 5–7 named risks (no city manager, weak community signal, unreliable venues, momentum drop after launch, premature scaling, etc.).

### Design treatments

- **Aarhus learnings** appear as inline callout boxes ("What we learned in Aarhus →") in athme's mint/green tone so they stand out from the general guidance.
- **Checklists** use custom checkbox styling in athme blue.
- **Section numbers** displayed large in gradient (blue→green) as visual anchors.
- **Decision framework** for city selection rendered as three side-by-side cards (Go / Maybe / No-Go) with criteria listed.
- **Launch weekend** rendered as a vertical timeline with Fri/Sat/Sun blocks.
- Subtle gradient dividers between sections; otherwise minimal, content-first design.

### Technical notes

- Single React route at `/` (replaces the current placeholder `Index`).
- Tailwind tokens extended with athme palette and gradient utilities; League Spartan + Open Sans loaded from Google Fonts in `index.html`.
- Logo copied from upload into `src/assets/` and imported as an ES6 module.
- Sidebar uses `IntersectionObserver` to highlight the active section as the user scrolls.
- Fully responsive: sidebar becomes a sticky top menu / sheet under `md`.
- No backend, no auth — purely a static internal-use page.

### Out of scope for v1

- City scoring tool, printable PDF export, multi-city dashboard, login. These are easy follow-ups if you want them later.
