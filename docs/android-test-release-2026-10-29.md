# Android testing prerelease — 2026-10-29

Published by the coordinating Codex task:
[android-test-2026-10-29](https://github.com/Justice-Write/being-tea-co/releases/tag/android-test-2026-10-29).

- Release source target: `3645b6f378c0c5a86e3175e51e9e646c3dba26df`.
- Package: `co.beingtea.companion`, version 1.0.1/code 2; debug signed.
- APK size: 4,333,161 bytes.
- APK SHA-256: `33d507183cf67a52dba6c13211172fd3c5c23fa925ad1b4e1e6e96ce32af2e2e`.
- Signer SHA-256: `e522332903499b3e615e03f543358836a3c89360904b202ca3745af6f16b2deb`.

The coordinating task verified that GitHub's uploaded APK digest matches the
local APK above. The native task independently verified the local signature,
ZIP CRC, 12 native public assets, and installed APK hash on the connected
Samsung SM-N986U1. Same-ID/same-signer installation succeeded in place,
without uninstall/downgrade/reset; first-install time remained unchanged.
Launch succeeded to the existing app guide. Personal journal files were not
read, copied, or packaged.

Fresh local verification: 28 core tests + 17 persistence/lifecycle regressions,
mobile TypeScript/production build and browser smoke. Offline direct Gradle
assembly succeeded; the normal Gradle daemon/native unit-test worker hit the
host's loopback connection error, so no new native unit-test/lint pass is claimed.

This is a GitHub **testing prerelease**, not production signing, a Play Store
listing, TestFlight, or an iOS build. Physical brewing/journal/export workflow,
accessibility, prolonged use, and lock-screen/Doze/process-death notice
acceptance remain open. Later documentation-only commits do not change this
release's source target or binary digest.
