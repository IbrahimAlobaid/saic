import { href, absolute, type Locale } from '../i18n';
import { activePeople, groupTeam, tx, type Person } from './content';

/**
 * Question-and-answer blocks.
 *
 * Answers live in the dictionaries as plain text with a tiny markup:
 *   - one paragraph per line
 *   - [label](target) links, where target is a site path ("/about/"), an absolute URL or mailto:
 *   - a line holding only {foundersList} or {trainersList} becomes a list built from the people collection,
 *     so names, titles and profile links always match the real team data.
 */
export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface BuiltFaq {
  id: string;
  q: string;
  /** HTML for the page (site-relative links). */
  html: string;
  /** HTML for FAQPage structured data (absolute links, no presentational attributes). */
  ldHtml: string;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text: string, locale: Locale, site: URL | undefined, forLd: boolean): string {
  return esc(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, target: string) => {
    const external = /^(https?:|mailto:)/.test(target);
    const url = external ? target : forLd ? absolute(locale, target, site) : href(locale, target);
    const attrs = !forLd && target.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${url}"${attrs}>${label}</a>`;
  });
}

function personLine(person: Person, locale: Locale, withTitle: boolean): string {
  const name = tx(person.data.name, locale);
  const title = tx(person.data.title, locale);
  const bio = tx(person.data.bio, locale).split('\n')[0]?.trim() ?? '';
  let line = `[${name}](/about/${person.id}/)`;
  if (withTitle && title) line += ` (${title})`;
  if (bio) line += `: ${bio}`;
  return line;
}

export async function buildFaq(locale: Locale, items: FaqItem[], site: URL | undefined): Promise<BuiltFaq[]> {
  const { founders, trainers } = groupTeam(await activePeople());
  const lists: Record<string, string[]> = {
    '{foundersList}': founders.map((p) => personLine(p, locale, true)),
    '{trainersList}': trainers.map((p) => personLine(p, locale, false)),
  };

  const render = (answer: string, forLd: boolean) =>
    answer
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const list = lists[line];
        if (list) return `<ul>${list.map((li) => `<li>${inline(li, locale, site, forLd)}</li>`).join('')}</ul>`;
        return `<p>${inline(line, locale, site, forLd)}</p>`;
      })
      .join('');

  return items
    .filter((it) => {
      // Drop a question whose answer depends on a list that is currently empty.
      const needs = Object.keys(lists).filter((k) => it.a.includes(k));
      return needs.every((k) => lists[k]!.length > 0);
    })
    .map((it) => ({ id: it.id, q: it.q, html: render(it.a, false), ldHtml: render(it.a, true) }));
}
