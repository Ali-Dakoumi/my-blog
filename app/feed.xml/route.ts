import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://my-blog-gray-eta-88.vercel.app"; // Replace with your actual domain

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ali Dakoumi - Frontend Developer Blog</title>
    <description>Personal blog of Ali Dakoumi, sharing insights on frontend development, React, TypeScript, and modern web technologies</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>your-email@example.com (Ali Dakoumi)</managingEditor>
    <webMaster>your-email@example.com (Ali Dakoumi)</webMaster>
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
      <author>your-email@example.com (${post.author})</author>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
