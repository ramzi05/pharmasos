import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_DXCNHP5B.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../chunks/consts_Bk9uKFkb.mjs';
import { v as validLanguages } from '../../chunks/languages_Bn8xGCxr.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = true;

function getStaticPaths() {
	return validLanguages.map(lang => ({
		params: { lang }
	}));
}

async function GET(context) {
	const locale = context.params.lang;

	const localeTitle = SITE_TITLE
		;
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	getStaticPaths,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
