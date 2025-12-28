# MDX Blog Writing Guide (for this Portfolio)

Ei project-e blog post gulo `content/blog/*.mdx` theke load hoy. Prottek post-er top-e **frontmatter** thakbe, tarpor normal Markdown + MDX content.

## 1) Folder & naming rules

- **File path**: `content/blog/my-post-slug.mdx`
- **Slug**: file name (e.g. `my-post-slug`) -> URL hoy `/blog/my-post-slug`
- **Draft/Hide**: filename-er aage `_` dile (e.g. `_draft-post.mdx`) listing-e asbe na (until rename)

## 2) Frontmatter (Required fields)

Prottek `.mdx` file-er start-e eta thakbe:

```md
---
title: "My Post Title"
description: "One-liner for blog list card & SEO-ish summary."
date: "2025-12-28"
thumbnail: "/blog/my-post-thumb.jpg"
tags:
  - Next.js
  - React
---
```

- `thumbnail` holo **`public/` folder-er vitorer path**. Example: `public/blog/my-post-thumb.jpg` -> `thumbnail: "/blog/my-post-thumb.jpg"`
- `date` string format e rakhle best: `YYYY-MM-DD`

## 3) Post content structure (Recommended)

Ei project-e blog page already title/date render kore, tai MDX content-er vitore usually `#` (H1) na diye শুরু kora bhalo.

Recommended flow:

- Start with a short intro paragraph (2–5 lines)
- Then sections as `##` (H2)
- Subsections as `###` (H3)
- End-e “Takeaways / Summary” section

## 4) TOC (On this page) kibhabe kaj kore

TOC automatically generate hoy headings theke:

- **Only `##` (H2) and `###` (H3)** headings TOC-e ashe
- Heading text thekei id generate hoy, so **heading unique** rakhle best

Example:

```md
## Why it matters

### The real cost

### Tradeoffs

## Takeaways
```

## 5) Images (Markdown)

Ei project-e MDX rendering-e `img` tag custom styled (max-width, border, radius) করা আছে, তাই normal Markdown image use করলেই consistent design pabe:

```md
![Alt text](/blog/my-image.png)
```

Tips:

- Images `public/blog/` e রাখো
- Filename lowercase + dashes: `my-diagram.png`

## 6) Code blocks (syntax highlighting)

Fenced code block use korো, language mention korle highlight bhalo হয়:

```md
```js
const sum = (a, b) => a + b;
```
```

Also:

- Inline code: `` `useMemo` ``

## 7) Links

```md
[Next.js Docs](https://nextjs.org/docs)
```

## 8) Short “Design checklist” (post সুন্দর দেখানোর জন্য)

- Paragraph gulo 2–4 line e break করে দাও (bigger blocks avoid)
- H2/H3 headings দিয়ে sections clearly split করো
- Code fences-er aage/por-e ekta blank line রাখো
- Screenshots same width/aspect ratio maintain korলে blog grid o consistent lage

## 9) Copy‑paste template (New post)

```md
---
title: ""
description: ""
date: "2025-12-28"
thumbnail: "/blog/"
tags:
  - 
---

Intro paragraph — 2–5 lines. What problem will you solve?

## Problem

Explain the pain.

## Solution

### Step 1

### Step 2

## Result

- Bullet 1
- Bullet 2

## Takeaways

1. Point one
2. Point two
```

## 10) Preview

- `npm run dev`
- Open `/blog` for list
- Click your post and verify:
  - TOC highlights while scrolling
  - code blocks look OK
  - images not overflowing
