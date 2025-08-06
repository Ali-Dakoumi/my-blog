import Link from "next/link"
import { ArrowLeft, Terminal } from "lucide-react"
import { OGDebugTool } from "@/components/og-debug-tool"

export default function DebugPage() {
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
            <span>{">"} ./debug-og-images.sh</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl text-cyan-400 mb-4">{">"} Debug Open Graph Images</h1>
          <p className="text-green-300 mb-6">
            Use this tool to test your Open Graph image generation and troubleshoot social media sharing issues.
          </p>
        </div>

        <OGDebugTool />

        <div className="mt-8 p-4 border border-green-800 bg-gray-950 rounded">
          <div className="text-xs text-green-600 space-y-2">
            <div className="text-cyan-400 font-semibold">{">"} Social Media Testing URLs:</div>
            <div className="space-y-1 text-green-300">
              <div>
                <strong>Facebook Sharing Debugger:</strong>{" "}
                <a
                  href="https://developers.facebook.com/tools/debug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-green-400 underline"
                >
                  developers.facebook.com/tools/debug/
                </a>
              </div>
              <div>
                <strong>Twitter Card Validator:</strong>{" "}
                <a
                  href="https://cards-dev.twitter.com/validator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-green-400 underline"
                >
                  cards-dev.twitter.com/validator
                </a>
              </div>
              <div>
                <strong>LinkedIn Post Inspector:</strong>{" "}
                <a
                  href="https://www.linkedin.com/post-inspector/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-green-400 underline"
                >
                  linkedin.com/post-inspector/
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
