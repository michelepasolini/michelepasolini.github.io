/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>IBM’s DevOps and Software Engineering course on Coursera provides in-depth training in modern software development practices, covering DevOps, CI/CD pipelines, agile methodologies, cloud deployment, and containerization using Docker and Kubernetes. This course prepares learners for dynamic roles in software engineering and DevOps with hands-on projects and real-world skills.</p>";

				const frontmatter = {"title":"IBM DevOps and Software Engineering","org":"IBM","tags":["Agile","Container","CI/CD","RESTful APIs","Cloud"],"url":"https://coursera.org/share/33a3d9e510e8c904a400a0c43fc6be79","date":"Oct.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/DevOps2024_IBM.md";
				const url = "/certificates/DevOps2024_IBM";
				function rawContent() {
					return "\nIBM's DevOps and Software Engineering course on Coursera provides in-depth training in modern software development practices, covering DevOps, CI/CD pipelines, agile methodologies, cloud deployment, and containerization using Docker and Kubernetes. This course prepares learners for dynamic roles in software engineering and DevOps with hands-on projects and real-world skills.\n";
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
