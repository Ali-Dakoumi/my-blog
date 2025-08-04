import { generateOGImage } from "@/lib/og-image"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get("title") || "Geek Blog Post"
    const author = searchParams.get("author") || "Anonymous"
    const date = searchParams.get("date") || new Date().toISOString().split("T")[0]
    const tags = searchParams.get("tags")?.split(",") || ["coding"]

    return generateOGImage({ title, author, date, tags })
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
