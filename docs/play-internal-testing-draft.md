# Play internal testing draft

This is a human-owned checklist. Cursor will not submit, change Play
account permissions, or use production signing secrets.

## Copy (from approved public language)

- **App name:** Being Tea Co.
- **Short description:** Local brewing sessions and tasting notes from Being Tea Co.’s approved tea library.
- **Full description:**
  Being Tea Co. is independent tea-culture education established in 2015.
  This companion keeps reusable multi-infusion sessions, an adjustable
  timer, and a tasting journal on your device. Starting points quote the
  approved tea-family library and its sources. House timer defaults are
  labeled as house defaults. There are no paid product links and no
  invented health claims in this build.

## Data safety answers for this build

- Data collected: none by Being Tea Co.
- Data shared: none
- Data encrypted in transit: not applicable (no Being Tea Co. network journal API)
- Users can request deletion: yes, by deleting the app or journal entries; email beingteaco@gmail.com
- Categories: no location, no financial, no health, no photos in this build

## Release signing and bundle (prepared 2026-10-16)

The repo now has release signing wiring that reads a git-ignored
`mobile/android/keystore.properties`. Owner steps on Sophia, outside the repo:

1. Create the upload keystore once and back it up somewhere safe:
   `keytool -genkeypair -v -keystore being-tea-upload.jks -alias being-tea-upload -keyalg RSA -keysize 2048 -validity 10000`
2. Copy `mobile/android/keystore.properties.example` to `keystore.properties`
   and fill it in locally. `*.jks`, `*.keystore` and `keystore.properties`
   are git-ignored.
3. `cd mobile && npm run android:aab` writes
   `android/app/build/outputs/bundle/release/app-release.aab`.
4. Upload to a Play internal testing track and let Play manage the app
   signing key. The keystore above is the upload key.

Never paste keystore passwords into chat, issues or commits.

## Privacy policy URL

The site candidate branch `site/companion-privacy-20261016` adds
`/companion/privacy` with the text of `docs/mobile-privacy.md`. Once the site
is public, the URL is `https://beingteaco.com/companion/privacy`. Until then,
no stable public URL exists, and a workers.dev preview is not a stable URL.

## Store listing blockers

- Publish a public privacy policy URL (see `docs/mobile-privacy.md`).
- Human-owned Play Console upload with a release keystore that is not in this repo.
- Screenshots from a physical device or the emulator run, if available.
- Google personal account is verified; do not automate login or permission changes.

## What not to upload yet

- No production AAB until privacy URL and signing are human-ready.
- Do not include private founder images.
