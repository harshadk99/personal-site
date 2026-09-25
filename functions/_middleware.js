// Redirect www and the Pages production hostname to the apex domain, so the
// site has one public address. Preview deployments (<hash>.personal-site-ek2
// .pages.dev) are left alone. The sitemap is a static file built by Astro
// (src/pages/sitemap.xml.ts), so it is no longer generated here.
const REDIRECT_HOSTS = new Set(['www.harshadsadashivkadam.com', 'personal-site-ek2.pages.dev']);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = 'harshadsadashivkadam.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
