/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Google IT Automation with Python course on Coursera equips learners with Python programming skills to automate common IT tasks. It covers key topics like troubleshooting, configuration management, and using Python libraries. Ideal for aspiring IT professionals looking to enhance productivity through automation and streamline workflows.</p>";

				const frontmatter = {"title":"Google IT Automation with Python","org":"Google","tags":["GitOps","Python","Testing","Configuration Management","Automation"],"url":"https://coursera.org/share/aa490da56edeee3a290f3f47c2d95924","date":"Oct.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/ITAutomation2024.md";
				const url = "/certificates/ITAutomation2024";
				function rawContent() {
					return "\nThe Google IT Automation with Python course on Coursera equips learners with Python programming skills to automate common IT tasks. It covers key topics like troubleshooting, configuration management, and using Python libraries. Ideal for aspiring IT professionals looking to enhance productivity through automation and streamline workflows.\n";
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
