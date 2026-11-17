// @ts-check
import { readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production: site = https://syrianai.org, base = /
// Preview build (ibrahimalobaid.github.io/saic-preview/): SITE and PUBLIC_BASE are set by the build command.
const site = process.env.SITE ?? 'https://syrianai.org';
const base = process.env.PUBLIC_BASE ?? '/';

/** Listing pages of collections that have no entries yet stay out of the sitemap (they are also noindex). */
const hasEntries = (/** @type {string} */ name) => {
  try {
    return readdirSync(new URL(`./src/content/${name}/`, import.meta.url)).some((f) => f.endsWith('.yaml'));
  } catch {
    return false;
  }
};
const emptyListings = ['events', 'projects'].filter((name) => !hasEntries(name)).map((name) => `/${name}/`);

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
      filter: (page) => !page.includes('/404') && !emptyListings.some((p) => page.endsWith(p)),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
