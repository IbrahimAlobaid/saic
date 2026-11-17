import { t, asset, absolute, href, type Locale } from '../i18n';
import { activePeople, groupTeam, tx, type Person, type Event } from './content';
import type { BuiltFaq } from './faq';

/**
 * schema.org structured data. Every page gets one @graph with the organization, the website,
 * the page itself and (when it has a trail) its breadcrumbs; pages add their own nodes
 * (Person, Course, FAQPage, Event) through the `schema` prop of the Base layout.
 */

type Node = Record<string, unknown>;
export interface Crumb {
  name: string;
  path: string;
}

const abs = (path: string, site: URL | undefined) => (site ? new URL(path, site).toString() : path);

/** Stable ids, independent of the page language. */
export const orgId = (site: URL | undefined) => `${abs(asset('/'), site)}#organization`;
export const websiteId = (site: URL | undefined) => `${abs(asset('/'), site)}#website`;
export const personId = (id: string, site: URL | undefined) => `${absolute('ar', `/about/${id}/`, site)}#person`;

const NAMES = { ar: 'مجتمع الذكاء الاصطناعي السوري', en: 'Syrian AI Community' } as const;

/** First line of a bio, used wherever a one-sentence description is needed. */
export function bioLine(person: Person, locale: Locale): string {
  return tx(person.data.bio, locale).split('\n')[0]?.trim() ?? '';
}

/** "Founder and Trainer at the Syrian AI Community" / "متطوع ضمن فريق الميديا في ...". */
export function affiliation(person: Person, locale: Locale): string {
  const d = t(locale);
  const roles = person.data.roles.map((r) => d.people.roles[r]).join(d.people.roleJoin);
  const team = person.data.team ? d.people.teams[person.data.team] : '';
  const template = team ? d.people.affiliationTeam : d.people.affiliation;
  return template.replace('{roles}', roles).replace('{team}', team);
}

export function personTitle(person: Person, locale: Locale): string {
  const d = t(locale);
  const name = tx(person.data.name, locale);
  const role = tx(person.data.title, locale) || person.data.roles.map((r) => d.people.roles[r]).join(d.people.roleJoin);
  return `${name} | ${role} · ${d.meta.siteName}`;
}

export function personDescription(person: Person, locale: Locale): string {
  const name = tx(person.data.name, locale);
  const text = `${name}: ${affiliation(person, locale)}. ${bioLine(person, locale)}`.trim();
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
}

function personRef(person: Person, locale: Locale, site: URL | undefined): Node {
  return {
    '@type': 'Person',
    '@id': personId(person.id, site),
    name: tx(person.data.name, locale),
    url: absolute(locale, `/about/${person.id}/`, site),
  };
}

export function personNode(person: Person, locale: Locale, site: URL | undefined, image?: string): Node {
  const other: Locale = locale === 'ar' ? 'en' : 'ar';
  const name = tx(person.data.name, locale);
  const altName = tx(person.data.name, other);
  const d = t(locale);
  const sameAs = Object.values(person.data.links).filter(Boolean);
  return {
    ...personRef(person, locale, site),
    ...(altName && altName !== name ? { alternateName: altName } : {}),
    jobTitle: tx(person.data.title, locale) || person.data.roles.map((r) => d.people.roles[r]).join(d.people.roleJoin),
    description: [affiliation(person, locale), bioLine(person, locale)].filter(Boolean).join('. '),
    ...(image ? { image } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    affiliation: { '@id': orgId(site) },
  };
}

export async function organizationNode(locale: Locale, site: URL | undefined): Promise<Node> {
  const d = t(locale);
  const { founders } = groupTeam(await activePeople());
  const name = NAMES[locale];
  return {
    '@type': 'Organization',
    '@id': orgId(site),
    name,
    alternateName: [NAMES.ar, NAMES.en, 'SAIC'].filter((n) => n !== name),
    url: absolute(locale, '/', site),
    logo: { '@type': 'ImageObject', url: abs(asset('/icon-512.png'), site), width: 512, height: 512 },
    image: abs(asset('/og.png'), site),
    description: d.meta.home.description,
    slogan: d.footer.motto,
    email: d.follow.email,
    areaServed: { '@type': 'Country', name: locale === 'ar' ? 'سوريا' : 'Syria' },
    knowsAbout: d.meta.topics,
    sameAs: d.follow.links.map((l) => l.href),
    ...(founders.length ? { founder: founders.map((p) => personRef(p, locale, site)) } : {}),
  };
}

function websiteNode(locale: Locale, site: URL | undefined): Node {
  const name = NAMES[locale];
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    url: absolute('ar', '/', site),
    name,
    alternateName: [NAMES.ar, NAMES.en, 'SAIC'].filter((n) => n !== name),
    inLanguage: ['ar', 'en'],
    publisher: { '@id': orgId(site) },
  };
}

function breadcrumbNode(locale: Locale, crumbs: Crumb[], canonical: string, site: URL | undefined): Node {
  const d = t(locale);
  const trail: Crumb[] = [{ name: d.nav.items[0]!.label, path: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(locale, c.path, site),
    })),
  };
}

interface PageGraphInput {
  locale: Locale;
  site: URL | undefined;
  path: string;
  title: string;
  description: string;
  pageType?: string;
  crumbs?: Crumb[];
  mainEntityId?: string;
  image?: string;
  extra?: Node[];
}

export async function pageGraph(input: PageGraphInput) {
  const { locale, site, path, title, description, pageType = 'WebPage', crumbs = [], mainEntityId, image, extra = [] } = input;
  const canonical = absolute(locale, path, site);
  const page: Node = {
    '@type': pageType,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { '@id': websiteId(site) },
    about: { '@id': orgId(site) },
    ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: image } } : {}),
    ...(crumbs.length ? { breadcrumb: { '@id': `${canonical}#breadcrumb` } } : {}),
    ...(mainEntityId ? { mainEntity: { '@id': mainEntityId } } : {}),
  };
  const nodes: Node[] = [await organizationNode(locale, site), websiteNode(locale, site), page];
  if (crumbs.length) nodes.push(breadcrumbNode(locale, crumbs, canonical, site));
  nodes.push(...extra);
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export function faqNode(items: BuiltFaq[], locale: Locale, path: string, site: URL | undefined): Node {
  const canonical = absolute(locale, path, site);
  return {
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    url: canonical,
    inLanguage: locale,
    isPartOf: { '@id': websiteId(site) },
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.ldHtml },
    })),
  };
}

/** Course markup for the AI Engineering Camp, built only from facts stated on the page. */
export function campCourseNode(locale: Locale, site: URL | undefined, trainers: Person[]): Node {
  const d = t(locale);
  const path = '/programs/ai-engineering-camp/';
  const canonical = absolute(locale, path, site);
  return {
    '@type': 'Course',
    '@id': `${absolute('ar', path, site)}#course`,
    name: d.camp.title,
    alternateName: locale === 'ar' ? 'AI Engineering Camp' : 'معسكر هندسة الذكاء الاصطناعي',
    description: d.meta.camp.description,
    url: canonical,
    /* The camp's own learning platform describes the same course. */
    sameAs: d.camp.site.url,
    inLanguage: 'ar',
    provider: { '@id': orgId(site) },
    educationalLevel: locale === 'ar' ? 'متقدم' : 'Advanced',
    timeRequired: 'PT28H30M',
    coursePrerequisites: d.camp.prereq.body,
    audience: { '@type': 'EducationalAudience', audienceType: d.camp.audience.items.join(' ') },
    teaches: d.camp.outcomes.abilities,
    syllabusSections: d.camp.sessions.rows.map((r) => ({ '@type': 'Syllabus', name: r.s, description: r.o })),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseWorkload: 'PT28H30M',
      ...(trainers.length ? { instructor: trainers.map((p) => personRef(p, locale, site)) } : {}),
    },
  };
}

export async function eventNode(event: Event, locale: Locale, site: URL | undefined, speakers: Person[]): Promise<Node> {
  const e = event.data;
  const canonical = absolute(locale, `/events/${event.id}/`, site);
  const hasPlace = !!(e.location.city || e.location.venue);
  const mode = e.location.online ? (hasPlace ? 'MixedEventAttendanceMode' : 'OnlineEventAttendanceMode') : 'OfflineEventAttendanceMode';
  const place = hasPlace
    ? {
        '@type': 'Place',
        name: tx(e.location.venue, locale) || tx(e.location.city, locale),
        address: { '@type': 'PostalAddress', addressLocality: tx(e.location.city, locale), addressCountry: 'SY' },
      }
    : undefined;
  const virtual = e.location.online ? { '@type': 'VirtualLocation', url: e.location.url ?? canonical } : undefined;
  const location = place && virtual ? [place, virtual] : (place ?? virtual);
  return {
    '@type': 'Event',
    '@id': `${absolute('ar', `/events/${event.id}/`, site)}#event`,
    name: tx(e.title, locale),
    description: tx(e.summary, locale),
    url: canonical,
    startDate: e.start.toISOString(),
    ...(e.end ? { endDate: e.end.toISOString() } : {}),
    eventStatus: `https://schema.org/${e.status === 'cancelled' ? 'EventCancelled' : 'EventScheduled'}`,
    eventAttendanceMode: `https://schema.org/${mode}`,
    ...(location ? { location } : {}),
    image: abs(asset('/og.png'), site),
    inLanguage: 'ar',
    organizer: { '@id': orgId(site) },
    ...(speakers.length ? { performer: speakers.map((p) => personRef(p, locale, site)) } : {}),
  };
}

/** Site-relative link for the visible breadcrumb trail. */
export function crumbHref(locale: Locale, crumb: Crumb): string {
  return href(locale, crumb.path);
}
