"use client"

import { useEffect, useState } from "react"

export function UwuAesthetics() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate parallax effects
  const mountainParallax = scrollY * 0.02
  const teaLeavesParallax = scrollY * 0.03
  const waterfallParallax = scrollY * 0.01

  return (
    <div className="uwu-aesthetics fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Mountain silhouettes inspired by Badulla's landscape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[15vh] opacity-[0.03]"
        style={{ transform: `translateY(${mountainParallax}px)` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Second mountain range - more distant */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[20vh] opacity-[0.02]"
        style={{ transform: `translateY(${mountainParallax * 0.7}px)` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="currentColor"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,170.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Tea plantation pattern - top right */}
      <div
        className="absolute top-0 right-0 w-[30vw] h-[30vh] opacity-[0.03]"
        style={{ transform: `translateY(${teaLeavesParallax}px)` }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <pattern id="teaPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <path
              d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 Z M10,16 C6.7,16 4,13.3 4,10 C4,6.7 6.7,4 10,4 C13.3,4 16,6.7 16,10 C16,13.3 13.3,16 10,16 Z"
              fill="currentColor"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#teaPattern)" />
        </svg>
      </div>

      {/* Waterfall-inspired gradient - left side */}
      <div
        className="absolute top-[20vh] left-0 w-[5vw] h-[60vh] opacity-[0.04] bg-gradient-to-b from-blue-500 to-blue-200"
        style={{ transform: `translateY(${waterfallParallax}px)` }}
      ></div>

      {/* Train track pattern - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] opacity-[0.05]">
        <div className="w-full h-[2px] bg-current"></div>
        <div className="w-full h-[1px] bg-current mt-[3px]"></div>
        <div className="flex justify-between w-full mt-[1px]">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="h-[4px] w-[1px] bg-current"></div>
          ))}
        </div>
      </div>

      {/* Cinnamon stick pattern - top left */}
      <div className="absolute top-0 left-0 w-[20vw] h-[20vh] opacity-[0.02]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <pattern id="cinnamonPattern" patternUnits="userSpaceOnUse" width="10" height="10">
            <path d="M0,5 L10,5" stroke="currentColor" strokeWidth="1" />
            <path d="M5,0 L5,10" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cinnamonPattern)" />
        </svg>
      </div>
    </div>
  )
}

