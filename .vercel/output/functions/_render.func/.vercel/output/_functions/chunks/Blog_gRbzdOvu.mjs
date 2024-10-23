/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiTOCuPI.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This project involves developing a dynamic blog site using React for the user interface and Astro as the static site generator. The integration of these technologies allows for optimal performance, leveraging React’s component-based architecture and Astro’s ability to deliver fast, SEO-friendly pages.</p>\n<p><strong>Key Features:</strong>\n<strong>1.Dynamic Content Management:</strong> Utilizing React components for creating, editing, and displaying blog posts, allowing for real-time updates and interactions.\n<strong>2.Static Site Generation:</strong> Astro will pre-render pages, enhancing load times and improving SEO, ensuring the blog is accessible and user-friendly.\n**3.Responsive Design:**Implementing a mobile-first approach to ensure compatibility across various devices, enhancing user experience.\nIntegration of Markdown Support: Leveraging Markdown for easy content creation and editing, allowing writers to focus on content without the need for extensive HTML knowledge.\n<strong>4.Deployment and Hosting:</strong> The final application is deployed on platforms Netlify, providing seamless updates and continuous integration.</p>";

				const frontmatter = {"title":"Blog build","url":"http://dan.ma/humbe","tags":["react","Astro","SSG","Responsive Design","Tailwind"],"date":"Jul.2024"};
				const file = "/home/n173sh4d0w/Downloads/CVLink/src/pages/projects/Blog.md";
				const url = "/projects/Blog";
				function rawContent() {
					return "\nThis project involves developing a dynamic blog site using React for the user interface and Astro as the static site generator. The integration of these technologies allows for optimal performance, leveraging React's component-based architecture and Astro's ability to deliver fast, SEO-friendly pages.\n\n**Key Features:**\n**1.Dynamic Content Management:** Utilizing React components for creating, editing, and displaying blog posts, allowing for real-time updates and interactions.\n**2.Static Site Generation:** Astro will pre-render pages, enhancing load times and improving SEO, ensuring the blog is accessible and user-friendly.\n**3.Responsive Design:**Implementing a mobile-first approach to ensure compatibility across various devices, enhancing user experience.\nIntegration of Markdown Support: Leveraging Markdown for easy content creation and editing, allowing writers to focus on content without the need for extensive HTML knowledge.\n**4.Deployment and Hosting:** The final application is deployed on platforms Netlify, providing seamless updates and continuous integration.";
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
