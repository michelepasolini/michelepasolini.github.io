import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DQvOldEi.mjs';
import { manifest } from './manifest_Bv8CXy6H.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/about.astro.mjs');
const _page2 = () => import('./pages/certificates/androiddev2024.astro.mjs');
const _page3 = () => import('./pages/certificates/cyber2024.astro.mjs');
const _page4 = () => import('./pages/certificates/devops2024_ibm.astro.mjs');
const _page5 = () => import('./pages/certificates/dimarketing.astro.mjs');
const _page6 = () => import('./pages/certificates/fullstackdev_meta.astro.mjs');
const _page7 = () => import('./pages/certificates/fullstackdev2024_ibm.astro.mjs');
const _page8 = () => import('./pages/certificates/genai automation2024.astro.mjs');
const _page9 = () => import('./pages/certificates/itautomation2024.astro.mjs');
const _page10 = () => import('./pages/contact/blog.astro.mjs');
const _page11 = () => import('./pages/contact/email.astro.mjs');
const _page12 = () => import('./pages/contact/github.astro.mjs');
const _page13 = () => import('./pages/contact/whatsapp.astro.mjs');
const _page14 = () => import('./pages/projects/blog.astro.mjs');
const _page15 = () => import('./pages/projects/cloud migration.astro.mjs');
const _page16 = () => import('./pages/projects/terminatorxlegalstudy.astro.mjs');
const _page17 = () => import('./pages/studies/studie1.astro.mjs');
const _page18 = () => import('./pages/studies/studie2.astro.mjs');
const _page19 = () => import('./pages/works/work1.astro.mjs');
const _page20 = () => import('./pages/works/work2.astro.mjs');
const _page21 = () => import('./pages/works/work3.astro.mjs');
const _page22 = () => import('./pages/works/work4.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/about.md", _page1],
    ["src/pages/certificates/AndroidDev2024.md", _page2],
    ["src/pages/certificates/Cyber2024.md", _page3],
    ["src/pages/certificates/DevOps2024_IBM.md", _page4],
    ["src/pages/certificates/DiMarketing.md", _page5],
    ["src/pages/certificates/FullStackDev_Meta.md", _page6],
    ["src/pages/certificates/FullstackDev2024_IBM.md", _page7],
    ["src/pages/certificates/GenAI Automation2024.md", _page8],
    ["src/pages/certificates/ITAutomation2024.md", _page9],
    ["src/pages/contact/blog.md", _page10],
    ["src/pages/contact/email.md", _page11],
    ["src/pages/contact/github.md", _page12],
    ["src/pages/contact/whatsapp.md", _page13],
    ["src/pages/projects/Blog.md", _page14],
    ["src/pages/projects/Cloud Migration.md", _page15],
    ["src/pages/projects/TerminatorXLegalStudy.md", _page16],
    ["src/pages/studies/studie1.md", _page17],
    ["src/pages/studies/studie2.md", _page18],
    ["src/pages/works/work1.md", _page19],
    ["src/pages/works/work2.md", _page20],
    ["src/pages/works/work3.md", _page21],
    ["src/pages/works/work4.md", _page22],
    ["src/pages/index.astro", _page23]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4d94585d-c6d9-4f08-a03f-bf041d8ccc9d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
