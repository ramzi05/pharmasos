import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CxwdDprw.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BSuO9Yt3.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "About Us", "lang": "en", "data-astro-cid-emk76muo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-container" data-astro-cid-emk76muo> <header class="header" data-astro-cid-emk76muo> <h1 data-astro-cid-emk76muo>About Us</h1> <p class="update-info" data-astro-cid-emk76muo> <span class="live-dot" data-astro-cid-emk76muo></span>
Your Trusted Pharmacy Finder
</p> </header> <div class="intro-section" data-astro-cid-emk76muo> <h2 data-astro-cid-emk76muo>Who We Are</h2> <p data-astro-cid-emk76muo>
We are dedicated to helping you find on-duty pharmacies when you need them most. 
        Our platform connects you with available pharmacies across different cities, 
        making it easier to access essential healthcare services 24/7.
</p> <h2 class="mt-8" data-astro-cid-emk76muo>Our Mission</h2> <p data-astro-cid-emk76muo>
To provide a reliable and easy-to-use service that helps people locate open 
        pharmacies quickly and efficiently, especially during emergencies and after hours.
</p> <h2 class="mt-8" data-astro-cid-emk76muo>Why Choose Us</h2> <p data-astro-cid-emk76muo>
• Real-time updates on pharmacy availability<br data-astro-cid-emk76muo>
• Coverage across multiple cities<br data-astro-cid-emk76muo>
• Easy-to-use interface<br data-astro-cid-emk76muo>
• 24/7 pharmacy information<br data-astro-cid-emk76muo>
• Reliable and accurate data
</p> </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/en/about.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
