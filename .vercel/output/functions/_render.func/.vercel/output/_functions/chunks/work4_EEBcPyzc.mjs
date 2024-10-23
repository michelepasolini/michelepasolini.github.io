/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p><strong>Negotiation Expertise</strong>: Demonstrated proficiency in cost-effective commercial and legal negotiations, managing supplier agreements, dispute resolutions, and beneficiary negotiations to optimize business outcomes.</p>\n</li>\n<li>\n<p><strong>Corporate Legal Management</strong>: Extensive experience in overseeing corporate legal operations, ensuring regulatory compliance, managing HR functions, and administering contracts to achieve operational excellence.</p>\n</li>\n</ul>\n<p>`<strong>Public Relations Proficiency</strong>: Highly skilled in enhancing relationships with government agencies and clients, driving improved market presence and strategic partnerships.</p>";

				const frontmatter = {"title":"Project Manager","date":"Jun.2013-Jan.2021","url":"https://www.cnpc.com.cn/en/","location":"Beijing, China(based in Bolivia, Argentina, Peru)","org":"China National Petroleum Corporation(CNPC)","tags":["Negotiation Skills","Public Relations","Contract Management","Logistics Operation","Supplier Management"]};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/works/work4.md";
				const url = "/works/work4";
				function rawContent() {
					return "\n- **Negotiation Expertise**: Demonstrated proficiency in cost-effective commercial and legal negotiations, managing supplier agreements, dispute resolutions, and beneficiary negotiations to optimize business outcomes.\n\n- **Corporate Legal Management**: Extensive experience in overseeing corporate legal operations, ensuring regulatory compliance, managing HR functions, and administering contracts to achieve operational excellence.\n\n`**Public Relations Proficiency**: Highly skilled in enhancing relationships with government agencies and clients, driving improved market presence and strategic partnerships.\n\n\n\n\n\n\n";
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
