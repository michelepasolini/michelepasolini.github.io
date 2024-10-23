/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Generative AI Automation course on Coursera teaches how to leverage generative AI tools for automating tasks and improving workflows. It covers AI-powered content creation, process optimization, and coding automation, providing learners with practical skills to enhance productivity and innovation in various business and technical roles.</p>";

				const frontmatter = {"title":"Generative AI Automation","org":"Vanderbilt University(Coursera)","tags":["Prompt Engineering","AI Data Analysis","GPT Vision"],"url":"https://coursera.org/share/69e458e6e5c4ad6abf49bf0e281d2fe1","date":"Jul.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/GenAI Automation2024.md";
				const url = "/certificates/GenAI Automation2024";
				function rawContent() {
					return "\nThe Generative AI Automation course on Coursera teaches how to leverage generative AI tools for automating tasks and improving workflows. It covers AI-powered content creation, process optimization, and coding automation, providing learners with practical skills to enhance productivity and innovation in various business and technical roles.\n";
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
