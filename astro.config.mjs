// @ts-check
import { defineConfig } from 'astro/config';
import cspInlineHashes from './integrations/csp-inline-hashes.mjs';

export default defineConfig({
  site: 'https://harshadsadashivkadam.com',
  // Cloudflare Pages serves /about.html at /about, so pages build as files
  // and URLs never carry a trailing slash.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [cspInlineHashes()],
  // Content-Security-Policy as a <meta> tag, with hashes for every inline
  // script and style Astro renders. frame-ancestors can't be set from a meta
  // tag, so it lives in public/_headers.
  security: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://i.ytimg.com",
        // Cloudflare Web Analytics beacon reports here.
        "connect-src 'self' https://cloudflareinsights.com",
        "frame-src https://www.youtube-nocookie.com",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
      // Cloudflare injects the Web Analytics beacon and the email-decode
      // script (served from /cdn-cgi, so 'self') at the edge.
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'] },
      styleDirective: { resources: ["'self'"] },
    },
  },
});
