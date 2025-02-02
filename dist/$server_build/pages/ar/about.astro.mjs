import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CvvbPL1K.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "\u0645\u0646 \u0646\u062D\u0646", "lang": "ar", "data-astro-cid-il2fdd7p": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-container" data-astro-cid-il2fdd7p> <header class="header" data-astro-cid-il2fdd7p> <h1 data-astro-cid-il2fdd7p>من نحن</h1> <p class="update-info" data-astro-cid-il2fdd7p> <span class="live-dot" data-astro-cid-il2fdd7p></span>
دليلك الموثوق للصيدليات
</p> </header> <div class="intro-section" dir="rtl" data-astro-cid-il2fdd7p> <h2 data-astro-cid-il2fdd7p>من نحن</h2> <p data-astro-cid-il2fdd7p>
نحن مكرسون لمساعدتك في العثور على صيدليات الحراسة عندما تحتاج إليها. 
        تربط منصتنا بينك وبين الصيدليات المتاحة في مختلف المدن، 
        مما يسهل الوصول إلى الخدمات الصحية الأساسية على مدار الساعة.
</p> <h2 class="mt-8" data-astro-cid-il2fdd7p>مهمتنا</h2> <p data-astro-cid-il2fdd7p>
تقديم خدمة موثوقة وسهلة الاستخدام تساعد الناس في العثور على 
        الصيدليات المفتوحة بسرعة وكفاءة، خاصة خلال حالات الطوارئ وبعد ساعات العمل.
</p> <h2 class="mt-8" data-astro-cid-il2fdd7p>لماذا تختارنا</h2> <p data-astro-cid-il2fdd7p>
• تحديثات فورية عن توفر الصيدليات<br data-astro-cid-il2fdd7p>
• تغطية في العديد من المدن<br data-astro-cid-il2fdd7p>
• واجهة سهلة الاستخدام<br data-astro-cid-il2fdd7p>
• معلومات عن الصيدليات على مدار 24 ساعة<br data-astro-cid-il2fdd7p>
• بيانات موثوقة ودقيقة
</p> </div> </div> ` })} `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/ar/about.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/ar/about.astro";
const $$url = "/ar/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
