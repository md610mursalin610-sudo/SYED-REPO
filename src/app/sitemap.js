import { getAllPosts } from "../lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abu-syed.vercel.app";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/project", priority: 0.8 },
    { path: "/resume", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
  ];

  const staticEntries = routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r.priority,
  }));

  const posts = getAllPosts();
  const postEntries = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.frontmatter?.date ? new Date(p.frontmatter.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
