"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample gallery images
const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "MS Club Event 1",
    caption: "Azure Workshop 2023",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "MS Club Event 2",
    caption: "Hackathon Winners",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "MS Club Event 3",
    caption: "Board Members Retreat",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "MS Club Event 4",
    caption: "Microsoft Certification Training",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "MS Club Event 5",
    caption: "Annual General Meeting",
  },
]

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2

      // Calculate parallax offset based on scroll position
      const offset = distanceFromCenter * 0.1
      setParallaxOffset(offset)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-xl depth-2 h-[500px] md:h-[600px]">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-700/20 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>

      {/* Main carousel */}
      <div className="relative h-full w-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out"
                style={{ transform: `scale(${index === currentIndex ? 1.05 : 1.2})` }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 motion-fade">{image.caption}</h3>
                <p className="text-white/80 max-w-md motion-fade">
                  Capturing moments from our club's journey and memorable events.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

