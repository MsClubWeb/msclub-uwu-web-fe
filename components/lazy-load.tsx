"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazyLoadProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
  onVisible?: () => void
}

export function LazyLoad({ children, threshold = 0.1, rootMargin = "0px", className = "", onVisible }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (onVisible) onVisible()
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, onVisible])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : null}
    </div>
  )
}

