"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Award, BookOpen } from "lucide-react"

// Stats data
const stats = [
  {
    id: 1,
    label: "Active Members",
    value: 250,
    icon: Users,
    suffix: "+",
    color: "blue",
  },
  {
    id: 2,
    label: "Events Per Year",
    value: 10,
    icon: Calendar,
    suffix: "",
    color: "indigo",
  },
  {
    id: 3,
    label: "Certifications Issued",
    value: 100,
    icon: Award,
    suffix: "+",
    color: "purple",
  },
  {
    id: 4,
    label: "Workshop Hours",
    value: 100,
    icon: BookOpen,
    suffix: "+",
    color: "cyan",
  },
]

export function StatsCounter() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const countUpInterval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const easedProgress = easeOutQuart(progress)

      setCounters(
        stats.map((stat, index) => {
          return Math.floor(easedProgress * stat.value)
        }),
      )

      if (frame === totalFrames) {
        clearInterval(countUpInterval)
        setCounters(stats.map((stat) => stat.value))
      }
    }, frameDuration)
  }

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={stat.id}
          className="border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group"
        >
          <div
            className={`absolute top-0 left-0 w-full h-1 ${
              index === 0
                ? "bg-[#0078D4]"
                : index === 1
                  ? "bg-[#107C10]"
                  : index === 2
                    ? "bg-[#FFB900]"
                    : "bg-[#E74C3C]"
            }`}
          ></div>
          <CardContent className="p-6 flex items-center">
            <div
              className={`mr-4 h-14 w-14 rounded-full ${
                index === 0
                  ? "bg-[#0078D4]/10"
                  : index === 1
                    ? "bg-[#107C10]/10"
                    : index === 2
                      ? "bg-[#FFB900]/10"
                      : "bg-[#E74C3C]/10"
              } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <stat.icon
                className={`h-7 w-7 ${
                  index === 0
                    ? "text-[#0078D4]"
                    : index === 1
                      ? "text-[#107C10]"
                      : index === 2
                        ? "text-[#FFB900]"
                        : "text-[#E74C3C]"
                }`}
              />
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold tracking-tight">{counters[index].toLocaleString()}</span>
                <span className="text-2xl font-semibold ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

