import { ar, type Dict } from './ar';
import { en } from './en';

export const dictionaries = { ar, en } as const;
export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ['ar', 'en'];
export const defaultLocale: Locale = 'ar';

export function t(locale: Locale): Dict {
  return dictionaries[locale];
}

/** Base path without trailing slash ('' for '/', '/saic-preview' for a preview build). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Build a site-relative URL for a locale-agnostic path.
 * href('ar', '/about/') -> '/about/'   href('en', '/about/') -> '/en/about/'
 * href('en', '/#follow') -> '/en/#follow'
 */
export function href(locale: Locale, path: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (path === '/' || path === '') return `${base}${prefix}/`;
  if (path.startsWith('/#')) return `${base}${prefix}/${path.slice(1)}`;
  return `${base}${prefix}${path}`;
}

/** URL for a file in public/ (respects the base path). */
export function asset(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Absolute URL for canonical / hreflang / Open Graph tags. */
export function absolute(locale: Locale, path: string, site: URL | undefined): string {
  const rel = href(locale, path);
  return site ? new URL(rel, site).toString() : rel;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}
