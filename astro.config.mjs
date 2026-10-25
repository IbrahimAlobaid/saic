// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production: site = https://syrianai.org, base = /
// Preview build (ibrahimalobaid.github.io/saic-preview/): SITE and PUBLIC_BASE are set by the build command.
const site = process.env.SITE ?? 'https://syrianai.org';
const base = process.env.PUBLIC_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
