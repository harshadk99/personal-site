// sitemap.xml, generated at build time from the page list below.
import type { APIRoute } from 'astro';
import { projects, papers } from '../data/content';

const SITE = 'https://harshadsadashivkadam.com';
const paths = [
  '/', '/writing', '/research', '/projects', '/talks', '/about', '/links',
  ...papers.map((p) => `/research/${p.slug}`),
  ...projects.map((p) => `/projects/${p.slug}`),
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = paths
    .map((p) => `  <url><loc>${SITE}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
