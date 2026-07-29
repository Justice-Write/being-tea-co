import Link from "next/link";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header ${overlay ? "is-overlay" : "is-solid"}`}>
      <Link className="wordmark" href="/" aria-label="Being Tea Co. home">
        <span className="seal">B</span>
        <span>Being Tea Co.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/learn">Tea library</Link>
        <Link href="/brew">Brew</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/shop">Tea &amp; tools</Link>
        <Link className="nav-cta" href="/#story">
          Our story
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark footer-mark" href="/">
        <span className="seal">B</span>
        <span>Being Tea Co.</span>
      </Link>
      <p>Tea culture from leaf to golden light.</p>
      <div>
        <a href="https://www.instagram.com/beingteaco/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://x.com/BeingTeaCo" target="_blank" rel="noreferrer">
          X
        </a>
        <a href="https://beingteaco.wordpress.com/" target="_blank" rel="noreferrer">
          Archive
        </a>
      </div>
      <small>
        Independent tea education · Established 2015 ·{" "}
        <Link href="/standards">Editorial standards</Link>
      </small>
    </footer>
  );
}
