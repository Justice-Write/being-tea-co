# Being Tea companion app (native) — status-handoff

**Last updated:** 2026-10-20 by Claude Opus 5.5 (Cowork, being-tea-co project session) · **Owner:** Christian (GitHub `Justice-Write`)

This folder is a **git worktree of `../../../being-tea-co`** checked out on `codex/mac-handoff-20260923`. It is the working folder for the native brewing companion. Read this file, then `AGENTS.md` (tracked; project rules) and `../../../being-tea-co/status-handoff.md` (whole-brand status). The portfolio-wide rule is in `GitHub/AGENTS.md`.

This file is untracked on purpose: it isn't on the website release line, and adding it to `.git/info/exclude` would hide every worktree's handoff, because the exclude file is shared.

---

## 0. Operating rule — every agent, every time (mandatory)

1. **Before you start any work**, add an entry to §8 *In progress*: UTC time, your model/tool name, what you are about to do, which files/systems you will touch. Save the file before doing the work. If you are interrupted, this entry is the only record of what was half-done.
2. **When you finish (or stop, or get blocked)**, move your entry out of §8 into §9 *Work log* (newest first) with what actually happened: files changed, commits/PRs, deploys, test results, evidence paths, anything left undone. Then update §4 *Current state*, §5 *Next steps* and §6 *Owner decisions* so they are true right now. Update **Last updated** above.
3. **If you find a stale entry in §8** from someone else, do not delete it. Check whether that work landed (git log, file timestamps, deploy logs), then record your finding under it and move it to §9 marked `INTERRUPTED — verified state: …`.
4. Never record secrets, tokens, passwords, or personal data here. Reference where evidence lives instead.
5. Keep entries short and factual. Separate *verified* from *claimed by a source doc*. If you did not run it, say so.
6. Other agents (Codex, Cursor, Claude Code, ChatGPT, Claude Cowork) work in this repo and its worktrees concurrently. Check §8 before starting so you do not collide.
7. Copy this operating rule unchanged into any new handoff you create for another project.


---

---

---

## 1. What this is

"Being Tea" is a local-first Capacitor app (`co.beingtea.companion`, display name "Being Tea Co."): multi-infusion brewing sessions, an adjustable timer with relaunch recovery, a tasting journal with safe JSON/CSV export and import, an optional local infusion notice, and keep-awake. There is no account, sync, analytics or ads. The code is in `mobile/` (React + Vite + Capacitor 7) and `packages/brew-core/` (shared logic, no React). Brewing guidance must come from `app/content/library.ts`; never invent temperatures or health claims.

## 2. Where things live

| Thing | Location |
|---|---|
| This branch | `codex/mac-handoff-20260923` @ `2a1f98d` (pushed). Clean as of 2026-10-16 |
| Release-prep branch | `native/release-prep-20261016` @ `0508f7e`, **local only** in `being-tea-co`: release signing wiring, keystore ignores, `npm run android:aab`, Play checklist update |
| Docs | `mobile/README.md`, `docs/mobile-roadmap.md`, `docs/mobile-privacy.md`, `docs/play-internal-testing-draft.md`, `mac-handoff/REMAINING-WORK-AND-HANDOFFS.md` |
| Privacy URL (planned) | `/companion/privacy` on the website branch `site/companion-privacy-20261016`; becomes `https://beingteaco.com/companion/privacy` once the site is public |
| Test phone | Samsung SM-N986U1 (debug APK installed 2026-09-23) |

## 3. Hard rules

- Don't change `applicationId` / bundle id `co.beingtea.companion`: a different id or signature is a different app, and users lose their local journal.
- Keystores, `keystore.properties` and passwords never go into the repo, chat or this file. On the release-prep branch, `*.jks`, `*.keystore` and `keystore.properties` are git-ignored.
- No store uploads, account changes or spend without the owner. Don't market the local notice as an alarm until it has been observed on a device.

## 4. Current state (2026-10-20)

- `npm run test:brew-core`: **28/28** (2026-10-16). The mobile web build and smoke tests passed earlier (2026-09-20/24). The debug APK runs on the Samsung.
- Release signing is wired on `native/release-prep-20261016`, but **Gradle hasn't run it**: Claude's environments have no Android SDK, so the owner's next `android:apk`/`android:aab` build is the first check.
- iOS: an Xcode project exists (`mobile/ios`, bundle id set, AppIcon 1024 px present) but has **never been compiled**.

## 5. Next steps (ordered)

1. Owner: review and push `native/release-prep-20261016`; build `npm run android:apk` to confirm the debug path still works.
2. Owner: create the upload keystore and `mobile/android/keystore.properties` (steps in `docs/play-internal-testing-draft.md` on the release-prep branch), then `npm run android:aab`.
3. Owner: on the Samsung, grant notifications, run one infusion with the app backgrounded, then locked, then force-stopped. Record what fires.
4. Owner: Play internal track upload once the privacy URL is live; iOS build on a Mac.
5. Later: decide how `mobile/` + `packages/` merge into the website release line. They are separate branches today.

## 6. Owner decisions open

- When to publish the website, which the privacy URL depends on.
- Whether to market the local notice at all, after the device check.

## 7. Gotchas

- This worktree shares `.git` with `being-tea-co`. Checking out another branch here changes nothing in the main folder, but branch deletions affect both.
- In a Linux shell, run git with `-c core.autocrlf=true`.

## 8. In progress (claim here BEFORE starting; remove when done)

- 2026-10-29 06:20 UTC · Claude Opus 5.5 (Cowork, being tea co project session) · Recovery after the ChatGPT history loss: snapshot all uncommitted/untracked work to branch `chore/recovery-20261028-tea` (temp index; working tree, real index and checked-out branch untouched), back up local-only branches as a git bundle in `../_backups/being-tea-co/2026-10-28-recovery/`, then rewrite this handoff's current state and add the Being Tea Co program handoff. If this entry is still here, that work was interrupted.
## 9. Work log (newest first)

- **2026-10-20 — Claude Opus 5.5 (Cowork):** Created this handoff. No code changes.
- **2026-10-16 — Claude Opus 5.5 (Cowork):** `native/release-prep-20261016` (`0508f7e`): release signing from the git-ignored `keystore.properties` + template; un-commented the keystore ignores; `android:aab`; Play checklist; brew-core 28/28. Verified this worktree was clean.
- **2026-09-24 — Codex:** `2a1f98d`: infusion-notice cancellation and foreground completion fixes; timer reliability notes in `mac-handoff/`.
