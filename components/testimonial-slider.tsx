"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science, Senior",
    image: "/placeholder.svg?height=128&width=128",
    quote:
      "Joining the Microsoft Student Club has been transformative for my career. The Azure workshop helped me secure an internship at a top tech company. The mentorship and hands-on experience were invaluable.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Information Systems, Junior",
    image: "/placeholder.svg?height=128&width=128",
    quote:
      "The networking opportunities at MS Club events connected me with my mentor who guided me through my Microsoft certification journey. I've now earned three certifications that have opened many doors.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Software Engineering, Graduate",
    image: "/placeholder.svg?height=128&width=128",
    quote:
      "The hackathon organized by the club was challenging yet rewarding. Our team developed a solution that we're now turning into a startup! The club provided the perfect environment to innovate.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Computer Engineering, Sophomore",
    image: "/placeholder.svg?height=128&width=128",
    quote:
      "As a sophomore with limited experience, I was nervous about joining. But the MS Club's inclusive environment and beginner-friendly workshops helped me build confidence and technical skills rapidly.",
  },
]

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isAnimating, autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative overflow-hidden rounded-2xl depth-2 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900/60">
        <div className="absolute top-6 left-6 text-[#0078D4] opacity-20">
          <Quote className="h-24 w-24" />
        </div>

        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ease-out absolute ${
                    index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white depth-1">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}

              {/* Empty div to maintain layout when testimonials are absolute positioned */}
              <div className="h-48 w-full"></div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="relative h-[200px] md:h-[180px]">
                {testimonials.map((testimonial, index) => (
                  <blockquote
                    key={testimonial.id}
                    className={`absolute transition-all duration-500 ease-out ${
                      index === activeIndex
                        ? "opacity-100 translate-x-0"
                        : index < activeIndex
                          ? "opacity-0 -translate-x-16"
                          : "opacity-0 translate-x-16"
                    }`}
                  >
                    <p className="text-lg italic">"{testimonial.quote}"</p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={prevSlide}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={nextSlide}
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
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
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

