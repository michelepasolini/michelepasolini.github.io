/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Meta Cloud Developer Professional Certificate on Coursera provides essential skills for cloud application development, including cloud architecture, database management, and DevOps practices. Designed for aspiring developers, this course equips learners with hands-on experience in building scalable solutions, preparing them for in-demand roles in the rapidly evolving cloud computing landscape.</p>";

				const frontmatter = {"title":"Meta Full Stack Cloud Developer Professional Certificate","org":"Meta","tags":["React","Django","CI/CD","Docker","Kubernetes","Cloud Development"],"url":"https://coursera.org/share/431bd1389d49166f458f354e2f4d89a3","date":"Oct.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/FullStackDev_Meta.md";
				const url = "/certificates/FullStackDev_Meta";
				function rawContent() {
					return "\nThe Meta Cloud Developer Professional Certificate on Coursera provides essential skills for cloud application development, including cloud architecture, database management, and DevOps practices. Designed for aspiring developers, this course equips learners with hands-on experience in building scalable solutions, preparing them for in-demand roles in the rapidly evolving cloud computing landscape.\n";
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
