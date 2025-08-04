import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Terminal, Code2, Cpu } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Geek Blog - Digital Sanctuary for Code Warriors",
  description:
    "A terminal-themed blog for developers, hackers, and digital nomads. Dive deep into code, Linux, vim, programming philosophy, and the art of computing.",
  keywords: "programming, linux, terminal, coding, geek, developer, blog, vim, emacs, open source",
  authors: [{ name: "Geek Blog Team" }],
  openGraph: {
    title: "Geek Blog - Digital Sanctuary for Code Warriors",
    description: "A terminal-themed blog for developers, hackers, and digital nomads.",
    url: "https://your-blog.com",
    siteName: "Geek Blog",
    images: [
      {
        url: "https://your-blog.com/api/og?title=Geek%20Blog&author=Code%20Warriors&date=2024&tags=coding,linux,terminal",
        width: 1200,
        height: 630,
        alt: "Geek Blog - Digital Sanctuary for Code Warriors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geek Blog - Digital Sanctuary for Code Warriors",
    description: "A terminal-themed blog for developers, hackers, and digital nomads.",
    images: [
      "https://your-blog.com/api/og?title=Geek%20Blog&author=Code%20Warriors&date=2024&tags=coding,linux,terminal",
    ],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  const blogPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* ASCII Art Header - Responsive */}
      <header className="border-b-2 border-green-400 p-3 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <pre className="text-green-400 text-[8px] xs:text-[10px] sm:text-xs md:text-sm mb-4 overflow-x-auto whitespace-pre">
            {`
 ██████╗ ███████╗███████╗██╗  ██╗    ██████╗ ██╗      ██████╗  ██████╗ 
██╔════╝ ██╔════╝██╔════╝██║ ██╔╝    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
██║  ███╗█████╗  █████╗  █████╔╝     ██████╔╝██║     ██║   ██║██║  ███╗
██║   ██║██╔══╝  ██╔══╝  ██╔═██╗     ██╔══██╗██║     ██║   ██║██║   ██║
╚██████╔╝███████╗███████╗██║  ██╗    ██████╔╝███████╗╚██████╔╝╚██████╔╝
 ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
`}
          </pre>
          <div className="flex flex-wrap items-center gap-2 text-cyan-400 text-sm sm:text-base">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="break-words">{">"} A digital sanctuary for code warriors and terminal dwellers</span>
          </div>
        </div>
      </header>

      {/* Navigation - Responsive */}
      <nav className="border-b border-green-800 p-3 sm:p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link href="/" className="text-green-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                {">"} home
              </Link>
              <Link href="/about" className="text-green-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                {">"} about
              </Link>
              <Link
                href="/archive"
                className="text-green-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
              >
                {">"} archive
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-green-600">
              <Cpu className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">uptime: 42 days</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Responsive */}
      <main className="max-w-7xl mx-auto p-3 sm:p-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl mb-2 text-cyan-400 break-words">{"$"} ls -la /blog/posts/</h1>
          <p className="text-green-600 text-xs sm:text-sm">
            total {blogPosts.length} entries found in the digital archives...
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="p-4 sm:p-8 border border-green-800 bg-gray-950 text-center rounded">
            <p className="text-green-400 mb-2 text-sm sm:text-base">{">"} No posts found in /content/posts/</p>
            <p className="text-green-600 text-xs sm:text-sm">
              Create your first post by adding a .md file to the content/posts directory
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={post.slug}
                className="bg-gray-900 border-green-800 hover:border-cyan-400 transition-colors h-full flex flex-col"
              >
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-green-600 mb-2">
                        <span className="flex-shrink-0">#{String(index + 1).padStart(3, "0")}</span>
                        <span>•</span>
                        <span className="flex-shrink-0">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-cyan-400 hover:text-green-400 transition-colors text-base sm:text-lg">
                        <Link href={`/blog/${post.slug}`} className="break-words">
                          {">"} {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-green-300 mt-2 text-sm break-words">
                        {post.description}
                      </CardDescription>
                    </div>
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-green-600">
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <User className="w-3 h-3" />
                        <span className="truncate max-w-[100px]">{post.author}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 flex-shrink-0"
                        >
                          #{tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs border-green-800 text-green-600 flex-shrink-0">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Terminal Footer - Responsive */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
          <div className="text-xs text-green-600 space-y-1">
            <div className="break-words">{">"} cat /proc/meminfo | grep geek</div>
            <div className="text-green-400">GeekMemTotal: ∞ kB</div>
            <div className="text-green-400">GeekMemFree: 0 kB (always learning)</div>
            <div className="text-cyan-400 break-words">{">"} echo "Happy coding, fellow geeks!" | cowsay</div>
          </div>
        </div>
      </main>
    </div>
  )
}
