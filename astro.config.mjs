// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://harshadsadashivkadam.com',
  // Cloudflare Pages serves /about.html at /about, so pages build as files
  // and URLs never carry a trailing slash.
  trailingSlash: 'never',
  build: { format: 'file' },
});
