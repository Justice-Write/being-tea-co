# Companion package and personal data boundaries

Reconciled 2026-10-29. This concerns `co.beingtea.companion`, not the separate
`com.castleborn.phonetest.*` prototype or Steep Timer PWA.

## Required install content

- Compiled `mobile/dist` UI and `packages/brew-core` logic.
- Approved family/method starting points derived from `app/content/library.ts`.
- Android activity/resources/icons, Capacitor bridge, and seven local plugins.
- The explicitly labelled synthetic sample-journal fixture, embedded by the
  Data screen for voluntary export/import testing. It is never auto-imported.

The APK does not require the website journal, the private editorial studio,
founder imagery, account workbooks, development chats, source checkouts,
build caches, signing private keys, or any existing user's tasting records.

## Personal records stay outside the package

| Data | Location and treatment |
|---|---|
| Tasting records, saved sessions, active timer | `being-tea-co.mobile.v1` in native Preferences and app WebView localStorage; web preview uses its own browser origin. Keep private and preserve on upgrades. |
| Unacknowledged native save | `being-tea-co.mobile.v1.pending-native` recovery record in the same localStorage origin; cleared only when the matching native write is acknowledged. It can duplicate private notes temporarily. |
| Exported JSON/CSV | Native app cache for sharing, then wherever the user saves/sends the file. Browser exports go to the user's chosen download location. These are personal backups, not release artifacts. |
| OS backup | Android manifest enables `allowBackup=true`; OS/device backup or transfer may include private app data according to device settings and OS behavior. No Being Tea Co. server sync is implemented. |
| Debug/upload signing secrets | Local keystores/signing properties outside versioned source and install assets. APK signatures contain public certificate material, not the private key. |
| Private founder reference and drafts | Separate private source/reference locations; not inspected or copied into this app. |

Uninstalling or clearing app data can erase the journal. A same-ID,
same-signer in-place update normally preserves app data; verify the actual
installed certificate and version before updating. Do not use downgrade
flags or uninstall to bypass incompatibility. A different prototype package
does not share this app's data; transfer only through explicit compatible
export/import. Do not copy app-private files into source or an APK.

## Recovery and release status

The accepted 2026-10-02 lifecycle candidate (`5a1056a`, including `95252c0`
and `22fb3c0`) was found in an isolated Codex task checkout and merged into
the canonical native line with existing release-preparation `0508f7e`.
The package remains version 1.0.1/code 2; ID, primary storage schema, and
native origin are unchanged. Retained evidence records the older installed
code-1 signer as SHA-256
`e522332903499b3e615e03f543358836a3c89360904b202ca3745af6f16b2deb`.
This historical observation is not a current phone inventory.

The 28 core plus 17 storage/lifecycle regressions use synthetic records and
passed locally on 2026-10-29. Mobile production build and 390px browser smoke
also passed. They do not establish real-device persistence, lock-screen
notices, haptics, keep-awake, OS backup, or native share-sheet behavior.

The phone was connected later in the run. Installed code2 and its certificate
were checked before a same-version in-place update. The updated APK hash
matches the local build and first-install time remains unchanged; launch
reaches the existing app guide. No private journal data was read, reset, or
copied. Manual brewing and notification acceptance remain pending. iOS compilation requires Mac/Xcode and remains
unverified. Upload keystore configuration is absent; no production-signed
AAB or store submission is claimed.
