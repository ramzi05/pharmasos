import { c as createComponent, r as renderTemplate, b as renderHead, d as defineScriptVars, a as addAttribute, m as maybeRenderHead, e as createAstro } from '../chunks/astro/server_Co1zruxy.mjs';
import 'kleur/colors';
import 'clsx';
import { u as useTranslations, g as getLocalePaths, L as LOCALES, D as DEFAULT_LOCALE } from '../chunks/i18n_ByV5c7mk.mjs';
import { X as X_ACCOUNT, S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DnRwGgKX.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const t = useTranslations(Astro2.currentLocale);
  const langs = Object.keys(LOCALES);
  const baseUrl = Astro2.site ;
  const defaultLocale = DEFAULT_LOCALE;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><title>redirect...</title><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"', ">", '<!-- icon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" sizes="192x192" href="/android-chrome.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="color-scheme" content="light dark"><!-- OGP --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:site_name"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:locale"', '><meta name="twitter:card" content="summary"><meta name="twitter:site"', ">", '<noscript><meta http-equiv="refresh"', "></noscript><script>(function(){", '\n      if (\n        localStorage.selectedLang &&\n        langs.includes(localStorage.selectedLang)\n      ) {\n        location.href = `${baseUrl + localStorage.selectedLang}/`;\n      } else {\n        const browserLang = navigator.language.toLowerCase();\n\n        if (langs.includes(browserLang)) {\n          location.href = `${baseUrl + browserLang}/`;\n        } else if (langs.includes(browserLang.split("-")[0])) {\n          location.href = `${baseUrl + browserLang.split("-")[0]}/`;\n        } else {\n          location.href = `${baseUrl + defaultLocale}/`;\n        }\n      }\n    })();</script>', "</head> <body> <h1>redirect...</h1> </body></html>"], ["<html", '> <head><meta charset="UTF-8"><title>redirect...</title><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"', ">", '<!-- icon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" sizes="192x192" href="/android-chrome.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="color-scheme" content="light dark"><!-- OGP --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:site_name"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:locale"', '><meta name="twitter:card" content="summary"><meta name="twitter:site"', ">", '<noscript><meta http-equiv="refresh"', "></noscript><script>(function(){", '\n      if (\n        localStorage.selectedLang &&\n        langs.includes(localStorage.selectedLang)\n      ) {\n        location.href = \\`\\${baseUrl + localStorage.selectedLang}/\\`;\n      } else {\n        const browserLang = navigator.language.toLowerCase();\n\n        if (langs.includes(browserLang)) {\n          location.href = \\`\\${baseUrl + browserLang}/\\`;\n        } else if (langs.includes(browserLang.split("-")[0])) {\n          location.href = \\`\\${baseUrl + browserLang.split("-")[0]}/\\`;\n        } else {\n          location.href = \\`\\${baseUrl + defaultLocale}/\\`;\n        }\n      }\n    })();</script>', "</head> <body> <h1>redirect...</h1> </body></html>"])), addAttribute(Astro2.currentLocale, "lang"), addAttribute(Astro2.generator, "content"), getLocalePaths(Astro2.url).map((props) => renderTemplate`<link rel="alternate"${addAttribute(LOCALES[props.lang].lang || props.lang, "hreflang")}${addAttribute(Astro2.site?.origin + props.path, "href")}>`), addAttribute(t(SITE_TITLE), "content"), addAttribute(t(SITE_TITLE), "content"), addAttribute(t(SITE_DESCRIPTION), "content"), addAttribute(Astro2.site + "ogp.png", "content"), addAttribute(Astro2.url, "content"), addAttribute(Astro2.currentLocale, "content"), addAttribute(t(X_ACCOUNT), "content"), maybeRenderHead(), addAttribute(`0;url=${baseUrl + DEFAULT_LOCALE}/`, "content"), defineScriptVars({ langs, baseUrl, defaultLocale }), renderHead());
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/index.astro", undefined);
const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
