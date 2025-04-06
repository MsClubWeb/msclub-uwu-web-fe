"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

// Sample partners data
const partners = [
  {
    id: 1,
    name: "Microsoft",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    name: "Azure",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    name: "GitHub",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    name: "Visual Studio",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    name: "LinkedIn",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    name: "Power Platform",
    logo: "/placeholder.svg?height=100&width=200",
  },
]

export function PartnersGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const cards = containerRef.current.querySelectorAll(".partner-card")
      const rect = containerRef.current.getBoundingClientRect()

      // Calculate mouse position relative to the container
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top

        // Calculate distance from mouse to card center
        const distanceX = mouseX - cardCenterX
        const distanceY = mouseY - cardCenterY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        // Calculate rotation and movement based on distance
        const maxRotation = 10
        const maxDistance = 300
        const rotationFactor = Math.min(1, 1 - distance / maxDistance)

        const rotateX = (-distanceY / 20) * rotationFactor
        const rotateY = (distanceX / 20) * rotationFactor
        const scale = 1 + 0.05 * rotationFactor

        // Apply transformation
        card.setAttribute(
          "style",
          `
          transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale});
          transition: transform 0.1s ease;
        `,
        )
      })
    }

    const handleMouseLeave = () => {
      if (!containerRef.current) return

      const cards = containerRef.current.querySelectorAll(".partner-card")
      cards.forEach((card) => {
        card.setAttribute(
          "style",
          `
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
          transition: transform 0.5s ease;
        `,
        )
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {partners.map((partner) => (
        <Card
          key={partner.id}
          className="partner-card p-6 flex items-center justify-center h-32 border-none depth-2 hover:depth-3 transition-all duration-300 bg-white dark:bg-gray-900"
        >
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={120}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
        </Card>
      ))}
    </div>
  )
}

