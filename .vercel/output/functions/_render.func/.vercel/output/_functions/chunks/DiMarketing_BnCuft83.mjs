/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Google Digital Marketing &#x26; E-commerce Professional Certificate on Coursera provides practical skills in SEO, SEM, social media marketing, analytics, and e-commerce. Designed for beginners, it equips learners to create impactful online marketing strategies and manage e-commerce platforms, opening doors to in-demand digital marketing careers.</p>";

				const frontmatter = {"title":"Google Digital Marketing & E-commerce Professional Certificate","org":"Google","tags":["SEO","Social Media Marketing","Email Marketing","Marketing Analysis","E-commerce","Customer Relations"],"url":"//googledrive","date":"May.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/DiMarketing.md";
				const url = "/certificates/DiMarketing";
				function rawContent() {
					return "\nThe Google Digital Marketing & E-commerce Professional Certificate on Coursera provides practical skills in SEO, SEM, social media marketing, analytics, and e-commerce. Designed for beginners, it equips learners to create impactful online marketing strategies and manage e-commerce platforms, opening doors to in-demand digital marketing careers.\n";
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
