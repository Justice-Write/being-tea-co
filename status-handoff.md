# status-handoff — Being Tea Co.

**Last updated:** 2026-10-20 by Claude Opus 5.5 (Cowork, being-tea-co project session)
**Canonical:** this file is the single source of truth for *current status*. `ROADMAP.md` is the task list and changelog; `ROADMAP-EXECUTION-2026-09-27.md` and `README.md` hold release-gate detail.

---

## 0. Operating protocol — mandatory for every agent and model

Any LLM or person working in this repo follows these rules. No exceptions for "small" changes.

1. **Read first.** Read this whole file before doing anything, then the `ROADMAP.md` sections your task touches. The portfolio-wide rule lives in `../AGENTS.md` (the GitHub folder); this file follows it.
2. **Before you start work:** add an entry under **§1 In progress**: date, who you are (tool + model), what you are about to do, and which files/systems you will touch. Save it (commit it if you can) **before** starting the work, so an interruption still leaves a record.
3. **After you finish, or when you stop for any reason:**
   - Remove your entry from §1.
   - Add a dated entry at the top of **§8 Work log**: what changed, commit SHA, what you verified vs. what is untested.
   - Update **§5 Current state**, **§6 Open items**, **§7 Gotchas** so they describe the project *now*.
   - Tick/add items in `ROADMAP.md` as well.
   - Update "Last updated" at the top.
4. **Stale "In progress" entries** mean that work was interrupted. Check what actually landed (git log, live site), finish or roll back, and record it in the Work log.
5. **Current state means current.** History goes only in the Work log, newest first. Never delete Work log entries.
6. **Never put secrets in this file** (API keys, passwords, tokens, personal data).
7. **If you can't write to the repo**, put the exact text you would have added in your reply to the owner.
8. **Owner working rules:** back up files before changing them (`../_backups/being-tea-co/<date>/`, outside the repo); never hard-delete — move files to `_to_delete/`; keep explanations short; delegate work better suited to other models and record it here.

---

## 1. In progress

- *(nothing in progress)*

---

## 2. What this project is

**Being Tea Co.** is an independent tea-culture education brand (est. 2015). It has three products:

1. **Website** (this repo, `app/`): tea library, brewing guides, a twelve-article journal with per-article approval and Alaska-date release gates, trust pages, and a projects page with no paid links. It is the **replacement candidate** for the live WordPress site at `beingteaco.com`. It is brand-only; the owner-only editorial studio is excluded.
2. **Brewing companion app** ("Being Tea", Capacitor, `co.beingtea.companion`): `mobile/` + `packages/brew-core/`. It lives **only on the `codex/mac-handoff-20260923` line**, not on the website branch. Its working folder is the worktree `../mobile-publishing-2026-09-20/rebuilds/tea`, which has its own `status-handoff.md`.
3. **Steep Timer PWA**: a separate repo, `../being-tea-timer`, with its own `status-handoff.md`. It is **live** at https://justice-write.github.io/Steep-Timer/.

- **Owner:** Christian (GitHub `Justice-Write`). The owner approves every public release, journal article, account action and spend.
- **Related:** `../being-tea-co-private-source` is a legacy/editorial snapshot and is never released.

## 3. Where everything is

| Thing | Location |
|---|---|
| Live site | `beingteaco.com` is still **WordPress.com** (verified 2026-10-13), not this build |
| Repo | `origin` → https://github.com/Justice-Write/being-tea-co.git (also a `codex-internal` remote: Codex/OpenAI Sites) |
| Checked-out branch | `codex/roadmap-sites-20260927`: the release line. `main` is stale (2026-08-01) |
| Branches to review (local only, **not pushed**) | `integration/preview-20261016` (d805707): deploy the preview from this. It is the release line + the next three. `review/journal-b06-b12-20261016` (ad3e02e), `site/companion-privacy-20261016` (e94f036), `deps/npm-security-bumps-20261016` (087542d) |
| Native app branch | `native/release-prep-20261016` (0508f7e, local only) off `codex/mac-handoff-20260923` (2a1f98d) |
| Journal review brief | https://claude.ai/code/artifact/8c4549c7-02b8-43de-8a0a-79915a7c0441 (per-article decision dropdowns) |
| claude.ai Project | "being tea co": `claude/status-2026-10-13.md` mirrors this file's state |
| Key docs | `README.md`, `ROADMAP.md`, `ROADMAP-EXECUTION-2026-09-27.md` |
| Retired | `../to-delete/being-tea-co-roadmap-20260924`: old worktree, clean, its commit pushed. Delete when the owner says so |

## 4. Architecture / how to run & test

- A Next.js-style app built with **vinext** (Vite + `@cloudflare/vite-plugin`), with Worker entry `worker/index.ts`. There are no D1/R2 bindings (`.openai/hosting.json`). Node 22.13+.
- `npm ci` → `npm test` (build + `node --test tests/rendered-html.test.mjs`) → `npm run typecheck`. pnpm works too; **keep both lockfiles in sync**: `npx pnpm@11.19.0 install --lockfile-only` after any npm change.
- Preview deploy (owner runs it; wrangler login is his OAuth): `npx wrangler deploy --name being-tea-co`. Without `--name`, the Worker would be called `site-creator-vinext-starter`. The dry run on `integration/preview-20261016` passed: 118 assets, 334 KiB gzip, no bindings.
- Release env vars are a release action, never local dev: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SITE_RELEASED=true`, `NEXT_PUBLIC_SITE_RELEASE_HOST`. Unset means `noindex, nofollow` with the canonical set to `preview.beingteaco.invalid`.
- Journal gate: `approvedBlogIds` in `app/content/blogs.ts`, plus `date <= today (America/Anchorage)`, plus no `publicationGate`. Routes render per request (no prerendered HTML), so a date gate opens without a redeploy.
- Native app: `npm run test:brew-core` (node `--experimental-strip-types`, needs no install; 28/28 on 2026-10-16). `cd mobile && npm run android:apk` (debug) or `npm run android:aab` (release; needs `mobile/android/keystore.properties`, which git ignores).

## 5. Current state (2026-10-20)

- `codex/roadmap-sites-20260927` at `84a5a9d`, **3 commits ahead of origin (unpushed)**. `status-handoff.md`, `CLAUDE.md` and `AGENTS.md` were added 2026-10-20.
- **Preview not deployed.** The Cloudflare account has one Worker (`nooyouniverse`) and no `being-tea-co` (checked 2026-10-20).
- Journal: B01–B05 approved and live in the build. B06–B12 are withheld. All B06–B12 citations were source-checked 2026-10-14: every source exists, and 10 sentences overstated their source. The fixes and new Monday dates (B06 10/19, B07 10/26, B08 11/2, B09 11/9, B10 11/16, B11 11/23, B12 11/30) are on the review branch. B06 and B07's new dates have now passed too, so re-date again at approval time. B10/B11 carry a `cultural-review` gate and B12 a `health-review` gate.
- `/companion/privacy` exists on its branch; the copy needs owner approval.
- Dependency bumps: the dependabot group was applied to the release line on the deps branch. `undici`, `ws` and the top-level `sharp` stay pinned inside miniflare, which is dev-only. The dependabot PR against `main` is stale and can be closed after merge.
- Test status (cloud Linux, 2026-10-16): review 13/13, privacy 14/14, deps 13/13 + typecheck, integration 14/14 + typecheck + release-guard + wrangler dry-run.
- The owner lifted the portfolio installation hold for Being Tea Co on 2026-10-13.

## 6. Open items

**Agent-doable (needs the owner's go-ahead or URL first):**
- After the owner deploys: verify the preview URL (all routes 200, `noindex` meta + `Disallow: /` robots, B06–B12 slugs 404, `/companion/privacy` renders) and record the results here.
- After approvals: merge the approved branches into the release line, set `approvedBlogIds` and dates, remove the gates the specialists cleared, and run `npm test`.
- Optional: the Vite 8.3 forward-compat warning about `vite.config.ts` import style (JSON import attribute, file extension). Cosmetic.

**Owner-only:**
1. Push the release line + the five local branches; deploy the preview from `integration/preview-20261016`; send the URL to an agent to verify.
2. Decide B06–B12 in the brief; name the B10–B11 practitioner reader and the B12 health reader.
3. Approve the `/companion/privacy` copy.
4. Native: create the upload keystore and `keystore.properties` (steps in `docs/play-internal-testing-draft.md` on the native branch), run `npm run android:aab`, upload to the Play internal track; check Doze, lock-screen and process-death notices on the Samsung SM-N986U1; build iOS on a Mac.
5. Decide whether this replaces WordPress, who operates release and rollback, and when DNS cuts over; approve the public release.
6. Run real provider lifecycle tests before any newsletter, commerce, paid link or account is shown as active.

## 7. Gotchas

- `beingteaco.com` is WordPress. A local build or a workers.dev URL is **not** proof of replacement.
- **Line endings:** the Windows working tree is CRLF. In a Linux shell, run git with `-c core.autocrlf=true`, or every CRLF file shows as modified. `package-lock.json` is stored **CRLF** in git, so write it back with CRLF or the whole file diffs.
- The Cowork Linux VM on Sophia can't push to GitHub (no credentials) and has ~1 GB free disk, which is too little for `npm ci`. Use a cloud workspace for installs and tests. The owner's terminals are click-only for agents, so wrangler and push run on his side.
- The tea worktree shares this repo's `.git`. Don't put `status-handoff.md` in `.git/info/exclude` here: that hides the handoff in every worktree.
- Several branches exist only locally. Codex works on `codex/*` branches. Don't switch the main checkout and leave it switched; use a worktree or a scratch clone.
- GitHub Pages is intentionally **not** enabled for this repo (commercial-use limits), so root `.md` files are not served. They are visible to anyone who can see the GitHub repo.
- `AGENTS.md` here is deliberately **untracked**: `codex/mac-handoff-20260923` has its own tracked `AGENTS.md`, and committing a second one would conflict at merge time. Merge the handoff section into that file when the lines merge. `CLAUDE.md` is tracked.
- Untracked dev logs (`dev.*.log`, `monetization-dev.*.log`) sit in the root. Leave them.
- Content rules: no paid links, no health claims, cultural specificity (name traditions and peoples), and Deer Park is mentioned only with "independent and unaffiliated". Never publish the private founder reference.
- A passing local test is not editorial approval or live-release evidence.

## 8. Work log (newest first)

- **2026-10-20 — Claude Opus 5.5 (Cowork, being-tea-co project session):** Filled this handoff with verified state from the 2026-10-13…16 work and added the before/after update rule for every agent (see §0 and `CLAUDE.md`). Created matching handoffs for `../being-tea-timer` (kept local, since its root is the public site) and the native worktree `../mobile-publishing-2026-09-20/rebuilds/tea`. Committed `status-handoff.md` + `CLAUDE.md` here. `AGENTS.md` is left **untracked** on purpose: the `codex/mac-handoff-20260923` line has its own tracked `AGENTS.md`, so add the handoff section there when the lines merge.
- **2026-10-20 — Claude (Cowork subagent):** Created this status-handoff.md baseline from repo docs and git log. No code changes.
- **2026-10-16 — Claude Opus 5.5 (Cowork):** Created and tested `integration/preview-20261016`, `site/companion-privacy-20261016`, `deps/npm-security-bumps-20261016` and `native/release-prep-20261016` (results in §5). Moved the stale `being-tea-co-roadmap-20260924` worktree to `../to-delete/`. Committed `84a5a9d` (ROADMAP changelog).
- **2026-10-16 — Claude Opus 5.5 (Cowork):** `ad3e02e` on `review/journal-b06-b12-20261016`: 10 source-check edits and re-dates. Confirmed live date gating. Commits `5646497`, `a56bed4` (ROADMAP).
- **2026-10-14 — Claude (Cowork):** Source-checked every B06–B12 citation (brief linked in §3). Enabled Steep Timer GitHub Pages (separate repo).
- **2026-10-13 — Owner rulings:** installation hold lifted; Cloudflare preview first; Steep Timer on GitHub Pages.
- **2026-10-16:** `84a5a9d`/`a56bed4`/`5646497` — recorded owner rulings, B06–B12 source check, and the five local review/integration branches.
- **2026-09-27:** `6dd92e0` reconciled preserved roadmap work; 13/13 rendered-route tests on Windows.
- **2026-09-24 → 09-25:** `424bf44` hardened brand-only journal release; `b002625` checkpoint.
