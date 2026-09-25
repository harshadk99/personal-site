// Redirect www to the apex domain. The sitemap is now a static file built by
// Astro (src/pages/sitemap.xml.ts), so it is no longer generated here.
export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.harshadsadashivkadam.com') {
    url.hostname = 'harshadsadashivkadam.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
