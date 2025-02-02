import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BSuO9Yt3.mjs';
import { g as getCollection } from '../../chunks/_astro_content_C1f-cK0W.mjs';
import { L as LOCALES } from '../../chunks/i18n_kKA0VEOz.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  return Object.keys(LOCALES).map((lang) => ({
    params: { lang },
    props: {
      posts: allPosts
    }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { posts } = Astro2.props;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Blog", "data-astro-cid-hrno2mm7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-hrno2mm7>Blog Posts</h1> <ul data-astro-cid-hrno2mm7> ${posts.map((post) => renderTemplate`<li data-astro-cid-hrno2mm7> <a${addAttribute(`/${lang}/blog/${post.id.split("/").pop()}`, "href")} data-astro-cid-hrno2mm7>${post.data.title}</a> </li>`)} </ul> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/index.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
