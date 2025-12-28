import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { extractToc } from "./toc";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function createExcerpt(content, maxLength = 180) {
  const withoutCode = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ");

  const withoutMdx = withoutCode
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, (m) => m.replace(/\[[^\]]*\]\(([^)]*)\)/g, " "))
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/<[^>]*>/g, " ");

  const text = withoutMdx.replace(/\s+/g, " ").trim();
  if (!text) return "";

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        frontmatter: data,
        content,
        excerpt: createExcerpt(content),
        toc: extractToc(content),
      };
    })
    .sort((a, b) => {
      const ad = a.frontmatter?.date || "";
      const bd = b.frontmatter?.date || "";
      return ad < bd ? 1 : -1;
    });
}

export function getPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data,
    content,
    excerpt: createExcerpt(content),
    toc: extractToc(content),
  };
}
