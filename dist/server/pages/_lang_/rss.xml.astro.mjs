import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_DnmX83gf.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../chunks/consts_DnRwGgKX.mjs';
import { l as localeParams } from '../../chunks/i18n_ByV5c7mk.mjs';
export { renderers } from '../../renderers.mjs';

const getStaticPaths = () => localeParams;


async function GET(context) {

	const locale = context.params.lang;

	const localeTitle = SITE_TITLE
		;
	const localeDescription = typeof SITE_DESCRIPTION == "string"
		? SITE_DESCRIPTION
		: SITE_DESCRIPTION[locale];

	const posts = await getCollection('blog', ({ slug }) => {
		return slug.split("/")[0] == locale;
	});
	posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return rss({
		title: localeTitle,
		description: localeDescription,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/${locale}/blog/${post.slug}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
