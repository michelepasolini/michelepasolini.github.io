/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Google Cybersecurity Professional Certificate on Coursera equips learners with essential skills in network security, threat detection, and incident response. Covering practical tools and techniques, it prepares beginners for entry-level cybersecurity roles, empowering them to protect organizations from cyber threats and safeguard sensitive information in today’s digital landscape.</p>";

				const frontmatter = {"title":"Google Cybersecurity Professional Certificate","org":"Google","tags":["Vulnerability Management","Network Security","Unix&SQL","SIEM","Automation in python","AI"],"url":"gdrive","date":"May.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/Cyber2024.md";
				const url = "/certificates/Cyber2024";
				function rawContent() {
					return "\nThe Google Cybersecurity Professional Certificate on Coursera equips learners with essential skills in network security, threat detection, and incident response. Covering practical tools and techniques, it prepares beginners for entry-level cybersecurity roles, empowering them to protect organizations from cyber threats and safeguard sensitive information in today's digital landscape.\n";
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
