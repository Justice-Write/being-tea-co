import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const blogSource = readFileSync(
  new URL("../app/content/blogs.ts", import.meta.url),
  "utf8",
).replace(/\r\n/g, "\n");
const alaskaToday = Object.fromEntries(
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Anchorage",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(new Date())
    .map((part) => [part.type, part.value]),
);
const today = `${alaskaToday.year}-${alaskaToday.month}-${alaskaToday.day}`;
const scheduledBlogs = blogSource
  .split("\n  {\n")
  .slice(1)
  .map((block) => ({
    id: block.match(/"id": "(B\d{2})"/)?.[1],
    slug: block.match(/"slug": "([a-z0-9-]+)"/)?.[1],
    date: block.match(/"date": "(\d{4}-\d{2}-\d{2})"/)?.[1],
    gated: /"publicationGate":/.test(block),
  }))
  .filter((post) => post.id && post.slug && post.date);
const approvedBlogIds = new Set(
  [
    ...(blogSource.match(/export const approvedBlogIds = \[([^\]]+)\]/)?.[1] ?? "")
      .matchAll(/"(B\d{2})"/g),
  ].map((match) => match[1]),
);
const publishedBlogCount = scheduledBlogs.filter(
  (post) => approvedBlogIds.has(post.id) && post.date <= today && !post.gated,
).length;

function pngDimensions(path) {
  const bytes = readFileSync(new URL(path, import.meta.url));
  assert.equal(bytes.toString("ascii", 1, 4), "PNG", path);
  return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
}

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, pathname);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

async function textFor(pathname, contentType) {
  const response = await render(pathname);
  assert.equal(response.status, 200, pathname);
  assert.match(response.headers.get("content-type") ?? "", contentType);
  return response.text();
}

test("server-renders the finished Being Tea Co. home page", async () => {
  const html = await htmlFor("/");
  assert.match(html, /Being Tea Co\./);
  assert.match(html, /From leaf to/);
  assert.match(html, /golden light/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("public routes and downloads stay Being Tea Co. brand-only", async () => {
  const [home, contact, shop, disclosures] = await Promise.all([
    htmlFor("/"),
    htmlFor("/contact"),
    htmlFor("/shop"),
    htmlFor("/disclosures"),
  ]);
  const brewNotes = readFileSync(
    new URL("../public/downloads/brew-notes.html", import.meta.url),
    "utf8",
  );
  const publicHtml = `${home}\n${contact}\n${shop}\n${disclosures}\n${brewNotes}`;

  assert.match(publicHtml, /Being Tea Co\./);
  assert.match(publicHtml, /x\.com\/BeingTeaCo/);
  assert.doesNotMatch(publicHtml, /instagram\.com\/beingteaco/i);
  assert.doesNotMatch(
    publicHtml,
    /Akiko|Brother K[aā]ru[nṇ]ya|brother_karunya|Castleborn|AliaSpaces|mypersonas\.online/i,
  );
});

test("preview PWA is installable without caching pages or personal data", async () => {
  const home = await htmlFor("/");
  const webManifest = JSON.parse(
    readFileSync(new URL("../public/manifest.webmanifest", import.meta.url), "utf8"),
  );
  const serviceWorker = readFileSync(
    new URL("../public/sw.js", import.meta.url),
    "utf8",
  );
  const offline = readFileSync(
    new URL("../public/offline.html", import.meta.url),
    "utf8",
  );
  const headers = readFileSync(
    new URL("../public/_headers", import.meta.url),
    "utf8",
  );

  const manifestLink =
    home.match(/<link\b[^>]*\brel="manifest"[^>]*>/i)?.[0] ?? "";
  assert.match(manifestLink, /href="\/manifest\.webmanifest"/);
  assert.doesNotMatch(manifestLink, /https?:\/\//i);
  assert.equal(webManifest.name, "Being Tea Co. Preview");
  assert.equal(webManifest.id, "/");
  assert.equal(webManifest.start_url, "/");
  assert.equal(webManifest.scope, "/");
  assert.equal(webManifest.display, "standalone");
  assert.deepEqual(
    webManifest.icons.map(({ sizes, purpose }) => [sizes, purpose]),
    [["192x192", "any"], ["512x512", "any"], ["512x512", "maskable"]],
  );
  assert.deepEqual(
    pngDimensions("../public/icons/being-tea-192.png"),
    [192, 192],
  );
  assert.deepEqual(
    pngDimensions("../public/icons/being-tea-512.png"),
    [512, 512],
  );
  assert.deepEqual(
    pngDimensions("../public/icons/being-tea-maskable-512.png"),
    [512, 512],
  );

  assert.match(serviceWorker, /request\.mode === "navigate"/);
  assert.match(serviceWorker, /fetch\(request, \{ cache: "no-store" \}\)/);
  assert.match(serviceWorker, /caches\.match\("\/offline\.html"/);
  assert.match(serviceWorker, /url\.origin !== self\.location\.origin/);
  assert.doesNotMatch(serviceWorker, /\/api\/|authorization|cookie|localStorage/i);
  const assetBoundary = serviceWorker.match(
    /function isPublicAsset[\s\S]+?self\.addEventListener\("fetch"/,
  )?.[0] ?? "";
  assert.match(assetBoundary, /\/assets\//);
  assert.match(assetBoundary, /\/images\//);
  assert.doesNotMatch(assetBoundary, /\/journal|\/contact|\/privacy|\/api/);

  assert.match(offline, /Being Tea Co\. Preview/);
  assert.match(offline, /not stored for offline reading/);
  assert.match(offline, /noindex,nofollow,noarchive/);
  assert.doesNotMatch(offline, /Akiko|Brother K[aā]ru[nṇ]ya|Castleborn|AliaSpaces/i);
  assert.match(headers, /\/sw\.js[\s\S]+Service-Worker-Allowed: \//);
  assert.match(headers, /\/assets\/\*[\s\S]+immutable/);
});

test("tea and brew library buttons each reference a unique image", async () => {
  const [learn, brew] = await Promise.all([htmlFor("/learn"), htmlFor("/brew")]);

  const teaImages = new Set(
    [...learn.matchAll(/\/images\/tea\/([a-z-]+)\.webp/g)].map(
      (match) => match[1],
    ),
  );
  const brewImages = new Set(
    [...brew.matchAll(/\/images\/brew\/([a-z-]+)\.webp/g)].map(
      (match) => match[1],
    ),
  );

  assert.equal(teaImages.size, 9);
  assert.equal(brewImages.size, 9);
});

test("journal index references only due, review-cleared article headers", async () => {
  const html = await htmlFor("/journal");
  const images = new Set(
    [...html.matchAll(/\/images\/journal\/(b\d{2})\.webp/g)].map(
      (match) => match[1],
    ),
  );

  assert.equal(images.size, publishedBlogCount);
  assert.ok(!images.has("b11"));
  assert.ok(!images.has("b12"));
  assert.doesNotMatch(
    html,
    /golden-light-oolong\.png|leaf-processing\.png|puerh-storage\.png/,
  );
});

test("journal approval manifest is explicit and does not auto-release drafts", () => {
  assert.deepEqual(
    [...approvedBlogIds],
    ["B01", "B02", "B03", "B04", "B05"],
  );
});

test("specialist-review journal entries remain explicitly gated", () => {
  const b10 = scheduledBlogs.find((post) => post.id === "B10");
  const b11 = scheduledBlogs.find((post) => post.id === "B11");
  const b12 = scheduledBlogs.find((post) => post.id === "B12");

  assert.equal(b10?.gated, true);
  assert.equal(b11?.gated, true);
  assert.equal(b12?.gated, true);
  assert.match(blogSource, /"id": "B10"[\s\S]*?"publicationGate": "cultural-review"/);
  assert.match(blogSource, /"id": "B11"[\s\S]*?"publicationGate": "cultural-review"/);
  assert.match(blogSource, /"id": "B12"[\s\S]*?"publicationGate": "health-review"/);
});

test("unapproved journal entries are absent from routes and navigation", async () => {
  const withheld = scheduledBlogs.filter((post) => !approvedBlogIds.has(post.id));
  const responses = await Promise.all(
    withheld.map((post) => render(`/journal/${post.slug}`)),
  );

  responses.forEach((response, index) => {
    assert.equal(response.status, 404, withheld[index].id);
  });

  const approvedArticle = await htmlFor("/journal/brew-tea-like-an-experiment");
  withheld.forEach((post) => {
    assert.doesNotMatch(approvedArticle, new RegExp(post.slug));
  });
});

test("public source excludes the private editorial studio and social drafts", () => {
  for (const path of [
    "../app/studio",
    "../app/content/social.ts",
    "../public/images/social",
    "../image-manifests/social-s01-s18.md",
    "../image-manifests/social-s19-s36.md",
  ]) {
    assert.equal(existsSync(new URL(path, import.meta.url)), false, path);
  }
});

test("tea, brew, and journal detail pages use their assigned images", async () => {
  const [tea, brew, journal] = await Promise.all([
    htmlFor("/tea/oolong"),
    htmlFor("/brew/gongfu"),
    htmlFor("/journal/finding-the-golden-light"),
  ]);

  assert.match(tea, /\/images\/tea\/oolong\.webp/);
  assert.match(brew, /\/images\/brew\/gongfu\.webp/);
  assert.match(journal, /\/images\/journal\/b02\.webp/);
});

test("search metadata is unique, canonical, and structured", async () => {
  const [home, about, journal] = await Promise.all([
    htmlFor("/"),
    htmlFor("/about"),
    htmlFor("/journal/finding-the-golden-light"),
  ]);

  assert.match(
    about,
    /<title>About Being Tea Co\. \| Being Tea Co\.<\/title>/,
  );
  assert.match(
    about,
    /<link rel="canonical" href="https:\/\/preview\.beingteaco\.invalid\/about"/,
  );
  assert.match(
    about,
    /<meta name="description" content="The story and purpose of Being Tea Co\./,
  );
  assert.match(home, /"@type":"Organization"/);
  assert.match(home, /"@type":"WebSite"/);
  assert.match(home, /<meta name="robots" content="noindex, nofollow"/);
  assert.match(journal, /"@type":"BlogPosting"/);
  assert.match(journal, /"@type":"BreadcrumbList"/);
});

test("trust pages use five distinct page images", async () => {
  const pages = await Promise.all(
    ["about", "contact", "privacy", "terms", "disclosures"].map((path) =>
      htmlFor(`/${path}`),
    ),
  );
  const images = new Set(
    pages.flatMap((html) =>
      [...html.matchAll(/\/images\/pages\/([a-z-]+)\.webp/g)].map(
        (match) => match[1],
      ),
    ),
  );

  assert.equal(images.size, 5);
  assert.deepEqual(
    [...images].sort(),
    ["about", "contact", "disclosures", "privacy", "terms"],
  );
});

test("companion privacy distinguishes app storage, OS backups and notice limits", async () => {
  const html = await htmlFor("/companion/privacy");

  assert.match(html, /no Being Tea Co\. account/);
  assert.match(html, /Nothing is uploaded to Being Tea Co\. servers/);
  assert.match(html, /Android device backup is enabled/);
  assert.match(html, /separate copies; remove them separately/);
  assert.match(html, /not a guaranteed alarm/);
  assert.match(html, /not directed to children under 13/);
  assert.match(html, /mailto:beingteaco@gmail\.com/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
});

test("projects page keeps vendor research and unapproved commerce private", async () => {
  const html = await htmlFor("/shop");

  assert.match(html, /No shop, paid product link, or vendor partnership is active today/);
  assert.match(html, /Research is not a relationship/);
  assert.match(html, /Nothing on this page is an offer for sale/);
  assert.doesNotMatch(
    html,
    /TeaVivre|Palais des Thés|Art of Tea|Bookshop\.org|Awin|Printful|Spreadshop|Zazzle|Fourthwall/,
  );
  assert.doesNotMatch(html, /rel="sponsored"/);
});

test("sitemap lists approved routes and staging robots prevent indexing", async () => {
  const [xml, robots] = await Promise.all([
    textFor("/sitemap.xml", /^application\/xml\b/i),
    textFor("/robots.txt", /^text\/plain\b/i),
  ]);
  const urls = [
    ...xml.matchAll(
      /<loc>https:\/\/preview\.beingteaco\.invalid([^<]*)<\/loc>/g,
    ),
  ].map((match) => match[1] || "/");

  assert.equal(urls.length, 30 + publishedBlogCount);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(!urls.includes("/studio"));
  assert.match(robots, /Disallow: \/(?:\r?\n|$)/);
  assert.doesNotMatch(robots, /Allow: \/(?:\r?\n|$)/);
  assert.match(
    robots,
    /Sitemap: https:\/\/preview\.beingteaco\.invalid\/sitemap\.xml/,
  );

  const responses = await Promise.all(urls.map((path) => render(path)));
  responses.forEach((response, index) => {
    assert.equal(response.status, 200, urls[index]);
  });
});
