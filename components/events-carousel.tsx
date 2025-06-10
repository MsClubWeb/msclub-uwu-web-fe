"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, ChevronLeft, ChevronRight, Users, Building } from "lucide-react"
import { upcomingEvents, pastEvents } from "@/app/events/events";

// Sample event data with enhanced speakers and partners


export default function EventsCarousel() {
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

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === upcomingEvents.length - visibleItems ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? upcomingEvents.length - visibleItems : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
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
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
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
            width: `${(upcomingEvents.length * 100) / visibleItems}%`,
          }}
        >
          {upcomingEvents.map((event) => (
            <div key={event.id} className="px-3" style={{ width: `${100 / upcomingEvents.length}%` }}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-[#0078D4] hover:bg-[#0078D4]/90 text-white shadow-md">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Speakers Section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Speakers</span>
                    </div>
                    <div className="space-y-2">
                      {event.speakers.slice(0, 2).map((speaker, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-6 h-6 relative rounded-full overflow-hidden border-2 border-blue-200">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{speaker.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {speaker.title} @ {speaker.company}
                            </p>
                          </div>
                        </div>
                      ))}
                      {event.speakers.length > 2 && (
                        <p className="text-xs text-muted-foreground">
                          +{event.speakers.length - 2} more speakers
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Partners Section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Partners</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.partners.map((partner, index) => (
                        <div key={index} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-md px-2 py-1">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-4 h-4 object-contain"
                          />
                          <span className="text-xs font-medium">{partner.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-blue-200 hover:border-blue-300 text-blue-700 hover:text-blue-800 transition-all duration-200"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: upcomingEvents.length - visibleItems + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "w-8 bg-blue-600 shadow-md" 
                : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
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