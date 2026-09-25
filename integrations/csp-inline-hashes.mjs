// Astro's CSP hashes the scripts it bundles, but not `is:inline` ones (the
// theme loader in Base.astro, the boot screen). After the build, hash every
// inline script in each page and add any missing hash to that page's CSP.
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const CSP_META = /(<meta http-equiv="content-security-policy" content=")([^"]*)(")/i;
// Inline, executable scripts only: no src, and not JSON-LD data blocks.
const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi;

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export default function cspInlineHashes() {
  return {
    name: 'csp-inline-hashes',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let added = 0;
        for (const file of await htmlFiles(fileURLToPath(dir))) {
          const html = await readFile(file, 'utf8');
          const m = html.match(CSP_META);
          if (!m) continue;
          let csp = m[2];
          for (const [, body] of html.matchAll(INLINE_SCRIPT)) {
            const hash = `'sha256-${createHash('sha256').update(body).digest('base64')}'`;
            if (!csp.includes(hash)) {
              csp = csp.replace(/script-src ([^;]*)/, `script-src $1 ${hash}`);
              added++;
            }
          }
          if (csp !== m[2]) await writeFile(file, html.replace(CSP_META, `$1${csp}$3`));
        }
        logger.info(`added ${added} inline script hash(es) to CSP`);
      },
    },
  };
}
