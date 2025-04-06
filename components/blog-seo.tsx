import type { Metadata } from "next"
import { BlogPostSchema } from "./structured-data"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  category: string
}

interface BlogSEOProps {
  post: BlogPost
}

export function BlogSEO({ post }: BlogSEOProps) {
  return <BlogPostSchema post={post} />
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "https://msclub-uwu.netlify.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "https://msclub-uwu.netlify.app/og-image.jpg"],
    },
    alternates: {
      canonical: `https://msclub-uwu.netlify.app/blog/${post.id}`,
    },
  }
}

