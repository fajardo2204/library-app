import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_11LjmFti.mjs';
import { manifest } from './manifest_AREbce4z.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DfOzsEIe.mjs')],
]);;

const _page0 = () => import('./pages/libros/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libros/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ecdf9b0c-5efa-47f7-a089-a83defd5dc74",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
