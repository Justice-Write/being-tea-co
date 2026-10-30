# Being Tea Co. release and audit receipt — 2026-10-30

This is a public-safe receipt. It separates source, deployment, installation,
and personal data. It does not approve a WordPress replacement, commerce,
production signing, store submission, or publication of private material.

## Authority and websites

- Production remains WordPress.com site 102864778 at
  https://beingteaco.com. Live checks returned HTTPS 200, a self-canonical
  indexable site and sitemap, 81 published pages, 14 published posts, and
  healthy site status. The Companion and Companion Privacy pages both return
  HTTP 200.
- Public source is https://github.com/Justice-Write/being-tea-co. Sanitized
  launch PR #3 merged at `dab5f299`; audit PR #4 and dependency-hardening PR
  #5 closed the dependency findings; PR #6 finalized the public handoff; PR #7
  added the preview PWA; PRs #8-#9 finalized its public-safe receipt and host
  boundary; and PR #10 corrected manifest discovery. The corrected source
  checkpoint is `e5d699d8aa19c05a5568f12d4b4f95b1c8a2745e`.
- Cloudflare preview:
  https://being-tea-co-preview.christiancodyak.workers.dev. Worker version
  `56ae09fc-81d6-4642-bc02-e9f4dc1dddd4` deployed successfully. The corrected
  verifier discovers the manifest from rendered HTML, requires a same-origin
  link, and passed service-worker, offline-page, icon, public-path, Brew Notes
  PDF-integrity, brand-only, noindex, private-route 404, and content checks.
  Fresh Chrome returned zero installability errors and one active worker. An
  independent sweep returned 35/35 routes at HTTP 200, all with `noindex,
  nofollow`, zero private/persona marker hits, and a disallow-all robots file.
- OpenAI Sites preview:
  https://being-tea-co.chriscodyak.chatgpt.site. Sites version 11, source commit
  `6f6063b0c503660bf9d34698b0b9b83b0680cac9`, deployment
  `appgdep_6ae46736f4f48191a1c3c416642ef5b5`, succeeded. The corrected live PWA
  verifier passed; fresh Chrome returned zero installability errors and one
  active worker; and an independent 35-route sweep returned all routes at HTTP
  200 with `noindex, nofollow`, zero private/persona marker hits, and a
  disallow-all robots file. The packaged source archive is
  `Being-Tea-Co-Sites-PWA-Fixed-2026-10-30.tar.gz`, SHA-256
  `53123e04e4cf7f4699715d4bda4ac0bb8b2241254e05206567592e245663dc51`.
  The earlier archive was relabeled
  `SUPERSEDED-Being-Tea-Co-Sites-PWA-Pre-PR10-2026-10-30.tar.gz`; it is
  preserved only as superseded evidence and must not be deployed.

Cloudflare is the authoritative PWA-install origin. Its served PWA text assets
match the release after line-ending normalization. OpenAI Sites preserves the
exact manifest and service worker but injects its hosting challenge script into
`offline.html`; that fallback still works and contains no personal data.

Both preview hosts are public only so the candidate can be reviewed. Their
noindex state is intentional. Neither owns `beingteaco.com`, and neither may
replace WordPress without route/content/newsletter/redirect/rollback review.

## Source and dependency verification

- Fresh locked install completed with the repository's pnpm lockfile.
- Build plus 15 rendered-route/content/PWA tests passed.
- TypeScript check passed.
- Lint completed with zero errors and seven existing image-optimization
  warnings.
- Full npm and pnpm audits reported no known vulnerabilities after pinning the
  affected transitive production and development dependencies. GitHub then
  returned zero open Dependabot alerts. The initial production pins address
  [GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8)
  and
  [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q).

## Preview PWA installation

- The earlier installability receipt was invalidated by a fresh Chrome check:
  the rendered manifest link resolved to the placeholder `.invalid` origin.
  PR #10 corrected it to a same-origin relative link and strengthened the
  tests. Fresh Chromium checks of both corrected hosts return zero
  installability errors with one active worker.
- The earlier generic Edge wrapper prompt was dismissed. It was not PWA proof,
  and no desktop app was installed.
- The service worker uses network-first navigations and caches only public
  static assets plus the honest brand-only offline fallback. Page HTML, APIs,
  authentication, cookies, credentials, account information, and personal data
  are excluded from the cache.
- Neither Being Tea Co. Preview nor Steep Timer is installed on Windows. The
  Being Tea desktop install has not occurred because the final Edge/Windows
  install action requires action-time owner confirmation.
- Windows/phone installed-app and physical offline acceptance remain
  incomplete. This is separate from source publication and from Steep Timer
  acceptance.

## Companion package and installation

- Native source branch `codex/mac-handoff-20260923` is pushed at `2eb18f4`.
- The published test release intentionally targets tested source `3645b6f`:
  https://github.com/Justice-Write/being-tea-co/releases/tag/android-test-2026-10-29
- Package `co.beingtea.companion`, version 1.0.1 / code 2, is installed on the
  connected Android test phone.
- The installed base APK and published release asset have the same SHA-256:
  `33d507183cf67a52dba6c13211172fd3c5c23fa925ad1b4e1e6e96ce32af2e2e`.
- This is a development-signed debuggable prerelease, not a production AAB,
  Play release, or iOS release. Manual brewing/export/accessibility and
  notification behavior under background, lock, Doze, and process death remain
  open.

## Steep Timer

- Separate source: https://github.com/Justice-Write/Steep-Timer
- Live PWA: https://justice-write.github.io/Steep-Timer/
- Production branch commit `7bb93c1` is deployed; the page and manifest return
  HTTP 200, and the local runtime-only ZIP has a recorded integrity hash.
- Desktop/phone PWA installation and physical offline/background acceptance are
  not yet complete.

## Package and personal-data boundary

Consumer packages may contain reviewed code, compiled runtime assets, approved
tea guidance, ordinary brand art/icons, blank Brew Notes, release notes, and
integrity receipts.

They must not contain founder identity references, source photographs, real
tasting journals or sessions, exported notes, device-backup archives,
WordPress exports or subscriber/contact/comment/analytics data, credentials,
environment files, signing keys, recovery bundles, private business plans,
social drafts, task conversations, source history, or development logs.

The Android APK archive was checked for obvious private/journal/identity paths;
none were found. Real device-backup archives and founder references remain
outside the canonical source and release package. No private journal record was
opened, copied, reset, or seeded during this audit.

## Open decisions and acceptance

1. Reconcile WordPress-only content, redirects, newsletter behavior, and
   rollback before any replacement decision.
2. Approve B06–B12 individually and obtain the required B10–B12 specialist
   reads.
3. Complete companion manual/device acceptance, production signing, Play
   internal testing, and an iOS build.
4. Install and physically accept the Being Tea Co. Preview PWA on Windows and
   phone; the Windows action awaits confirmation.
5. Finish Steep Timer installation/offline acceptance or leave it web-only.
6. Resolve the visibility or retirement of any legacy editorial repository
   before pushing owner-only studio material.
7. Define and test a complete paid-product lifecycle before activating
   commerce.
