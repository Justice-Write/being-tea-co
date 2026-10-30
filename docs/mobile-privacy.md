# Being Tea Co. companion privacy draft

Status: draft for the local companion. This is not a published storefront
page and does not change the website privacy policy.

Last updated: 29 October 2026

## What this app stores

The companion stores tasting notes, reusable brewing sessions, and the
active timer on the device. There is no Being Tea Co. account, checkout,
analytics pixel, advertising SDK, or cloud sync in the current build.

## What leaves the device

- Nothing is uploaded to Being Tea Co. servers by this app.
- If you use Export or Share, the operating system share sheet or a
  downloaded file is under your control.
- Source links open third-party sites that have their own practices.
- Android system backup is enabled (`allowBackup=true`). Depending on device
  settings and OS behavior, the operating system may back up or transfer app
  data. This is separate from a Being Tea Co. sync service.
- Native exports are staged in the app cache before the operating system share
  sheet opens. Shared copies remain wherever you choose to save or send them;
  deleting an entry in the app does not delete those copies.

Native saves also keep a temporary recovery copy in local web storage until
the native preferences plugin acknowledges the write. This copy can contain
the same private journal data. It is not included in the install package.

## Notifications and keep-awake

If you grant notification permission, the app may schedule a local
infusion-done notice for the current timer. That notice is not a
guaranteed alarm after the system stops the app. While a timer is
running in the foreground, the app may request that the screen stay
awake.

## Children and requests

The companion is not directed to children under 13. Privacy requests:
beingteaco@gmail.com.

## Before a store listing

A human must publish a public privacy URL and update the website policy
if store listing begins. This draft is the in-app / repository text only.
