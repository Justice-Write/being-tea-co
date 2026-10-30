# Being Tea Co replacement-candidate roadmap

Reconciled October 30, 2026. This supersedes the stale August persona decision queue.

- [x] Integrate the preserved journal checkpoint and September 24 review branch locally.
- [x] Keep the site brand-only, as directed by the owner in the newer internal roadmap.
- [x] Require explicit approval and the Alaska release date for every journal route and sitemap entry.
- [x] Keep B01–B05 approved; B06–B12 withheld until individual approval. B10–B12 also require specialist review.
- [x] Keep unreleased previews noindex and public release hosts explicitly gated.
- [x] Build and pass 14 rendered-route tests on Windows.
- [x] Source-check every citation in B06–B12 (2026-10-14). All sources exist; 10 required wording edits. Brief: https://claude.ai/code/artifact/8c4549c7-02b8-43de-8a0a-79915a7c0441
- [ ] Obtain B10 teaware/cultural, B11 cultural/source and B12 health-language practitioner reads (questions listed in the brief).
- [ ] Obtain exact editorial approval for each remaining draft.
- [x] Keep WordPress as production and the replacement as a separate noindex preview. A DNS cutover remains a separate future decision after route/content/rollback reconciliation.
- [x] Publish and verify the sanitized candidate on separate noindex Cloudflare and OpenAI Sites preview hosts.
- [ ] Approve and execute a production replacement release, then verify actual routes, redirects, newsletter behavior, rollback, and metadata.
- [ ] Complete real provider lifecycle tests before any newsletter, commerce, paid links or account service is represented as active.

The private legacy source is a separate snapshot, not the release candidate. Persona accounts are not changed by this work. The private founder reference remains private.

See `ROADMAP-EXECUTION-2026-09-27.md` for the earlier integration history and
`docs/release-and-audit-receipt-2026-10-30.md` for the current verified
release state. The sanitized candidate reached the default branch through PR
#3; WordPress remains production. The portfolio installation hold was lifted
for Being Tea Co by the owner on 2026-10-13.

## Changelog

- 2026-10-30 — Merged the sanitized brand-only candidate through PR #3 at
  `dab5f299`; published and independently verified both noindex preview hosts
  across 35 sitemap routes; confirmed WordPress remains healthy production with
  81 pages and 14 posts; reverified the connected phone's companion APK against
  the GitHub prerelease; audited the project/package data boundary; and pinned
  affected transitive dependencies through PRs #4 and #5. Clean npm and pnpm
  installs and full audits now pass, and GitHub reports zero open Dependabot
  alerts. The current noindex previews are Cloudflare worker
  `bc4ce1a5-86d4-4f5a-ba39-385738feab5e` and OpenAI Sites version 9. Steep Timer
  remains live but is not yet installed as a PWA. No DNS, commerce,
  personal-data, production-signing, or store action occurred.

- 2026-10-29 — Owner confirmed WordPress production plus a separate preview and reaffirmed brand-only presentation. Reconciled the initial 79 published pages and 14 posts; replaced the one persona-framed Projects block without disturbing its 19 siblings; added published Companion and Companion Privacy pages; upgraded Next/React/RSC/Vite; tightened the brand-only route test; rebuilt the brand-only Brew Notes; and documented project/data boundaries. Native branch 3645b6f was pushed and its same-signature debug APK installed in place. Steep Timer 7bb93c1 was pushed and deployed. Website publication and public-history sanitation are the remaining work in this release pass.

- 2026-10-27 - Existing free brew log now has local A4/Letter one-page PDF proofs, HTML links, generator, integrity manifest and readiness report. Visual render, actual local asset delivery/MIME/hash checks, build+13/13 tests and typecheck pass. No publishing, product/price/provider decisions or account/financial changes. Physical print and paid lifecycle still unrun.


- 2026-10-24 — Confirmed production WordPress is newer than repository and must be preserved. Published persona-framed guidance/free brew prompts on the live Projects page; all original blocks were preserved. This framing was superseded by the owner’s 2026-10-29 brand-only direction. Paid launch remains blocked by no approved offer/price and no verified payment or fulfillment lifecycle.


- 2026-10-16 — Branches ready for owner review (all local, not pushed):
  - `integration/preview-20261016` (d805707) = release + the three branches below. Clean install, `npm test` 14/14, typecheck, release-guard check and `wrangler deploy --dry-run` (334 KiB gzip, no bindings) all pass. Deploy the preview from this branch.
  - `review/journal-b06-b12-20261016` (ad3e02e): B06–B12 source-check edits + Monday dates; 13/13.
  - `site/companion-privacy-20261016` (e94f036): `/companion/privacy` for the Play listing; sitemap + test; 14/14.
  - `deps/npm-security-bumps-20261016` (087542d): dependabot group applied to this branch (next 16.3.6, vite 8.3.1 + in-range updates); undici/ws/top-level sharp remain pinned by miniflare (dev-only). Supersedes the dependabot PR against stale main.
  - `native/release-prep-20261016` (0508f7e, on mac-handoff): release signing from git-ignored keystore.properties, keystore ignores, `android:aab`; brew-core 28/28.
  - Retired the stale `being-tea-co-roadmap-20260924` worktree (clean, commit pushed) to `GitHub/to-delete/`.
- 2026-10-16 — Branch `review/journal-b06-b12-20261016` (ad3e02e) carries the 10 source-check edits and re-dates B06–B12 to Mondays Oct 19–Nov 30. Not merged; no article approved. Confirmed article routes render per request (no prerendered HTML), so the Alaska date gate needs no redeploy.
- 2026-10-14 — B06–B12 source check complete (brief linked above). Proposed re-dating B06–B12 to consecutive Mondays Oct 19–Nov 30 pending owner approval.
- 2026-10-13 — Owner lifted the installation hold for Being Tea Co; chose Cloudflare preview first for this candidate and GitHub Pages for Steep Timer (live 2026-10-14 at https://justice-write.github.io/Steep-Timer/).
