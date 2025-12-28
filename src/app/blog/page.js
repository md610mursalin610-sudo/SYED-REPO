import { getAllPosts } from "../../lib/posts";
import Particle from "../../components/Particle";
import BlogIndexClient from "../../components/BlogIndexClient";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const searchablePosts = posts.map((p) => ({
    slug: p.slug,
    excerpt: p.excerpt,
    frontmatter: {
      title: p.frontmatter?.title,
      description: p.frontmatter?.description,
      date: p.frontmatter?.date,
      thumbnail: p.frontmatter?.thumbnail,
      tags: p.frontmatter?.tags,
      author: p.frontmatter?.author,
      category: p.frontmatter?.category,
      categories: p.frontmatter?.categories,
    },
  }));

  return (
    <div className="project-section blog-page">
      <Particle />
      <div className="container">
        <BlogIndexClient posts={searchablePosts} />
      </div>
    </div>
  );
}
