import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../chunks/Base_BSuO9Yt3.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_C1f-cK0W.mjs';
import { L as LOCALES } from '../../../chunks/i18n_kKA0VEOz.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return Object.keys(LOCALES).flatMap(
    (lang) => posts.map((entry) => ({
      params: {
        lang,
        id: entry.id.split("/").pop() || ""
      },
      props: { entry }
    }))
  );
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>${entry.data.title}</h1> ${entry.data.description && renderTemplate`<p>${entry.data.description}</p>`} </article> ` })}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/[...id].astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/blog/[...id].astro";
const $$url = "/[lang]/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
