# status-handoff — Being Tea Co. (program handoff)

**Last updated:** 2026-10-29 06:45 UTC by Claude Opus 5.5 (Cowork, being tea co project session), after the post-ChatGPT-loss recovery
**Canonical:** this file is the single source of truth for Being Tea Co.'s *current status and plan*, across the live WordPress site, this repo, the companion app and Steep Timer. `ROADMAP.md` is the task list and changelog. `README.md` and `ROADMAP-EXECUTION-2026-09-27.md` hold release-gate detail.

---

## 0. Operating protocol — mandatory for every agent and model

Any LLM or person working in this repo follows these rules. No exceptions for "small" changes.

1. **Read first.** Read this whole file before doing anything, then the `ROADMAP.md` sections your task touches. The portfolio-wide rule lives in `../AGENTS.md` (the GitHub folder); this file follows it.
2. **Before you start work:** add an entry under **§1 In progress**: date, who you are (tool + model), what you are about to do, and which files/systems you will touch. Save it (commit it if you can) **before** starting the work, so an interruption still leaves a record.
3. **After you finish, or when you stop for any reason:**
   - Remove your entry from §1.
   - Add a dated entry at the top of **§10 Work log**: what changed, commit SHA, what you verified vs. what is untested.
   - Update **§4 Roadmap status**, **§5 Current state**, **§8 Open items** and **§9 Gotchas** so they describe the project *now*. Add to **§3** when the owner asks for a new feature.
   - Tick/add items in `ROADMAP.md` as well.
   - Update "Last updated" at the top.
4. **Stale "In progress" entries** mean that work was interrupted. Check what actually landed (git log, live site), finish or roll back, and record it in the §10 Work log.
5. **Current state means current.** History goes only in the Work log, newest first. Never delete Work log entries.
6. **Never put secrets in this file** (API keys, passwords, tokens, personal data).
7. **If you can't write to the repo**, put the exact text you would have added in your reply to the owner.
8. **Owner working rules:** back up files before changing them (`../_backups/being-tea-co/<date>/`, outside the repo); never hard-delete — move files to `_to_delete/`; keep explanations short; delegate work better suited to other models and record it here.

---

## 1. In progress

- **2026-10-29 — Codex (GPT-6):** Owner-authorized project reconciliation, related-task/data inventory, roadmap continuation, documentation, Git publication and supported packaging/install verification. Touching this handoff, roadmap/docs and reviewed app/site files as needed; inspect associated timer/native handoffs before work there. Preserve personal data and newer WordPress content.

---

## 2. Inception and intention

- **What:** Being Tea Co. is an independent tea-culture education brand, established 2015. It follows tea from seed, harvest and processing through storage, brewing, teaware, service and the cup. The 2015 WordPress blog (`beingteaco.com`) is the original home.
- **Why:** to teach tea honestly. Personal experience is labelled as such. Historical, scientific, health, provenance and commercial claims are sourced. Commerce only ever comes after testing and up-front disclosure ("Recommend less. Test more.").
- **Roots:** firsthand practice at Deer Park Monastery (Plum Village tradition). Always shown as **independent and unaffiliated**.
- **Place in the owner's portfolio:** Being Tea Co. is one site in the MyPersonas persona network. The Accounts workbook (2026-08-22) ties it to the Castleborn persona **Akiko** (`castleborn.akiko`; email `beingteaco@gmail.com`; IG/X `@beingteaco`; FB "Being Tea"). Since 2026-10-24 Akiko appears on the live site as a clearly labelled **fictional editorial persona**.
- **2026-07-28 relaunch intent:** rebuild the site as a full education hub on Codex/OpenAI Sites (Next/vinext on Cloudflare). It would have a tea library, brew guides, a twelve-article journal, trust pages, a private 36-post social studio with unique visuals, search/SEO, and a researched commerce roadmap (affiliate + no-inventory merch, nothing active until tested). It was meant to replace the WordPress site.
- **Later products:** the "Being Tea" brewing companion app (local-first sessions, timer, tasting journal; 2026-09), and Steep Timer, a PWA that shows extraction kinetics (2026-09-25). Commerce is planned through **Between Steeps**, Being Tea's own product: observation packs that teach how a tea session is put together, plus a tasting record.

## 3. Features asked for, in order (reconstructed)

The ChatGPT/Codex chat history was lost on about 2026-10-28. This list is rebuilt from commits, roadmap docs, handoffs and the live site. The raw prompts may be recoverable from Codex's local task folders (see §6 and §8).

| When | Asked for | Built by | Outcome |
|---|---|---|---|
| 2026-07-28 | Launch the replacement site: 9 tea families, 9 brew methods, 12-article journal, trust pages, shop roadmap | Codex | Done in this repo |
| 2026-07-28 | Four-month launch system: private editorial studio with 36 staged social posts | Codex | Built (private `app/studio`, `social.ts`); never published from here |
| 2026-07-29 | Unique visual bank across site and social; search metadata; monetization prep; public repo; private drafts excluded | Codex | Done (`public/images`, `image-manifests/`, `.gitattributes` export-ignore) |
| 2026-08-01 | Brother Kāruṇya social profile on the site | Codex | Built; persona never created. Ruling vs. Akiko still open |
| 2026-08-22→31 | Link accounts/persona (Akiko); journal release calendar with Alaska-date gate | Codex | Calendar + gate done; persona ruling pending since 2026-09-03 |
| 2026-09-20→25 | Brewing companion app: sessions, timer recovery, tasting journal, export/import, Android notices, keep-awake; installable PWA previews | Cursor + Codex | Milestones 1–2 done; Android debug APK runs on the Samsung |
| 2026-09-23→24 | Mac/iOS handoff; Android API 36; notice fixes; brand-only release hardening (noindex, env gate, per-article approval) | Codex | Done; iOS never compiled |
| 2026-09-25→10-01 | Steep Timer PWA (separate repo) + reliability fixes | Claude, Codex | Done; PR #1 merged |
| 2026-10-13 | Lift install hold; Cloudflare preview first; Steep Timer on GitHub Pages; review B06–B12 | Owner rulings | See §4 |
| 2026-10-14→16 | Source-check B06–B12; privacy page for app; dependency bumps; native release prep; integration branch | Claude | Done on local branches; Steep Timer live |
| 2026-10-20 | Handoff protocol in every project (`status-handoff.md`) | Owner | Done |
| 2026-10-23→24 | Audit live WordPress + payments; publish Akiko-inspired guidance + free brew-note prompts on the live Projects page | Codex | **Live** (verified via WordPress API 2026-10-29); payments blocked |
| 2026-10-27 | Free brew-notes printables (A4 + Letter PDFs, HTML, generator, integrity docs) | Codex | Done locally; saved in `chore/recovery-20261028` |

Built on WordPress outside this repo, dates unknown but before 2026-10-13: the "Start Here" and "Herbal" sections, **The Botanical Cup** (36 cited plant profiles, kitchen infusions, foraging guidance), and the free newsletter "Join the tea table". Between Steeps went into redesign: the conversation-deck prototype and its sampler were retired.

## 4. Planned roadmap and where we are (2026-10-29)

Legend: ✅ done · 🟡 built, waiting on owner · 🔴 blocked · ⬜ not started

**A. Live site, beingteaco.com (WordPress.com site 102864778). This is production.**
- ✅ Botanical library, Start Here, Herbal, newsletter form, Akiko section on Projects (`/shop/`, page 1022, modified 2026-10-23).
- 🔴 Paid commerce: Stripe not connected in WordPress Monetize; no approved product, price, refund policy, markets or fulfillment/entitlement provider.
- ⬜ Newsletter lifecycle test (signup → email → unsubscribe) has never been run.
- 🟡 Between Steeps observation packs: in redesign. Next: build packs → print proof → test at real tables → then a paid edition.

**B. Replacement candidate (this repo). Paused behind reconciliation.**
- ✅ Content: 9 families, 9 methods, 12 articles; release hardening; B01–B05 approved.
- 🟡 B06–B12: source-checked; 10 fixes + Monday dates on `review/journal-b06-b12-20261016`. Waiting on owner approval per article + B10–B12 expert reads. The proposed dates have passed again, so re-date at approval.
- 🟡 `/companion/privacy`, dependency bumps, integration branch: tested, local only.
- 🟡 Codex 2026-10-24/27 work (shop/disclosures Akiko guidance, brew-notes printables): saved on `chore/recovery-20261028`, not reviewed.
- 🔴 **New prerequisite:** live WordPress now has features this repo lacks (Botanical Cup, newsletter, Start Here, Herbal, Between Steeps redesign). **Do not replace WordPress from this repo** until those are reconciled, or until the owner decides WordPress stays production.
- ⬜ Cloudflare noindex preview (owner runs `wrangler deploy`). ⬜ DNS cutover.

**C. Persona and social.**
- 🟡 Akiko vs. Brother Kāruṇya: open since 2026-09-03. Live WordPress uses Akiko (fictional, disclosed). This repo still shows Brother Kāruṇya. Needs a ruling before the two are reconciled.
- 🟡 36-post social studio: staged privately; publishing status unknown.

**D. Companion app** (`codex/mac-handoff-20260923` + `native/release-prep-20261016`; worktree `../mobile-publishing-2026-09-20/rebuilds/tea`).
- ✅ Sessions, timer, journal, export/import, notices wired; brew-core 28/28; debug APK runs on the Samsung.
- 🟡 Release signing wiring (unbuilt). ⬜ Upload keystore, AAB, Play internal track. ⬜ Doze/lock/process-death notice checks. ⬜ iOS build.

**E. Steep Timer** (`../being-tea-timer`).
- ✅ Live at https://justice-write.github.io/Steep-Timer/ (2026-10-14). ⬜ Phone install check. 🟡 Standalone vs. fold into the site.

## 5. Current state (2026-10-29, after the recovery sweep)

- **Recovery saves (nothing in the working tree was changed):**
  - `chore/recovery-20261028` @ `c445b5c` (parent `ec4e18b`) holds every uncommitted/untracked file as found on 2026-10-28: shop/disclosures edits, ROADMAP/handoff notes, `docs/free-brew-notes-*`, `public/downloads/*` (PDFs byte-identical), `scripts/build-brew-notes.py`, `AGENTS.md`.
  - Bundles of every branch: `../_backups/being-tea-co/2026-10-28-recovery/` (`being-tea-co.bundle` 14 heads, `being-tea-co-private-source.bundle`, `being-tea-timer.bundle`, plus copies of the timer's local-only handoff files). Codex's own file backups: `../_backups/being-tea-co/2026-10-24-codex/`, `2026-10-27-codex/`.
- The working tree still has those edits uncommitted on `codex/roadmap-sites-20260927` (5 commits ahead of origin). **Nothing in this repo is pushed past 2026-09-27** except what's on GitHub. The six local branches + the recovery branch exist only on Sophia and in the bundles.
- Cloudflare: no `being-tea-co` Worker (last checked 2026-10-20).
- Local checks (Codex, 2026-10-27, with the uncommitted edits): build + 13/13 route tests + typecheck pass.

## 6. Where everything is

| Thing | Location |
|---|---|
| Production site | https://beingteaco.com (WordPress.com, site ID 102864778) |
| Repo | https://github.com/Justice-Write/being-tea-co (`origin`; also a `codex-internal` remote) |
| Release line | `codex/roadmap-sites-20260927`; `main` is stale (2026-08-01) |
| Local-only branches | `integration/preview-20261016`, `review/journal-b06-b12-20261016`, `site/companion-privacy-20261016`, `deps/npm-security-bumps-20261016`, `native/release-prep-20261016`, `chore/recovery-20261028`, `chore/recovery-20261028-tea` |
| Companion app worktree | `../mobile-publishing-2026-09-20/rebuilds/tea` (has its own `status-handoff.md`) |
| Steep Timer | `../being-tea-timer` (handoff local-only; repo root is the public site) |
| Private legacy snapshot | `../being-tea-co-private-source` (never release) |
| Journal review brief | https://claude.ai/code/artifact/8c4549c7-02b8-43de-8a0a-79915a7c0441 |
| Codex task workspaces | `C:\Users\Justice Right\Documents\Codex\<date>\task-N` (2026-07-13 → 2026-10-28 survive on disk). The 2026-10-23 task-2 folder holds the live-WordPress report and before/after markup. Not yet backed up or indexed: needs owner folder approval |
| Portfolio master handoff | `../status-handoff.md` and `../RECOVERY-2026-10-28.md` |

## 7. How to run and test

- vinext (Vite + `@cloudflare/vite-plugin`), Worker entry `worker/index.ts`, no bindings. Node 22.13+.
- `npm ci` → `npm test` (build + rendered-route tests) → `npm run typecheck`. Keep `pnpm-lock.yaml` in sync (`npx pnpm@11.19.0 install --lockfile-only`).
- Preview (owner): `npx wrangler deploy --name being-tea-co` from `integration/preview-20261016`.
- Release env (release action only): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SITE_RELEASED=true`, `NEXT_PUBLIC_SITE_RELEASE_HOST`.
- Journal gate: `approvedBlogIds` + Alaska date + no `publicationGate`; checked per request.
- Brew notes: `python scripts/build-brew-notes.py --output-dir output/pdf` (needs reportlab + pypdf).
- Companion app: `npm run test:brew-core`; `cd mobile && npm run android:apk` / `android:aab`.

## 8. Open items

**Owner decisions, in priority order:**
1. **Production strategy:** keep WordPress as production (and port the repo's journal/guides into it), or reconcile the repo with the newer WordPress features and then replace. Everything in B waits on this.
2. Akiko vs. Brother Kāruṇya.
3. Push the local branches and recovery branch (they exist only on Sophia + bundles).
4. Approve folder access to `Documents\Codex` so its task workspaces get backed up and indexed.
5. B06–B12 decisions + expert readers; `/companion/privacy` copy.
6. Commerce: first Between Steeps product, price, refund, markets, Stripe connection, delivery provider.
7. App: keystore, AAB, Play internal track, device notice checks, iOS. Timer: phone install.

**Agent-doable after owner go-ahead:** reconcile WordPress ↔ repo (inventory WordPress pages via the WordPress.com API, map to repo routes); verify a preview URL; merge approved branches.

## 9. Gotchas

- **WordPress is newer than this repo** (botanical library, newsletter, Between Steeps, Akiko section). Never deploy a replacement over it without reconciliation. A public web fetch of `/shop/` returned a stale copy on 2026-10-29; read pages through the WordPress.com API instead.
- Line endings: Windows working tree is CRLF. In Linux run git with `-c core.autocrlf=true`. `package-lock.json` is stored CRLF in git.
- From the Cowork Linux shell: get delete permission before any git write (otherwise `.git/*.lock` files are left behind); no push credentials; ~1 GB disk (do installs in a cloud workspace). The owner's terminals are click-only for agents.
- `AGENTS.md` is untracked on the release line on purpose (`codex/mac-handoff-20260923` has its own). It's saved on the recovery branch.
- The tea worktree shares this `.git`; never put `status-handoff.md` in `.git/info/exclude`.
- GitHub Pages stays off for this repo (commercial-use limits).
- Content rules: no paid links without up-front disclosure; no health claims; name traditions and peoples; Akiko is always labelled fictional; never publish the private founder reference.
- A passing local test is not editorial approval or live-release evidence.

## 10. Work log (newest first)

- **2026-10-29 — Claude Opus 5.5 (Cowork, being tea co project session):** Post-ChatGPT-loss recovery. Saved all uncommitted/untracked work to `chore/recovery-20261028` (`c445b5c`) without touching the working tree. Checked the PDFs byte for byte. Bundled every branch of this repo, private-source and Steep Timer into `../_backups/being-tea-co/2026-10-28-recovery/` (verified). Confirmed the Codex 2026-10-24 Akiko section is live on page 1022 via the WordPress.com API. Rewrote this file as the program handoff: §2 inception, §3 features asked for, §4 roadmap status. Found the surviving Codex task workspaces (`Documents\\Codex`); folder access timed out, so they're not yet backed up. Nothing pushed, deployed or published.
- **2026-10-27 - Codex:** completed unblocked local print/delivery readiness for existing free brew log. Two one-page PDFs, HTML links, Python source generator, manifests and verification docs. Reopened/text/page-size/integrity checks pass; both final Poppler renders inspected; real localhost asset delivery 200/application/pdf and hashes match. Existing build+13/13 tests+typecheck pass. Temp dev server stopped. Backups ../_backups/being-tea-co/2026-10-27-codex/. No commit/push/publish, installations, paid actions, account access changes or unrelated-project writes. Remaining owner decisions unchanged; physical printer and paid lifecycle unrun.


- **2026-10-24 — Codex, Sophia:** audited repository + actual live WordPress and payment dashboard. Published one scoped Akiko-inspired section to Projects page 1022 using WordPress.com block operations; all 19 original blocks preserved and unauthenticated live HTTP 200 verified. 390px visual check passes. Prepared local guidance/disclosure/printable changes; existing tests 13/13 + typecheck pass. No Git commit/push or replacement deploy; newer WordPress content must be preserved. Commerce blocked by no connected Stripe, approved offer/price or delivery provider. No account/security changes, purchases, newsletter/social/customer communications. Backups and detailed report recorded above. All requested escalation checks approved; no unresolved denied action.


- **2026-10-20 — Claude Opus 5.5 (Cowork, being-tea-co project session):** Filled this handoff with verified state from the 2026-10-13…16 work and added the before/after update rule for every agent (see §0 and `CLAUDE.md`). Created matching handoffs for `../being-tea-timer` (kept local, since its root is the public site) and the native worktree `../mobile-publishing-2026-09-20/rebuilds/tea`. Committed `status-handoff.md` + `CLAUDE.md` here. `AGENTS.md` is left **untracked** on purpose: the `codex/mac-handoff-20260923` line has its own tracked `AGENTS.md`, so add the handoff section there when the lines merge.
- **2026-10-20 — Claude (Cowork subagent):** Created this status-handoff.md baseline from repo docs and git log. No code changes.
- **2026-10-16 — Claude Opus 5.5 (Cowork):** Created and tested `integration/preview-20261016`, `site/companion-privacy-20261016`, `deps/npm-security-bumps-20261016` and `native/release-prep-20261016` (results in §5). Moved the stale `being-tea-co-roadmap-20260924` worktree to `../to-delete/`. Committed `84a5a9d` (ROADMAP changelog).
- **2026-10-16 — Claude Opus 5.5 (Cowork):** `ad3e02e` on `review/journal-b06-b12-20261016`: 10 source-check edits and re-dates. Confirmed live date gating. Commits `5646497`, `a56bed4` (ROADMAP).
- **2026-10-14 — Claude (Cowork):** Source-checked every B06–B12 citation (brief linked in §3). Enabled Steep Timer GitHub Pages (separate repo).
- **2026-10-13 — Owner rulings:** installation hold lifted; Cloudflare preview first; Steep Timer on GitHub Pages.
- **2026-10-16:** `84a5a9d`/`a56bed4`/`5646497` — recorded owner rulings, B06–B12 source check, and the five local review/integration branches.
- **2026-09-27:** `6dd92e0` reconciled preserved roadmap work; 13/13 rendered-route tests on Windows.
- **2026-09-24 → 09-25:** `424bf44` hardened brand-only journal release; `b002625` checkpoint.
