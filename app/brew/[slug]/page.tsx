import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { brewMethods } from "../../content/library";

export function generateStaticParams() {
  return brewMethods.map((method) => ({ slug: method.slug }));
}

export default async function BrewMethodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const method = brewMethods.find((item) => item.slug === slug);
  if (!method) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="method-guide">
        <header
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(15,42,35,.96), rgba(31,66,51,.68)), url("/images/brew/${method.slug}.webp")`,
          }}
        >
          <Link href="/brew">← Preparation library</Link>
          <p className="eyebrow">{method.bestFor}</p>
          <h1>{method.name}</h1>
          <p>{method.promise}</p>
        </header>
        <div className="method-layout">
          <aside>
            <p className="section-kicker">Gather</p>
            <ul>{method.kit.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
          <div>
            <section className="start-card">
              <p className="section-kicker">House starting point</p>
              <p>{method.startingPoint}</p>
            </section>
            <ol className="method-steps">
              {method.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <section className="watch-note">
              <p className="section-kicker">Watch for this</p>
              <p>{method.watch}</p>
            </section>
            <a className="source-link" href={method.source.url} target="_blank" rel="noreferrer">
              Source: {method.source.label} ↗
            </a>
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
