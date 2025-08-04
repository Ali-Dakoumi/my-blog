import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  readTime: string
  content: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  return (
    markdown
      // Headers
      .replace(/^# (.+)$/gm, '<h1 class="text-2xl text-cyan-400 mb-4 mt-8 font-bold">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl text-green-400 mb-3 mt-6 font-semibold">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-lg text-green-400 mb-2 mt-4 font-medium">$1</h3>')

      // Bold and italic
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-cyan-400 font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="text-green-200 italic">$1</em>')

      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-cyan-400 px-1 py-0.5 rounded text-sm font-mono">$1</code>')

      // Code blocks
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-gray-900 border border-green-800 p-4 rounded my-4 overflow-x-auto"><code class="text-green-400 text-sm font-mono">$2</code></pre>',
      )

      // Lists
      .replace(
        /^- (.+)$/gm,
        "<li class=\"text-green-300 mb-1 before:content-['▸'] before:text-cyan-400 before:mr-2\">$1</li>",
      )
      .replace(/^(\d+)\. (.+)$/gm, '<li class="text-green-300 mb-1">$2</li>')

      // Blockquotes
      .replace(
        /^> (.+)$/gm,
        '<blockquote class="border-l-4 border-cyan-400 pl-4 italic text-green-200 my-4 bg-gray-900 py-2">$1</blockquote>',
      )

      // Links
      .replace(
        /\[([^\]]+)\]$$([^)]+)$$/g,
        '<a href="$2" class="text-cyan-400 hover:text-green-400 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>',
      )

      // Horizontal rules
      .replace(/^---$/gm, '<hr class="border-green-800 my-8">')

      // Paragraphs (wrap remaining text)
      .split("\n\n")
      .map((paragraph) => {
        if (paragraph.trim() === "") return ""
        if (paragraph.startsWith("<")) return paragraph
        return `<p class="text-green-300 mb-4 leading-relaxed">${paragraph}</p>`
      })
      .join("\n")
  )
}

export function getAllPosts(): BlogPost[] {
  // Ensure the posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString().split("T")[0],
        author: data.author || "Anonymous",
        tags: data.tags || [],
        readTime: data.readTime || "5 min",
        content: markdownToHtml(content),
      } as BlogPost
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Try both .mdx and .md extensions
    let fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`)
    }

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      author: data.author || "Anonymous",
      tags: data.tags || [],
      readTime: data.readTime || "5 min",
      content: markdownToHtml(content),
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.(mdx|md)$/, ""))
}
