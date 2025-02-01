import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Co1zruxy.mjs';
import 'kleur/colors';
import { u as useTranslations, l as localeParams, L as LOCALES } from '../../chunks/i18n_ByV5c7mk.mjs';
import { $ as $$Base } from '../../chunks/Base_C7WxR-Zm.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const getStaticPaths = () => localeParams;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const t = useTranslations(Astro2.currentLocale);
  const title = t({
    fr: "Page non trouv\xE9e",
    // French translation
    en: "Page Not Found",
    ar: "\u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"
  });
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  if (localStorage.userAccessPath) {\n    history.replaceState("", "", localStorage.userAccessPath);\n\n    document.querySelectorAll("a[data-lang-path]").forEach((a) => {\n      const pathnames = localStorage.userAccessPath.split("/");\n      const lang = a.getAttribute("data-lang-path");\n      pathnames[1] = lang;\n      a.href = pathnames.join("/");\n    });\n\n    localStorage.removeItem("userAccessPath");\n  }\n<\/script> '])), renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-oiktujcs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container" data-astro-cid-oiktujcs> <h1 data-astro-cid-oiktujcs> <b data-astro-cid-oiktujcs>404</b> ${title} </h1> <p data-astro-cid-oiktujcs> ${t({
    fr: "La page que vous recherchez n'a pas \xE9t\xE9 trouv\xE9e. Veuillez retourner \xE0 l'accueil ou essayer une autre langue.",
    // French translation
    en: "The page you are looking for could not be found. Please return to the top or try another language.",
    ar: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u0627 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0644\u0649 \u0623\u0648 \u062A\u062C\u0631\u0628\u0629 \u0644\u063A\u0629 \u0623\u062E\u0631\u0649."
  })} </p> <a href="/" class="gotop" data-astro-cid-oiktujcs> ${t({
    fr: "Page d'accueil",
    // French translation
    en: "Top Page",
    ar: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
  })} </a> <section class="langList" data-astro-cid-oiktujcs> <h2 data-astro-cid-oiktujcs> ${t({
    fr: "Voir dans d'autres langues",
    // French translation
    en: "View in other languages",
    ar: "\u0639\u0631\u0636 \u0628\u0644\u063A\u0627\u062A \u0623\u062E\u0631\u0649"
  })} </h2> <ul data-astro-cid-oiktujcs> ${Object.entries(LOCALES).map(([lang, { label }]) => renderTemplate`<li data-astro-cid-oiktujcs> <a${addAttribute(`/${lang}/`, "href")}${addAttribute(lang, "data-lang-path")}${addAttribute(`localStorage.selectedLang = "${lang}"`, "onclick")}${addAttribute(LOCALES[lang].dir || null, "dir")} data-astro-cid-oiktujcs> ${label} </a> </li>`)} </ul> </section> </section> ` }));
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/404.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/404.astro";
const $$url = "/[lang]/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
