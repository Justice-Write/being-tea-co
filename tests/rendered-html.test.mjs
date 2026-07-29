import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

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

test("server-renders the finished Being Tea Co. home page", async () => {
  const html = await htmlFor("/");
  assert.match(html, /Being Tea Co\./);
  assert.match(html, /From leaf to/);
  assert.match(html, /golden light/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
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

test("journal index references twelve distinct article headers", async () => {
  const html = await htmlFor("/journal");
  const images = new Set(
    [...html.matchAll(/\/images\/journal\/(b\d{2})\.webp/g)].map(
      (match) => match[1],
    ),
  );

  assert.equal(images.size, 12);
  assert.doesNotMatch(
    html,
    /golden-light-oolong\.png|leaf-processing\.png|puerh-storage\.png/,
  );
});

test("editorial studio stages one image for each of thirty-six posts", async () => {
  const html = await htmlFor("/studio");
  const images = new Set(
    [...html.matchAll(/\/images\/social\/(s\d{2})\.webp/g)].map(
      (match) => match[1],
    ),
  );

  assert.equal(images.size, 36);
  assert.match(html, /AI-generated visual concept/);
  assert.match(html, /Nothing on this page has been published/);
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
