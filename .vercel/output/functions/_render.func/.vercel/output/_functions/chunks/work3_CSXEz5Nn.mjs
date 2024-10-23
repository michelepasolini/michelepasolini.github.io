/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p><strong>Product Strategy Development</strong>: Lead the creation and execution of product roadmaps, aligning technology solutions with industry trends and client needs to drive business growth in petroleum services.</p>\n</li>\n<li>\n<p><strong>Stakeholder Collaboration</strong>: Collaborate with cross-functional teams, including engineering, marketing, and sales, to ensure product alignment with business objectives and to facilitate effective product launches.</p>\n</li>\n<li>\n<p><strong>Market Analysis and Insights</strong>: Conduct thorough market research and competitive analysis to identify opportunities and challenges, informing product enhancements and positioning within the petroleum sector.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"Product Manager","date":"Feb.2021-Jul.2021","url":"https://www.richfitint.com/","location":"Beijing, China","org":"Richfit IT Co.LTD(China)","tags":["Product Strategy","Cross-Functional Collaboration","Market Analysis","Petroleum Technology","Business Growth"]};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "- **Product Strategy Development**: Lead the creation and execution of product roadmaps, aligning technology solutions with industry trends and client needs to drive business growth in petroleum services.\n\n- **Stakeholder Collaboration**: Collaborate with cross-functional teams, including engineering, marketing, and sales, to ensure product alignment with business objectives and to facilitate effective product launches.\n\n- **Market Analysis and Insights**: Conduct thorough market research and competitive analysis to identify opportunities and challenges, informing product enhancements and positioning within the petroleum sector.\n\n\n\n";
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
