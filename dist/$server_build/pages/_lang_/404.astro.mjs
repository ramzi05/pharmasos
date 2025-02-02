import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CvvbPL1K.mjs';
import { v as validLanguages, d as defaultLanguage } from '../../chunks/languages_Bn8xGCxr.mjs';
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
  const { lang } = Astro2.params;
  const currentLang = validLanguages.includes(lang) ? lang : defaultLanguage;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[currentLang], "data-astro-cid-oiktujcs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="error-page" data-astro-cid-oiktujcs> <h1 data-astro-cid-oiktujcs>${translations.title[currentLang]}</h1> <p data-astro-cid-oiktujcs>${translations.message[currentLang]}</p> <a${addAttribute(`/${currentLang}/`, "href")} class="home-link" data-astro-cid-oiktujcs> ${currentLang === "fr" ? "Retour \xE0 l'accueil" : currentLang === "ar" ? "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Back to home"} </a> </div> ` })} `;
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
