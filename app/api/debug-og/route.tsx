import type { NextRequest } from "next/server"
import { generateOGImage } from "@/lib/og-image"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get("title") || "Test Blog Post"
    const author = searchParams.get("author") || "Test Author"
    const date = searchParams.get("date") || new Date().toISOString().split("T")[0]
    const tags = searchParams.get("tags")?.split(",") || ["test", "debug"]

    console.log("Generating OG image with:", { title, author, date, tags })

    const response = generateOGImage({ title, author, date, tags })

    console.log("OG image generated successfully")

    return response
  } catch (e: any) {
    console.error("OG image generation failed:", e.message)
    console.error("Stack trace:", e.stack)

    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    })
  }
}
