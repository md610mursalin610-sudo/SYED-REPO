import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import GitHubSlugger from "github-slugger";

export function extractToc(source) {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(source);
  const slugger = new GitHubSlugger();
  const toc = [];

  visit(tree, "heading", (node) => {
    const level = node.depth;
    if (level !== 2 && level !== 3) return;
    const text = toString(node);
    const id = slugger.slug(text);
    toc.push({ id, text, level });
  });

  return toc;
}
