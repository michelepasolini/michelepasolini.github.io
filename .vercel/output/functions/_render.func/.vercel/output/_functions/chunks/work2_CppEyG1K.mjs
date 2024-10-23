/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p><strong>Vulnerability Assessment</strong>: Conduct thorough vulnerability assessments and scans on systems and applications to identify security weaknesses and potential exploitation points.</p>\n</li>\n<li>\n<p><strong>Penetration Testing Support</strong>: Assist senior penetration testers in executing simulated attacks to evaluate security controls, document findings, and provide actionable recommendations for remediation.</p>\n</li>\n<li>\n<p><strong>Report Preparation</strong>: Collaborate in the creation of detailed reports summarizing testing methodologies, results, and security recommendations to enhance client understanding and improve overall security posture.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"Pentesting Jr. (summer intern)","date":"Jun.2023-Sep.2023","url":"https://7asecurity.com/","location":"Poland(Remote)","org":"7A Security","tags":["Vulnerability Assessment","Penetration Testing","Report Proofreading"]};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- **Vulnerability Assessment**: Conduct thorough vulnerability assessments and scans on systems and applications to identify security weaknesses and potential exploitation points.\n\n- **Penetration Testing Support**: Assist senior penetration testers in executing simulated attacks to evaluate security controls, document findings, and provide actionable recommendations for remediation.\n\n- **Report Preparation**: Collaborate in the creation of detailed reports summarizing testing methodologies, results, and security recommendations to enhance client understanding and improve overall security posture.\n\n\n\n";
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
