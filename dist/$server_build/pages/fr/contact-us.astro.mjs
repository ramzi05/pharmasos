import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BZqVdwvJ.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Contactez-Nous", "lang": "fr", "data-astro-cid-uxlzskpv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-container" data-astro-cid-uxlzskpv> <header class="header" data-astro-cid-uxlzskpv> <h1 data-astro-cid-uxlzskpv>Contactez-Nous</h1> <p class="update-info" data-astro-cid-uxlzskpv> <span class="live-dot" data-astro-cid-uxlzskpv></span>
Nous Sommes Là Pour Vous Aider
</p> </header> <div class="intro-section" data-astro-cid-uxlzskpv> <h2 data-astro-cid-uxlzskpv>Prenez Contact</h2> <p data-astro-cid-uxlzskpv>
Vous avez des questions sur la recherche d'une pharmacie de garde ? 
        Besoin d'aide avec notre service ? Nous sommes là pour vous assister 24h/24.
</p> <div class="contact-methods" data-astro-cid-uxlzskpv> <div class="contact-card" data-astro-cid-uxlzskpv> <h3 data-astro-cid-uxlzskpv>Email</h3> <p data-astro-cid-uxlzskpv>support@pharmasos.com</p> </div> <div class="contact-card" data-astro-cid-uxlzskpv> <h3 data-astro-cid-uxlzskpv>Téléphone</h3> <p data-astro-cid-uxlzskpv>+212 123-456789</p> </div> <div class="contact-card" data-astro-cid-uxlzskpv> <h3 data-astro-cid-uxlzskpv>Réseaux Sociaux</h3> <p data-astro-cid-uxlzskpv>Suivez-nous sur les réseaux sociaux pour les mises à jour</p> <div class="social-links" data-astro-cid-uxlzskpv> <a href="#" class="social-link" data-astro-cid-uxlzskpv>Twitter</a> <a href="#" class="social-link" data-astro-cid-uxlzskpv>Facebook</a> <a href="#" class="social-link" data-astro-cid-uxlzskpv>Instagram</a> </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/fr/contact-us.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/fr/contact-us.astro";
const $$url = "/fr/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
