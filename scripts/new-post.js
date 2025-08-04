#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const args = process.argv.slice(2)
const title = args[0]

if (!title) {
  console.log('Usage: node scripts/new-post.js "Your Post Title"')
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "")

const date = new Date().toISOString().split("T")[0]

const template = `---
title: "${title}"
description: "Add your compelling post description here (150-160 characters for best SEO)"
date: "${date}"
author: "Your Name"
tags: ["programming", "tutorial"] # Use relevant, searchable tags
readTime: "5 min"
---

# ${title}

Write your amazing blog post content here using Markdown!

## Introduction

Start with a compelling introduction that hooks your readers and includes your main keywords naturally.

## Main Content

Structure your content with clear headings for better readability and SEO.

### Subheading

You can use:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- \`Inline code\` for technical terms
- Links: [Next.js](https://nextjs.org) for external references

\`\`\`bash
# Code blocks work great for tutorials!
echo "Hello, World!"
npm install awesome-package
\`\`\`

> Use blockquotes for important tips or key takeaways

## Conclusion

Wrap up with a strong conclusion that summarizes your main points and encourages engagement.

---

*What do you think? Share your thoughts and experiences in the comments below!*

**Tags:** ${title.toLowerCase().includes("tutorial") ? "#tutorial #coding #programming" : "#coding #tech #programming"}
`

const postsDir = path.join(process.cwd(), "content", "posts")
const filePath = path.join(postsDir, `${slug}.mdx`)

// Create posts directory if it doesn't exist
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true })
}

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.log(`❌ Post "${slug}.mdx" already exists!`)
  process.exit(1)
}

// Write the file
fs.writeFileSync(filePath, template)

console.log(`✅ Created new post: content/posts/${slug}.mdx`)
console.log(`📝 Edit the file and add your content!`)
console.log(`🚀 Your post will be available at: /blog/${slug}`)
