import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_yZ_64yJM.mjs';

const DEFAULT_LOCALE_SETTING = "fr";
const LOCALES_SETTING = {
  "fr": {
    "label": "Français"
    // French
  },
  "ar": {
    "label": "العربية",
    // Arabic
    "dir": "rtl"
  },
  "en": {
    "label": "English"
    // English
  }
};

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "fr", locales: ["fr", "ar", "en"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const LOCALES = LOCALES_SETTING;
const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING;
function useTranslations(lang) {
  return function t(multilingual) {
    if (typeof multilingual === "string") {
      return multilingual;
    } else {
      return multilingual[lang] || multilingual[DEFAULT_LOCALE] || "";
    }
  };
}
function getLocalePaths(url) {
  return Object.keys(LOCALES).map((lang) => {
    return {
      lang,
      path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, ""))
    };
  });
}
Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));

export { DEFAULT_LOCALE as D, LOCALES as L, getRelativeLocaleUrl as a, getLocalePaths as g, useTranslations as u };
