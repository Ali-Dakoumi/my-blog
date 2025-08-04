"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Clock, Terminal, Share2, Twitter, Linkedin, Facebook, Link2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPostBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { generateStructuredData } from "@/lib/seo"
import { useMemo } from "react"

interface BlogPostClientProps {
  slug: string
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const post = useMemo(() => getPostBySlug(slug), [slug])

  if (!post) {
    notFound()
  }

  const currentUrl = `https://your-blog.com/blog/${slug}`
  const shareText = `Check out this awesome post: "${post.title}" by ${post.author}`

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}&hashtags=${post.tags.join(",")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="border-b-2 border-green-400 p-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{"<"} back to terminal</span>
          </Link>
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <Terminal className="w-4 h-4" />
            <span>
              {">"} cat /blog/posts/{slug}.mdx
            </span>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto p-6">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(post)),
          }}
        />

        {/* Article Header */}
        <header className="mb-8 p-4 border border-green-800 bg-gray-950">
          <h1 className="text-2xl text-cyan-400 mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-sm text-green-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-green-800 text-green-400">
                #{tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-green max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {/* Social Sharing */}
        <div className="mt-8 border border-green-800 bg-gray-950 p-4 rounded">
          <div className="flex items-center gap-2 mb-3 text-cyan-400">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-semibold">{">"} share this post</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
              onClick={() => window.open(shareUrls.twitter, "_blank")}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
              onClick={() => window.open(shareUrls.linkedin, "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
              onClick={() => window.open(shareUrls.facebook, "_blank")}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
              onClick={() => navigator.clipboard.writeText(currentUrl)}
            >
              <Link2 className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
          </div>

          <div className="mt-3 text-xs text-green-600">
            <div>
              {">"} echo "{shareText}"
            </div>
            <div className="text-cyan-400 mt-1">{post.tags.map((tag) => `#${tag}`).join(" ")}</div>
          </div>
        </div>

        {/* Social Preview */}
        <div className="mt-6 border border-green-800 bg-gray-950 p-4 rounded">
          <div className="flex items-center gap-2 mb-3 text-cyan-400">
            <span className="text-sm font-semibold">{">"} social media preview</span>
          </div>

          <div className="border border-green-700 rounded overflow-hidden">
            <img
              src={`/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}&date=${post.date}&tags=${post.tags.join(",")}`}
              alt={`Social preview for ${post.title}`}
              className="w-full h-auto"
            />
            <div className="p-3 bg-gray-900">
              <h3 className="text-green-400 font-semibold text-sm mb-1">{post.title}</h3>
              <p className="text-green-300 text-xs mb-2">{post.description}</p>
              <p className="text-green-600 text-xs">geekblog.dev</p>
            </div>
          </div>

          <div className="mt-3 text-xs text-green-600">
            <div>{">"} Image generated: 1200x630px</div>
            <div className="text-cyan-400 mt-1">Perfect for all social platforms</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 p-4 border border-green-800 bg-gray-950">
          <div className="text-sm text-green-600">
            <div>{">"} end of file</div>
            <div className="mt-2">
              <Link href="/" className="text-cyan-400 hover:text-green-400 transition-colors">
                {"<"} return to blog index
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
