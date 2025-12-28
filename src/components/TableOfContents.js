"use client";

import { useEffect, useMemo, useState } from "react";

function TableOfContents({ toc }) {
  const [activeId, setActiveId] = useState(null);
  const ids = useMemo(() => toc.map((t) => t.id), [toc]);

  useEffect(() => {
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!headings.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0.1, 1] }
    );

    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [ids]);

  return (
    <div className="blog-toc">
      <p className="blog-toc-title">On this page</p>
      <nav className="blog-toc-nav">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`blog-toc-link ${
              item.level === 3 ? "blog-toc-link-l3" : ""
            } ${activeId === item.id ? "is-active" : ""}`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default TableOfContents;
