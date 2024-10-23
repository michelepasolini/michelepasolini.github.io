/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>IBM’s Full Stack Software Developer course on Coursera equips learners with essential skills in front-end and back-end development, covering HTML, CSS, JavaScript, Node.js, React, Python, and more. The program emphasizes real-world projects, cloud deployment, and agile methodologies, preparing participants for dynamic full stack development roles.</p>";

				const frontmatter = {"title":"IBM Full Stack Software Developer","org":"IBM","tags":["FullStackDev","React","DevOps","AI","Cloud Development","Express"],"url":"https://coursera.org/share/61862d2a8e3d161e16f0c11e996675a7","date":"Oct.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/FullstackDev2024_IBM.md";
				const url = "/certificates/FullstackDev2024_IBM";
				function rawContent() {
					return "\nIBM's Full Stack Software Developer course on Coursera equips learners with essential skills in front-end and back-end development, covering HTML, CSS, JavaScript, Node.js, React, Python, and more. The program emphasizes real-world projects, cloud deployment, and agile methodologies, preparing participants for dynamic full stack development roles.\n";
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
