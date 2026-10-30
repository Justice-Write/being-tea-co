# Being Tea Co. public program handoff

**Last updated:** 2026-10-30 by Codex

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

- None.

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
- Live verification on 2026-10-30 returned HTTPS 200, a self-canonical page,
  an indexable sitemap, and healthy WordPress status. The site has 81 published
  pages, 14 published posts, and 142 media items.
- The October inventory found 79 existing published pages; the Companion parent
  and privacy child brought the known page total to 81. See
  `docs/wordpress-route-reconciliation-2026-10-29.md`.
- The replacement lacks several WordPress-only sections and must not overwrite
  production.
- Paid commerce is inactive. No product, price, refund policy, market,
  fulfillment provider, or merchant lifecycle has been approved and verified.

### Replacement website

- GitHub `main` contains the sanitized brand-only candidate. Launch merge
  `dab5f299` has the same source tree as reviewed head `339d19a`; audit PR #4
  and dependency-hardening PR #5 brought `main` to `9422500`.
- Two public, deliberately noindex previews are live:
  `https://being-tea-co-preview.christiancodyak.workers.dev` and
  `https://being-tea-co.chriscodyak.chatgpt.site`.
- Cloudflare Worker version `bc4ce1a5-86d4-4f5a-ba39-385738feab5e` and Sites
  version 9 were independently checked on 2026-10-30. All 35 sitemap routes on
  each host returned HTTP 200, remained brand-only, and carried noindex.
- The site has nine tea families, nine brew methods, trust pages, free Brew
  Notes, and twelve journal drafts.
- B01-B05 are the only approved candidate articles. B06-B12 remain withheld;
  B10-B11 require cultural/source review and B12 requires health-language
  review. Passed dates do not constitute approval.
- Preview mode is `noindex, nofollow`. Public release mode requires the exact
  approved HTTPS origin and release environment values described in README.
- The current direction is Being Tea Co. brand-only. Public routes and
  downloads must not present a fictional host or persona-network identity.
- See `docs/release-and-audit-receipt-2026-10-30.md` for exact deployment,
  package, and verification receipts.

### Native companion

- Branch `codex/mac-handoff-20260923` is pushed at `2eb18f4`; the published
  Android test prerelease intentionally targets tested source `3645b6f`.
- Package `co.beingtea.companion`, version 1.0.1 / code 2.
- 28 brew-core and 17 persistence/lifecycle checks pass.
- A development-signed debug update was installed in place on the existing
  Android test phone. The signer, package identity, installed APK hash, and
  original install date were preserved; no journal records were read or reset.
  The on-device APK SHA-256 still exactly matches the GitHub prerelease asset:
  `33d507183cf67a52dba6c13211172fd3c5c23fa925ad1b4e1e6e96ce32af2e2e`.
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
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm lint
pnpm audit --prod
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

1. **Done:** publish and verify brand-only noindex previews while WordPress
   stays live.
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
- Repository names do not prove repository visibility. Check the provider
  setting before pushing owner-only editorial material or operational handoffs.
- Preserve the companion package ID and signing identity. Never uninstall to
  work around a signature mismatch because uninstall removes local app data.
- GitHub Pages remains disabled for this commercial-capable repository.

## 8. Work log

- 2026-10-30 — Reconciled the associated chats, products, repositories,
  deployments, packages, installations, and personal-data boundaries. PR #4
  added the public-safe audit/handoff and initial production dependency pins;
  PR #5 closed the provider's remaining development dependency alerts. Clean
  npm and pnpm installs, full audits, build, 14/14 tests, typecheck, lint, a
  Drizzle generation check, and an Open Graph render passed. Cloudflare worker
  `bc4ce1a5-86d4-4f5a-ba39-385738feab5e` and OpenAI Sites version 9 then passed
  separate 35-route noindex/brand checks. WordPress remains production; the
  Android package remains a debug test release; Steep Timer PWA installation,
  companion physical acceptance, legacy editorial-repository disposition,
  production replacement, commerce, signing, and store publication remain
  open or owner-gated.
- 2026-10-29 — Native companion branch pushed at `3645b6f`; tests passed and a
  same-signature debug update was installed in place. Manual and production
  release acceptance remain open.
- 2026-10-29 — Steep Timer pushed/deployed at `7bb93c1`; automated checks pass.
  PWA installation acceptance remains open.
- 2026-10-29 — WordPress route inventory and project/data-boundary audit
  completed. WordPress remains production and contains unreconciled newer work.
- 2026-10-27 — Free Brew Notes A4/Letter proofs, HTML alternative, generator,
  integrity manifest, and local delivery checks completed.
