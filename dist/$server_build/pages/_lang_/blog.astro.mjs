import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CvvbPL1K.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DXCNHP5B.mjs';
import { v as validLanguages, d as defaultLanguage } from '../../chunks/languages_Bn8xGCxr.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  return validLanguages.map((lang) => ({
    params: { lang },
    props: { posts: allPosts }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { posts } = Astro2.props;
  const { lang } = Astro2.params;
  const currentLang = validLanguages.includes(lang) ? lang : defaultLanguage;
  const translations = {
    title: {
      fr: "Blog",
      en: "Blog",
      ar: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629"
    }
  };
  const languagePosts = posts.filter((post) => post.id.startsWith(currentLang + "/"));
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[currentLang], "data-astro-cid-hrno2mm7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="blog-page" data-astro-cid-hrno2mm7> <h1 data-astro-cid-hrno2mm7>${translations.title[currentLang]}</h1> <ul data-astro-cid-hrno2mm7> ${languagePosts.map((post) => renderTemplate`<li data-astro-cid-hrno2mm7> <a${addAttribute(`/${currentLang}/blog/${post.id.split("/").pop()}`, "href")} data-astro-cid-hrno2mm7>${post.data.title}</a> </li>`)} </ul> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/index.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
