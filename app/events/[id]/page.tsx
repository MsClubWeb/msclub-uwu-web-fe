import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, ArrowLeft, ChevronRight } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { EventSEO, generateEventMetadata } from "@/components/event-seo"
import type { Metadata } from "next"

// Mock event data - in a real app, this would come from a database
const getEventById = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Azure Cloud Workshop",
    description:
      "Learn the fundamentals of Azure and deploy your first cloud application. This hands-on workshop will cover Azure basics, cloud concepts, and practical deployment scenarios. Perfect for beginners and those looking to expand their cloud skills.",
    longDescription:
      "Join us for an immersive Azure Cloud Workshop where you'll learn how to leverage Microsoft's powerful cloud platform. This workshop is designed for students who want to gain practical experience with cloud technologies and add valuable skills to their resume.\n\nDuring this session, you will:\n\n- Set up your Azure account with student credits\n- Learn core cloud concepts and Azure fundamentals\n- Deploy your first web application to the cloud\n- Understand cloud security best practices\n- Network with peers and industry professionals\n\nAll participants will receive a certificate of completion and resources to continue their Azure learning journey.",
    date: "June 10, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Building, Room 203",
    image: "/placeholder.svg?height=400&width=800",
    category: "Cloud",
    speakers: [
      {
        name: "Alexandra Chen",
        role: "Azure Cloud Specialist",
        company: "Microsoft",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    prerequisites: [
      "Basic understanding of web development",
      "Laptop with a modern browser",
      "Microsoft account (can be created during the workshop)",
    ],
    registered: 25,
    capacity: 30,
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const event = getEventById(params.id)
  return generateEventMetadata(event)
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  return (
    <>
      <EventSEO event={event} />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Events", href: "/events" },
                { label: event.title, href: `/events/${params.id}`, isCurrent: true },
              ]}
            />

            <div className="mt-6">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">{event.category}</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">{event.title}</h1>
              <p className="text-xl text-blue-100 max-w-3xl">{event.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="space-y-12">
          {/* Back button */}
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-4 reveal motion-scale">
              <Link href="/events" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </Button>
          </div>

          {/* Event details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Event info cards */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Card className="flex-1 depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CalendarDays className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Date</div>
                      <div className="text-lg font-semibold">{event.date}</div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="flex-1 depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                  style={{ animationDelay: "100ms" }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Time</div>
                      <div className="text-lg font-semibold">{event.time}</div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="flex-1 depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                  style={{ animationDelay: "200ms" }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Location</div>
                      <div className="text-lg font-semibold">{event.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Event image for mobile */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl depth-2 lg:hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* About This Event */}
              <div
                className="space-y-6 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 depth-2 border border-white/20 dark:border-white/5 motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                style={{ animationDelay: "300ms" }}
              >
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                    1
                  </span>
                  About This Event
                </h2>
                <div className="prose prose-blue max-w-none">
                  {event.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div
                className="space-y-6 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 depth-2 border border-white/20 dark:border-white/5 motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                style={{ animationDelay: "400ms" }}
              >
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                    2
                  </span>
                  Prerequisites
                </h2>
                <ul className="space-y-4">
                  {event.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <Check className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Event image for desktop */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl depth-3 hidden lg:block motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Registration Card */}
              <Card
                className="depth-3 hover:depth-4 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm overflow-hidden motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                style={{ animationDelay: "100ms" }}
              >
                <div className="relative h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Registration</h3>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Available Spots</div>
                      <Badge variant="outline" className="bg-white/50 dark:bg-black/30">
                        {event.registered}/{event.capacity}
                      </Badge>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-blue-600 transition-all duration-500 ease-in-out"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 reveal motion-scale group" asChild>
                    <Link href={`/events/${params.id}/register`} className="flex items-center justify-center">
                      Register Now
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    {event.capacity - event.registered} spots remaining
                  </p>
                </CardContent>
              </Card>

              {/* Speakers */}
              <div
                className="space-y-4 motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                style={{ animationDelay: "200ms" }}
              >
                <h3 className="text-xl font-bold">Speakers</h3>
                {event.speakers.map((speaker, index) => (
                  <Card
                    key={index}
                    className="depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden depth-1">
                        <Image
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          width={64}
                          height={64}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div>
                        <div className="font-bold">{speaker.name}</div>
                        <div className="text-sm text-blue-600">{speaker.role}</div>
                        <div className="text-sm text-muted-foreground">{speaker.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Share */}
              <div
                className="space-y-4 motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                style={{ animationDelay: "300ms" }}
              >
                <h3 className="text-xl font-bold">Share This Event</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="reveal motion-scale bg-white/50 dark:bg-black/30">
                    <span className="sr-only">Share on Facebook</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="reveal motion-scale bg-white/50 dark:bg-black/30">
                    <span className="sr-only">Share on Twitter</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="reveal motion-scale bg-white/50 dark:bg-black/30">
                    <span className="sr-only">Share on LinkedIn</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="reveal motion-scale bg-white/50 dark:bg-black/30">
                    <span className="sr-only">Share via Email</span>
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
                      className="h-4 w-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">You Might Also Like</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Discover more events that might interest you based on your preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((id) => (
              <Card
                key={id}
                className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Related${id}`}
                    alt={`Related Event ${id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-blue-600 hover:bg-blue-700">Workshop</Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold mb-1 group-hover:text-blue-600 transition-colors">
                    Related Microsoft Event {id}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A brief description of this related event that might interest attendees.
                  </p>
                  <Button variant="outline" size="sm" className="w-full reveal motion-scale" asChild>
                    <Link href={`/events/${id}`}>View Event</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Don't Miss Out</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-6">Secure Your Spot Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us for this exciting event and take your skills to the next level. Limited seats available!
            </p>
            <Button asChild size="lg" variant="fluent" className="depth-2 motion-scale">
              <Link href={`/events/${params.id}/register`}>
                Register Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

// Missing component
function Check(props: any) {
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
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

