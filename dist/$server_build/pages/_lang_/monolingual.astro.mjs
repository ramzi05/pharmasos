import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, g as renderSlot, f as renderComponent } from '../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BSuO9Yt3.mjs';
import 'clsx';
import { u as useTranslations, L as LOCALES } from '../../chunks/i18n_kKA0VEOz.mjs';
import { N as NOT_TRANSLATED_CAUTION } from '../../chunks/consts_elOHGS59.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$NotTranslateCaution = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NotTranslateCaution;
  const t = useTranslations(Astro2.currentLocale);
  const { usedLangs } = Astro2.props;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${!usedLangs.includes(currentLocale) && renderTemplate`${maybeRenderHead()}<p data-astro-cid-mw3zkypn><span class="material-icons-sharp" data-astro-cid-mw3zkypn>warning</span>${t(NOT_TRANSLATED_CAUTION)}</p>`}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/i18n/NotTranslateCaution.astro", undefined);

const $$Astro$1 = createAstro();
const $$PageHeadline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageHeadline;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-ql4jah75> <h1 data-astro-cid-ql4jah75>${title}</h1> ${renderSlot($$result, $$slots["default"])} </header> `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/PageHeadline.astro", undefined);

const $$Astro = createAstro();
function getStaticPaths() {
  return Object.keys(LOCALES).map((lang) => ({
    params: { lang }
  }));
}
const $$Monolingual = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Monolingual;
  const { lang } = Astro2.params;
  const title = {
    en: "Title in English",
    fr: "Titre en fran\xE7ais",
    ar: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  };
  const description = {
    en: "Description in English",
    fr: "Description en fran\xE7ais",
    ar: "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  };
  const content = {
    en: "Content in English",
    fr: "Contenu en fran\xE7ais",
    ar: "\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title[lang] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotTranslateCaution", $$NotTranslateCaution, { "usedLangs": ["en", "fr", "ar"] })} ${maybeRenderHead()}<div> ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title[lang] })} <p>${description[lang]}</p> <p>${content[lang]}</p> </div> ` })}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/monolingual.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/monolingual.astro";
const $$url = "/[lang]/monolingual";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Monolingual,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
