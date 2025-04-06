import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { BreadcrumbSchema } from "./structured-data"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Add home as the first item
  const allItems = [{ label: "Home", href: "/" }, ...items]

  // Format items for schema
  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: `https://msclub-uwu.netlify.app${item.href}`,
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-1 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1

            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />}

                {index === 0 && <Home className="mr-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />}

                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

