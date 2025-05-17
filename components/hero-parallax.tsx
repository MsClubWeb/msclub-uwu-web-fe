"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export function HeroParallax() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate parallax effects
  const calculateParallax = (factor: number) => {
    return scrollY * factor
  }

  return (
    <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background layers with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0078D4] to-[#005A9E] opacity-90"
        style={{ transform: `translateY(${calculateParallax(0.05)}px)` }}
      ></div>

      <div
        className="absolute inset-0 bg-[url('/bod.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ transform: `translateY(${calculateParallax(0.1)}px) scale(${1 + scrollY * 0.0005})` }}
      ></div>

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"
        style={{ transform: `translateY(${calculateParallax(-0.15)}px)` }}
      ></div>

      <div
        className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"
        style={{ transform: `translateY(${calculateParallax(-0.2)}px)` }}
      ></div>

      {/* Floating shapes */}
      <div
        className="absolute top-1/3 left-[20%] w-16 h-16 bg-[#50e6ff]/30 rounded-lg rotate-12 backdrop-blur-sm"
        style={{ transform: `translateY(${calculateParallax(-0.3)}px) rotate(${12 + scrollY * 0.02}deg)` }}
      ></div>

      <div
        className="absolute top-2/3 right-[25%] w-20 h-20 bg-[#0078D4]/30 rounded-full backdrop-blur-sm"
        style={{ transform: `translateY(${calculateParallax(-0.25)}px)` }}
      ></div>

      <div
        className="absolute bottom-1/4 right-[10%] w-24 h-24 bg-[#50e6ff]/20 rounded-lg rotate-45 backdrop-blur-sm"
        style={{ transform: `translateY(${calculateParallax(-0.35)}px) rotate(${45 + scrollY * 0.03}deg)` }}
      ></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white" style={{ transform: `translateY(${calculateParallax(-0.1)}px)` }}>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none px-4 py-1 text-sm">
              Microsoft Student Club
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight italic">
            Inspiring Students to Innovate and Create with <span className="text-blue-200">Microsoft</span> Technologies
            </h1>

            <p className="text-xl text-blue-100 max-w-lg italic">
            Join UWU’s leading tech community to explore new ideas, build innovative projects, and shape the future using Microsoft’s powerful tools and platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="fluent" className="depth-2 motion-scale group">
                <Link href="/events" className="flex items-center">
                  Explore Events
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-blue-600 hover:bg-white/20 depth-1 motion-scale"
              >
                <Link href="/about">Register Now</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block" style={{ transform: `translateY(${calculateParallax(-0.15)}px)` }}>
            <div className="relative h-[500px] w-full">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-lg overflow-hidden depth-3 border border-white/20">
                <Image
                  src="https://msclub-uwu.netlify.app/logo.png"// secons image 
                  alt="MS Club Event"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating card 1 */}
              <div className="absolute bottom-20 left-0 w-[200px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg depth-2 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image src="https://msclub-uwu.netlify.app/logo.png" alt="MS Club Logo" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm dark:text-white">MS Club UWU</h4>
                    <p className="text-xs text-muted-foreground">Uva Wellassa University</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute bottom-4 right-4 w-[250px] bg-blue-600/90 backdrop-blur-sm p-4 rounded-lg depth-2 text-white animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Upcoming Event</h4>
                  </div>
                </div>
                <p className="text-xs text-blue-100">Azure Cloud Workshop - June 10, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="h-10 w-6 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

