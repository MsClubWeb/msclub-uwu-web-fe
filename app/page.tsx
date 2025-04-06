import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, BookOpen, ChevronRight } from "lucide-react"
import { HeroParallax } from "@/components/hero-parallax"
import { FeatureHighlight } from "@/components/feature-highlight"
import { EventsCarousel } from "@/components/events-carousel"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { StatsCounter } from "@/components/stats-counter"
import { PartnersGrid } from "@/components/partners-grid"
import { OrganizationSchema, WebPageSchema } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
  description:
    "Join UWU's premier tech community to learn, connect, and build your future with Microsoft's cutting-edge tools and technologies.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app",
  },
  openGraph: {
    title: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
    description:
      "Join UWU's premier tech community to learn, connect, and build your future with Microsoft's cutting-edge tools and technologies.",
    url: "https://msclub-uwu.netlify.app",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema
        title="MS Club UWU - Microsoft Student Club of Uva Wellassa University"
        description="Join UWU's premier tech community to learn, connect, and build your future with Microsoft's cutting-edge tools and technologies."
        url="https://msclub-uwu.netlify.app"
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Parallax effect */}
        <HeroParallax />

        {/* Stats Section */}
        <section className="w-full py-12 relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
          <div className="container">
            <StatsCounter />
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-4 max-w-2xl">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Upcoming Events</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Next Events</h2>
                <p className="text-muted-foreground text-lg">
                  Expand your knowledge and network with our upcoming workshops, seminars, and hackathons.
                </p>
              </div>
              <Button asChild variant="outline" className="reveal motion-scale group">
                <Link href="/events" className="flex items-center">
                  View All Events
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <EventsCarousel />
          </div>
        </section>

        {/* Feature Highlight Section */}
        <FeatureHighlight />

        {/* Key Features Section with Mica effect */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>

          <div className="container relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Why Join Us</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Empowering Students with Microsoft Technologies
              </h2>
              <p className="text-muted-foreground text-lg">
                Our club offers unique opportunities to learn, connect, and grow with Microsoft technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CalendarDays className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Regular Events</h3>
                  <p className="text-muted-foreground">
                    We organize workshops, seminars, and tech talks to keep you updated with the latest in Microsoft
                    technologies. Our events feature industry experts and hands-on learning opportunities.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link href="/events" className="text-blue-600 font-medium flex items-center hover:underline">
                      Explore Events
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Networking</h3>
                  <p className="text-muted-foreground">
                    Connect with peers, industry professionals, and Microsoft experts to expand your professional
                    network. Build relationships that will help you throughout your career.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link href="/about" className="text-blue-600 font-medium flex items-center hover:underline">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Learning Resources</h3>
                  <p className="text-muted-foreground">
                    Access exclusive learning materials, tutorials, and certifications guidance for Microsoft
                    technologies. Accelerate your learning journey with our curated resources.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link href="/resources" className="text-blue-600 font-medium flex items-center hover:underline">
                      View Resources
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What Our Members Say</h2>
              <p className="text-muted-foreground text-lg">
                Hear from students who have benefited from being part of our community.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Our Partners</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Trusted By Industry Leaders</h2>
              <p className="text-muted-foreground text-lg">
                We collaborate with leading tech companies to bring you the best opportunities.
              </p>
            </div>

            <PartnersGrid />
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div className="space-y-4 max-w-2xl">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Latest Articles</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Our Blog</h2>
                <p className="text-muted-foreground text-lg">
                  Stay updated with the latest news, tutorials, and insights on Microsoft technologies.
                </p>
              </div>
              <Button asChild variant="outline" className="reveal motion-scale group">
                <Link href="/blog" className="flex items-center">
                  View All Posts
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 motion-fade group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Azure Workshop"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">Cloud</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>June 1, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    Getting Started with Azure for Students
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    Learn how to use Azure's free student resources to build and deploy your first cloud application.
                  </p>
                  <Link href="/blog/1" className="text-blue-600 font-medium flex items-center hover:underline">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Blog Post 2 */}
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 motion-fade group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Microsoft Certifications"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">Career</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>May 25, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    How to Prepare for Microsoft Certifications
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    A comprehensive guide to preparing for and passing Microsoft certification exams as a student.
                  </p>
                  <Link href="/blog/2" className="text-blue-600 font-medium flex items-center hover:underline">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Blog Post 3 */}
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 motion-fade group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Power Apps"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">Development</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>May 18, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    Building Your First Power App
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    Step-by-step tutorial on creating a simple but powerful app using Microsoft Power Apps.
                  </p>
                  <Link href="/blog/3" className="text-blue-600 font-medium flex items-center hover:underline">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action with Acrylic effect */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#005A9E]"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Join Our Community</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Become a member of our Microsoft Student Club and unlock a world of opportunities, resources, and
                connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="fluent" className="depth-2 motion-scale">
                  <Link href="/register">
                    Register Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 depth-1 motion-scale"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

