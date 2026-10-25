import { t, type Locale } from '../i18n';
import { collectionHasFiles } from './content';

/** Collection-backed sections stay out of the navigation until they have content. */
const gated: Record<string, 'events' | 'projects'> = {
  '/events/': 'events',
  '/projects/': 'projects',
};

export async function visibleNav(locale: Locale) {
  return t(locale).nav.items.filter((item) => {
    const key = gated[item.path];
    return !key || collectionHasFiles(key);
  });
}
