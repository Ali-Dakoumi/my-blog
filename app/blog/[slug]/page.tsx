import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Clock, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug, getAllSlugs } from "@/lib/blog"
import { generateSEOMetadata, generateStructuredData } from "@/lib/seo"
import { ClientShareButtons } from "@/components/client-share-buttons"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Geek Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return generateSEOMetadata(post)
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const currentUrl = `https://your-blog.com/blog/${slug}`

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header - Responsive */}
      <header className="border-b-2 border-green-400 p-3 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors mb-4 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            <span>{"<"} back to terminal</span>
          </Link>
          <div className="flex flex-wrap items-center gap-2 text-green-600 text-xs sm:text-sm">
            <Terminal className="w-4 h-4 flex-shrink-0" />
            <span className="break-all">
              {">"} cat /blog/posts/{slug}.mdx
            </span>
          </div>
        </div>
      </header>

      {/* Article - Responsive */}
      <article className="max-w-4xl mx-auto p-3 sm:p-6">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(post)),
          }}
        />

        {/* Article Header - Responsive */}
        <header className="mb-6 sm:mb-8 p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 mb-4 break-words leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-green-600 mb-4">
            <div className="flex items-center gap-1 flex-shrink-0">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate max-w-[120px] sm:max-w-none">{post.author}</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-green-800 text-green-400 flex-shrink-0">
                #{tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content - Responsive */}
        <div className="prose prose-invert prose-green max-w-none">
          <div
            className="markdown-content text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Social Sharing - Responsive */}
        <div className="mt-6 sm:mt-8">
          <ClientShareButtons title={post.title} author={post.author} tags={post.tags} url={currentUrl} />
        </div>

        {/* Social Preview - Responsive */}
        <div className="mt-4 sm:mt-6 border border-green-800 bg-gray-950 p-3 sm:p-4 rounded">
          <div className="flex items-center gap-2 mb-3 text-cyan-400">
            <span className="text-xs sm:text-sm font-semibold">{">"} social media preview</span>
          </div>

          <div className="border border-green-700 rounded overflow-hidden">
            <img
              src={`/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}&date=${post.date}&tags=${post.tags.join(",")}`}
              alt={`Social preview for ${post.title}`}
              className="w-full h-auto"
            />
            <div className="p-3 bg-gray-900">
              <h3 className="text-green-400 font-semibold text-xs sm:text-sm mb-1 break-words">{post.title}</h3>
              <p className="text-green-300 text-xs mb-2 break-words">{post.description}</p>
              <p className="text-green-600 text-xs">geekblog.dev</p>
            </div>
          </div>

          <div className="mt-3 text-xs text-green-600 space-y-1">
            <div className="break-words">{">"} Image generated: 1200x630px</div>
            <div className="text-cyan-400">Perfect for all social platforms</div>
          </div>
        </div>

        {/* Navigation - Responsive */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
          <div className="text-xs sm:text-sm text-green-600 space-y-2">
            <div>{">"} end of file</div>
            <div>
              <Link href="/" className="text-cyan-400 hover:text-green-400 transition-colors break-words">
                {"<"} return to blog index
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}
