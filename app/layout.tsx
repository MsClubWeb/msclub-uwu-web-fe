import type React from "react"
import type { Metadata, Viewport } from "next"
import ClientLayout from "./ClientLayout"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://msclub-uwu.netlify.app"),
  title: {
    default: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
    template: "%s | MS Club UWU",
  },
  description:
    "Official website for the Microsoft Student Club of Uva Wellassa University. Join us to learn, connect, and build your future with Microsoft technologies.",
  keywords: [
    "Microsoft",
    "Student Club",
    "UWU",
    "Uva Wellassa University",
    "Technology",
    "Azure",
    "Microsoft 365",
    "Coding",
    "Programming",
    "Hackathon",
    "Sri Lanka",
  ],
  authors: [{ name: "MS Club UWU", url: "https://msclub-uwu.netlify.app" }],
  creator: "MS Club UWU",
  publisher: "MS Club UWU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msclub-uwu.netlify.app",
    title: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
    description:
      "Official website for the Microsoft Student Club of Uva Wellassa University. Join us to learn, connect, and build your future with Microsoft technologies.",
    siteName: "MS Club UWU",
    images: [
      {
        url: "https://msclub-uwu.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
    description:
      "Official website for the Microsoft Student Club of Uva Wellassa University. Join us to learn, connect, and build your future with Microsoft technologies.",
    images: ["https://msclub-uwu.netlify.app/og-image.jpg"],
    creator: "@msclubuwu",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0078d4",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app",
    languages: {
      "en-US": "https://msclub-uwu.netlify.app",
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'