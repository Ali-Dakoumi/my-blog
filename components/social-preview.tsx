"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

interface SocialPreviewProps {
  post: BlogPost
}

export function SocialPreview({ post }: SocialPreviewProps) {
  const [showPreview, setShowPreview] = useState(false)

  const ogImageUrl = `/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}&date=${post.date}&tags=${post.tags.join(",")}`

  return (
    <div className="border border-green-800 bg-gray-950 p-4 rounded">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-cyan-400">
          <Eye className="w-4 h-4" />
          <span className="text-sm font-semibold">{">"} social media preview</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showPreview ? "Hide" : "Show"}
        </Button>
      </div>

      {showPreview && (
        <div className="border border-green-700 rounded overflow-hidden">
          <img
            src={ogImageUrl || "/placeholder.svg"}
            alt={`Social preview for ${post.title}`}
            className="w-full h-auto"
          />
          <div className="p-3 bg-gray-900">
            <h3 className="text-green-400 font-semibold text-sm mb-1">{post.title}</h3>
            <p className="text-green-300 text-xs mb-2">{post.description}</p>
            <p className="text-green-600 text-xs">geekblog.dev</p>
          </div>
        </div>
      )}

      <div className="mt-3 text-xs text-green-600">
        <div>
          {">"} curl -s {ogImageUrl.substring(0, 50)}...
        </div>
        <div className="text-cyan-400 mt-1">Image generated: 1200x630px</div>
      </div>
    </div>
  )
}
