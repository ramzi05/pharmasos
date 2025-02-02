import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { u as useTranslations, L as LOCALES } from '../chunks/i18n_kKA0VEOz.mjs';
import { $ as $$Base } from '../chunks/Base_BSuO9Yt3.mjs';
import { p as pharmacyData } from '../chunks/pharmacyData_lhpiWGKX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const locale = lang;
  const t = useTranslations(locale);
  const cities = pharmacyData.pharmacies.filter((pharmacy) => pharmacy?.city?.[locale]).reduce((acc, pharmacy) => {
    const cityName = pharmacy.city[locale];
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
    (a, b) => a.name[locale].localeCompare(b.name[locale])
  );
  console.log("Available cities:", cityList.map((city) => city.name[locale]));
  const lastUpdated = new Date(pharmacyData.date).toLocaleDateString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": t({
    en: "On-Duty Pharmacies",
    fr: "Pharmacies de Garde",
    ar: "\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629"
  }), "data-astro-cid-ct3bgug4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-container" data-astro-cid-ct3bgug4> <header class="header" data-astro-cid-ct3bgug4> <h1 data-astro-cid-ct3bgug4>${t({
    en: "On-Duty Pharmacies",
    fr: "Pharmacies de Garde",
    ar: "\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629"
  })}</h1> <p class="update-info" data-astro-cid-ct3bgug4> <span class="live-dot" data-astro-cid-ct3bgug4></span> ${t({
    en: "Last Updated",
    fr: "Derni\xE8re mise \xE0 jour",
    ar: "\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B"
  })}: ${lastUpdated} </p> </header> <div class="intro-section" data-astro-cid-ct3bgug4> <h2 data-astro-cid-ct3bgug4> ${t({
    fr: "Vous cherchez une pharmacie de garde ?",
    en: "Are you looking for an on-duty pharmacy ?",
    ar: "\u0647\u0644 \u062A\u0628\u062D\u062B \u0639\u0646 \u0635\u064A\u062F\u0644\u064A\u0629 \u062D\u0631\u0627\u0633\u0629 \u0645\u0641\u062A\u0648\u062D\u0629 \u061F"
  })} </h2> <p data-astro-cid-ct3bgug4> ${t({
    fr: "Que ce soit pour des m\xE9dicaments essentiels en pleine nuit, t\xF4t le matin ou en cas d'urgence, Pharma SOS est votre partenaire fiable. Localisez la pharmacie la plus proche en quelques clics et obtenez l'aide dont vous avez besoin, quand vous en avez besoin.",
    en: "Whether it's for essential medications in the middle of the night, early in the morning, or in case of an emergency, Pharma SOS is your reliable partner. Locate the nearest pharmacy in just a few clicks and get the help you need, when you need it.",
    ar: "\u0633\u0648\u0627\u0621 \u0643\u0646\u062A \u0628\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u0623\u062F\u0648\u064A\u0629 \u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644\u060C \u0623\u0648 \u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D \u0627\u0644\u0628\u0627\u0643\u0631\u060C \u0623\u0648 \u0641\u064A \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0648\u0627\u0631\u0626\u060C \u0641\u0625\u0646 Pharma SOS \u0647\u0648 \u0634\u0631\u064A\u0643\u0643 \u0627\u0644\u0645\u0648\u062B\u0648\u0642. \u062D\u062F\u062F \u0645\u0648\u0642\u0639 \u0627\u0644\u0635\u064A\u062F\u0644\u064A\u0629 \u0627\u0644\u0623\u0642\u0631\u0628 \u0625\u0644\u064A\u0643 \u0628\u0628\u0636\u0639 \u0646\u0642\u0631\u0627\u062A \u0648\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0647\u0627\u060C \u0639\u0646\u062F\u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647\u0627."
  })} </p> </div> <div class="cities-grid" data-astro-cid-ct3bgug4> ${cityList.map((city) => {
    const cityName = city.name[locale];
    if (!cityName) return null;
    return renderTemplate`<a${addAttribute(`/${locale}/pharmacies/${cityName.toLowerCase()}`, "href")} class="city-card" data-astro-cid-ct3bgug4> <div class="card-content" data-astro-cid-ct3bgug4> <h2 class="city-name" data-astro-cid-ct3bgug4>${cityName}</h2> <div class="pharmacy-count" data-astro-cid-ct3bgug4> <span class="count" data-astro-cid-ct3bgug4>${city.count}</span> <span class="label" data-astro-cid-ct3bgug4>${t({
      en: "Pharmacies",
      fr: "Pharmacies",
      ar: "\u0635\u064A\u062F\u0644\u064A\u0627\u062A"
    })}</span> </div> ${city.open24h > 0 && renderTemplate`<div class="open-24h" data-astro-cid-ct3bgug4> ${city.open24h} ${t({
      en: "Open 24/7",
      fr: "Ouvert 24h/24",
      ar: "\u0645\u0641\u062A\u0648\u062D 24/24"
    })} </div>`} </div> <div class="card-footer" data-astro-cid-ct3bgug4> <span data-astro-cid-ct3bgug4>${t({
      en: "View All Pharmacies",
      fr: "Voir Toutes les Pharmacies",
      ar: "\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u064A\u062F\u0644\u064A\u0627\u062A"
    })}</span> <span class="arrow" data-astro-cid-ct3bgug4>→</span> </div> </a>`;
  })} </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/index.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
