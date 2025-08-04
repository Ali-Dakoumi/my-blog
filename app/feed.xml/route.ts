import { getAllPosts } from "@/lib/blog"

export async function GET() {
  const posts = getAllPosts()
  const baseUrl = "https://your-blog.com"

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Geek Blog</title>
    <description>A digital sanctuary for code warriors and terminal dwellers</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>hello@geekblog.dev (Geek Blog Team)</managingEditor>
    <webMaster>hello@geekblog.dev (Geek Blog Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>hello@geekblog.dev (${post.author})</author>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("")}
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
