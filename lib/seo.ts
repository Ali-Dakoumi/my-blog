import type { BlogPost } from "./blog"

export function generateSEOMetadata(post: BlogPost, baseUrl = "https://your-blog.com") {
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}&date=${post.date}&tags=${post.tags.join(",")}`

  return {
    title: `${post.title} | Geek Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Geek Blog",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
      creator: "@your_twitter_handle",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function generateStructuredData(post: BlogPost, baseUrl = "https://your-blog.com") {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}&date=${post.date}&tags=${post.tags.join(",")}`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Geek Blog",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: "Technology",
    inLanguage: "en-US",
  }
}
