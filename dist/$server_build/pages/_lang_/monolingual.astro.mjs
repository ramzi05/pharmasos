import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CvvbPL1K.mjs';
import { v as validLanguages, d as defaultLanguage } from '../../chunks/languages_Bn8xGCxr.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
function getStaticPaths() {
  return validLanguages.map((lang) => ({
    params: { lang }
  }));
}
const $$Monolingual = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Monolingual;
  const { lang } = Astro2.params;
  const currentLang = validLanguages.includes(lang) ? lang : defaultLanguage;
  const translations = {
    title: {
      fr: "Page monolingue",
      en: "Monolingual page",
      ar: "\u0635\u0641\u062D\u0629 \u0623\u062D\u0627\u062F\u064A\u0629 \u0627\u0644\u0644\u063A\u0629"
    },
    description: {
      fr: "Cette page est un exemple de contenu monolingue.",
      en: "This page is an example of monolingual content.",
      ar: "\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u063A\u0629."
    },
    content: {
      fr: "Le contenu de cette page est disponible en fran\xE7ais uniquement.",
      en: "The content of this page is available in English only.",
      ar: "\u0645\u062D\u062A\u0648\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0645\u062A\u0648\u0641\u0631 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0641\u0642\u0637."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[currentLang], "data-astro-cid-fkt2mejy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="monolingual-page" data-astro-cid-fkt2mejy> <h1 data-astro-cid-fkt2mejy>${translations.title[currentLang]}</h1> <p class="description" data-astro-cid-fkt2mejy>${translations.description[currentLang]}</p> <p class="content" data-astro-cid-fkt2mejy>${translations.content[currentLang]}</p> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/monolingual.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/monolingual.astro";
const $$url = "/[lang]/monolingual";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Monolingual,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
