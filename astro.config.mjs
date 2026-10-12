// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production URL. Change to the custom domain (https://voxylisgrowth.com) once DNS is connected.
export default defineConfig({
  site: 'https://voxylis-growth.pages.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
