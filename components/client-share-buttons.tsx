"use client"

import { useState } from "react"
import { Share2, Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClientShareButtonsProps {
  title: string
  author: string
  tags: string[]
  url: string
}

export function ClientShareButtons({ title, author, tags, url }: ClientShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareText = `Check out this awesome post: "${title}" by ${author}`

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}&hashtags=${tags.join(",")}`,
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
    <div className="border border-green-800 bg-gray-950 p-3 sm:p-4 rounded">
      <div className="flex items-center gap-2 mb-3 text-cyan-400">
        <Share2 className="w-4 h-4 flex-shrink-0" />
        <span className="text-xs sm:text-sm font-semibold">{">"} share this post</span>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent text-xs sm:text-sm"
          onClick={() => window.open(shareUrls.twitter, "_blank")}
        >
          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          <span className="truncate">Twitter</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent text-xs sm:text-sm"
          onClick={() => window.open(shareUrls.linkedin, "_blank")}
        >
          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          <span className="truncate">LinkedIn</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent text-xs sm:text-sm"
          onClick={() => window.open(shareUrls.facebook, "_blank")}
        >
          <Facebook className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          <span className="truncate">Facebook</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent text-xs sm:text-sm"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          ) : (
            <Link2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          )}
          <span className="truncate">{copied ? "Copied!" : "Copy Link"}</span>
        </Button>
      </div>

      <div className="mt-3 text-xs text-green-600 space-y-1">
        <div className="break-words">
          {">"} echo "{shareText.length > 50 ? shareText.substring(0, 50) + "..." : shareText}"
        </div>
        <div className="text-cyan-400 break-words">{tags.map((tag) => `#${tag}`).join(" ")}</div>
      </div>
    </div>
  )
}
