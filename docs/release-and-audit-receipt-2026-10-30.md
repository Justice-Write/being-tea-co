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
  boundary; PR #10 corrected manifest discovery; PRs #11-#12 finalized the
  corrected receipts and package boundary; and PR #13 fixed the hosted offline
  fallback. The PR #13 merge checkpoint is
  `9e858b4cc92a35202b11ed0318a1a0898692cf5d`.
- Cloudflare preview:
  https://being-tea-co-preview.christiancodyak.workers.dev. Worker version
  `f26a1111-72c4-488f-a853-cd7794f8d453` deployed successfully. The corrected
  verifier discovers the manifest from rendered HTML, requires a same-origin
  link, and passed service-worker, offline-page, icon, public-path, Brew Notes
  PDF-integrity, brand-only, noindex, private-route 404, and content checks.
  Fresh Chrome returned zero installability errors and one active worker. A
  fresh isolated Chrome profile then loaded the honest `/offline` fallback
  while network requests were blocked. An
  independent sweep returned 35/35 routes at HTTP 200, all with `noindex,
  nofollow`, zero private/persona marker hits, and a disallow-all robots file.
- OpenAI Sites preview:
  https://being-tea-co.chriscodyak.chatgpt.site. Sites version 12, source commit
  `cc80192f0929031ac6e99e8363a2090a71bda5e5`, deployment
  `appgdep_6ae4c38dff008191bce549cd31e43e9d`, succeeded. The corrected live PWA
  verifier passed; fresh Chrome returned zero installability errors and one
  active worker; and an independent 35-route sweep returned all routes at HTTP
  200 with `noindex, nofollow`, zero private/persona marker hits, and a
  disallow-all robots file. Isolated offline navigation also passes. The exact
  Sites helper archive is
  `Being-Tea-Co-Sites-PWA-Runtime-Offline-Fixed-Sites-Source-2026-10-30.tar.gz`,
  local SHA-256
  `46f14adbee587f68c6a9ecd89dd6023093cc5c6fcf259cbab37fa6606e39b9b8`.
  Sites accepted it as 160 files / 38,164,480 bytes with storage content hash
  `sha256:72b5adf55765a6c534246520d1ab925bdad9da15593bda2f9bf4acaddd3da8ad`.
  It contains the exact relative manifest link, manifest/icons, redirect-free
  network-first fallback, and compiled runtime. Any package prefixed
  `SUPERSEDED-` is evidence only and must not be deployed.

Cloudflare is the authoritative PWA-install origin. Its served PWA text assets
match the release after line-ending normalization. OpenAI Sites preserves the
exact manifest and service worker but injects its hosting challenge script into
`/offline`; that fallback still works and contains no personal data.

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
- PR #13 adds a regression assertion that the worker caches `/offline`, not the
  redirected `/offline.html`, and the live verifier requires an HTTP 200
  redirect-free fallback.

## Preview PWA installation

- The earlier installability receipt was invalidated by a fresh Chrome check:
  the rendered manifest link resolved to the placeholder `.invalid` origin.
  PR #10 corrected it to a same-origin relative link and strengthened the
  tests. Fresh Chromium checks of both corrected hosts return zero
  installability errors with one active worker.
- The earlier generic Edge wrapper prompt was dismissed because it was not PWA
  proof. After owner confirmation, genuine manifest-derived install dialogs
  installed and launched both Being Tea Co. Preview and Steep Timer as
  standalone Edge apps.
- The service worker uses network-first navigations and caches only public
  static assets plus the honest brand-only offline fallback. Page HTML, APIs,
  authentication, cookies, credentials, account information, and personal data
  are excluded from the cache.
- `Get-StartApps` records Being Tea Co. Preview as
  `being-tea-co-preview.christiancodyak.work-FAA835CD_y6bzsb8nrkt52!App` and
  Steep Timer as
  `justice-write.github.io-70B607B5_zhxr49f7y1p7t!App`. AppX readback reports
  both packages at version 1.0.0.0 with status `Ok`. Optional taskbar/Start
  pins, desktop shortcuts, and auto-start were declined.
- A fresh isolated Chrome profile passed offline navigation for both preview
  hosts and Steep Timer without touching the Edge user profile or personal
  records. Installed-profile physical offline/update/uninstall acceptance and
  phone installation remain incomplete and must not be inferred from that run.

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
- The desktop PWA is installed, registered, and launched; isolated-profile
  offline navigation passes. Phone installation and installed-profile physical
  offline/background acceptance remain open.

## Package and personal-data boundary

Consumer packages may contain reviewed code, compiled runtime assets, approved
tea guidance, ordinary brand art/icons, blank Brew Notes, release notes, and
integrity receipts.

The Sites archive is a development/deployment source package rather than a
consumer data directory. It includes the public repository's withheld B06-B12
draft source and images, although their routes remain gated and return 404.
That material is not personal data, but source presence is not editorial
approval and does not authorize publication.

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
4. Install and physically accept the Being Tea Co. Preview PWA on a phone and
   complete installed-profile offline/update/uninstall acceptance on Windows.
5. Finish Steep Timer phone and installed-profile offline/background acceptance
   or keep it desktop/web only.
6. Resolve the visibility or retirement of any legacy editorial repository
   before pushing owner-only studio material.
7. Define and test a complete paid-product lifecycle before activating
   commerce.
