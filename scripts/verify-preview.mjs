import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Only known public artifacts and public HTTP responses are read. No device
// storage, credentials, browser profiles or private-source folders are scanned.
const root = new URL('../', import.meta.url);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const manifest = JSON.parse(await readFile(new URL('docs/free-brew-notes-manifest.json', root)));
const files = await readdir(new URL('public/', root), { recursive: true });
const forbidden = files.filter(p => /(^|[\\/])(private|identity-references|studio|social|\.git|node_modules)([\\/]|$)|founder|keystore|\.env($|\.)|\.(jks|pem|sqlite|db)$/i.test(p));
assert.deepEqual(forbidden, [], 'Private/development path in public assets');
for (const file of manifest.files) {
  const bytes = await readFile(new URL(`public/downloads/${file.filename}`, root));
  assert.equal(sha(bytes), file.sha256, `Local PDF integrity: ${file.filename}`);
}
const receipt = { checkedAt: new Date().toISOString(), publicPathScan: 'pass', pdfIntegrity: 'pass', routes: [] };
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
  for (const file of manifest.files) {
    const path = `/downloads/${file.filename}`;
    const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type') || '', /application\/pdf/);
    assert.equal(sha(Buffer.from(await response.arrayBuffer())), file.sha256, path);
    receipt.routes.push({ path, status: 200, sha256: file.sha256 });
  }
  receipt.origin = base.origin;
}
console.log(JSON.stringify(receipt, null, 2));
