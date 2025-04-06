"use client"

import type React from "react"

import Link from "next/link"

interface SEOLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
  ariaLabel?: string
  onClick?: () => void
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
}

export function SEOLink({ href, children, className, title, ariaLabel, onClick, target, rel }: SEOLinkProps) {
  // Determine if the link is external
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")

  // Set appropriate rel attribute for external links
  const relAttribute = isExternal ? rel || "noopener noreferrer" : rel

  // Set appropriate target for external links
  const targetAttribute = target || (isExternal ? "_blank" : undefined)

  return (
    <Link
      href={href}
      className={className}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      target={targetAttribute}
      rel={relAttribute}
    >
      {children}
    </Link>
  )
}

