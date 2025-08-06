"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, RefreshCw, ExternalLink, Copy, Check } from "lucide-react"

export function OGDebugTool() {
  const [title, setTitle] = useState("Hello World: My Journey into the Matrix")
  const [author, setAuthor] = useState("Neo_Coder")
  const [date, setDate] = useState("2024-01-15")
  const [tags, setTags] = useState("intro,philosophy,coding")
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateImage = () => {
    setIsLoading(true)
    const params = new URLSearchParams({
      title,
      author,
      date,
      tags,
    })
    const url = `/api/og?${params.toString()}`
    setImageUrl(url)
    setIsLoading(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + imageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const testOnSocialMedia = () => {
    const testUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + "/blog/hello-world")}`
    window.open(testUrl, "_blank")
  }

  return (
    <Card className="bg-gray-900 border-green-800">
      <CardHeader>
        <div className="flex items-center gap-2 text-cyan-400">
          <Terminal className="w-5 h-5" />
          <CardTitle>{">"} OG Image Debug Tool</CardTitle>
        </div>
        <CardDescription className="text-green-300">
          Test your Open Graph image generation and social media previews
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title" className="text-green-400">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-800 border-green-800 text-green-300"
            />
          </div>
          <div>
            <Label htmlFor="author" className="text-green-400">
              Author
            </Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="bg-gray-800 border-green-800 text-green-300"
            />
          </div>
          <div>
            <Label htmlFor="date" className="text-green-400">
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-800 border-green-800 text-green-300"
            />
          </div>
          <div>
            <Label htmlFor="tags" className="text-green-400">
              Tags (comma-separated)
            </Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="bg-gray-800 border-green-800 text-green-300"
              placeholder="tag1,tag2,tag3"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={generateImage} disabled={isLoading} className="bg-green-800 hover:bg-green-700 text-black">
            {isLoading ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Terminal className="w-4 h-4 mr-2" />}
            Generate Image
          </Button>

          {imageUrl && (
            <>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied!" : "Copy URL"}
              </Button>

              <Button
                onClick={testOnSocialMedia}
                variant="outline"
                className="border-green-800 text-green-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Test on Facebook
              </Button>
            </>
          )}
        </div>

        {imageUrl && (
          <div className="space-y-4">
            <div className="border border-green-800 rounded overflow-hidden">
              <img src={imageUrl || "/placeholder.svg"} alt="Generated OG Image" className="w-full h-auto" />
            </div>

            <div className="p-3 bg-gray-950 border border-green-800 rounded">
              <div className="text-xs text-green-600 space-y-1">
                <div>{">"} Generated URL:</div>
                <div className="text-cyan-400 break-all font-mono">{window.location.origin + imageUrl}</div>
              </div>
            </div>
          </div>
        )}

        <div className="p-3 bg-gray-950 border border-green-800 rounded">
          <div className="text-xs text-green-600 space-y-2">
            <div className="text-cyan-400 font-semibold">{">"} Troubleshooting Tips:</div>
            <ul className="space-y-1 text-green-300">
              <li>• Replace "your-actual-domain.com" with your real domain</li>
              <li>• Deploy your site before testing social media previews</li>
              <li>• Use Facebook's Sharing Debugger to clear cache</li>
              <li>• Check that your /api/og route is accessible</li>
              <li>• Ensure your domain supports HTTPS</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
