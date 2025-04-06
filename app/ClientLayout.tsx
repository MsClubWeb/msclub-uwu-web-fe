"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { UwuAesthetics } from "@/components/uwu-aesthetics"
import { usePathname } from "next/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminPath = pathname?.includes("/admin") || false

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <UwuAesthetics />
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            {!isAdminPath && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

