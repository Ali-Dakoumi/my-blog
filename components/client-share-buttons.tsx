"use client"

import { useState } from "react"
import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClientShareButtonsProps {
  title: string
  author: string
  tags: string[]
  url: string
}

export function ClientShareButtons({ title, author, tags, url }: ClientShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareText = `Check out this article: "${title}" by ${author}`

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
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        size="sm"
        className="border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-400 bg-transparent"
        onClick={() => window.open(shareUrls.twitter, "_blank")}
      >
        <Twitter className="w-4 h-4 mr-2" />
        Twitter
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-400 bg-transparent"
        onClick={() => window.open(shareUrls.linkedin, "_blank")}
      >
        <Linkedin className="w-4 h-4 mr-2" />
        LinkedIn
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-400 bg-transparent"
        onClick={() => window.open(shareUrls.facebook, "_blank")}
      >
        <Facebook className="w-4 h-4 mr-2" />
        Facebook
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-400 bg-transparent"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="w-4 h-4 mr-2" /> : <Link2 className="w-4 h-4 mr-2" />}
        {copied ? "Copied!" : "Copy Link"}
      </Button>
    </div>
  )
}
