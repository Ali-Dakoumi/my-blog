"use client"

import { useState } from "react"
import { Share2, Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

interface SocialShareProps {
  post: BlogPost
  url: string
}

export function SocialShare({ post, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareText = `Check out this awesome post: "${post.title}" by ${post.author}`
  const hashtags = post.tags.map((tag) => `#${tag}`).join(" ")

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}&hashtags=${post.tags.join(",")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="border border-green-800 bg-gray-950 p-4 rounded">
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
          onClick={copyToClipboard}
        >
          {copied ? <Check className="w-4 h-4 mr-2" /> : <Link2 className="w-4 h-4 mr-2" />}
          {copied ? "Copied!" : "Copy Link"}
        </Button>
      </div>

      <div className="mt-3 text-xs text-green-600">
        <div>
          {">"} echo "{shareText}"
        </div>
        <div className="text-cyan-400 mt-1">{hashtags}</div>
      </div>
    </div>
  )
}
