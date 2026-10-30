# Being Tea Co. mobile companion

Local-first brewing sessions, an adjustable infusion timer, and a tasting
journal. Starting points are copied from `app/content/library.ts`. This
directory does not replace the public storefront.

Read the root `status-handoff.md` for the current native release checkpoint.
The separate portfolio phone-test prototype is not this companion's package.

## What is implemented

- Reusable multi-infusion sessions from approved tea-family / method pairings.
- Adjustable timer with pause, resume, ±15 seconds, custom duration, and
  relaunch recovery from persisted wall-clock state.
- Persistent tasting journal with edit, search, delete, and safe JSON
  export/import (schema allowlist, key rejection, merge or replace).
- An in-app foreground chime, optional haptic, and optional local infusion
  notice if the OS grants permission. **That notice is not a guaranteed
  alarm after the system stops the app.**
- Keep-awake while a timer is running on native builds.
- Native share/export, CSV, family filter, and editable saved sessions.
- A labeled fixture file for import testing. The journal starts empty.
- An iOS Xcode project (`mobile/ios`) that has not been compiled here.

## Web preview (smoke and daily use)

```bash
cd mobile
npm install
npm run dev
```

Open `http://127.0.0.1:5174`. Production-like preview:

```bash
npm run build
npm run preview
```

## Android debug APK

The committed `android/` project is a Capacitor shell around `mobile/dist`.
It is a **debug** artifact for sideload testing. Store submission is out of
scope.

Requirements:

- Node.js 22.13+
- JDK 21
- Android SDK platform 36, build-tools, and platform-tools
- `ANDROID_HOME` or `ANDROID_SDK_ROOT` pointing at the SDK

```bash
cd mobile
npm install
npm run android:apk
```

The debug APK is written to:

`mobile/android/app/build/outputs/apk/debug/app-debug.apk`

This environment produced that APK on 20 September 2026 with:

- OpenJDK 21
- Android SDK platform 35, build-tools 35.0.0 (Gradle also installed 34.0.0)
- `ANDROID_SDK_ROOT` / `ANDROID_HOME` pointing at the SDK
- `sdk.dir` in `android/local.properties` (not committed)

```bash
sdkmanager --sdk_root="$ANDROID_SDK_ROOT" \
  "platform-tools" "platforms;android-35" "build-tools;35.0.0"
echo "sdk.dir=$ANDROID_SDK_ROOT" > android/local.properties
npm run android:apk
```

If the SDK is missing, the web build still verifies the same logic. Do not
claim an APK exists unless that file was actually produced.

This APK declares `POST_NOTIFICATIONS`, `WAKE_LOCK`, and
`RECEIVE_BOOT_COMPLETED` because of the local-notice and keep-awake
plugins. Those permissions do not mean a lock-screen alarm was device-tested.

## iOS

```bash
cd mobile
npx cap sync ios
```

Then open `ios/App/App.xcworkspace` on a Mac with CocoaPods and Xcode.
This Linux environment cannot produce an IPA.

## Signing and user data

Debug APKs use the local debug keystore. Android refuses an in-place update
with a different signer for the same application ID. Never uninstall to work
around this: export the existing journal and agree a migration first. This
project keeps `co.beingtea.companion` and the existing storage key/origin.
An APK contains app code and approved guidance, not the user's journal.
See `../docs/mobile-package-data-boundaries.md` for the complete boundary.

## Tests

From the repository root:

```bash
npm run test:brew-core
cd mobile && npm run test:persistence
```

With the companion preview running (`cd mobile && npm run preview`):

```bash
cd mobile && npm run test:smoke
```

That suite checks approved-quote integrity, timer recovery, reusable
sessions, journal search/edit, and hostile import rejection.

## What this is not

- Not a store listing, TestFlight build, or Play upload.
- Not a background alarm or lock-screen notification product.
- Not a source of invented temperatures or health claims.
- Not a host for private founder images.
