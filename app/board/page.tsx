import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WebPageSchema } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Board of Members | MS Club UWU",
  description:
    "Meet the dedicated team leading the Microsoft Student Club of Uva Wellassa University and driving our mission forward.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/board",
  },
  openGraph: {
    title: "Board of Members | MS Club UWU",
    description:
      "Meet the dedicated team leading the Microsoft Student Club of Uva Wellassa University and driving our mission forward.",
    url: "https://msclub-uwu.netlify.app/board",
    type: "website",
  },
}

// Simulated board members data
const boardMembers = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "President",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Computer Science senior with a passion for cloud technologies and AI. Microsoft Student Partner since 2020.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Vice President",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Information Systems junior focused on business intelligence and Power Platform. Certified in Microsoft Power BI.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Software Engineering graduate student specializing in Azure cloud infrastructure and DevOps practices.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "Jamal Williams",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Marketing and Computer Science double major with experience organizing tech events and hackathons.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Communications Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Communications major with a minor in Web Development. Manages all club social media and outreach.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 6,
    name: "David Kim",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Finance major with a passion for technology. Handles budget planning and sponsorship management.",
    social: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 7,
    name: "Olivia Martinez",
    role: "Design Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Graphic Design student who creates all visual content for events, website, and social media.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 8,
    name: "Tyler Washington",
    role: "Membership Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Psychology major with a CS minor. Focuses on growing the club's membership and community engagement.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

export default function BoardPage() {
  return (
    <>
      <WebPageSchema
        title="Board of Members | MS Club UWU"
        description="Meet the dedicated team leading the Microsoft Student Club of Uva Wellassa University and driving our mission forward."
        url="https://msclub-uwu.netlify.app/board"
      />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0078D4] to-[#005A9E] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        {/* Decorative elements - with Sri Lankan tea leaf pattern */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"></div>

        {/* Subtle mountain silhouette in the background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#005A9E]/30 to-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 right-0 w-full h-32 opacity-20"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4">Our Team</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">Board of Members</h1>
            <p className="text-xl text-blue-100 mb-8">
              Meet the dedicated team leading the Microsoft Student Club of Uva Wellassa University and driving our
              mission forward.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="space-y-16">
          {/* Executive Board */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Leadership</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Executive Board</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.slice(0, 3).map((member, index) => (
                <Card
                  key={member.id}
                  className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 group border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Tea leaf pattern overlay - very subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay"></div>

                    {/* Decorative corner element inspired by Sri Lankan patterns */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-30">
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-white"
                      >
                        <path d="M0,0 C50,0 100,50 100,100 L100,0 L0,0 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <CardContent className="p-6 relative">
                    {/* Subtle tea leaf pattern in the background */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-blue-600"
                      >
                        <path
                          d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.9,15.5c-1.3,1.3-3,2.1-4.9,2.1s-3.6-0.8-4.9-2.1 c-1.3-1.3-2.1-3-2.1-4.9s0.8-3.6,2.1-4.9c1.3-1.3,3-2.1,4.9-2.1s3.6,0.8,4.9,2.1c1.3,1.3,2.1,3,2.1,4.9S18.2,14.2,16.9,15.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{member.name}</h3>
                        <p className="text-blue-600 font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground">{member.bio}</p>
                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <Link
                            href={member.social.linkedin}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        )}
                        {member.social.twitter && (
                          <Link
                            href={member.social.twitter}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </Link>
                        )}
                        {member.social.github && (
                          <Link
                            href={member.social.github}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Board Members */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Team</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Board Members</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {boardMembers.slice(3).map((member, index) => (
                <Card
                  key={member.id}
                  className="depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="h-24 w-24 rounded-full overflow-hidden depth-1 relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Subtle decorative border inspired by Sri Lankan patterns */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold group-hover:text-blue-600 transition-colors">{member.name}</h3>
                        <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <Link
                            href={member.social.linkedin}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        )}
                        {member.social.twitter && (
                          <Link
                            href={member.social.twitter}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </Link>
                        )}
                        {member.social.github && (
                          <Link
                            href={member.social.github}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Join the Team CTA */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        {/* Subtle train track pattern at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10"></div>
          <div className="absolute bottom-4 left-0 right-0 h-1 bg-white/10"></div>
          <div className="flex justify-between absolute bottom-0 left-0 right-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="h-4 w-1 bg-white/10"></div>
            ))}
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Join Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Interested in Leadership?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students to join our leadership team. Applications for board positions
              open at the beginning of each academic year.
            </p>
            <Button asChild size="lg" variant="fluent" className="depth-2 motion-scale">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

