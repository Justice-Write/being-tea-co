import { PhotoHero } from "../../components/PhotoHero";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { SITE_EMAIL, pageMetadata } from "../../lib/site";

const imageAlt =
  "A sealed tea caddy and blank folded document kept in a divided dark-wood drawer beside a small cup of tea.";

export const metadata = pageMetadata({
  title: "Companion App Privacy",
  description:
    "What the Being Tea Co. brewing companion stores on your device, what can leave it, and how local notices and keep-awake work.",
  path: "/companion/privacy",
  image: "/images/pages/privacy.webp",
  imageAlt,
});

export default function CompanionPrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <PhotoHero
        eyebrow="Companion app privacy"
        title="Your notes,"
        emphasis="under your control."
        description="The Being Tea Co. brewing companion keeps sessions, the timer, and your tasting journal on the phone you use it on."
        image="/images/pages/privacy.webp"
        imageAlt={imageAlt}
      />

      <article className="prose-page legal-copy">
        <p className="policy-date">Last updated October 29, 2026</p>
        <p className="policy-lead">
          This notice covers the Being Tea Co. companion app. The website has
          its own <a href="/privacy">privacy policy</a>.
        </p>

        <h2>What the app stores</h2>
        <p>
          The companion stores tasting notes, reusable brewing sessions, and
          the active timer on your device. There is no Being Tea Co. account,
          checkout, analytics pixel, advertising SDK, or cloud sync in the
          current version.
        </p>

        <h2>What leaves your device</h2>
        <p>
          Nothing is uploaded to Being Tea Co. servers by the app. If you use
          Export or Share, the operating system share sheet or the file you
          save is under your control. Source links open third-party sites that
          set their own privacy practices.
        </p>
        <p>
          Android device backup is enabled in the current build. Depending on
          your device settings, the operating system may back up or transfer
          app data, including your journal. Manage those copies through your
          device or backup provider. This is separate from Being Tea Co. sync.
        </p>

        <h2>Notifications and keep-awake</h2>
        <p>
          If you grant notification permission, the app may schedule a local
          infusion-done notice for the current timer. That notice is not a
          guaranteed alarm after the system stops the app. While a timer is
          running in the foreground, the app may ask the screen to stay awake.
        </p>

        <h2>Deleting your data</h2>
        <p>
          Delete individual journal entries in the app, or uninstall the app
          to remove its local storage. Export first if you want a copy.
          Files you exported or shared, and operating-system backups, are
          separate copies; remove them separately where they are stored.
        </p>

        <h2>Children and privacy requests</h2>
        <p>
          The companion is not directed to children under 13. Send privacy
          requests to{" "}
          <a href={`mailto:${SITE_EMAIL}?subject=Companion%20privacy%20request`}>{SITE_EMAIL}</a>.
        </p>

        <h2>Changes</h2>
        <p>
          This notice will be updated before the app adds accounts, sync,
          analytics, or any feature that sends data off your device.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
