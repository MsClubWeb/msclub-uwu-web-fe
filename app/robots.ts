import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://msclub-uwu.netlify.app/sitemap.xml",
    host: "https://msclub-uwu.netlify.app",
  }
}

