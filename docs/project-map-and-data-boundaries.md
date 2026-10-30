# Project map and data boundaries

Reconciled 2026-10-30. Read `../status-handoff.md` before work. This document describes software/data boundaries, not permission to publish private records.

## Associated projects

| Component | Authority / source | Role |
|---|---|---|
| Being Tea Co. production | https://beingteaco.com (WordPress.com) | Education, botanical library, newsletter and Projects page |
| Replacement website | This repository, `main`; Cloudflare and OpenAI Sites preview hosts | Separate installable public noindex PWA; NOT a replacement for WordPress |
| Being Tea companion | Same repository, `codex/mac-handoff-20260923`; `mobile/` + `packages/brew-core/` | Local sessions, repeat infusions, timer, journal, export/import and local notices; GitHub test prerelease only |
| Steep Timer | https://github.com/Justice-Write/Steep-Timer and https://justice-write.github.io/Steep-Timer/ | Separate educational extraction PWA; not the companion |
| Between Steeps | WordPress Projects page | Observation-pack product in redesign; paid offer not approved |
| Free Brew Notes | `public/downloads/`, generator in `scripts/` | Blank free worksheets and HTML alternative; not a paid product |
| Portfolio Android test lab | Sibling `mobile-publishing-2026-09-20` | Historical isolated test APK; do not confuse with `co.beingtea.companion` |
| Legacy editorial snapshot | Separate owner-controlled source archive | Development/history only; never deploy or include its studio/social material in a consumer package |

Other portfolio products and historical persona systems are separate. No
shared-login migration, persona publication, commerce activation, or
cross-project data import is required to run the tea apps.

## What belongs in a package

| Data | Required at runtime? | Treatment |
|---|---|---|
| Compiled application, reviewed guidance, ordinary licensed brand images/icons | Yes | Include only the app's build output and required native resources |
| Blank brew-note HTML/PDF worksheets | Website downloads | Public free artifacts; PDF files are binary to preserve exact bytes in Git |
| Preview-PWA cache | Offline shell only | Cache only public static assets and the static offline fallback; exclude page HTML, APIs, auth, cookies, account information and personal data |
| Companion journal, sessions, custom settings and active timer | Created by the user after install | Device-private data; never seed release builds from an owner's storage dump |
| Exported JSON/CSV notes and OS backup copies | No | Personal copies controlled separately; uninstalling does not erase exported or backed-up copies |
| Steep Timer localStorage `bt-timer-v1` | User settings, not install assets | Browser profile stores style, temperature and leaf amount separately |
| WordPress subscriber/contact/comment records, account settings | Production service data | Do not copy into static site or APK; not inventoried as personal records here |
| Founder identity reference, personal source photographs, private social studio/drafts | No | Remain private; never put in installer, public branch or release archive |
| Keystores, tokens, environment files, account recovery material | No consumer runtime need | Keep outside public Git/releases; preserve signing identity for updates |
| Source history, task conversations, recovery bundles, backups, tests and development dependencies | No | Development/recovery only; not a consumer install directory |
| Sites runtime-source archive | Deployment input, not consumer data | Include tracked build/runtime source only; exclude operational handoffs, secrets, personal data, backups and recovery material; never use a package labeled `SUPERSEDED-` |

The companion enables Android OS backup. Device settings can therefore allow journal/preferences backup or transfer even though the app has no Being Tea server sync. Preserve package ID/signature and update in place; do not uninstall to bypass a signing mismatch.

## Computer inventory coverage

Confirmed canonical source, the separate Sites source copy, native source and
test package, Steep Timer source/runtime archive, legacy editorial snapshot,
old WordPress export, internal business/roadmap notes, identity references,
device-backup evidence, and dated recovery folders. Filename searches covered
the project workspaces, bounded GitHub/ChatGPT folders, Downloads, Desktop,
Start Menu, and OneDrive. Dependencies, Git objects, browser profiles,
credentials, and private file contents were excluded.

Windows installed-app, package, shortcut, Start-menu, and Chromium web-app
inventory found neither Being Tea Co. Preview nor Steep Timer installed. The
connected Android test phone has only `co.beingtea.companion` version 1.0.1 /
code 2 among the Being Tea packages checked; no app was launched and no private
journal data was inspected.

This is NOT an exhaustive content scan of every drive: generic filenames, unavailable cloud-only files, browser profile storage, phone-private records, credentials and unsearched archives remain outside coverage. No personal journal export was identified by filename; that does not establish its absence. No private founder image was opened, and no personal records were moved or deleted.

## Continuation order

1. Use the current root handoff and 2026-10-30 release receipt, not September APK briefing claims.
2. Keep WordPress production and reconcile its newer routes/content before proposing any replacement.
3. Install and physically accept the Being Tea Co. Preview PWA on Windows and phone; the Windows action requires action-time confirmation.
4. Complete native manual brewing/export/accessibility and notification/lock/background acceptance without reading or resetting private journals.
5. Verify Steep Timer installation/offline behavior or explicitly leave it web-only; keep this separate from the preview-PWA decision.
6. Keep per-article approval and specialist review gates; source-checked does not mean approved.
7. Paid offer, price, refund/markets, merchant connection and delivery remain separate owner decisions.
