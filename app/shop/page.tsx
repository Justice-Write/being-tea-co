import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const partnerCandidates = [
  {
    name: "TeaVivre",
    use: "Chinese tea and broad teaware",
    terms: "12% · 45-day cookie",
    url: "https://www.teavivre.com/affiliate-program",
  },
  {
    name: "Verdant Tea",
    use: "Farmer-centered sourcing stories",
    terms: "From 5% · 30-day cookie",
    url: "https://ui.awin.com/merchant-profile/25733/commission-groups",
  },
  {
    name: "Nio Teas",
    use: "Japanese green tea and kyusu",
    terms: "10% · 30-day cookie",
    url: "https://af.uppromote.com/nio-teas/register",
  },
  {
    name: "Bookshop.org",
    use: "Tea history, craft and culture books",
    terms: "10% · 48-hour attribution",
    url: "https://bookshop.org/affiliate_profile/introduction",
  },
  {
    name: "Art of Tea",
    use: "U.S.-fulfilled general tea catalog",
    terms: "10% · 30-day cookie",
    url: "https://www.artoftea.com/pages/affiliates",
  },
];

export default function ShopPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero shop-hero">
        <p className="eyebrow">Tea, tools &amp; reading</p>
        <h1>Recommend less.<br /><em>Test more.</em></h1>
        <p>
          Our future shop will begin as a small, transparent field kit—not an
          endless shelf of products we have never used.
        </p>
      </section>

      <section className="shop-status">
        <div>
          <span className="status-dot" />
          <p><strong>Research stage</strong> · No paid product links are active today.</p>
        </div>
        <p>
          Before a recommendation goes live, Being Tea Co. will identify the
          exact product, test it, record whether it was purchased or gifted and
          place the commercial disclosure beside the link.
        </p>
      </section>

      <section className="kit-grid">
        <div>
          <span>01</span><h2>Leaf</h2>
          <p>Small samplers with named origin, maker, harvest and processing information.</p>
          <em>First tests: Chinese oolong, Japanese green and transparent small-farm lots.</em>
        </div>
        <div>
          <span>02</span><h2>Tools</h2>
          <p>A gram scale, dependable kettle, simple brewing vessel and cups—nothing ornamental until it earns its place.</p>
          <em>Everyday function before collector language.</em>
        </div>
        <div>
          <span>03</span><h2>Reading</h2>
          <p>Annotated books on botany, processing, history, ceramics and tea cultures through Bookshop.org.</p>
          <em>Context beside commerce.</em>
        </div>
      </section>

      <section className="partner-section">
        <div>
          <p className="section-kicker">Affiliate candidates</p>
          <h2>A researched first wave.</h2>
          <p>
            These programs are candidates for application, not current
            sponsors or endorsements. Public terms were checked July 28, 2026
            and must be confirmed inside each signed agreement.
          </p>
        </div>
        <div className="partner-list">
          {partnerCandidates.map((partner) => (
            <a href={partner.url} target="_blank" rel="noreferrer" key={partner.name}>
              <div><strong>{partner.name}</strong><span>{partner.use}</span></div>
              <em>{partner.terms}</em>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="merch-study">
        <img src="/images/merch-study.png" alt="Being Tea Co. concept study showing a sticker, tea tin, tasting cup and notebook." />
        <div>
          <p className="section-kicker">Merchandise study</p>
          <h2>Start with objects that support the practice.</h2>
          <p>
            A Golden Light sticker set, tasting journal, tea-table towel and
            everyday mug are the lowest-risk first collection. This image is a
            concept illustration, not a photograph of products currently for
            sale.
          </p>
          <ul>
            <li>Fourthwall is the preferred no-inventory pilot.</li>
            <li>Physical samples must be inspected in Alaska before launch.</li>
            <li>Specialist teaware and packaged tea wait for stronger quality controls.</li>
            <li>Brand clearance comes before printing or paid promotion.</li>
          </ul>
        </div>
      </section>

      <section className="affiliate-disclosure">
        <p className="section-kicker">Our future disclosure</p>
        <blockquote>
          This page contains paid affiliate links. If you buy through one of
          them, Being Tea Co. may earn a commission. Our editorial standard and
          conclusions are the same whether or not a link pays us.
        </blockquote>
        <a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" target="_blank" rel="noreferrer">
          FTC endorsement guidance ↗
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
