import { n as createVNode, _ as __astro_tag_component__, J as Fragment } from './astro/server_BzzarInc.mjs';
import { $ as $$Image } from './_astro_assets_DneUYEUu.mjs';
import 'clsx';

const frontmatter = {
  "title": "First Post",
  "description": "This is the first blog post",
  "date": "2024-01-01T00:00:00.000Z"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "This is the content of the first blog post."
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/en/first-post.mdx";
const file = "C:/Users/Rachi/Desktop/pharmasos/src/content/blog/en/first-post.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Rachi/Desktop/pharmasos/src/content/blog/en/first-post.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
