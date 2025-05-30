"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "acrylic depth-2" : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      } uwu-train-track-divider`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 reveal">
            <div className="relative h-10 w-10 overflow-hidden rounded-md">
              <Image
                src="https://msclub-uwu.netlify.app/logo.png"
                alt="MS Club Logo"
                width={40}
                height={40}
                className="h-10 w-10 transition-transform hover:scale-110 duration-300"
              />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block motion-fade">MS Club UWU</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-muted-foreground transition-colors"
          >
            Events
          </Link>
          <Link
            href="/board"
            className="text-sm font-medium text-muted-foreground transition-colors"
          >
            Board
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors"
          >
            About Us
          </Link>
         
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden reveal motion-scale" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 flex flex-col acrylic p-6 md:hidden motion-fade animate-in fade-in-0 slide-in-from-top-5 uwu-scenic-gradient">
          <nav className="flex flex-col gap-6">
            <Link href="/" className="text-lg font-medium hover:text-primary reveal" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/events" className="text-lg font-medium hover:text-primary reveal" onClick={toggleMenu}>
              Events
            </Link>
            <Link href="/board" className="text-lg font-medium hover:text-primary reveal" onClick={toggleMenu}>
              Board
            </Link>
            <Link href="/blog" className="text-lg font-medium hover:text-primary reveal" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary reveal" onClick={toggleMenu}>
              About Us
            </Link>
            
           
          </nav>

          {/* UWU mobile menu decoration */}
          <div className="mt-auto pt-6 text-center text-sm text-muted-foreground uwu-train-track-divider">
            <p>MS Club of Uva Wellassa University</p>
            <p>Badulla, Sri Lanka</p>
          </div>
        </div>
      )}
    </header>
  )
}

