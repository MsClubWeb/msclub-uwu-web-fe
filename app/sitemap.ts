import type { MetadataRoute } from "next"

// Define all static routes
const routes = ["", "/about", "/events", "/board", "/blog", "/contact", "/register"]

// Mock data for dynamic routes
const blogPosts = [
  { id: 1, slug: "getting-started-with-azure" },
  { id: 2, slug: "microsoft-certifications-guide" },
  { id: 3, slug: "building-power-apps" },
  { id: 4, slug: "microsoft-graph-api-intro" },
  { id: 5, slug: "hackathon-highlights" },
  { id: 6, slug: "github-copilot-for-students" },
]

const events = [
  { id: 1, slug: "azure-cloud-workshop" },
  { id: 2, slug: "power-bi-masterclass" },
  { id: 3, slug: "summer-hackathon" },
  { id: 4, slug: "microsoft-365-for-students" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://msclub-uwu.netlify.app"

  // Create entries for static routes
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  })) as MetadataRoute.Sitemap

  // Create entries for blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  })) as MetadataRoute.Sitemap

  // Create entries for events
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  })) as MetadataRoute.Sitemap

  return [...staticRoutes, ...blogRoutes, ...eventRoutes]
}

