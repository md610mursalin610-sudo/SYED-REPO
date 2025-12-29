"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function BlogIndexClient({ posts }) {
  const [query, setQuery] = useState("");
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);
  const [activeSuggestIndex, setActiveSuggestIndex] = useState(-1);
  const suggestCloseTimeoutRef = useRef(null);

  const clearSuggestCloseTimeout = () => {
    if (suggestCloseTimeoutRef.current) {
      clearTimeout(suggestCloseTimeoutRef.current);
      suggestCloseTimeoutRef.current = null;
    }
  };

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

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const uniq = new Set();
    const items = [];
    const push = (kind, value) => {
      const v = (value || "").trim();
      if (!v) return;
      const key = `${kind}:${v.toLowerCase()}`;
      if (uniq.has(key)) return;
      uniq.add(key);
      items.push({ kind, value: v });
    };

    posts.forEach((p) => {
      const f = p.frontmatter || {};
      if (f.title && f.title.toLowerCase().includes(q)) push("Post", f.title);
      if (Array.isArray(f.tags)) {
        f.tags.forEach((t) => {
          if (String(t).toLowerCase().includes(q)) push("Tag", String(t));
        });
      }
      if (f.author && String(f.author).toLowerCase().includes(q))
        push("Author", String(f.author));
      if (f.category && String(f.category).toLowerCase().includes(q))
        push("Category", String(f.category));
      if (Array.isArray(f.categories)) {
        f.categories.forEach((c) => {
          if (String(c).toLowerCase().includes(q)) push("Category", String(c));
        });
      }
    });

    return items.slice(0, 8);
  }, [posts, query]);

  useEffect(() => {
    setActiveSuggestIndex(-1);
  }, [query]);

  const applySuggestion = (s) => {
    setQuery(s.value);
    setIsSuggestOpen(false);
    setActiveSuggestIndex(-1);
  };

  const onSearchKeyDown = (e) => {
    if (!isSuggestOpen || !suggestions.length) {
      if (e.key === "Escape") setIsSuggestOpen(false);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (activeSuggestIndex >= 0 && suggestions[activeSuggestIndex]) {
        e.preventDefault();
        applySuggestion(suggestions[activeSuggestIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsSuggestOpen(false);
      setActiveSuggestIndex(-1);
    }
  };

  return (
    <div>
      <div className="blog-page-header">
        <div className="blog-page-title">
          <h1 className="project-heading">
            Blog <strong className="purple">Writing</strong>
          </h1>
          <p className="blog-page-subtitle">
            JavaScript, React, and modern web development.
          </p>
        </div>

        <div className="blog-search blog-search--inline">
          <div className="blog-search-field">
            <span className="blog-search-icon" aria-hidden="true">
              <svg
                viewBox="0 0 512 512"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <circle
                  cx="224"
                  cy="224"
                  r="144"
                  stroke="currentColor"
                  strokeWidth="32"
                  fill="none"
                />
                <line
                  x1="338"
                  y1="338"
                  x2="480"
                  y2="480"
                  stroke="currentColor"
                  strokeWidth="48"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              className="blog-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onSearchKeyDown}
              onFocus={() => {
                clearSuggestCloseTimeout();
                setIsSuggestOpen(true);
              }}
              onBlur={() => {
                clearSuggestCloseTimeout();
                suggestCloseTimeoutRef.current = setTimeout(() => {
                  setIsSuggestOpen(false);
                }, 120);
              }}
              placeholder="Search posts..."
              aria-label="Search blog posts"
              aria-autocomplete="list"
              aria-expanded={isSuggestOpen && suggestions.length ? true : false}
            />

            {query ? (
              <button
                type="button"
                className="blog-search-clear"
                onClick={() => {
                  setQuery("");
                  setIsSuggestOpen(false);
                }}
                aria-label="Clear search"
              >
                ×
              </button>
            ) : null}

            {isSuggestOpen && suggestions.length ? (
              <div className="blog-search-suggestions" role="listbox">
                {suggestions.map((s, idx) => (
                  <button
                    key={`${s.kind}-${s.value}`}
                    type="button"
                    className={`blog-search-suggestion ${
                      idx === activeSuggestIndex ? "is-active" : ""
                    }`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applySuggestion(s)}
                    role="option"
                    aria-selected={idx === activeSuggestIndex}
                  >
                    <span className="blog-search-suggestion-kind">{s.kind}</span>
                    <span className="blog-search-suggestion-value">{s.value}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div className="blog-search-meta">
            {query.trim()
              ? `Showing ${filtered.length} of ${posts.length} posts`
              : `${posts.length} posts`}
          </div>
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
                  <Link href={`/blog/${p.slug}`} className="blog-post-card-title-link">
                    {p.frontmatter?.title}
                  </Link>
                </h2>

                <p className="blog-post-card-excerpt">
                  {p.excerpt || p.frontmatter?.description}
                </p>

                <div className="blog-post-card-actions">
                  <span className="blog-post-card-date">{p.frontmatter?.date}</span>
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
