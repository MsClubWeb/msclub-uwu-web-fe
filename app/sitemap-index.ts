import type { MetadataRoute } from "next"

export default function sitemapIndex(): MetadataRoute.SitemapIndex {
  return [
    {
      url: "https://msclub-uwu.netlify.app/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://msclub-uwu.netlify.app/sitemap-blog.xml",
      lastModified: new Date(),
    },
    {
      url: "https://msclub-uwu.netlify.app/sitemap-events.xml",
      lastModified: new Date(),
    },
  ]
}

