# Content Management Cheat Sheet

This doc walks you through both **Projects** and **Blog** updates so you never have to touch React components.

---

## Adding or Updating Projects

Use this workflow to add new work items to the Projects section without touching the UI logic.

## 1. Add the preview image
1. Place your screenshot/thumbnail inside `src/Assets/Projects/`.
2. Keep the filename lowercase and without spaces, e.g. `myproject.png`.

## 2. Import the image in `projectsData.js`
Edit `src/components/Projects/projectsData.js` and add an import at the top:
```js
import myproject from "../../Assets/Projects/myproject.png";
```

## 3. Append a project object to the `projects` array
Inside the same file, add a new object inside `export const projects = [ ... ]`.
Fill only the fields you have:
```js
{
  imgPath: myproject,
  isBlog: false,
  title: "Project Name",
  description: "Short summary (1–2 sentences).",
  ghLink: "https://github.com/username/repo",      // optional
  demoLink: "https://live-demo.com",               // optional
  demoLabel: "Live Site",                          // optional label override
  caseLink: "https://behance.com/...",             // optional case study link
  caseLabel: "Case Study"                          // optional label override
}
```
- **GitHub only**: keep `ghLink` and remove other links.
- **Live site only**: use `demoLink` (and optional `demoLabel`).
- **Case study**: use `caseLink` + `caseLabel`.

## 4. Save and verify
1. Save `projectsData.js`.
2. Run the dev server or refresh the deployed site—your new project card shows automatically.

## Tips
- Keep descriptions concise and professional.
- Images should be similar dimensions for a consistent grid.
- You can reorder projects just by rearranging the objects in the array.

---

# Adding a Blog Post (MDX)

Follow these steps every time you want to publish a new article.

### 1. Prepare your thumbnail (optional but recommended)
1. Drop the image inside `public/blog/`.
2. Keep file names lowercase with dashes, e.g. `my-first-post.jpg`.

### 2. Create the MDX file
1. Inside `content/blog/`, duplicate an existing `.mdx` file or make a new one, e.g. `my-first-post.mdx`.
2. At the top, fill in the frontmatter:
   ```md
   ---
   title: "My First Post"
   description: "One-liner for the blog listing card."
   date: "2025-02-10"
   thumbnail: "/blog/my-first-post.jpg"   # path inside /public
   author: "";
   categories:
     - 
   tags:
     - Next.js
     - Tutorial
   ---
   ```

### 3. Write the content
- Use plain Markdown or drop in React components—MDX supports both.
- Headings (`##`, `###`) automatically feed the Table of Contents.
- Code fences (` ```js `) get syntax highlighting via Shiki.

### 4. Save & preview
1. Run `npm run dev` (if not already running).
2. Visit `/blog` to see the new card; click through to verify TOC/code blocks.

### 5. Tips
- Keep introductions strong—the card excerpt is auto-generated from the opening paragraphs.
- Reuse images via `import Image from "next/image"` if you need advanced layouts.
- Want to hide a draft? Prefix the filename with `_` and it won’t be picked up until you rename it.
