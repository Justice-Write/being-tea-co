const lessons = [
  {
    number: "01",
    title: "Find the golden light",
    copy: "Learn how leaf, water, temperature and time come together in a clear, luminous cup.",
    tag: "Brewing",
  },
  {
    number: "02",
    title: "Know your leaf",
    copy: "Follow tea from seed and garden through harvest, oxidation, aging, packing and storage.",
    tag: "Leaf to cup",
  },
  {
    number: "03",
    title: "Choose your vessel",
    copy: "Understand the cups, pots, gaiwans, trays and small tools that shape a tea session.",
    tag: "Teaware",
  },
];

const path = [
  ["Seed", "Cultivar, soil and place"],
  ["Leaf", "Harvest and season"],
  ["Craft", "Withering, rolling and oxidation"],
  ["Rest", "Roasting, aging and storage"],
  ["Water", "Temperature, ratio and time"],
  ["Cup", "Attention, aroma and presence"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Being Tea Co home">
          <span className="seal">B</span>
          <span>Being Tea Co.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#learn">Learn</a>
          <a href="#story">Our story</a>
          <a href="#archive">Archive</a>
          <a className="nav-cta" href="mailto:beingteaco@gmail.com">
            Write to us
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Tea culture, slowly understood</p>
          <h1>
            From leaf to
            <br />
            <em>golden light.</em>
          </h1>
          <p className="hero-intro">
            Being Tea Co. explores what changes when we give tea our full
            attention—from the garden and the maker to the water, the vessel
            and the shared cup.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#learn">
              Begin with the cup <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#story">
              Read our story
            </a>
          </div>
        </div>
        <div className="cup-study" aria-label="An abstract study of golden tea in a cup">
          <div className="steam steam-one" />
          <div className="steam steam-two" />
          <div className="saucer" />
          <div className="cup">
            <div className="tea">
              <span className="glint" />
            </div>
          </div>
          <p>
            <span>The golden light</span>
            A clear twinkle that appears when a tea feels balanced in the cup.
          </p>
        </div>
        <div className="scroll-note">Scroll to steep</div>
      </section>

      <section className="opening">
        <p className="section-kicker">A practice of attention</p>
        <blockquote>
          Tea is not something to rush through. It is a way to arrive.
        </blockquote>
        <p>
          Our work begins with practical questions: What is this leaf? Who made
          it? What does it ask of the water? Then we slow down enough to notice
          the answer.
        </p>
      </section>

      <section className="lessons" id="learn">
        <div className="section-heading">
          <div>
            <p className="section-kicker">The first lessons</p>
            <h2>Look closer at your cup.</h2>
          </div>
          <p>
            No gatekeeping and no mystical shortcuts—just careful observation,
            useful technique and respect for the cultures that carry tea.
          </p>
        </div>
        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <article key={lesson.number}>
              <div className="lesson-top">
                <span>{lesson.number}</span>
                <span>{lesson.tag}</span>
              </div>
              <div className={`lesson-art art-${lesson.number}`}>
                <span />
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.copy}</p>
              <span className="coming">Guides coming soon</span>
            </article>
          ))}
        </div>
      </section>

      <section className="leaf-path">
        <div className="path-intro">
          <p className="section-kicker">The whole journey</p>
          <h2>Every cup carries a chain of choices.</h2>
          <p>
            Being Tea Co. follows those choices from the living plant to the
            moment tea is presented at home.
          </p>
        </div>
        <ol>
          {path.map(([title, detail], index) => (
            <li key={title}>
              <span className="path-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="story" id="story">
        <div className="story-mark" aria-hidden="true">
          <span>2015</span>
        </div>
        <div className="story-copy">
          <p className="section-kicker">Where this began</p>
          <h2>Tea as a way to create space and community.</h2>
          <p>
            Being Tea Co. began online in 2015 with simple video reviews of
            oolong and chaga and a promise to explore tea, teaware and the
            cultures around them.
          </p>
          <p>
            Its deeper roots are personal experiences at Deer Park Monastery in
            Escondido, California, a mindfulness practice center in the Plum
            Village tradition of Zen Master Thich Nhat Hanh. This is an
            independent project—not an official teaching or monastery
            affiliation.
          </p>
          <a className="text-link light" href="#archive">
            Visit the original archive <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="archive" id="archive">
        <div>
          <p className="section-kicker">From the archive</p>
          <h2>The first brews.</h2>
        </div>
        <div className="archive-list">
          <a
            href="https://www.youtube.com/watch?v=t1Vk7iWbu7g"
            target="_blank"
            rel="noreferrer"
          >
            <span>Video · November 2015</span>
            <strong>Brewing Oolong</strong>
            <b aria-hidden="true">↗</b>
          </a>
          <a
            href="https://www.youtube.com/watch?v=Si7GzEAFvGk"
            target="_blank"
            rel="noreferrer"
          >
            <span>Video · November 2015</span>
            <strong>Brewing Chaga</strong>
            <b aria-hidden="true">↗</b>
          </a>
          <a
            href="https://beingteaco.wordpress.com/2015/11/19/creating-space/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Journal · November 2015</span>
            <strong>Creating Space</strong>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="section-kicker">The next infusion</p>
          <h2>We are preparing the table.</h2>
        </div>
        <div>
          <p>
            New field notes, brewing lessons and tea reviews are on the way.
            Until the journal opens, introduce yourself by email.
          </p>
          <a className="primary-button gold" href="mailto:beingteaco@gmail.com?subject=Being%20Tea%20Co.%20%E2%80%94%20Hello">
            Join the conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">
          <span className="seal">B</span>
          <span>Being Tea Co.</span>
        </a>
        <p>Tea culture from leaf to golden light.</p>
        <div>
          <a href="https://www.instagram.com/beingteaco/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://x.com/BeingTeaCo" target="_blank" rel="noreferrer">X</a>
          <a href="https://beingteaco.wordpress.com/" target="_blank" rel="noreferrer">Archive</a>
        </div>
        <small>Independent tea education · Established 2015</small>
      </footer>
    </main>
  );
}
