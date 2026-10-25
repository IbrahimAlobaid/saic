import { asset, type Locale } from '../i18n';
import { t } from '../i18n';

/** schema.org Organization block for the home pages. */
export function organizationJsonLd(locale: Locale, site: URL | undefined) {
  const d = t(locale);
  const abs = (p: string) => (site ? new URL(p, site).toString() : p);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Syrian AI Community',
    alternateName: 'مجتمع الذكاء الاصطناعي السوري',
    url: abs(asset('/')),
    logo: abs(asset('/og.png')),
    email: d.follow.email,
    description: d.meta.home.description,
    sameAs: d.follow.links.map((l) => l.href),
  };
}
