import { getCollection } from 'astro:content';
import { t, type Locale } from '../i18n';

/** Collection-backed sections stay out of the navigation until they have content. */
const gated: Record<string, 'events' | 'projects'> = {
  '/events/': 'events',
  '/projects/': 'projects',
};

export async function visibleNav(locale: Locale) {
  const [events, projects] = await Promise.all([getCollection('events'), getCollection('projects')]);
  const counts = { events: events.length, projects: projects.length };
  return t(locale).nav.items.filter((item) => {
    const key = gated[item.path];
    return !key || counts[key] > 0;
  });
}
