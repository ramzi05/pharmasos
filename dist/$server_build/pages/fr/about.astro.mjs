import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BSuO9Yt3.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "\xC0 Propos", "lang": "fr", "data-astro-cid-5gyv2kgq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-container" data-astro-cid-5gyv2kgq> <header class="header" data-astro-cid-5gyv2kgq> <h1 data-astro-cid-5gyv2kgq>À Propos</h1> <p class="update-info" data-astro-cid-5gyv2kgq> <span class="live-dot" data-astro-cid-5gyv2kgq></span>
Votre Guide de Pharmacies de Confiance
</p> </header> <div class="intro-section" data-astro-cid-5gyv2kgq> <h2 data-astro-cid-5gyv2kgq>Qui Sommes-Nous</h2> <p data-astro-cid-5gyv2kgq>
Nous nous consacrons à vous aider à trouver des pharmacies de garde quand vous 
        en avez le plus besoin. Notre plateforme vous connecte aux pharmacies disponibles 
        dans différentes villes, facilitant l'accès aux services de santé essentiels 24h/24.
</p> <h2 class="mt-8" data-astro-cid-5gyv2kgq>Notre Mission</h2> <p data-astro-cid-5gyv2kgq>
Fournir un service fiable et facile à utiliser qui aide les gens à localiser 
        rapidement et efficacement les pharmacies ouvertes, particulièrement pendant 
        les urgences et après les heures d'ouverture.
</p> <h2 class="mt-8" data-astro-cid-5gyv2kgq>Pourquoi Nous Choisir</h2> <p data-astro-cid-5gyv2kgq>
• Mises à jour en temps réel sur la disponibilité des pharmacies<br data-astro-cid-5gyv2kgq>
• Couverture dans plusieurs villes<br data-astro-cid-5gyv2kgq>
• Interface facile à utiliser<br data-astro-cid-5gyv2kgq>
• Informations sur les pharmacies 24h/24<br data-astro-cid-5gyv2kgq>
• Données fiables et précises
</p> </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/fr/about.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/fr/about.astro";
const $$url = "/fr/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
