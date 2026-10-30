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
  #5 brought `main` to `9422500`.
- Cloudflare preview:
  https://being-tea-co-preview.christiancodyak.workers.dev. Worker version
  `bc4ce1a5-86d4-4f5a-ba39-385738feab5e` deployed successfully. The preview
  verifier passed public-path, Brew Notes PDF-integrity, brand-only, noindex,
  private-route 404, and content checks. A 35-route sitemap sweep returned no
  failures.
- OpenAI Sites preview:
  https://being-tea-co.chriscodyak.chatgpt.site. Sites version 9, source commit
  `6f28aa8133879e60bb7c9d26860883e7f015c072`, deployment
  `appgdep_6ae4627058a081919ff7a00ed13b5ea9`, succeeded. A separate live sweep
  returned HTTP 200 for all 35 sitemap routes; every route remained brand-only
  and noindex. `robots.txt` disallows the whole preview.

Both preview hosts are public only so the candidate can be reviewed. Their
noindex state is intentional. Neither owns `beingteaco.com`, and neither may
replace WordPress without route/content/newsletter/redirect/rollback review.

## Source and dependency verification

- Fresh locked install completed with the repository's pnpm lockfile.
- Build plus 14 rendered-route/content tests passed.
- TypeScript check passed.
- Lint completed with zero errors and seven existing image-optimization
  warnings.
- Full npm and pnpm audits reported no known vulnerabilities after pinning the
  affected transitive production and development dependencies. GitHub then
  returned zero open Dependabot alerts. The initial production pins address
  [GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8)
  and
  [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q).

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
4. Finish Steep Timer installation/offline acceptance or leave it web-only.
5. Resolve the visibility or retirement of any legacy editorial repository
   before pushing owner-only studio material.
6. Define and test a complete paid-product lifecycle before activating
   commerce.
