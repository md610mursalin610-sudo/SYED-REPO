import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import Particle from "../../components/Particle";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="project-section blog-page">
      <Particle />
      <div className="container">
        <h1 className="project-heading">
          Blog <strong className="purple">Writing</strong>
        </h1>
        <p style={{ color: "white" }}>
          JavaScript, React, and modern web development.
        </p>

        <div className="blog-grid">
          {posts.map((p) => (
            <div key={p.slug} className="blog-grid-item">
              <div className="project-card-view blog-post-card">
                <img
                  src={p.frontmatter.thumbnail}
                  alt={p.frontmatter.title}
                  className="card-img-top blog-post-card-img"
                />

                <div className="blog-post-card-body">
                  <h2 className="blog-post-card-title">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="blog-post-card-title-link"
                    >
                      {p.frontmatter.title}
                    </Link>
                  </h2>

                  <p className="blog-post-card-excerpt">
                    {p.excerpt || p.frontmatter.description}
                  </p>

                  <div className="blog-post-card-actions">
                    <span className="blog-post-card-date">
                      {p.frontmatter.date}
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
      </div>
    </div>
  );
}
