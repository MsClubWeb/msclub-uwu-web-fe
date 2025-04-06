import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, ChevronRight, BookOpen, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WebPageSchema } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | MS Club UWU",
  description:
    "Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/blog",
  },
  openGraph: {
    title: "Blog | MS Club UWU",
    description:
      "Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities.",
    url: "https://msclub-uwu.netlify.app/blog",
    type: "website",
  },
}

// Simulated blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Azure for Students",
    excerpt: "Learn how to use Azure's free student resources to build and deploy your first cloud application.",
    date: "June 1, 2023",
    author: "Alexandra Chen",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Cloud",
  },
  {
    id: 2,
    title: "How to Prepare for Microsoft Certifications",
    excerpt: "A comprehensive guide to preparing for and passing Microsoft certification exams as a student.",
    date: "May 25, 2023",
    author: "Marcus Johnson",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Career",
  },
  {
    id: 3,
    title: "Building Your First Power App",
    excerpt: "Step-by-step tutorial on creating a simple but powerful app using Microsoft Power Apps.",
    date: "May 18, 2023",
    author: "Sophia Rodriguez",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Development",
  },
  {
    id: 4,
    title: "Microsoft Graph API for Beginners",
    excerpt: "An introduction to Microsoft Graph API and how to use it in your applications.",
    date: "May 10, 2023",
    author: "David Kim",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Development",
  },
  {
    id: 5,
    title: "Highlights from Our Spring Hackathon",
    excerpt: "A recap of the amazing projects and innovations from our most recent hackathon event.",
    date: "May 5, 2023",
    author: "Jamal Williams",
    readTime: "4 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Events",
  },
  {
    id: 6,
    title: "Using GitHub Copilot for Student Projects",
    excerpt: "How AI can help students code more efficiently and learn programming concepts.",
    date: "April 28, 2023",
    author: "Olivia Martinez",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "AI",
  },
]

// Featured post
const featuredPost = {
  id: 7,
  title: "The Future of Microsoft Technologies in Education",
  excerpt:
    "Exploring how Microsoft's latest innovations are transforming the educational landscape and preparing students for the workforce of tomorrow.",
  date: "June 5, 2023",
  author: "Alexandra Chen",
  readTime: "12 min read",
  image: "/placeholder.svg?height=600&width=1200",
  category: "Education",
}

export default function BlogPage() {
  return (
    <>
      <WebPageSchema
        title="Blog | MS Club UWU"
        description="Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities."
        url="https://msclub-uwu.netlify.app/blog"
      />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0078D4] to-[#005A9E] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4">Our Blog</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">Insights & Tutorials</h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest news, tutorials, and insights on Microsoft technologies and club activities.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl depth-2 border border-white/20 dark:border-white/5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10 reveal h-11 bg-white/50 dark:bg-black/20"
                  />
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[160px] reveal h-11 bg-white/50 dark:bg-black/20">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="acrylic depth-2">
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="cloud">Cloud</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-blue-600 hover:bg-blue-700 reveal motion-scale h-11">Filter</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="space-y-16">
          {/* Featured Post */}
          <div className="relative rounded-xl overflow-hidden depth-3 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
            <div className="relative h-[500px] w-full">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
                <Badge className="mb-6 bg-blue-600 hover:bg-blue-700">{featuredPost.category}</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 motion-fade">{featuredPost.title}</h2>
                <p className="text-white/80 mb-6 max-w-3xl text-lg motion-fade">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70 mb-8">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 reveal motion-scale group" asChild>
                  <Link href={`/blog/${featuredPost.id}`} className="flex items-center">
                    Read Article
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Latest Articles</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Fresh Insights</h2>
              </div>
              <Button variant="outline" className="reveal motion-scale group" asChild>
                <Link href="/blog/archive" className="flex items-center">
                  View All Articles
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center text-sm">
                        <User className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{post.author}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto justify-start hover:bg-transparent text-blue-600 font-medium"
                        asChild
                      >
                        <Link href={`/blog/${post.id}`} className="flex items-center">
                          <span>Read more</span>
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <section className="py-12 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background rounded-xl">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Browse By Topic</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Explore Categories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Dive into our content organized by topics to find exactly what you're looking for.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Cloud Computing", icon: <CloudIcon className="h-6 w-6" />, count: 12 },
                  { name: "Development", icon: <CodeIcon className="h-6 w-6" />, count: 18 },
                  { name: "Career Growth", icon: <GraduationIcon className="h-6 w-6" />, count: 8 },
                  { name: "AI & ML", icon: <BrainIcon className="h-6 w-6" />, count: 10 },
                  { name: "Events & Recaps", icon: <CalendarIcon className="h-6 w-6" />, count: 15 },
                  { name: "Education", icon: <BookOpen className="h-6 w-6" />, count: 7 },
                ].map((category, index) => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group"
                  >
                    <Card
                      className="h-full depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.count} articles</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="relative overflow-hidden rounded-xl depth-3">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 p-8 sm:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Stay Updated</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get the latest articles, tutorials, and event updates delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 reveal"
                  />
                  <Button variant="fluent" size="lg" className="depth-2 motion-scale">
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-blue-100/80 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </section>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

// Helper components for icons
function CloudIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function CodeIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function GraduationIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function BrainIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
    </svg>
  )
}

function CalendarIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
      {...props}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

