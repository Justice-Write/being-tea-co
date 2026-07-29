import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { socialPosts } from "../content/social";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Private Editorial Studio",
  description:
    "Owner review room for Being Tea Co. social drafts and editorial planning.",
  path: "/studio",
  image: "/images/landing/studio.webp",
  imageAlt: "A private tea editorial workspace.",
  robots: { index: false, follow: false, noarchive: true },
});

const monthName = (date: string) =>
  new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(`${date}T12:00:00`));

export default function StudioPage() {
  const months = ["August", "September", "October", "November"];

  return (
    <main>
      <SiteHeader />
      <section className="studio-hero">
        <div>
          <p className="eyebrow">Private editorial room</p>
          <h1>36 staged posts.<br /><em>Four months of direction.</em></h1>
        </div>
        <div className="studio-tally">
          <span>36</span><p>Social drafts</p>
          <span>12</span><p>Journal essays</p>
          <span>04</span><p>Monthly arcs</p>
        </div>
      </section>
      <section className="studio-notice">
        <strong>Nothing on this page has been published.</strong>
        <p>Owner approval is required before posting, account changes, product endorsements or monetized links.</p>
      </section>

      {months.map((month) => {
        const posts = socialPosts.filter((post) => monthName(post.date) === month);
        return (
          <section className="calendar-month" key={month}>
            <header>
              <p className="section-kicker">2026 campaign</p>
              <h2>{month}</h2>
              <span>{posts.length} staged posts</span>
            </header>
            <div className="social-drafts">
              {posts.map((post) => (
                <details key={post.id}>
                  <summary>
                    <span>{post.id}</span>
                    <div><strong>{post.title}</strong><em>{post.date} · {post.format}</em></div>
                    <b>Staged</b>
                  </summary>
                  <div className="draft-body">
                    <figure className="draft-visual">
                      <img
                        src={`/images/social/${post.id.toLowerCase()}.webp`}
                        alt={post.altText}
                      />
                      <figcaption>
                        AI-generated visual concept · staged, not published
                      </figcaption>
                    </figure>
                    <div className="draft-meta">
                      <p><span>Pillar</span>{post.pillar}</p>
                      <p><span>Platforms</span>{post.platforms.join(" · ")}</p>
                      <p><span>CTA</span>{post.cta}</p>
                      <p><span>Alt text</span>{post.altText}</p>
                    </div>
                    <div className="caption-box">
                      <p className="section-kicker">Instagram / Facebook</p>
                      <div className="caption-text">{post.instagramFacebookCaption}</div>
                    </div>
                    <div className="caption-box">
                      <p className="section-kicker">X</p>
                      <div className="caption-text">{post.xCaption}</div>
                    </div>
                    <div className="image-brief">
                      <p className="section-kicker">Image direction</p>
                      <p>{post.imageBrief}</p>
                    </div>
                    <div className="draft-links">
                      {post.crosslink && <Link href={post.crosslink}>Linked article →</Link>}
                      {post.sourceLinks.map((source) => (
                        <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>
        );
      })}
      <SiteFooter />
    </main>
  );
}
