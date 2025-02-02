import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../chunks/Base_BZqVdwvJ.mjs';
import { p as pharmacyData } from '../../../chunks/pharmacyData_lhpiWGKX.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const validLanguages = ["en", "fr", "ar"];
  const paths = [];
  for (const lang of validLanguages) {
    const cities = [...new Set(pharmacyData.pharmacies.map((p) => p.city[lang]))];
    for (const cityName of cities) {
      const slug = createSlug(cityName, lang);
      const cityPharmacies = pharmacyData.pharmacies.filter(
        (p) => createSlug(p.city[lang], lang) === slug
      );
      paths.push({
        params: { lang, city: slug },
        props: {
          pharmacies: cityPharmacies,
          cityName
        }
      });
    }
  }
  return paths;
}
const $$city = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const { lang, city } = Astro2.params;
  const { pharmacies, cityName } = Astro2.props;
  const translations = {
    title: {
      fr: `${cityName} - Pharmacies de Garde`,
      en: `${cityName} - On-Duty Pharmacies`,
      ar: `${cityName} - \u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629`
    },
    subtitle: {
      fr: "Trouvez facilement une pharmacie ouverte pr\xE8s de chez vous",
      en: "Easily find an open pharmacy near you",
      ar: "\u0627\u0639\u062B\u0631 \u0628\u0633\u0647\u0648\u0644\u0629 \u0639\u0644\u0649 \u0635\u064A\u062F\u0644\u064A\u0629 \u0645\u0641\u062A\u0648\u062D\u0629 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646\u0643"
    },
    directions: {
      fr: "Cliquez pour obtenir l'itin\xE9raire sur:",
      en: "Click to get directions on:",
      ar: "\u0627\u0646\u0642\u0631 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0639\u0644\u0649:"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[lang], "data-astro-cid-mc3jpet4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pharmacy-page" data-astro-cid-mc3jpet4> <h1 data-astro-cid-mc3jpet4>${translations.title[lang]}</h1> <p class="subtitle" data-astro-cid-mc3jpet4>${translations.subtitle[lang]}</p> <div class="pharmacy-list" data-astro-cid-mc3jpet4> ${pharmacies.map((pharmacy) => renderTemplate`<div class="pharmacy-card" data-astro-cid-mc3jpet4> <div class="card-header" data-astro-cid-mc3jpet4> <h2 data-astro-cid-mc3jpet4>${pharmacy.name[lang]}</h2> <span class="hours-badge" data-astro-cid-mc3jpet4>${pharmacy.hours}</span> </div> <div class="card-content" data-astro-cid-mc3jpet4> <div class="info-row" data-astro-cid-mc3jpet4> <span class="icon" data-astro-cid-mc3jpet4>📍</span> <span data-astro-cid-mc3jpet4>${pharmacy.location[lang]}</span> </div> <div class="info-row" data-astro-cid-mc3jpet4> <span class="icon" data-astro-cid-mc3jpet4>🏢</span> <span data-astro-cid-mc3jpet4>${pharmacy.address[lang]}</span> </div> <div class="info-row phone" data-astro-cid-mc3jpet4> <span class="icon" data-astro-cid-mc3jpet4>📞</span> <span data-astro-cid-mc3jpet4>${pharmacy.phone}</span> </div> </div> <div class="card-footer" data-astro-cid-mc3jpet4> <p class="directions-text" data-astro-cid-mc3jpet4>${translations.directions[lang]}</p> <div class="nav-buttons" data-astro-cid-mc3jpet4> <a${addAttribute(pharmacy.maps.links.google_maps, "href")} target="_blank" rel="noopener noreferrer" class="nav-button" data-astro-cid-mc3jpet4>
Google Maps
</a> <a${addAttribute(pharmacy.maps.links.waze, "href")} target="_blank" rel="noopener noreferrer" class="nav-button" data-astro-cid-mc3jpet4>
Waze
</a> <a${addAttribute(pharmacy.maps.links.apple_maps, "href")} target="_blank" rel="noopener noreferrer" class="nav-button" data-astro-cid-mc3jpet4>
Apple Maps
</a> </div> </div> </div>`)} </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies/[city].astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies/[city].astro";
const $$url = "/[lang]/pharmacies/[city]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$city,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
