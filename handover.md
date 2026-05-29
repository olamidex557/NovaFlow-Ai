# NovaFlow AI — Frontend Handover

## 1. Current Progress

### ✅ Completed
- **Workspace split** — frontend now lives in `frontend/` and backend scaffold lives in `backend/`.
- **Landing Page** — Hero, features, pricing, CTA, footer. Fully responsive, animated.
- **Auth Pages** — Login + Register with Google OAuth UI, form states, loading.
- **Dashboard Shell** — Sidebar + Topbar layout. Sidebar collapse toggle. Credits meter.
- **Overview Page** — Stats grid, weekly views chart, quick actions, recent videos.
- **Create Video Page** — 3-step flow: niche/topic → video type/tone → AI script preview with regenerate.
- **My Videos Page** — Filterable list (status tabs), search, video grid with status badges.
- **Video Editor Page** — Mock video player, caption timeline, voice selector, render flow.
- **Schedule Page** — Calendar grid, scheduled videos list, best-time recommendations, timezone selector.
- **Analytics Page** — Stats cards, bar chart (weekly views), top videos ranking, daily breakdown table.
- **YouTube Integration Page** — Connect button with OAuth UI mock, connected channels list, permissions view.
- **Settings Page** — Tabbed: Profile, Billing, API Keys, Preferences (with toggles).

### 🟡 Partially Done
- Drag-and-drop scheduling (calendar shows events but DnD not wired)
- Video timeline scrubbing (Slider renders but doesn't play video)
- Caption editing (UI only, no inline edit)

---

## 2. Current State of App

### Working Pages
All pages render and navigate correctly via Zustand store. Mock data layer is fully wired inside `frontend/src/`.

### Navigation
- `useAppStore().setPage(pageName)` — global router. No URL routing (React Router not added).

### Data
- All data comes from `/src/lib/api/mock.ts` — ready to replace with real API calls.

---

## 3. Architecture Decisions

| Decision | Rationale |
|---|---|
| Single-page Zustand router | Simple for MVP; swap for Next.js App Router in production |
| Mock data in `/lib/api/mock.ts` | Clean separation; replace exports with React Query calls |
| CSS variables for theming | Easy dark mode; consistent design tokens |
| No React Query added | Not needed with mock data; add when wiring real API |
| Syne + DM Sans fonts | Distinctive SaaS feel, avoids generic Inter |

### Design System
- Primary accent: `--nova-cyan` (#00d4ff)
- Secondary: `--nova-violet` (#a855f7)
- Success: `--nova-green` (#22d3a0)
- Warning: `--nova-orange` (#f97316)
- Background: `hsl(222, 20%, 7%)`

---

## 4. Next Steps (Prioritized)

1. **Add React Router** — replace Zustand page routing with URL-based routing
2. **Wire React Query** — replace mock data exports with `useQuery` hooks pointing to NestJS API
3. **Real auth flow** — replace mock auth with JWT / NextAuth
4. **Video upload flow** — actual file upload + progress to backend `/videos/upload`
5. **Real analytics charts** — replace bar divs with Recharts or Chart.js
6. **Drag-and-drop schedule** — wire DnD library (dnd-kit) to calendar grid
7. **Mobile sidebar** — Sheet component for mobile drawer
8. **Toast notifications** — wire Sonner for action feedback
9. **Error boundaries** — add React error boundaries per page
10. **E2E tests** — Playwright test suite

---

## 5. Known Issues

| Issue | Location | Fix |
|---|---|---|
| No URL routing | All pages | Add React Router v6 |
| Unused `Badge` import removed by linter | MyVideosPage | Re-add if status badges needed |
| Calendar day offset wrong | SchedulePage | Calculate actual weekday offset from date |
| No toast feedback on save | SettingsPage | Wire Sonner |
| Google font may not load in offline | index.css | Self-host fonts for production |
| `Button` removed in SchedulePage | SchedulePage | Re-add if needed for future CTA |

---

## 6. File Structure

```
frontend/
├── App.tsx                          # Root router
├── main.tsx                         # Entry point (dark mode forced)
├── index.css                        # Global styles, design tokens, animations
├── store/
│   └── appStore.ts                  # Zustand: user, page, sidebar
├── lib/
│   └── api/
│       └── mock.ts                  # Mock data layer (replace with API calls)
├── pages/
│   ├── LandingPage.tsx
│   ├── AuthPage.tsx
│   ├── DashboardShell.tsx
│   └── dashboard/
│       ├── OverviewPage.tsx
│       ├── CreateVideoPage.tsx
│       ├── MyVideosPage.tsx
│       ├── EditorPage.tsx
│       ├── SchedulePage.tsx
│       ├── AnalyticsPage.tsx
│       ├── YouTubePage.tsx
│       └── SettingsPage.tsx
└── components/
    ├── layout/
    │   ├── Sidebar.tsx
    │   └── Topbar.tsx
    └── ui/                          # shadcn/ui components (pre-installed)

backend/
└── src/
    └── index.js                     # Minimal HTTP API scaffold with /health
```
