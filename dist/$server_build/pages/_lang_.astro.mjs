import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import '../chunks/i18n_DAci1bfl.mjs';
import { $ as $$Base } from '../chunks/Base_BZqVdwvJ.mjs';
import { p as pharmacyData } from '../chunks/pharmacyData_lhpiWGKX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
function getStaticPaths() {
  return validLanguages.map((lang) => ({
    params: { lang }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const validLanguages2 = ["en", "fr", "ar"];
  const { lang } = Astro2.params;
  const currentLang = validLanguages2.includes(lang) ? lang : "fr";
  const translations = {
    title: {
      fr: "Accueil",
      en: "Home",
      ar: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
    },
    welcome: {
      fr: "Bienvenue sur PharmaGarde",
      en: "Welcome to PharmaGarde",
      ar: "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0645 \u0641\u064A \u0641\u0627\u0631\u0645\u0627\u063A\u0627\u0631\u062F"
    }
  };
  const cities = pharmacyData.pharmacies.filter((pharmacy) => pharmacy?.city?.[currentLang]).reduce((acc, pharmacy) => {
    const cityName = pharmacy.city[currentLang];
    if (!cityName) return acc;
    if (!acc[cityName]) {
      acc[cityName] = {
        name: pharmacy.city,
        count: 1,
        open24h: String(pharmacy.hours || "").includes("24h") ? 1 : 0
      };
    } else {
      acc[cityName].count++;
      if (String(pharmacy.hours || "").includes("24h")) {
        acc[cityName].open24h++;
      }
    }
    return acc;
  }, {});
  const cityList = Object.values(cities).sort(
    (a, b) => a.name[currentLang].localeCompare(b.name[currentLang])
  );
  console.log("Available cities:", cityList.map((city) => city.name[currentLang]));
  new Date(pharmacyData.date).toLocaleDateString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[currentLang], "data-astro-cid-ct3bgug4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="home-page" data-astro-cid-ct3bgug4> <h1 data-astro-cid-ct3bgug4>${translations.welcome[currentLang]}</h1> <!-- Home page content here --> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/index.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
