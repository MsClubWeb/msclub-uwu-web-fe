import Script from "next/script"

interface StructuredDataProps {
  type: "Organization" | "Event" | "BlogPosting" | "Person" | "WebPage" | "BreadcrumbList"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function OrganizationSchema() {
  const data = {
    name: "Microsoft Student Club of Uva Wellassa University",
    alternateName: "MS Club UWU",
    url: "https://msclub-uwu.netlify.app",
    logo: "https://msclub-uwu.netlify.app/logo.png",
    sameAs: [
      "https://facebook.com/msclubuwu",
      "https://twitter.com/msclubuwu",
      "https://instagram.com/msclubuwu",
      "https://linkedin.com/company/msclubuwu",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Badulla",
      addressRegion: "Uva Province",
      addressCountry: "Sri Lanka",
    },
    description:
      "Official Microsoft Student Club of Uva Wellassa University, empowering students with Microsoft technologies.",
    email: "info@msclubuwu.org",
    foundingDate: "2015",
    memberOf: {
      "@type": "Organization",
      name: "Microsoft Learn Student Ambassadors",
    },
  }

  return <StructuredData type="Organization" data={data} />
}

export function WebPageSchema({ title, description, url }: { title: string; description: string; url: string }) {
  const data = {
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "MS Club UWU",
      url: "https://msclub-uwu.netlify.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Microsoft Student Club of Uva Wellassa University",
      logo: {
        "@type": "ImageObject",
        url: "https://msclub-uwu.netlify.app/logo.png",
      },
    },
  }

  return <StructuredData type="WebPage" data={data} />
}

export function EventSchema({ event }: { event: any }) {
  const data = {
    name: event.title,
    description: event.description,
    startDate: event.date,
    endDate: event.date, // Assuming same day event
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Badulla",
        addressRegion: "Uva Province",
        addressCountry: "Sri Lanka",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Microsoft Student Club of Uva Wellassa University",
      url: "https://msclub-uwu.netlify.app",
    },
    image: event.image || "https://msclub-uwu.netlify.app/og-image.jpg",
    url: `https://msclub-uwu.netlify.app/events/${event.id}`,
  }

  return <StructuredData type="Event" data={data} />
}

export function BlogPostSchema({ post }: { post: any }) {
  const data = {
    headline: post.title,
    description: post.excerpt,
    image: post.image || "https://msclub-uwu.netlify.app/og-image.jpg",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Microsoft Student Club of Uva Wellassa University",
      logo: {
        "@type": "ImageObject",
        url: "https://msclub-uwu.netlify.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://msclub-uwu.netlify.app/blog/${post.id}`,
    },
  }

  return <StructuredData type="BlogPosting" data={data} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }))

  const data = {
    itemListElement,
  }

  return <StructuredData type="BreadcrumbList" data={data} />
}

