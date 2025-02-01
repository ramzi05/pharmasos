import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../chunks/astro/server_Co1zruxy.mjs';
import 'kleur/colors';
import { L as LOCALES, u as useTranslations } from '../../../chunks/i18n_ByV5c7mk.mjs';
import { $ as $$Base } from '../../../chunks/Base_C7WxR-Zm.mjs';
import { p as pharmacyData } from '../../../chunks/pharmacyData_4PKwyHlF.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const cities = [...new Set(pharmacyData[0].pharmacies.map(
    (p) => p.city.en.toLowerCase().replace(/\s+/g, "-")
  ))];
  return Object.keys(LOCALES).flatMap(
    (lang) => cities.map((city) => ({
      params: { lang, city }
    }))
  );
}
const $$city = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const { city, lang } = Astro2.params;
  const locale = lang;
  const t = useTranslations(locale);
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const todayData = pharmacyData.find((day) => day.date === today);
  const cityPharmacies = todayData?.pharmacies.filter(
    (pharmacy) => pharmacy.city.en.toLowerCase().replace(/\s+/g, "-") === city?.toLowerCase()
  ) || [];
  const cityName = cityPharmacies[0]?.city[locale] || city;
  const pageTitle = t({
    en: `24/7 Pharmacies in ${cityName}`,
    fr: `Pharmacies de Garde \xE0 ${cityName}`,
    ar: `\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629 \u0641\u064A ${cityName}`
  });
  const pageDescription = t({
    en: `Find open and on-duty pharmacies in ${cityName}. 24/7 pharmacy locations, phone numbers, and directions.`,
    fr: `Trouvez les pharmacies de garde \xE0 ${cityName}. Emplacements, num\xE9ros de t\xE9l\xE9phone et directions des pharmacies ouvertes 24h/24.`,
    ar: `\u0627\u0639\u062B\u0631 \u0639\u0644\u0649 \u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629 \u0641\u064A ${cityName}. \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0646\u0627\u0648\u0628\u0629\u060C \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0647\u0648\u0627\u062A\u0641 \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A.`
  });
  console.log("City:", city);
  console.log("Found data:", cityPharmacies);
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": pageTitle, "description": pageDescription, "data-astro-cid-mc3jpet4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-mc3jpet4> <header class="page-header" data-astro-cid-mc3jpet4> <a${addAttribute(`/${locale}`, "href")} class="back-link" data-astro-cid-mc3jpet4> <span class="back-arrow" data-astro-cid-mc3jpet4>←</span> ${t({
    en: "Back to Cities",
    fr: "Retour aux Villes",
    ar: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062F\u0646"
  })} </a> <h1 data-astro-cid-mc3jpet4>${cityPharmacies[0]?.city[locale]} - ${t({
    en: "On-Duty Pharmacies",
    fr: "Pharmacies de Garde",
    ar: "\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629"
  })}</h1> <div class="page-subtitle" data-astro-cid-mc3jpet4> <p class="subtitle-text" data-astro-cid-mc3jpet4> ${t({
    fr: "Trouvez facilement une pharmacie ouverte pr\xE8s de chez vous",
    en: "Find an open pharmacy near you",
    ar: "\u0627\u0639\u062B\u0631 \u0628\u0633\u0647\u0648\u0644\u0629 \u0639\u0644\u0649 \u0635\u064A\u062F\u0644\u064A\u0629 \u0645\u0641\u062A\u0648\u062D\u0629 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646\u0643"
  })} </p> </div> </header> ${!cityPharmacies?.length ? renderTemplate`<div class="no-data" data-astro-cid-mc3jpet4> <p data-astro-cid-mc3jpet4>${t({
    en: "No pharmacies found for this city",
    fr: "Aucune pharmacie trouv\xE9e pour cette ville",
    ar: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0645\u062F\u064A\u0646\u0629"
  })}</p> </div>` : renderTemplate`<div class="pharmacy-grid" data-astro-cid-mc3jpet4> ${cityPharmacies.map((pharmacy) => renderTemplate`<article class="pharmacy-card" data-astro-cid-mc3jpet4> <div class="card-status" data-astro-cid-mc3jpet4> <span${addAttribute(`status-indicator ${String(pharmacy.hours).includes("24h") ? "open-24" : "limited"}`, "class")} data-astro-cid-mc3jpet4> ${pharmacy.hours || t({
    en: "Open 24/7",
    fr: "Ouvert 24h/24",
    ar: "\u0645\u0641\u062A\u0648\u062D 24/24"
  })} </span> </div> <div class="card-main" data-astro-cid-mc3jpet4> <h2 class="pharmacy-name" data-astro-cid-mc3jpet4>${pharmacy.name[locale]}</h2> <div class="location-details" data-astro-cid-mc3jpet4> <div class="detail-row" data-astro-cid-mc3jpet4> <span class="icon" data-astro-cid-mc3jpet4>📍</span> <span data-astro-cid-mc3jpet4>${pharmacy.location[locale]}</span> </div> <div class="detail-row" data-astro-cid-mc3jpet4> <span class="icon" data-astro-cid-mc3jpet4>🏥</span> <span data-astro-cid-mc3jpet4>${pharmacy.address[locale]}</span> </div> ${pharmacy.phone ? renderTemplate`<a${addAttribute(`tel:${pharmacy.phone.replace(/\s/g, "")}`, "href")} class="detail-row phone" data-astro-cid-mc3jpet4> <span class="icon" data-astro-cid-mc3jpet4>📞</span> <span class="phone-number" data-astro-cid-mc3jpet4> ${pharmacy.phone} </span> </a>` : null} </div> </div> <div class="navigation-options" data-astro-cid-mc3jpet4> <p class="nav-label" data-astro-cid-mc3jpet4>${pharmacy.maps.message[locale]}</p> <div class="nav-buttons" data-astro-cid-mc3jpet4> <a${addAttribute(pharmacy.maps.links.google_maps, "href")} target="_blank" rel="noopener" class="nav-btn" data-astro-cid-mc3jpet4> <span data-astro-cid-mc3jpet4>Google Maps</span> </a> ${pharmacy.maps.links.waze && renderTemplate`<a${addAttribute(pharmacy.maps.links.waze, "href")} target="_blank" rel="noopener" class="nav-btn" data-astro-cid-mc3jpet4> <span data-astro-cid-mc3jpet4>Waze</span> </a>`} ${pharmacy.maps.links.apple_maps && renderTemplate`<a${addAttribute(pharmacy.maps.links.apple_maps, "href")} target="_blank" rel="noopener" class="nav-btn" data-astro-cid-mc3jpet4> <span data-astro-cid-mc3jpet4>Apple Maps</span> </a>`} </div> </div> </article>`)} </div>`} </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies/[city].astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies/[city].astro";
const $$url = "/[lang]/pharmacies/[city]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$city,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
