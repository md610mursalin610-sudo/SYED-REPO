import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import Particle from "../../../components/Particle";

import TableOfContents from "../../../components/TableOfContents";
import { mdxComponents } from "../../../components/mdx-components";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, { theme: "github-dark" }],
        ],
      },
    },
  });

  return (
    <div className="project-section blog-post-page">
      <Particle />
      <div className="container">
        <div className="blog-layout">
          <article className="blog-content">
            <h1 className="blog-title">{post.frontmatter.title}</h1>
            <p className="blog-date">{post.frontmatter.date}</p>
            {post.frontmatter.thumbnail ? (
              <img
                className="blog-hero"
                src={post.frontmatter.thumbnail}
                alt={post.frontmatter.title || "Blog post thumbnail"}
              />
            ) : null}
            {content}
          </article>

          <aside className="blog-aside">
            <div className="blog-aside-inner">
              <TableOfContents toc={post.toc} />
            </div>
          </aside>
        </div>

        <div className="blog-toc-mobile">
          <details className="blog-toc-details">
            <summary>Table of contents</summary>
            <TableOfContents toc={post.toc} />
          </details>
        </div>
      </div>
    </div>
  );
}
