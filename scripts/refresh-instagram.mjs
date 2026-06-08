// Fetches the latest Instagram posts from the Behold feed and writes the
// newest 6 to src/data/instagram.json. Run by the GitHub Action every 6 hours
// (and runnable locally). Uses Behold's stable CDN image URLs, so images never
// expire and nothing binary is committed.

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const FEED_URL =
  process.env.BEHOLD_FEED_URL ||
  'https://feeds.behold.so/oBjGMLUwbc2zgjBKBzTJ';
const COUNT = 6;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'src', 'data', 'instagram.json');

function makeAlt(caption) {
  const base = (caption || '').replace(/\s+/g, ' ').trim();
  if (!base) return 'Instagram post from Beckwourth Peak High Camp';
  const max = 120;
  if (base.length <= max) return base;
  return base.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

const res = await fetch(FEED_URL, { headers: { accept: 'application/json' } });
if (!res.ok) throw new Error(`Behold feed fetch failed: ${res.status} ${res.statusText}`);

const data = await res.json();
const posts = (data.posts || [])
  .slice(0, COUNT)
  .map((p) => ({
    img: p.sizes?.large?.mediaUrl || p.sizes?.medium?.mediaUrl || p.mediaUrl,
    alt: makeAlt(p.prunedCaption || p.caption),
    url: p.permalink,
    id: p.id,
  }))
  .filter((p) => p.img && p.url);

if (posts.length === 0) {
  throw new Error('Behold feed returned no usable posts — leaving existing data untouched.');
}

const next = JSON.stringify(posts, null, 2) + '\n';

// Only write when something actually changed, so the GitHub Action commit is a no-op on quiet days.
let current = '';
try {
  current = await readFile(OUT, 'utf8');
} catch {
  /* file may not exist yet */
}

if (current === next) {
  console.log('Instagram feed unchanged — no update needed.');
} else {
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, next, 'utf8');
  console.log(`Updated src/data/instagram.json with ${posts.length} latest posts.`);
}
