import type { MetadataRoute } from "next"

// Mock events data
const events = [
  { id: 1, slug: "azure-cloud-workshop", date: "2023-06-10" },
  { id: 2, slug: "power-bi-masterclass", date: "2023-06-15" },
  { id: 3, slug: "summer-hackathon", date: "2023-06-24" },
  { id: 4, slug: "microsoft-365-for-students", date: "2023-07-05" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://msclub-uwu.netlify.app"

  // Create entries for events
  return events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }))
}

