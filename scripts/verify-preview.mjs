import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Only known public artifacts and public HTTP responses are read. No device
// storage, credentials, browser profiles or private-source folders are scanned.
const root = new URL('../', import.meta.url);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const brewManifest = JSON.parse(await readFile(new URL('docs/free-brew-notes-manifest.json', root)));
const webManifest = JSON.parse(await readFile(new URL('public/manifest.webmanifest', root)));
const serviceWorker = await readFile(new URL('public/sw.js', root), 'utf8');
const offlinePage = await readFile(new URL('public/offline.html', root), 'utf8');
const files = await readdir(new URL('public/', root), { recursive: true });
const forbidden = files.filter(p => /(^|[\\/])(private|identity-references|studio|social|\.git|node_modules)([\\/]|$)|founder|keystore|\.env($|\.)|\.(jks|pem|sqlite|db)$/i.test(p));
assert.deepEqual(forbidden, [], 'Private/development path in public assets');
for (const file of brewManifest.files) {
  const bytes = await readFile(new URL(`public/downloads/${file.filename}`, root));
  assert.equal(sha(bytes), file.sha256, `Local PDF integrity: ${file.filename}`);
}
assert.equal(webManifest.name, 'Being Tea Co. Preview');
assert.equal(webManifest.display, 'standalone');
assert.deepEqual(webManifest.icons.map(icon => icon.sizes), ['192x192', '512x512', '512x512']);
assert.match(serviceWorker, /request\.mode === "navigate"/);
assert.match(serviceWorker, /fetch\(request, \{ cache: "no-store" \}\)/);
assert.match(serviceWorker, /caches\.match\(['"]\/offline['"]/);
assert.doesNotMatch(serviceWorker, /caches\.match\(['"]\/offline\.html['"]/);
assert.doesNotMatch(serviceWorker, /\/api\/|authorization|cookie|localStorage/i);
assert.match(offlinePage, /noindex,nofollow,noarchive/);
const receipt = {
  checkedAt: new Date().toISOString(),
  publicPathScan: 'pass',
  pdfIntegrity: 'pass',
  pwaInstallability: 'local-pass',
  routes: [],
};
if (process.argv[2]) {
  const base = new URL(process.argv[2]);
  assert.equal(base.protocol, 'https:');
  const checks = [
    ['/', 200, /noindex, nofollow/],
    ['/shop', 200, /Open the free printable brew log/],
    ['/companion/privacy', 200, /Android device backup is enabled/],
    ['/robots.txt', 200, /Disallow: \/\s/],
    ['/studio', 404],
    ['/status-handoff.md', 404],
  ];
  await Promise.all(checks.map(async ([path, expected, content]) => {
    const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
    const body = await response.text();
    assert.equal(response.status, expected, path);
    if (content) assert.match(body, content, path);
    receipt.routes.push({ path, status: response.status, contentCheck: 'pass' });
  }));
  for (const file of brewManifest.files) {
    const path = `/downloads/${file.filename}`;
    const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type') || '', /application\/pdf/);
    assert.equal(sha(Buffer.from(await response.arrayBuffer())), file.sha256, path);
    receipt.routes.push({ path, status: 200, sha256: file.sha256 });
  }

  const homeResponse = await fetch(new URL('/', base), {
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(homeResponse.status, 200, '/ manifest discovery');
  const homeHtml = await homeResponse.text();
  const manifestLink = homeHtml.match(/<link\b[^>]*\brel="manifest"[^>]*>/i)?.[0] || '';
  assert.ok(manifestLink, 'home page manifest link');
  const manifestHref = manifestLink.match(/\bhref="([^"]+)"/i)?.[1] || '';
  assert.ok(manifestHref, 'home page manifest href');
  const manifestUrl = new URL(manifestHref, base);
  assert.equal(manifestUrl.origin, base.origin, 'manifest must be same-origin');
  assert.equal(manifestUrl.pathname, '/manifest.webmanifest', 'manifest path');

  const manifestResponse = await fetch(manifestUrl, {
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(manifestResponse.status, 200, '/manifest.webmanifest');
  assert.match(manifestResponse.headers.get('content-type') || '', /application\/(manifest\+json|json)/);
  const liveManifest = await manifestResponse.json();
  assert.equal(liveManifest.name, 'Being Tea Co. Preview');
  assert.equal(liveManifest.start_url, '/');
  assert.equal(liveManifest.scope, '/');
  assert.equal(liveManifest.display, 'standalone');
  receipt.routes.push({
    path: '/manifest.webmanifest',
    status: 200,
    linkedFromHome: 'same-origin',
    installMetadata: 'pass',
  });

  const workerResponse = await fetch(new URL('/sw.js', base), {
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(workerResponse.status, 200, '/sw.js');
  assert.match(workerResponse.headers.get('content-type') || '', /javascript/);
  assert.match(workerResponse.headers.get('cache-control') || '', /no-cache|no-store|max-age=0|must-revalidate/i);
  const workerScope = workerResponse.headers.get('service-worker-allowed');
  assert.ok(workerScope === null || workerScope === '/', '/sw.js scope');
  const liveWorker = await workerResponse.text();
  assert.match(liveWorker, /request\.mode === "navigate"/);
  assert.match(liveWorker, /caches\.match\(['"]\/offline['"]/);
  assert.doesNotMatch(liveWorker, /caches\.match\(['"]\/offline\.html['"]/);
  assert.doesNotMatch(liveWorker, /\/api\/|authorization|cookie|localStorage/i);
  receipt.routes.push({
    path: '/sw.js',
    status: 200,
    cacheControl: workerResponse.headers.get('cache-control'),
    scope: workerScope || 'default:/' ,
  });

  const offlineResponse = await fetch(new URL('/offline', base), {
    signal: AbortSignal.timeout(30000),
    redirect: 'manual',
  });
  assert.equal(offlineResponse.status, 200, '/offline');
  assert.equal(offlineResponse.redirected, false, '/offline must not redirect');
  assert.equal(new URL(offlineResponse.url).pathname, '/offline', '/offline canonical path');
  const liveOffline = await offlineResponse.text();
  assert.match(liveOffline, /Being Tea Co\. Preview/);
  assert.match(liveOffline, /not stored for offline reading/);
  assert.match(liveOffline, /noindex,nofollow,noarchive/);
  receipt.routes.push({ path: '/offline', status: 200, redirectFree: true, honestFallback: 'pass' });

  for (const icon of liveManifest.icons) {
    const response = await fetch(new URL(icon.src, base), {
      signal: AbortSignal.timeout(30000),
    });
    assert.equal(response.status, 200, icon.src);
    assert.match(response.headers.get('content-type') || '', /image\/png/);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(bytes.toString('ascii', 1, 4), 'PNG', icon.src);
    const dimensions = `${bytes.readUInt32BE(16)}x${bytes.readUInt32BE(20)}`;
    assert.equal(dimensions, icon.sizes, icon.src);
    receipt.routes.push({ path: icon.src, status: 200, dimensions, purpose: icon.purpose });
  }
  receipt.pwaInstallability = 'pass';
  receipt.origin = base.origin;
}
console.log(JSON.stringify(receipt, null, 2));
