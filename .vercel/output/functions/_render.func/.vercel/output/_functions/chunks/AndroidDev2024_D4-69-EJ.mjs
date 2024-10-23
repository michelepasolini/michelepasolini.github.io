/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Meta’s Android Developer course on Coursera equips learners with essential skills for building Android apps, covering Kotlin, UI design, databases, and best practices. Through hands-on projects and expert guidance, this course prepares you for a career in Android development, ideal for aspiring mobile app developers.</p>";

				const frontmatter = {"title":"Meta Android Developer","org":"Meta","tags":["React Native","Figma","Jetpack","Kotlin"],"url":"https://coursera.org/share/34729920d5eaa4c69a5e5f818a10e02c","date":"Oct.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/certificates/AndroidDev2024.md";
				const url = "/certificates/AndroidDev2024";
				function rawContent() {
					return "\nMeta's Android Developer course on Coursera equips learners with essential skills for building Android apps, covering Kotlin, UI design, databases, and best practices. Through hands-on projects and expert guidance, this course prepares you for a career in Android development, ideal for aspiring mobile app developers.\n";
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
