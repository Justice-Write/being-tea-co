# Being Tea companion app (native) — status-handoff

**Last updated:** 2026-10-29 by Codex GPT-6 (native reconciliation) · **Owner:** Christian (GitHub `Justice-Write`)

This folder is a **git worktree of `../../../being-tea-co`** checked out on `codex/mac-handoff-20260923`. It is the working folder for the native brewing companion. Read this file, then `AGENTS.md` (tracked; project rules) and `../../../being-tea-co/status-handoff.md` (whole-brand status). The portfolio-wide rule is in `GitHub/AGENTS.md`.

This handoff is now tracked on the native branch under the owner's standing protocol. It is distinct from the website-line handoff; do not overwrite either during a future cross-line merge. Never add it to shared `.git/info/exclude`.

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
| This branch | `codex/mac-handoff-20260923`; reconciled native release line (see current state and work log) |
| Release-prep branch | `native/release-prep-20261016` @ `0508f7e`, integrated into the native line in `being-tea-co`: release signing wiring, keystore ignores, `npm run android:aab`, Play checklist update |
| Docs | `mobile/README.md`, `docs/mobile-roadmap.md`, `docs/mobile-privacy.md`, `docs/play-internal-testing-draft.md`, `mac-handoff/REMAINING-WORK-AND-HANDOFFS.md` |
| Privacy URL (planned) | `/companion/privacy` on the website branch `site/companion-privacy-20261016`; becomes `https://beingteaco.com/companion/privacy` once the site is public |
| Test phone | Samsung SM-N986U1 (debug APK installed 2026-09-23) |

## 3. Hard rules

- Don't change `applicationId` / bundle id `co.beingtea.companion`: a different id or signature is a different app, and users lose their local journal.
- Keystores, `keystore.properties` and passwords never go into the repo, chat or this file. On the release-prep branch, `*.jks`, `*.keystore` and `keystore.properties` are git-ignored.
- No store uploads, account changes or spend without the owner. Don't market the local notice as an alarm until it has been observed on a device.

## 4. Current state (2026-10-29)

- Native line integrates release prep `0508f7e` and the recovered accepted lifecycle candidate `5a1056a` via merge `6e92a1b`. The earlier handoff missed the October lifecycle work.
- Fresh 28 brew-core + 17 actual adapter/listener regressions pass; TypeScript/mobile production build and unchanged 390px browser smoke pass.
- Android debug APK built via existing offline JDK21/Gradle8.11.1 environment. Package `co.beingtea.companion`, version 1.0.1/code 2, target API36. SHA256 `33d507183cf67a52dba6c13211172fd3c5c23fa925ad1b4e1e6e96ce32af2e2e`; 4,333,161 bytes. Signature matches installed signer; ZIP CRC and all 12 native public assets match.
- Installed in place on connected Samsung SM-N986U1; installed APK hash matches. Prior version was already code2, firstInstallTime remains unchanged. Launch Status OK to existing GuideActivity. No private journal files inspected, copied, reset or seeded. No crash-buffer entry matching package observed; this is not prolonged/manual acceptance.
- Portable Gradle launcher fixes Windows `./gradlew` invocation. This host's normal daemon and native unit-test worker hit `Unable to establish loopback connection`; offline direct Gradle assemble succeeds. Native unit tests/lint not newly qualified.
- Package and receipt: `~/Downloads/Being-Tea-Co-2026-10-29.zip`; unzipped APK/README/verification JSON alongside it. Evidence/backups: `GitHub/_backups/being-tea-co/2026-10-29-codex-native/`.
- Privacy/data separation documented in `docs/mobile-package-data-boundaries.md`; Android OS backup is enabled and now disclosed in-app. Private journal and export files are not install assets.
- No upload keystore properties present, no production-signed AAB, no store upload. iOS synced but not compiled; Xcode/CocoaPods unavailable here.

## 5. Next steps (ordered)

1. Manually complete the installed app guide and brewing/journal/export journey; verify accessibility and long-session usability.
2. Observe optional notices in foreground, background, lock/Doze and process-stop scenarios; do not promise guaranteed alarms.
3. Resolve upload-signing ownership/configuration, verify public privacy URL and Play eligibility, then prepare the production AAB/internal track.
4. Build/test iOS on Mac/Xcode.
5. Integrate native and website release lines deliberately; their handoffs are different program views.

## 6. Owner decisions open

- When to publish the website, which the privacy URL depends on.
- Whether to market the local notice at all, after the device check.

## 7. Gotchas

- This worktree shares `.git` with `being-tea-co`. Checking out another branch here changes nothing in the main folder, but branch deletions affect both.
- In a Linux shell, run git with `-c core.autocrlf=true`.

## 8. In progress (claim here BEFORE starting; remove when done)

- None.

## 9. Work log (newest first)

- **2026-10-29 — Codex GPT-6:** Integrated recovered lifecycle candidate and existing release-prep into canonical native line, fixed Windows Gradle task invocation, added persistence test script, corrected OS backup/export disclosures, documented install-vs-personal data boundaries, and tracked this handoff. Fresh 45 tests + mobile build/smoke pass. Debug APK signature/CRC/asset parity verified; same-ID/same-signer in-place phone install and installed hash verified; launch reaches GuideActivity. No private records read or reset. Native test worker blocked by host loopback; offline assembly succeeded. Production signing/store/iOS/manual device acceptance remain open. Package SHA and evidence locations in §4. This entry is committed with the changes; remote verification is reported by the coordinating task.

- **2026-10-29 — Claude Opus 5.5 (Cowork, being tea co project session):** Post-ChatGPT-loss recovery check. Worktree clean apart from this untracked handoff, which was snapshotted to `chore/recovery-20261028-tea` (`1bda13c`). No app code changes since 2026-09-24; `native/release-prep-20261016` is local only and in the bundle. See `../being-tea-co/status-handoff.md` (program handoff: inception, features asked for, roadmap status, owner decisions) for the whole Being Tea Co. picture.
- **2026-10-20 — Claude Opus 5.5 (Cowork):** Created this handoff. No code changes.
- **2026-10-16 — Claude Opus 5.5 (Cowork):** `native/release-prep-20261016` (`0508f7e`): release signing from the git-ignored `keystore.properties` + template; un-commented the keystore ignores; `android:aab`; Play checklist; brew-core 28/28. Verified this worktree was clean.
- **2026-09-24 — Codex:** `2a1f98d`: infusion-notice cancellation and foreground completion fixes; timer reliability notes in `mac-handoff/`.
