import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  Terminal,
  Code2,
  Cpu,
  Coffee,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

// Get the base URL dynamically for Vercel deployments
const baseUrl = "https://my-blog-gray-eta-88.vercel.app"; // Fallback for local development

export const metadata: Metadata = {
  title: "Ali Dakoumi - Code & Coffee",
  description:
    "Personal blog of Ali Dakoumi, a frontend developer sharing insights on modern web development, React, TypeScript, and the art of coding.",
  keywords:
    "frontend developer, react, typescript, javascript, web development, Ali Dakoumi, tech blog, terminal",
  authors: [{ name: "Ali Dakoumi" }],
  openGraph: {
    title: "Ali Dakoumi - Code & Coffee",
    description:
      "Personal blog of a frontend developer sharing insights on modern web development.",
    url: baseUrl, // Use dynamic base URL
    siteName: "Ali Dakoumi Blog",
    images: [
      {
        url: `${baseUrl}/placeholder.jpg`, // Use dynamic base URL
        width: 1200,
        height: 630,
        alt: "Ali Dakoumi - Code & Coffee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Dakoumi - Code & Coffee",
    description:
      "Personal blog of a frontend developer sharing insights on modern web development.",
    images: [
      `${baseUrl}/api/og?title=Ali%20Dakoumi&author=Frontend%20Developer&date=2024&tags=react,typescript,frontend`, // Use dynamic base URL
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
};

export default function HomePage() {
  const blogPosts = getAllPosts();
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Terminal Header - No more big ASCII art */}
      <header className="border-b-2 border-green-400 p-3 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Simple terminal-style header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <Terminal className="w-5 h-5" />
              <span className="text-lg font-bold">ali@localhost:~$</span>
            </div>
            <div className="text-cyan-400 text-2xl sm:text-3xl font-bold mb-2">
              ./code-and-coffee.sh
            </div>
            <div className="text-green-300 text-sm">
              <span className="text-green-600">{">"}</span> Personal blog of Ali
              Dakoumi - Frontend Developer
            </div>
          </div>
          {/* Terminal info bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-green-600 border border-green-800 bg-gray-950 p-2 rounded">
            <div className="flex items-center gap-1">
              <Coffee className="w-3 h-3" />
              <span>status: caffeinated</span>
            </div>
            <div className="flex items-center gap-1">
              <Code2 className="w-3 h-3" />
              <span>mode: frontend_dev</span>
            </div>
            <div className="flex items-center gap-1">
              <Cpu className="w-3 h-3" />
              <span>uptime: coding since 2020</span>
            </div>
          </div>
        </div>
      </header>
      {/* Navigation */}
      <nav className="border-b border-green-800 p-3 sm:p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link
                href="/"
                className="text-green-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
              >
                {">"} home
              </Link>
              <Link
                href="/about"
                className="text-green-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
              >
                {">"} about
              </Link>
              <Link
                href="/archive"
                className="text-green-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
              >
                {">"} archive
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-green-600 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-3 sm:p-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl mb-2 text-cyan-400 break-words">
            {"$"} ls -la /blog/posts/
          </h1>
          <p className="text-green-600 text-xs sm:text-sm">
            total {blogPosts.length} entries found in the digital archives...
          </p>
        </div>
        {blogPosts.length === 0 ? (
          <div className="p-4 sm:p-8 border border-green-800 bg-gray-950 text-center rounded">
            <p className="text-green-400 mb-2 text-sm sm:text-base">
              {">"} No posts found in /content/posts/
            </p>
            <p className="text-green-600 text-xs sm:text-sm">
              Create your first post by adding a .md file to the content/posts
              directory
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
                        <span className="flex-shrink-0">
                          #{String(index + 1).padStart(3, "0")}
                        </span>
                        <span>•</span>
                        <span className="flex-shrink-0">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-cyan-400 hover:text-green-400 transition-colors text-base sm:text-lg">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="break-words"
                        >
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
                        <span className="truncate max-w-[100px]">
                          {post.author}
                        </span>
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
                        <Badge
                          variant="outline"
                          className="text-xs border-green-800 text-green-600 flex-shrink-0"
                        >
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
        {/* Terminal Footer */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
          <div className="text-xs text-green-600 space-y-1">
            <div className="break-words">
              {">"} cat /proc/meminfo | grep developer
            </div>
            <div className="text-green-400">DeveloperMemTotal: ∞ kB</div>
            <div className="text-green-400">
              CoffeeMemFree: 0 kB (always brewing)
            </div>
            <div className="text-cyan-400 break-words">
              {">"} echo "Happy coding, fellow developers!" | cowsay
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
