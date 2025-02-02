import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as createAstro, f as renderComponent, d as renderHead, g as renderSlot } from './astro/server_BzzarInc.mjs';
import 'kleur/colors';
import 'clsx';
import { L as LOCALES, u as useTranslations, g as getLocalePaths, a as getRelativeLocaleUrl } from './i18n_Co-K_Ync.mjs';
/* empty css                        */
import { $ as $$Image } from './_astro_assets_DneUYEUu.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from './consts_Bk9uKFkb.mjs';

const $$LocalesHomeList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${Object.entries(LOCALES).map(([lang, { label }]) => renderTemplate`${maybeRenderHead()}<li><a${addAttribute(`/${lang}/`, "href")}${addAttribute(`localStorage.selectedLang = "${lang}"`, "onclick")}${addAttribute(LOCALES[lang].dir || null, "dir")}>${label}</a></li>`)}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/i18n/LocalesHomeList.astro", undefined);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const $$Astro$2 = createAstro();
const $$LocaleSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const t = useTranslations(Astro2.currentLocale);
  const { title } = Astro2.props;
  const currentLang = Astro2.url.pathname.split("/")[1] || "fr";
  const dir = currentLang === "ar" ? "rtl" : "ltr";
  Astro2.currentLocale;
  title ? `${title} - ${t(SITE_TITLE)}` : t(SITE_TITLE);
  t(SITE_DESCRIPTION);
  return renderTemplate`<!--

 

--><html${addAttribute(currentLang, "lang")}${addAttribute(dir, "dir")} data-astro-cid-5hce7sga> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body data-astro-cid-5hce7sga> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5hce7sga": true })} <main data-astro-cid-5hce7sga> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5hce7sga": true })} </body></html>`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/layouts/Base.astro", undefined);

export { $$Base as $ };
