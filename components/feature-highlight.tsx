"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Code, Award, Users } from "lucide-react"

export function FeatureHighlight() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current || !contentRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far into the section we've scrolled (0 to 1)
      const scrollProgress = 1 - top / (windowHeight - height * 0.5)
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

      // Apply transformations based on scroll progress
      imageRef.current.style.transform = `translateX(${(1 - clampedProgress) * -50}px) scale(${0.9 + clampedProgress * 0.1})`
      imageRef.current.style.opacity = `${0.7 + clampedProgress * 0.3}`

      contentRef.current.style.transform = `translateX(${(1 - clampedProgress) * 50}px)`
      contentRef.current.style.opacity = `${0.7 + clampedProgress * 0.3}`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-[#f0f5fa] dark:from-background dark:to-[#0078D4]/10 overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative transition-all duration-700 ease-out">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden depth-3">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Hackathon Winners"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Floating badges */}
              <div className="absolute top-6 left-6 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                Summer Hackathon 2023
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Building Tomorrow's Solutions</h3>
                <p className="text-white/80 text-sm">
                  Our annual hackathon brings together the brightest minds to solve real-world problems.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-lg rotate-12 backdrop-blur-sm -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200/30 rounded-full backdrop-blur-sm -z-10"></div>
          </div>

          <div ref={contentRef} className="space-y-6 transition-all duration-700 ease-out">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Featured Program</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hackathons & Competitions</h2>
            <p className="text-lg text-muted-foreground">
              Our flagship events bring together students from all disciplines to collaborate, innovate, and compete
              using Microsoft technologies to solve real-world problems.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Hands-on Experience</h3>
                  <p className="text-muted-foreground">
                    Apply your knowledge to real projects and build a portfolio that stands out to employers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Team Collaboration</h3>
                  <p className="text-muted-foreground">
                    Work with peers from different backgrounds to develop innovative solutions together.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Valuable Prizes</h3>
                  <p className="text-muted-foreground">
                    Win exciting prizes, including Microsoft products, cloud credits, and opportunities to showcase your
                    work.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 group">
              <Link href="/events" className="flex items-center">
                Upcoming Competitions
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

