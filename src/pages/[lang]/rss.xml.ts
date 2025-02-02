import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { validLanguages, type ValidLanguage, defaultLanguage } from '@/constants/languages';

export const prerender = true;

export function getStaticPaths() {
  return validLanguages.map(lang => ({
    params: { lang }
  }));
}

export async function GET(context: any) {
  const locale = context.params.lang;

  const localeTitle = typeof SITE_TITLE == "string"
    ? SITE_TITLE
    : SITE_TITLE[locale] || 'PharmaGarde';
  const localeDescription = typeof SITE_DESCRIPTION == "string"
    ? SITE_DESCRIPTION
    : SITE_DESCRIPTION[locale] || 'Find on-duty pharmacies near you';

  const posts = await getCollection('blog', ({ slug }) => {
    return slug.split("/")[0] == locale;
  });
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: localeTitle,
    description: localeDescription,
    site: context.site || 'https://pharmasos.vercel.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/${locale}/blog/${post.slug}/`,
    })),
    customData: `<language>${locale}</language>`,
    stylesheet: '/rss/styles.xsl'
  });
} 