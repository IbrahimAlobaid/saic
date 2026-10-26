import { getCollection, getEntries, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export type Bi = { ar: string; en?: string };
export type Person = CollectionEntry<'people'>;
export type Event = CollectionEntry<'events'>;
export type Project = CollectionEntry<'projects'>;
export type Program = CollectionEntry<'programs'>;

/** Pick a locale's text, falling back to Arabic. */
export function tx(value: Bi | undefined, locale: Locale): string {
  if (!value) return '';
  return (locale === 'en' ? value.en : undefined) ?? value.ar;
}

/** True when an English page has to show the Arabic text (so it can be marked lang="ar"). */
export function isFallback(value: Bi | undefined, locale: Locale): boolean {
  return locale === 'en' && !!value && !value.en;
}

/** Split a plain-text body into paragraphs on blank lines or single newlines. */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n|\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

const intlLocale = (locale: Locale) => (locale === 'ar' ? 'ar-SY' : 'en-GB');

export function fmtDate(date: Date, locale: Locale, opts: Intl.DateTimeFormatOptions = { dateStyle: 'long' }): string {
  return new Intl.DateTimeFormat(intlLocale(locale), { timeZone: 'Asia/Damascus', ...opts }).format(date);
}

export function fmtTime(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale(locale), { timeZone: 'Asia/Damascus', hour: 'numeric', minute: '2-digit' }).format(date);
}

export function hasTime(date: Date): boolean {
  return date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0;
}

/** Human date range: same day -> one date (+ times), otherwise "start – end". */
export function fmtRange(start: Date, end: Date | undefined, locale: Locale): string {
  if (!end || sameDay(start, end)) {
    const d = fmtDate(start, locale);
    if (hasTime(start)) {
      const t = end ? `${fmtTime(start, locale)} – ${fmtTime(end, locale)}` : fmtTime(start, locale);
      return `${d} · ${t}`;
    }
    return d;
  }
  return `${fmtDate(start, locale)} – ${fmtDate(end, locale)}`;
}

function sameDay(a: Date, b: Date): boolean {
  return a.toISOString().slice(0, 10) === b.toISOString().slice(0, 10);
}

export type EventStatus = 'upcoming' | 'past' | 'cancelled';

export function eventStatus(event: Event, now = new Date()): EventStatus {
  if (event.data.status) return event.data.status;
  const last = event.data.end ?? event.data.start;
  const endOfDay = new Date(last);
  endOfDay.setUTCHours(23, 59, 59, 999);
  return endOfDay.getTime() >= now.getTime() ? 'upcoming' : 'past';
}

/**
 * File presence per collection, resolved at build time without loading anything.
 * Lets us skip getCollection() on empty folders, which otherwise logs a warning per call.
 */
const collectionFiles = {
  events: import.meta.glob('../content/events/*.yaml'),
  projects: import.meta.glob('../content/projects/*.yaml'),
  albums: import.meta.glob('../content/albums/*.yaml'),
  partners: import.meta.glob('../content/partners/*.yaml'),
} as const;

export function collectionHasFiles(name: keyof typeof collectionFiles): boolean {
  return Object.keys(collectionFiles[name]).length > 0;
}

export async function allEvents(): Promise<Event[]> {
  if (!collectionHasFiles('events')) return [];
  const list = await getCollection('events');
  return list.sort((a, b) => a.data.start.getTime() - b.data.start.getTime());
}

export async function splitEvents(now = new Date()) {
  const list = await allEvents();
  const upcoming = list.filter((e) => eventStatus(e, now) === 'upcoming');
  const past = list.filter((e) => eventStatus(e, now) !== 'upcoming').reverse();
  return { upcoming, past };
}

export async function allProjects(): Promise<Project[]> {
  if (!collectionHasFiles('projects')) return [];
  const list = await getCollection('projects');
  return list.sort((a, b) => b.data.year - a.data.year || a.id.localeCompare(b.id));
}

export async function activePeople(): Promise<Person[]> {
  const list = await getCollection('people', (p) => p.data.active);
  return list.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}

export const TEAMS = ['logistics', 'media', 'relations'] as const;
export type Team = (typeof TEAMS)[number];

export function groupTeam(people: Person[]) {
  const founders = people.filter((p) => p.data.roles.includes('founder'));
  const trainers = people.filter((p) => p.data.roles.includes('trainer'));
  const volunteers = people.filter((p) => p.data.roles.includes('volunteer'));
  const leadFirst = (a: Person, b: Person) => Number(b.data.lead) - Number(a.data.lead) || a.data.order - b.data.order;
  const byTeam = Object.fromEntries(
    TEAMS.map((t) => [t, volunteers.filter((v) => v.data.team === t).sort(leadFirst)]),
  ) as Record<Team, Person[]>;
  const unassigned = volunteers.filter((v) => !v.data.team);
  return { founders, trainers, volunteers, byTeam, unassigned };
}

/** Events and projects a person took part in (reverse references). */
export async function personActivity(person: Person) {
  const events = (await allEvents()).filter((e) => e.data.speakers.some((r) => r.id === person.id));
  const projects = (await allProjects()).filter((p) => p.data.members.some((r) => r.id === person.id));
  return { events, projects };
}

export async function resolvePeople(refs: { collection: 'people'; id: string }[]): Promise<Person[]> {
  const list = await getEntries(refs);
  return list.filter((p): p is Person => !!p);
}

export function initial(name: string): string {
  const clean = name.replace(/^(م\.|د\.|أ\.|Eng\.|Dr\.|Mr\.|Ms\.)\s*/u, '').trim();
  return clean ? [...clean][0]! : '·';
}

export function fmtNum(n: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocale(locale), { useGrouping: false }).format(n);
}

/** Day number and short month for the calendar block on event cards. */
export function calendarParts(date: Date, locale: Locale): { day: string; month: string } {
  const day = new Intl.DateTimeFormat(intlLocale(locale), { day: 'numeric', timeZone: 'Asia/Damascus' }).format(date);
  const month = new Intl.DateTimeFormat(intlLocale(locale), { month: 'short', timeZone: 'Asia/Damascus' }).format(date);
  return { day, month };
}

type EventLocation = Event['data']['location'];

/** "City · Venue · Online" with whatever parts exist. */
export function eventWhere(loc: EventLocation, locale: Locale, onlineLabel: string): string {
  const parts = [tx(loc.city, locale), tx(loc.venue, locale)].filter(Boolean);
  if (loc.online) parts.push(onlineLabel);
  return parts.join(' · ');
}
