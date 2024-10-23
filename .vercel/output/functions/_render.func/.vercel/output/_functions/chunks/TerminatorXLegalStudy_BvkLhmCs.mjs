/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>TerminatorXLegalStudy</strong> revolutionizes legal research and analysis by integrating AI solutions to enhance efficiency and precision in jurisprudence. This innovative command-line interface (CLI) enables legal professionals to leverage the power of ChatGPT for case briefing, note-taking, and legal research, significantly reducing the time spent on traditional study methods.</p>\n<p><strong>Key Features:</strong>\n<strong>AI-Powered Legal Assistance:</strong> Utilize ChatGPT to perform rapid case briefings and generate insightful notes tailored to specific legal domains and jurisdictions.\n<strong>User-Friendly CLI:</strong> Clone the repository and run the tls.sh script to access an intuitive menu for selecting various legal research options.\nNon-Login Integration: Simplify access and streamlining the process of interacting with ChatGPT.</p>\n<p><strong>Technologies Used:</strong>\n<strong>ChatGPT API:</strong> Leverage AI capabilities for intelligent legal responses.\n<strong>Bash Scripting:</strong> Automate processes and create a user-friendly command-line interface.\n<strong>Lynx Text Browser:</strong> Enable text-based web interactions for seamless auto-login.</p>";

				const frontmatter = {"title":"TerminatorXLegalStudy","url":"https://github.com/n173sh4d0w/TerminatorXLegalStudy","tags":["AI Legal Solutions","ChatGPT Integration","CLI","Legal Research","Automation"],"date":2023};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/projects/TerminatorXLegalStudy.md";
				const url = "/projects/TerminatorXLegalStudy";
				function rawContent() {
					return "\n**TerminatorXLegalStudy** revolutionizes legal research and analysis by integrating AI solutions to enhance efficiency and precision in jurisprudence. This innovative command-line interface (CLI) enables legal professionals to leverage the power of ChatGPT for case briefing, note-taking, and legal research, significantly reducing the time spent on traditional study methods.\n\n**Key Features:**\n**AI-Powered Legal Assistance:** Utilize ChatGPT to perform rapid case briefings and generate insightful notes tailored to specific legal domains and jurisdictions.\n**User-Friendly CLI:** Clone the repository and run the tls.sh script to access an intuitive menu for selecting various legal research options.\nNon-Login Integration: Simplify access and streamlining the process of interacting with ChatGPT.\n\n**Technologies Used:**\n**ChatGPT API:** Leverage AI capabilities for intelligent legal responses.\n**Bash Scripting:** Automate processes and create a user-friendly command-line interface.\n**Lynx Text Browser:** Enable text-based web interactions for seamless auto-login.\n\n";
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
