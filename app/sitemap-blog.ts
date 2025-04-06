import type { MetadataRoute } from "next"

// Mock blog posts data
const blogPosts = [
  { id: 1, slug: "getting-started-with-azure", date: "2023-06-01" },
  { id: 2, slug: "microsoft-certifications-guide", date: "2023-05-25" },
  { id: 3, slug: "building-power-apps", date: "2023-05-18" },
  { id: 4, slug: "microsoft-graph-api-intro", date: "2023-05-10" },
  { id: 5, slug: "hackathon-highlights", date: "2023-05-05" },
  { id: 6, slug: "github-copilot-for-students", date: "2023-04-28" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://msclub-uwu.netlify.app"

  // Create entries for blog posts
  return blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }))
}

