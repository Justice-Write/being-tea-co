import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { RichText } from "../../components/RichText";
import { blogs } from "../../content/blogs";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) notFound();
  const current = blogs.findIndex((item) => item.slug === slug);
  const next = blogs[(current + 1) % blogs.length];

  return (
    <main>
      <SiteHeader />
      <article className="journal-post">
        <header>
          <Link href="/journal">← Journal</Link>
          <p className="eyebrow">{post.category} · {post.date} · {post.readTime}</p>
          <h1>{post.title}</h1>
          <p>{post.dek.replace(/\*/g, "")}</p>
        </header>
        <figure>
          <img
            src={`/images/journal/${post.id.toLowerCase()}.webp`}
            alt={post.altText}
          />
          <figcaption>
            AI-generated Being Tea Co. editorial concept. It does not depict a
            specific tea lot, maker, ceremony or reviewed product.
          </figcaption>
        </figure>
        <div className="article-layout">
          <aside>
            <span>{post.id}</span>
            <p>{post.category}</p>
            <a href="#sources">Sources ↓</a>
          </aside>
          <div className="article-copy">
            {post.bodySections.map((section, index) => (
              <section key={`${section.heading}-${index}`}>
                {section.heading && <h2>{section.heading}</h2>}
                <RichText markdown={section.markdown} />
              </section>
            ))}
            <section className="article-sources" id="sources">
              <p className="section-kicker">Sources and further reading</p>
              {post.sourceLinks.map((source) => (
                <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                  {source.label} <span>↗</span>
                </a>
              ))}
            </section>
          </div>
        </div>
      </article>
      <Link className="next-guide" href={`/journal/${next.slug}`}>
        <span>Next field note</span>
        <strong>{next.title}</strong>
        <b>→</b>
      </Link>
      <SiteFooter />
    </main>
  );
}
