import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, g as renderSlot } from '../../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../chunks/Base_CvvbPL1K.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DXCNHP5B.mjs';
import { v as validLanguages, d as defaultLanguage } from '../../../chunks/languages_Bn8xGCxr.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return validLanguages.flatMap(
    (lang) => posts.filter((post) => post.id.startsWith(lang + "/")).map((post) => ({
      params: {
        lang,
        id: post.id.split("/").slice(1).join("/")
      },
      props: { entry: post }
    }))
  );
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { lang } = Astro2.params;
  const currentLang = validLanguages.includes(lang) ? lang : defaultLanguage;
  const translations = {
    title: {
      fr: "Article",
      en: "Post",
      ar: "\u0645\u0642\u0627\u0644"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": `${entry.data.title} - ${translations.title[currentLang]}`, "data-astro-cid-v3cnrnum": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post" data-astro-cid-v3cnrnum> <h1 data-astro-cid-v3cnrnum>${entry.data.title}</h1> ${entry.data.description && renderTemplate`<p class="description" data-astro-cid-v3cnrnum>${entry.data.description}</p>`} <div class="content" data-astro-cid-v3cnrnum> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/[...id].astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/[...id].astro";
const $$url = "/[lang]/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
