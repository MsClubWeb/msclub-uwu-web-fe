"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

// Sample event data
const events = [
  {
    id: 1,
    title: "Azure Cloud Workshop",
    description: "Learn the fundamentals of Azure and deploy your first cloud application.",
    date: "June 10, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Building, Room 203",
    image: "/placeholder.svg?height=250&width=500",
    category: "Cloud",
  },
  {
    id: 2,
    title: "Power BI Masterclass",
    description: "Create stunning visualizations and analytics dashboards with Power BI.",
    date: "June 15, 2023",
    time: "3:30 PM - 6:30 PM",
    location: "Business School, Room 105",
    image: "/placeholder.svg?height=250&width=500",
    category: "Data",
  },
  {
    id: 3,
    title: "Summer Hackathon",
    description: "48-hour hackathon to build solutions using Microsoft technologies.",
    date: "June 24-25, 2023",
    time: "All Day",
    location: "Main Hall",
    image: "/placeholder.svg?height=250&width=500",
    category: "Hackathon",
  },
  {
    id: 4,
    title: "Microsoft 365 for Students",
    description: "Get the most out of Microsoft 365 apps for your academic success.",
    date: "July 5, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Library, Media Room",
    image: "/placeholder.svg?height=250&width=500",
    category: "Productivity",
  },
]

export function EventsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(3)

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === events.length - visibleItems ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? events.length - visibleItems : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm depth-1 hover:depth-2"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm depth-1 hover:depth-2"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Carousel container */}
      <div ref={carouselRef} className="overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleItems)}%)`,
            width: `${(events.length * 100) / visibleItems}%`,
          }}
        >
          {events.map((event) => (
            <div key={event.id} className="px-3" style={{ width: `${100 / events.length}%` }}>
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 h-full flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-[#0078D4] hover:bg-[#0078D4]/90 depth-1">{event.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full reveal motion-scale">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: events.length - visibleItems + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setActiveIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

