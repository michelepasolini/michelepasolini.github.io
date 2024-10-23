/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As a <em><strong>Pentesting Jr</strong></em> with a legal background, aspiring to become a professional RedTeamer, I bring a unique blend of technical and analytical skills. With experience in <strong>full-stack web and Android development</strong>, I’m passionate about <em><strong>OffSec</strong></em>, driven by responsibility, resilience, and a keen eye for detail and patterns.</p>";

				const frontmatter = {"title":"about","name":"Xavier Z. Wagner","designation":"Pentesting Jr.","location":"Dublin, IE","website":"http://tafutza.hn/kos"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nAs a ***Pentesting Jr*** with a legal background, aspiring to become a professional RedTeamer, I bring a unique blend of technical and analytical skills. With experience in **full-stack web and Android development**, I'm passionate about ***OffSec***, driven by responsibility, resilience, and a keen eye for detail and patterns.\n\n\n\n";
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

export { _page as _, compiledContent as c, frontmatter as f };
