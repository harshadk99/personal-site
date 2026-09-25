// Redirect www and the Pages production hostname to the apex domain, so the
// site has one public address. Preview deployments (<hash>.personal-site-ek2
// .pages.dev) are left alone. The sitemap is a static file built by Astro
// (src/pages/sitemap.xml.ts), so it is no longer generated here.
const REDIRECT_HOSTS = new Set(['www.harshadsadashivkadam.com', 'personal-site-ek2.pages.dev']);

const CSP_META = /<meta http-equiv="content-security-policy" content="([^"]*)">/i;

// Astro writes each page's CSP (with script and style hashes) as a <meta> tag.
// Move it into a response header with a per-request nonce: Cloudflare's Bot
// Fight Mode injects an inline JavaScript Detections script at the edge, and
// Cloudflare adds the nonce to that script only when it finds one in the CSP
// *header*. frame-ancestors also only works as a header.
function nonce() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes));
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = 'harshadsadashivkadam.com';
    return Response.redirect(url.toString(), 301);
  }

  const res = await context.next();
  if (!(res.headers.get('content-type') || '').includes('text/html')) return res;

  const html = await res.text();
  const m = html.match(CSP_META);
  if (!m) return new Response(html, res);

  const csp = m[1]
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/script-src /, `script-src 'nonce-${nonce()}' `)
    .replace(/;?\s*$/, "; frame-ancestors 'none'");

  const headers = new Headers(res.headers);
  headers.set('Content-Security-Policy', csp);
  return new Response(html.replace(CSP_META, ''), { status: res.status, statusText: res.statusText, headers });
}
