import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CvvbPL1K.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Contact Us", "lang": "en", "data-astro-cid-cnfdqh2x": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-container" data-astro-cid-cnfdqh2x> <header class="header" data-astro-cid-cnfdqh2x> <h1 data-astro-cid-cnfdqh2x>Contact Us</h1> <p class="update-info" data-astro-cid-cnfdqh2x> <span class="live-dot" data-astro-cid-cnfdqh2x></span>
We're Here to Help
</p> </header> <div class="intro-section" data-astro-cid-cnfdqh2x> <h2 data-astro-cid-cnfdqh2x>Get in Touch</h2> <p data-astro-cid-cnfdqh2x>
Have questions about finding an on-duty pharmacy? Need help with our service? 
        We're here to assist you 24/7.
</p> <div class="contact-methods" data-astro-cid-cnfdqh2x> <div class="contact-card" data-astro-cid-cnfdqh2x> <h3 data-astro-cid-cnfdqh2x>Email</h3> <p data-astro-cid-cnfdqh2x>support@pharmasos.com</p> </div> <div class="contact-card" data-astro-cid-cnfdqh2x> <h3 data-astro-cid-cnfdqh2x>Phone</h3> <p data-astro-cid-cnfdqh2x>+212 123-456789</p> </div> <div class="contact-card" data-astro-cid-cnfdqh2x> <h3 data-astro-cid-cnfdqh2x>Social Media</h3> <p data-astro-cid-cnfdqh2x>Follow us on social media for updates</p> <div class="social-links" data-astro-cid-cnfdqh2x> <a href="#" class="social-link" data-astro-cid-cnfdqh2x>Twitter</a> <a href="#" class="social-link" data-astro-cid-cnfdqh2x>Facebook</a> <a href="#" class="social-link" data-astro-cid-cnfdqh2x>Instagram</a> </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/en/contact-us.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/en/contact-us.astro";
const $$url = "/en/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
