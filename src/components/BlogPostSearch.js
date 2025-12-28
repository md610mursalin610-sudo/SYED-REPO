"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function BlogPostSearch({ posts }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((p) => {
      const f = p.frontmatter || {};
      const haystack = [
        p.slug,
        f.title,
        f.description,
        p.excerpt,
        f.author,
        f.category,
        Array.isArray(f.categories) ? f.categories.join(" ") : "",
        Array.isArray(f.tags) ? f.tags.join(" ") : "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [posts, query]);

  return (
    <div>
      <div className="blog-search">
        <input
          className="blog-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts (title, tags, author...)"
          aria-label="Search blog posts"
        />
        <div className="blog-search-meta">
          {filtered.length} of {posts.length}
        </div>
      </div>

      <div className="blog-grid">
        {filtered.map((p) => (
          <div key={p.slug} className="blog-grid-item">
            <div className="project-card-view blog-post-card">
              <img
                src={p.frontmatter?.thumbnail}
                alt={p.frontmatter?.title || "Blog thumbnail"}
                className="card-img-top blog-post-card-img"
              />

              <div className="blog-post-card-body">
                <h2 className="blog-post-card-title">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="blog-post-card-title-link"
                  >
                    {p.frontmatter?.title}
                  </Link>
                </h2>

                <p className="blog-post-card-excerpt">
                  {p.excerpt || p.frontmatter?.description}
                </p>

                <div className="blog-post-card-actions">
                  <span className="blog-post-card-date">
                    {p.frontmatter?.date}
                  </span>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="btn btn-primary blog-read-more"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!filtered.length ? (
        <div className="blog-search-empty">No posts found.</div>
      ) : null}
    </div>
  );
}
