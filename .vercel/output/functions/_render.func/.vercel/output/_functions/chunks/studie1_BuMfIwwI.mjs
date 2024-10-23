/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Master of Common Law","institute":"University of College Dublin (UCD)","location":"Dublin, Ireland","url":"https://www.ucd.ie/","date":"2021-2024","tags":["Data Governance and Data Protection Law(GDPR)","Cybercrime Law","Criminal Law","Constitutional Law","Company Law","Property Law","Contract Law","Evidence Law","EU&Commerical Law","Trust Law","Equity Law","Administration Law","International Taxation Law"]};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
