// Copy the white paper from its own repo into the site as a Markdown page.
// Run by hand after the paper changes:  npm run sync:paper
// The site builds from this snapshot, so Cloudflare never needs the paper repo.
import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const PAPER_REPO = new URL('../../agentic-deception-white-paper/', import.meta.url);
const OUT_DIR = new URL('../src/content/research/', import.meta.url);

const src = readFileSync(new URL('paper.md', PAPER_REPO), 'utf8');
const cut = src.indexOf('\n---\n');
const head = src.slice(0, cut);
const body = src.slice(cut + 5);

const pick = (re) => head.match(re)?.[1].trim() ?? '';
const title = pick(/^# (.+)$/m);
const subtitle = pick(/^### (.+)$/m);
const author = pick(/\*\*Author:\*\* (.+)/);
const version = pick(/\*\*Version:\*\* ([^·]+)/);
const date = pick(/\*\*Version:\*\* [^·]+·\s*(.+)/);
const license = pick(/\*\*License:\*\* (.+)/);
const note = head.split('\n').filter((l) => l.startsWith('>')).map((l) => l.replace(/^>\s?/, '')).join(' ').trim();
const commit = execFileSync('git', ['-C', PAPER_REPO.pathname, 'rev-parse', '--short', 'HEAD']).toString().trim();

const q = (s) => JSON.stringify(s);
const frontmatter = [
  '---',
  `title: ${q(title)}`,
  `subtitle: ${q(subtitle)}`,
  `author: ${q(author)}`,
  `version: ${q(version)}`,
  `date: ${q(date)}`,
  `license: ${q(license)}`,
  `note: ${q(note)}`,
  `source: ${q(`agentic-deception-white-paper/paper.md @ ${commit}`)}`,
  '---',
  '',
].join('\n');

// Astro resolves relative images only when they start with ./ or ../
const content = body.trimStart().replace(/\]\(diagrams\//g, '](./diagrams/');

mkdirSync(new URL('diagrams/', OUT_DIR), { recursive: true });
copyFileSync(new URL('diagrams/registry-layer-architecture.png', PAPER_REPO), new URL('diagrams/registry-layer-architecture.png', OUT_DIR));
writeFileSync(new URL('registry-layer-deception.md', OUT_DIR), frontmatter + content);
console.log(`Synced paper @ ${commit}: ${title} (${version.trim()})`);
