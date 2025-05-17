import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, Search, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WebPageSchema } from "@/components/structured-data"
import { Input } from "@/components/ui/input"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Events | MS Club UWU",
  description: "Join our workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/events",
  },
  openGraph: {
    title: "Events | MS Club UWU",
    description: "Join our workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies.",
    url: "https://msclub-uwu.netlify.app/events",
    type: "website",
  },
}

// Simulated event data
const upcomingEvents = [
  {
    id: 1,
    title: "Azure Cloud Workshop",
    description: "Dive into cloud-native development with Microsoft Azure. Learn best practices for building scalable, resilient applications using Azure Kubernetes Service and Azure Functions.",
    date: "August 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "MS Teams (Online)",
    image: "/images/Azure Cloud Workshop.png",
    category: "Cloud",
  },
  {
    id: 2,
    title: "InnovateX - YouTube Series",
    description: "An engaging YouTube series session for students to explore building AI agents using Azure AI Foundry, as part of the InnovateX series. Learn how to leverage Microsoft technologies to develop intelligent solutions.",
    date: "June 20, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "MS Teams (Online)",
    image: "/images/Build AI Agent.png",
    category: "Productivity",
  },
  {
    id: 3,
    title: "InnovateX – YouTube Series",
    description: "Discover how AI and Copilot tools are transforming productivity. This session will showcase real-world use cases and demos on integrating AI into your daily workflow.",
    date: "June 18, 2025",
    time: "8:00 PM - 9:00 PM",
    location: "MS Teams (Online)",
    image: "/images/AI & Copilot Tools.png",
    category: "Productivity",
  },
  {
    id: 4,
    title: "HackMS’ 2025",
    description: "A hands-on hackathon focused on building real-world solutions using Microsoft technologies. Network, code, and compete with the best!",
    date: "July 5-6, 2025",
    time: "All Day",
    location: "Uva Wellassa University",
    image: "/images/HackMs.png",
    category: "Hackathon",
  },
  {
    id: 5,
    title: "Power BI Masterclass",
    description: "Create stunning visualizations and analytics dashboards with Power BI.",
    date: "June 15, 2023",
    time: "3:30 PM - 6:30 PM",
    location: "Business School, Room 105",
    image: "/placeholder.svg?height=250&width=500",
    category: "Data",
  },
  {
    id: 6,
    title: "Summer Hackathon",
    description: "48-hour hackathon to build solutions using Microsoft technologies.",
    date: "June 24-25, 2023",
    time: "All Day",
    location: "Main Hall",
    image: "/placeholder.svg?height=250&width=500",
    category: "Hackathon",
  },
  {
    id: 7,
    title: "Microsoft 365 for Students",
    description: "Get the most out of Microsoft 365 apps for your academic success.",
    date: "July 5, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Library, Media Room",
    image: "/placeholder.svg?height=250&width=500",
    category: "Productivity",
  },
  {
    id: 8,
    title: "Microsoft Tech Talks – YouTube Series",
    description: "Engaging YouTube sessions for students, covering the latest in Microsoft technologies including Azure, Power Platform, and more.",
    date: "June 20, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "MS Teams (Online)",
    image: "/placeholder.svg?height=250&width=500",
    category: "Productivity",
  },
  
]

const pastEvents = [
  {
    id: 101,
    title: "Annual General Meeting (AGM)",
    description: "The inaugural AGM of the club introduced the initial executive committee and laid the foundation for the club’s future initiatives and direction.",
    date: "January 8, 2025",
    time: "6:00 PM onwards",
    location: "TLT",
    image: "/images/Annual General Meeting (AGM).jpeg",
    category: "Productivity",
  },
  {
    id: 102,
    title: "Azure Session Series – Unlocking the Power of the Cloud!",
    description: "A full-day session held at the University of Ruhuna, focused on Azure DevOps, Azure AI, and Azure 101. The event featured practical insights and demonstrations exploring the future of cloud technology.",
    date: "March 29, 2025",
    time: "All Day",
    location: "University of Ruhuna, Lab 11",
    image: "/images/Azure Session Series .jpeg",
    category: "Competition",
  },
  {
    id: 103,
    title: "Introduction to GitHub",
    description: "Learn version control and collaboration using GitHub.",
    date: "May 20, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Building, Room 101",
    image: "/placeholder.svg?height=250&width=500",
    category: "Development",
  },
  {
    id: 104,
    title: "VS Code Deep Dive",
    description: "Master the most popular code editor with tips and extensions.",
    date: "May 12, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Engineering Building, Lab 3",
    image: "/placeholder.svg?height=250&width=500",
    category: "Development",
  },
  {
    id: 105,
    title: "Microsoft Imagine Cup Info Session",
    description: "Learn about the global student technology competition and how to participate.",
    date: "May 5, 2023",
    time: "4:00 PM - 5:30 PM",
    location: "Student Center, Meeting Room A",
    image: "/placeholder.svg?height=250&width=500",
    category: "Competition",
  },
  
]

export default function EventsPage() {
  return (
    <>
      <WebPageSchema
        title="Events | MS Club UWU"
        description="Join our workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies."
        url="https://msclub-uwu.netlify.app/events"
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
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4">Upcoming Events</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">Discover Our Events</h1>
            <p className="text-xl text-blue-100 mb-8">
              Join us for workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies.
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
                    placeholder="Search events..."
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
                      <SelectItem value="data">Data</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="productivity">Productivity</SelectItem>
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
        <div className="space-y-10">
          {/* Tabs Section */}
          <div className="flex justify-center">
            <Tabs defaultValue="upcoming" className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <TabsTrigger
                  value="upcoming"
                  className="rounded-md h-10 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-900/50 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-300 data-[state=active]:shadow-sm transition-all"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="rounded-md h-10 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-900/50 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-300 data-[state=active]:shadow-sm transition-all"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>

              {/* Upcoming Events */}
              <TabsContent value="upcoming" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <Card
                      key={event.id}
                      className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 right-3 z-20">
                          <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">{event.category}</Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                          <div className="flex items-center text-sm text-white">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">{event.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-2 h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="mr-2 h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 reveal motion-scale group" asChild>
                            <Link href={`/events/${event.id}`} className="flex items-center justify-center">
                              View Details
                              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Past Events */}
              <TabsContent value="past" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event, index) => (
                    <Card
                      key={event.id}
                      className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-[50%]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 right-3 z-20">
                          <Badge variant="outline" className="bg-white/20 backdrop-blur-sm">
                            {event.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                          <div className="flex items-center text-sm text-white">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">{event.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-2 h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="mr-2 h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full reveal motion-scale group" asChild>
                            <Link href={`/events/${event.id}`} className="flex items-center justify-center">
                              View Details
                              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Host Your Own Event</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Have an Idea for an Event?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for new ideas and collaborations. If you have a concept for a workshop, seminar, or
              any tech event, we'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="fluent" className="depth-2 motion-scale">
                <Link href="/contact">
                  Propose an Event
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

