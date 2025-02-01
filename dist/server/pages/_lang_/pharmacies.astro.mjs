import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, h as renderScript, e as createAstro, f as renderComponent } from '../../chunks/astro/server_Co1zruxy.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_C7WxR-Zm.mjs';
import 'clsx';
import { p as pharmacyData } from '../../chunks/pharmacyData_4PKwyHlF.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PharmacyList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PharmacyList;
  const { lang } = Astro2.props;
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const todayData = pharmacyData.find((day) => day.date === today);
  const todayPharmacies = todayData?.pharmacies || [];
  const locations = [...new Set(todayPharmacies.map((p) => p.location[lang]))];
  const translations = {
    en: {
      allLocations: "All Locations",
      limitedHours: "Limited Hours",
      viewMap: "View Map"
    },
    fr: {
      allLocations: "Tous les emplacements",
      limitedHours: "Heures limit\xE9es",
      viewMap: "Voir la carte"
    },
    ar: {
      allLocations: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0648\u0627\u0642\u0639",
      limitedHours: "\u0633\u0627\u0639\u0627\u062A \u0645\u062D\u062F\u0648\u062F\u0629",
      viewMap: "\u0639\u0631\u0636 \u0627\u0644\u062E\u0631\u064A\u0637\u0629"
    }
  };
  const t = translations[lang];
  return renderTemplate`${maybeRenderHead()}<div class="pharmacy-list" data-astro-cid-dcfvcckg> <div class="filters" data-astro-cid-dcfvcckg> <select id="location-filter" data-astro-cid-dcfvcckg> <option value="all" data-astro-cid-dcfvcckg>${t.allLocations}</option> ${locations.map((location) => renderTemplate`<option${addAttribute(location, "value")} data-astro-cid-dcfvcckg>${location}</option>`)} </select> <div class="hours-filter" data-astro-cid-dcfvcckg> <button class="filter-btn" data-hours="all" data-astro-cid-dcfvcckg>All</button> <button class="filter-btn" data-hours="limited" data-astro-cid-dcfvcckg>${t.limitedHours}</button> <button class="filter-btn" data-hours="24h" data-astro-cid-dcfvcckg>24/7</button> </div> </div> <div class="pharmacies-grid" data-astro-cid-dcfvcckg> ${todayPharmacies.map((pharmacy) => renderTemplate`<div class="pharmacy-card"${addAttribute(pharmacy.location[lang], "data-location")}${addAttribute(pharmacy.hours === "24/7" ? "24h" : "limited", "data-hours")} data-astro-cid-dcfvcckg> <h3 data-astro-cid-dcfvcckg>${pharmacy.name[lang]}</h3> <p data-astro-cid-dcfvcckg>${pharmacy.location[lang]}</p> <p data-astro-cid-dcfvcckg>${pharmacy.phone}</p> <p data-astro-cid-dcfvcckg>${pharmacy.hours}</p> <a${addAttribute(pharmacy.maps.googleMaps, "href")} target="_blank" rel="noopener noreferrer" class="map-link" data-astro-cid-dcfvcckg> ${t.viewMap} </a> </div>`)} </div> </div> ${renderScript($$result, "C:/Users/Rachi/Desktop/pharmasos/src/components/PharmacyList.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/PharmacyList.astro", undefined);

const $$Astro = createAstro();
const getStaticPaths = () => {
  const languages = ["en", "fr", "ar"];
  return languages.map((lang) => ({
    params: { lang }
  }));
};
const prerender = false;
const $$Pharmacies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pharmacies;
  const title = "Pharmacies";
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PharmacyList", $$PharmacyList, { "lang": Astro2.params.lang })} ` })}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies.astro";
const $$url = "/[lang]/pharmacies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pharmacies,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
