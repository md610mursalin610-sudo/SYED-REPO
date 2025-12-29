import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import Link from "next/link";
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
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, { theme: "github-dark" }],
          rehypeKatex,
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
            <div className="blog-post-nav">
              <Link href="/blog" className="blog-back-link">
                🔙Back to Blogs
              </Link>
            </div>

            {post.frontmatter.thumbnail ? (
              <img
                className="blog-hero"
                src={post.frontmatter.thumbnail}
                alt={post.frontmatter.title || "Blog post thumbnail"}
              />
            ) : null}

            <header className="blog-header">
              <h1 className="blog-title">{post.frontmatter.title}</h1>
              {post.frontmatter.description ? (
                <p className="blog-description">{post.frontmatter.description}</p>
              ) : null}

              <div className="blog-meta">
                {post.frontmatter.date ? (
                  <span className="blog-meta-item">{post.frontmatter.date}</span>
                ) : null}
                {post.frontmatter.author ? (
                  <span className="blog-meta-item">{post.frontmatter.author}</span>
                ) : null}
                {post.frontmatter.category ? (
                  <span className="blog-meta-item">{post.frontmatter.category}</span>
                ) : null}
                {Array.isArray(post.frontmatter.categories) &&
                post.frontmatter.categories.length ? (
                  <span className="blog-meta-item">
                    {post.frontmatter.categories.join(", ")}
                  </span>
                ) : null}
              </div>

              {Array.isArray(post.frontmatter.tags) && post.frontmatter.tags.length ? (
                <div className="blog-tags">
                  {post.frontmatter.tags.map((t) => (
                    <span key={t} className="blog-tag">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </header>

            <div className="blog-header-divider" />

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
