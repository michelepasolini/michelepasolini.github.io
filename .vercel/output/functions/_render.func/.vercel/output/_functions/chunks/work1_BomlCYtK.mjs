/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p><strong>Legal Research</strong>: Conduct legal research on corporate crime cases to assist attorneys in case preparation, while organizing case files and scheduling meetings for efficient operations.</p>\n</li>\n<li>\n<p><strong>Digital Marketing</strong>: Draft engaging marketing materials and manage the firm’s online presence, including website updates, SEO optimization, and analytics monitoring to enhance visibility and client engagement.</p>\n</li>\n<li>\n<p><strong>Client Outreach</strong>: Collaborate with the marketing team to develop and implement outreach strategies, fostering relationships with potential clients and industry stakeholders to expand the firm’s network.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"Legal and Digital Marketing Intern","date":"Sept.2023 - May.2024","url":"https://ftilaw.com/","location":"New York, USA(Remote)","org":"FTI Law firm","tags":["corprate crime","Whistleblowers","FCPA","Case Management"]};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- **Legal Research**: Conduct legal research on corporate crime cases to assist attorneys in case preparation, while organizing case files and scheduling meetings for efficient operations.\n\n- **Digital Marketing**: Draft engaging marketing materials and manage the firm’s online presence, including website updates, SEO optimization, and analytics monitoring to enhance visibility and client engagement.\n\n- **Client Outreach**: Collaborate with the marketing team to develop and implement outreach strategies, fostering relationships with potential clients and industry stakeholders to expand the firm's network.\n\n\n";
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
