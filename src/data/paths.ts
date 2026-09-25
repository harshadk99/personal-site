// Pages build as files (about.html) but are served without the extension,
// so normalise Astro.url.pathname to the public URL path.
export function publicPath(pathname: string): string {
  const path = pathname.replace(/\.html$/, '').replace(/\/(index)?$/, '');
  return path || '/';
}
