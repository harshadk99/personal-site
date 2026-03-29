export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.harshadsadashivkadam.com') {
    url.hostname = 'harshadsadashivkadam.com';
    return Response.redirect(url.toString(), 301);
  }

  if (url.pathname === '/sitemap.xml') {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://harshadsadashivkadam.com/</loc>
    <lastmod>2026-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  return context.next();
}
