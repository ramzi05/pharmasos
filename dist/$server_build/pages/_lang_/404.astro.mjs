import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BZqVdwvJ.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
function getStaticPaths() {
  return validLanguages.map((lang) => ({
    params: { lang }
  }));
}
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const validLanguages2 = ["en", "fr", "ar"];
  const { lang } = Astro2.params;
  const currentLang = validLanguages2.includes(lang) ? lang : "fr";
  const translations = {
    title: {
      fr: "Page non trouv\xE9e",
      en: "Page not found",
      ar: "\u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"
    },
    message: {
      fr: "La page que vous recherchez n'existe pas.",
      en: "The page you're looking for doesn't exist.",
      ar: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u0627 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[currentLang], "data-astro-cid-oiktujcs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="error-page" data-astro-cid-oiktujcs> <h1 data-astro-cid-oiktujcs>${translations.title[currentLang]}</h1> <p data-astro-cid-oiktujcs>${translations.message[currentLang]}</p> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/404.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/404.astro";
const $$url = "/[lang]/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
