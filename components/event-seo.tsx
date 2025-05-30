import type { Metadata } from "next"
import { EventSchema } from "./structured-data"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: string
}

interface EventSEOProps {
  event: Event
}

export function EventSEO({ event }: EventSEOProps) {
  return <EventSchema event={event} />
}

export function generateEventMetadata(event: Event): Metadata {
  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "website", // or "article" — "event" might not be a valid type
      images: [
        {
          url: event.image || "https://msclub-uwu.netlify.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image || "https://msclub-uwu.netlify.app/og-image.jpg"],
    },
    alternates: {
      canonical: `https://msclub-uwu.netlify.app/events/${event.id}`,
    },
  } satisfies Metadata
}


