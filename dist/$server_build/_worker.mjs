import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_70Bn-Eqm.mjs';
import { manifest as manifest$1 } from './manifest_CDrVkWpN.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/scrape-pharmacies.astro.mjs');
const _page3 = () => import('./pages/ar/about.astro.mjs');
const _page4 = () => import('./pages/ar/contact-us.astro.mjs');
const _page5 = () => import('./pages/ar/privacy-policy.astro.mjs');
const _page6 = () => import('./pages/en/about.astro.mjs');
const _page7 = () => import('./pages/en/contact-us.astro.mjs');
const _page8 = () => import('./pages/en/privacy-policy.astro.mjs');
const _page9 = () => import('./pages/fr/about.astro.mjs');
const _page10 = () => import('./pages/fr/contact-us.astro.mjs');
const _page11 = () => import('./pages/fr/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/_lang_/404.astro.mjs');
const _page13 = () => import('./pages/_lang_/blog.astro.mjs');
const _page14 = () => import('./pages/_lang_/blog/_---id_.astro.mjs');
const _page15 = () => import('./pages/_lang_/monolingual.astro.mjs');
const _page16 = () => import('./pages/_lang_/pharmacies/_city_.astro.mjs');
const _page17 = () => import('./pages/_lang_/pharmacies.astro.mjs');
const _page18 = () => import('./pages/_lang_/rss.xml.astro.mjs');
const _page19 = () => import('./pages/_lang_/rss.xml.astro2.mjs');
const _page20 = () => import('./pages/_lang_.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/scrape-pharmacies.ts", _page2],
    ["src/pages/ar/about.astro", _page3],
    ["src/pages/ar/contact-us.astro", _page4],
    ["src/pages/ar/privacy-policy.astro", _page5],
    ["src/pages/en/about.astro", _page6],
    ["src/pages/en/contact-us.astro", _page7],
    ["src/pages/en/privacy-policy.astro", _page8],
    ["src/pages/fr/about.astro", _page9],
    ["src/pages/fr/contact-us.astro", _page10],
    ["src/pages/fr/privacy-policy.astro", _page11],
    ["src/pages/[lang]/404.astro", _page12],
    ["src/pages/[lang]/blog/index.astro", _page13],
    ["src/pages/[lang]/blog/[...id].astro", _page14],
    ["src/pages/[lang]/monolingual.astro", _page15],
    ["src/pages/[lang]/pharmacies/[city].astro", _page16],
    ["src/pages/[lang]/pharmacies.astro", _page17],
    ["src/pages/[lang]/rss.xml.js", _page18],
    ["src/pages/[lang]/rss.xml.ts", _page19],
    ["src/pages/[lang]/index.astro", _page20],
    ["src/pages/index.astro", _page21]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest$1, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const onRequest = _exports['onRequest'];
const manifest = _exports['manifest'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { manifest, onRequest, pageMap };
