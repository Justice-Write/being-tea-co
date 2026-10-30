# Being Tea Co. public program handoff

**Last updated:** 2026-10-29 by Codex

This is the public-safe entry point for the Being Tea Co. website, companion,
and Steep Timer. Keep it free of private account mappings, credentials,
subscriber records, personal app data, founder identity references, chat
archives, and machine-specific paths.

## 0. Operating protocol

1. Read this file and the relevant part of `ROADMAP.md` before editing.
2. Record active work under **In progress** before starting.
3. Preserve unrelated or concurrent work. Never reset, clean, or overwrite an
   owner checkout.
4. When work stops, remove its in-progress entry and add a short, factual work
   log entry with commit, tests, publication evidence, and remaining limits.
5. Treat local build, pushed source, preview deployment, production release,
   physical-device acceptance, and store publication as separate states.
6. Never add secrets or personal/operational records to this public repository.
7. Keep WordPress production until its newer content and rollback plan are
   explicitly reconciled with the replacement candidate.

## 1. In progress

- 2026-10-29 — Codex: final brand-only website reconciliation, public-history
  sanitation, WordPress/Sites preview publication, release documentation, and
  verification. No commerce, DNS cutover, persona publication, or store upload.

## 2. Product map

| Product | Authority | Current role |
|---|---|---|
| WordPress website | `https://beingteaco.com` | Production; includes newer Botanical Cup, Herbal, Start Here, newsletter, and Between Steeps material |
| Replacement website | This release line | Separate noindex preview; not approved to replace WordPress |
| Being Tea companion | `codex/mac-handoff-20260923` | Local-first Android/iOS source for sessions, repeat infusions, timer, journal, export/import, and local notices |
| Steep Timer | `https://github.com/Justice-Write/Steep-Timer` | Separate installable educational PWA |
| Free Brew Notes | `public/downloads/` | Free brand-only HTML and PDF observation sheets |

Historical persona systems and private social/editorial work are not runtime
dependencies and are not part of the current public brand direction.

## 3. Current state

### WordPress production

- Production remains WordPress.com site 102864778 at `beingteaco.com`.
- The October inventory found 79 existing published pages; this release added
  the Companion parent and privacy child, for 81 known pages. See
  `docs/wordpress-route-reconciliation-2026-10-29.md`.
- The replacement lacks several WordPress-only sections and must not overwrite
  production.
- Paid commerce is inactive. No product, price, refund policy, market,
  fulfillment provider, or merchant lifecycle has been approved and verified.

### Replacement website

- Release line: `codex/roadmap-sites-20260927`.
- The site has nine tea families, nine brew methods, trust pages, free Brew
  Notes, and twelve journal drafts.
- B01-B05 are the only approved candidate articles. B06-B12 remain withheld;
  B10-B11 require cultural/source review and B12 requires health-language
  review. Passed dates do not constitute approval.
- Preview mode is `noindex, nofollow`. Public release mode requires the exact
  approved HTTPS origin and release environment values described in README.
- The current direction is Being Tea Co. brand-only. Public routes and
  downloads must not present a fictional host or persona-network identity.

### Native companion

- Branch `codex/mac-handoff-20260923` is pushed at `3645b6f`.
- Package `co.beingtea.companion`, version 1.0.1 / code 2.
- 28 brew-core and 17 persistence/lifecycle checks pass.
- A development-signed debug update was installed in place on the existing
  Android test phone. The signer, package identity, installed APK hash, and
  original install date were preserved; no journal records were read or reset.
- Still open: manual brewing/export/accessibility checks, notification behavior
  under background/lock/Doze/process death, production keystore/AAB, Play
  internal track, and an iOS build on macOS.

### Steep Timer

- Production branch is pushed at `7bb93c1` and GitHub Pages deployed that exact
  commit successfully.
- 20 model/service-worker tests and 19 interface smoke checks pass.
- A runtime-only ZIP exists outside the public source checkout.
- Desktop/phone PWA installation and physical offline/background acceptance are
  not yet verified.

## 4. Data boundary

Release packages may contain reviewed public source/content/assets, required
compiled runtime resources, blank Brew Notes, and explicitly labeled synthetic
test fixtures.

Keep these outside public source and consumer packages:

- real tasting journals, sessions, active timers, exports, and device backups;
- subscriber, contact, comment, account, and analytics records;
- credentials, environment files, signing keys, and recovery material;
- founder identity references and personal source photographs;
- private studio/social drafts, business plans, task chats, and recovery bundles.

Android OS backup is enabled for the companion. Device or provider settings may
therefore back up private journal data even though the app has no Being Tea Co.
account, analytics, advertising, or server sync. Exported/shared files and OS
backups are separate copies that uninstalling does not remove.

See `docs/project-map-and-data-boundaries.md` for the package-level map.

## 5. Verification commands

Website:

```text
npm ci
npm test
npm run typecheck
npm run lint
npm audit --omit=dev
```

Preview receipt:

```text
node scripts/verify-preview.mjs https://PREVIEW_ORIGIN
```

Native companion (from its worktree):

```text
npm run test:brew-core
npm --prefix mobile run test:persistence
npm --prefix mobile run android:apk
```

## 6. Roadmap order

1. Publish and verify a brand-only noindex preview while WordPress stays live.
2. Reconcile WordPress-only routes, exact content, redirects, newsletter
   behavior, and rollback before any replacement decision.
3. Obtain article-by-article approval for B06-B12 and the required specialist
   reads; assign new future dates only after approval.
4. Complete companion manual/device acceptance, production signing, store
   materials, and iOS compilation without bundling personal data.
5. Verify Steep Timer installation/offline behavior or decide whether it stays
   standalone.
6. Treat any paid offer as a separate owner-approved lifecycle covering exact
   product, proof, price, seller/support/refund terms, markets, payment, tax,
   fulfillment, and delivery.

## 7. Gotchas

- WordPress publication does not approve revised candidate text automatically.
- Date/route gates do not keep draft source private in a public repository.
- A passing test is not editorial approval, live verification, device
  acceptance, or store readiness.
- `export-ignore` affects source archives only; it does not hide tracked files
  or Git history.
- Preserve the companion package ID and signing identity. Never uninstall to
  work around a signature mismatch because uninstall removes local app data.
- GitHub Pages remains disabled for this commercial-capable repository.

## 8. Work log

- 2026-10-29 — Native companion branch pushed at `3645b6f`; tests passed and a
  same-signature debug update was installed in place. Manual and production
  release acceptance remain open.
- 2026-10-29 — Steep Timer pushed/deployed at `7bb93c1`; automated checks pass.
  PWA installation acceptance remains open.
- 2026-10-29 — WordPress route inventory and project/data-boundary audit
  completed. WordPress remains production and contains unreconciled newer work.
- 2026-10-27 — Free Brew Notes A4/Letter proofs, HTML alternative, generator,
  integrity manifest, and local delivery checks completed.
