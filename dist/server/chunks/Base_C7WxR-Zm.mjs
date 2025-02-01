import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderComponent, e as createAstro, d as defineScriptVars, g as renderSlot, b as renderHead, u as unescapeHTML } from './astro/server_Co1zruxy.mjs';
import 'kleur/colors';
import 'clsx';
import { L as LOCALES, u as useTranslations, g as getLocalePaths, a as getRelativeLocaleUrl } from './i18n_ByV5c7mk.mjs';
/* empty css                        */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Y4EQHJZF.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION, X as X_ACCOUNT } from './consts_DnRwGgKX.mjs';

const $$LocalesHomeList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${Object.entries(LOCALES).map(([lang, { label }]) => renderTemplate`${maybeRenderHead()}<li><a${addAttribute(`/${lang}/`, "href")}${addAttribute(`localStorage.selectedLang = "${lang}"`, "onclick")}${addAttribute(LOCALES[lang].dir || null, "dir")}>${label}</a></li>`)}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/i18n/LocalesHomeList.astro", undefined);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const t = useTranslations(Astro2.currentLocale);
  return renderTemplate`${maybeRenderHead()}<footer class="l-footer l-content" data-astro-cid-sz7xmlte> <div class="language-message" data-astro-cid-sz7xmlte> ${t({
    fr: "Changer la langue ici",
    en: "Change language from here",
    ar: "\u063A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629 \u0645\u0646 \u0647\u0646\u0627"
  })} </div> <ul data-astro-cid-sz7xmlte> ${renderComponent($$result, "LocalesHomeList", $$LocalesHomeList, { "data-astro-cid-sz7xmlte": true })} </ul> <!-- Add links to About, Contact Us, and Privacy Policy pages --> <div class="footer-links" data-astro-cid-sz7xmlte> <a${addAttribute(`/${Astro2.currentLocale}/about`, "href")} data-astro-cid-sz7xmlte>${t({ fr: "\xC0 propos", en: "About", ar: "\u0645\u0646 \u0646\u062D\u0646" })}</a> <span class="separator" data-astro-cid-sz7xmlte>|</span> <a${addAttribute(`/${Astro2.currentLocale}/contact-us`, "href")} data-astro-cid-sz7xmlte>${t({ fr: "Nous contacter", en: "Contact Us", ar: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627" })}</a> <span class="separator" data-astro-cid-sz7xmlte>|</span> <a${addAttribute(`/${Astro2.currentLocale}/privacy-policy`, "href")} data-astro-cid-sz7xmlte>${t({ fr: "Politique de confidentialit\xE9", en: "Privacy Policy", ar: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" })}</a> </div> <a class="copy" href="http://localhost:4321/" target="_blank" dir="ltr" data-astro-cid-sz7xmlte>
© RAKED ${(/* @__PURE__ */ new Date()).getFullYear()}.
</a> </footer>  `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/Footer.astro", undefined);

const $$Astro$4 = createAstro();
const $$LocaleSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LocaleSelect;
  const currentLocale = Astro2.currentLocale;
  const localePaths = getLocalePaths(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="language-switcher" data-astro-cid-opxux4jt> <div class="lang-buttons" data-astro-cid-opxux4jt> ${localePaths.map(({ path, lang }) => renderTemplate`<a${addAttribute(path, "href")}${addAttribute(`lang-btn ${lang === currentLocale ? "active" : ""}`, "class")}${addAttribute(lang, "data-lang")}${addAttribute(LOCALES[lang].dir || null, "dir")} data-astro-cid-opxux4jt> ${LOCALES[lang].label} </a>`)} </div> </div> `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/i18n/LocaleSelect.astro", undefined);

const PharmaLogo = new Proxy({"src":"/_astro/pharma logo.CSSu5UVr.png","width":1080,"height":261,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Rachi/Desktop/pharmasos/src/assets/pharma logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const t = useTranslations(Astro2.currentLocale);
  const locale = Astro2.currentLocale;
  const isActive = (path) => getRelativeLocaleUrl(locale, path) === Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="l-header" data-astro-cid-3ef6ksr2> <h1 dir="ltr" data-astro-cid-3ef6ksr2> <a${addAttribute(getRelativeLocaleUrl(locale, "/"), "href")} data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": PharmaLogo, "alt": "Pharma Logo", "width": "300", "height": "120", "data-astro-cid-3ef6ksr2": true })} <!-- Increased size --> </a> </h1> ${renderComponent($$result, "LocaleSelect", $$LocaleSelect, { "data-astro-cid-3ef6ksr2": true })} <nav class="l-content" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a${addAttribute(getRelativeLocaleUrl(locale, "/"), "href")}${addAttribute(isActive("/") ? "active" : null, "class")} data-astro-cid-3ef6ksr2> ${t({
    fr: "Accueil",
    en: "Home",
    ar: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
  })} </a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(getRelativeLocaleUrl(locale, "/contact-us"), "href")}${addAttribute(isActive("/contact-us") ? "active" : null, "class")} data-astro-cid-3ef6ksr2> ${t({
    fr: "Contactez-nous",
    en: "Contact Us",
    ar: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"
  })} </a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(getRelativeLocaleUrl(locale, "/about"), "href")}${addAttribute(isActive("/about") ? "active" : null, "class")} data-astro-cid-3ef6ksr2> ${t({
    fr: "\xC0 propos",
    en: "About",
    ar: "\u0645\u0646 \u0646\u062D\u0646"
  })} </a> </li> </ul> </nav> </header> `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/Header.astro", undefined);

const $$Astro$2 = createAstro();
const $$LocaleHtmlHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LocaleHtmlHead;
  const locale = Astro2.currentLocale;
  return renderTemplate`${locale === "en" ? renderTemplate`<style>body{ font-family: "Noto Sans", sans-serif; }</style>` : locale === "fr" ? renderTemplate`<style>body{ font-family: "Noto Sans", sans-serif; }</style>` : locale === "ar" ? renderTemplate`<link rel="preload" as="style" fetchpriority="high" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;800&display=swap">
    <link rel="stylesheet" media="print"${addAttribute(`this.media='all'`, "onload")} href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;800&display=swap">
    <style>body{ font-family: "Noto Sans Arabic", sans-serif; }</style>` : null}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/i18n/LocaleHtmlHead.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$LocaleSuggest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LocaleSuggest;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="js-languageSuggest" data-astro-cid-onlux7ho> <a id="js-link" href="#" data-astro-cid-onlux7ho> <span class="material-icons-sharp" data-astro-cid-onlux7ho>autorenew</span> <span id="js-linkText" data-astro-cid-onlux7ho></span> </a> <button id="js-close" data-astro-cid-onlux7ho> <span class="material-icons-sharp" data-astro-cid-onlux7ho>close</span> </button> </div> <script>(function(){', '\n  const browserLang = navigator.language.toLowerCase();\n  const suggest = document.getElementById("js-languageSuggest");\n\n  const showSuggest = (lang) => {\n    const pathnames = location.pathname.split("/");\n    const link = document.getElementById("js-link");\n    const linkText = document.getElementById("js-linkText");\n\n    pathnames[1] = lang;\n    link.href = pathnames.join("/");\n    linkText.innerText = LOCALES[lang].label;\n    suggest.style.display = "block";\n  };\n\n  if (\n    currentLocale === browserLang ||\n    currentLocale === browserLang.split("-")[0] ||\n    localStorage.languageSuggestDenied ||\n    localStorage.selectedLang\n  ) {\n    return;\n  } else if (Object.keys(LOCALES).includes(browserLang)) {\n    showSuggest(browserLang);\n  } else if (Object.keys(LOCALES).includes(browserLang.split("-")[0])) {\n    showSuggest(browserLang.split("-")[0]);\n  }\n\n  document.getElementById("js-close").addEventListener("click", () => {\n    suggest.style.display = "none";\n    localStorage.languageSuggestDenied = true;\n  });\n})();<\/script> '])), maybeRenderHead(), defineScriptVars({ currentLocale, LOCALES }));
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/i18n/LocaleSuggest.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const t = useTranslations(Astro2.currentLocale);
  const { title, lang = "en", description = "" } = Astro2.props;
  const locale = Astro2.currentLocale;
  const localeTitle = title ? `${title} - ${t(SITE_TITLE)}` : t(SITE_TITLE);
  const metaDescription = description || t(SITE_DESCRIPTION);
  return renderTemplate(_a || (_a = __template(["<!--\n\n \n\n--><html", '> <head><meta charset="UTF-8"><title>', '</title><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"', '><!-- SEO Meta Tags --><meta name="robots" content="index, follow"><meta name="keywords" content="pharmacy, pharmacies, on-duty pharmacy, 24/7 pharmacy, emergency pharmacy, صيدلية حراسة, medical, صيدليات الحراسة, healthcare, {locale}"><meta name="author" content="Pharma SOS"><meta name="application-name" content="Pharma SOS"><meta name="mobile-web-app-capable" content="yes"><meta name="theme-color" content="#ffffff"><meta name="format-detection" content="telephone=yes"><link rel="canonical"', ">", '<!-- icon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" sizes="192x192" href="/android-chrome.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="color-scheme" content="light dark"><!-- OGP --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:site_name"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:locale"', '><meta name="twitter:card" content="summary"><meta name="twitter:site"', '><!-- External Resource --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" fetchpriority="high" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;800&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;800&display=swap" media="print"', '><link rel="preload" as="style" fetchpriority="high" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp&display=swap" media="print"', ">", '<!-- JSON-LD Structured Data --><script type="application/ld+json">', "</script>", "</head> <body> ", " ", ' <main class="l-main l-content"> ', " </main> ", " ", " </body> </html>"])), addAttribute(lang, "lang"), localeTitle, addAttribute(metaDescription, "content"), addAttribute(Astro2.generator, "content"), addAttribute(Astro2.url, "href"), getLocalePaths(Astro2.url).map((props) => renderTemplate`<link rel="alternate"${addAttribute(LOCALES[props.lang].lang || props.lang, "hreflang")}${addAttribute(Astro2.site?.origin + props.path, "href")}>`), addAttribute(localeTitle, "content"), addAttribute(localeTitle, "content"), addAttribute(metaDescription, "content"), addAttribute(Astro2.site + "ogp.png", "content"), addAttribute(Astro2.url, "content"), addAttribute(LOCALES[locale].lang || locale, "content"), addAttribute(t(X_ACCOUNT), "content"), addAttribute(`this.media='all'`, "onload"), addAttribute(`this.media='all'`, "onload"), renderComponent($$result, "LocaleHtmlHead", $$LocaleHtmlHead, {}), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": localeTitle,
    "description": metaDescription,
    "url": Astro2.url,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Personnel",
      "name": "Pharma SOS",
      "description": "Service de localisation des pharmacies en cas d'urgence, Emergency pharmacy locator service, خدمة تحديد موقع صيدلية الطوارئ"
    }
  })), renderHead(), renderComponent($$result, "LocaleSuggest", $$LocaleSuggest, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), false);
}, "C:/Users/Rachi/Desktop/pharmasos/src/layouts/Base.astro", undefined);

export { $$Base as $ };
