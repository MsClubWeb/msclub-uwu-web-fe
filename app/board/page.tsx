import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WebPageSchema } from "@/components/structured-data"
import type { Metadata } from "next"
import { boardMembers, ExecutiveCommittee, committeeMembers } from "./BoardMembers"

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
    url: "https://msclub-uwu.netlv.app/board",
    type: "website",
  },
}

export default function BoardPage() {
  return (
    <>
      <WebPageSchema
        title="Board of Members | MS Club UWU"
        description="Meet the dedicated team leading the Microsoft Student Club of Uva Wellassa University and driving our mission forward."
        url="https://msclub-uwu.netlify.app/board"
      />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/AzureAppService-Desktop-Hero-BG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=1164&qlt=100&fmt=png-alpha&fit=constrain')] bg-cover bg-center">
        <div className="absolute inset-0 "></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 hover:bg-white/30 border-none mb-4 text-blue-800 bg-blue-100">
              Our Team
            </Badge>
            <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Board of Members
            </h1>
            <p className="text-gray-700 text-xl mb-8">
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
                <h2 className="text-3xl font-bold tracking-tighter">Executive Committee</h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              
          
{boardMembers.slice(0, 4).map((member, index) => (
  <Card
    key={member.id}
    className="depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5 w-72"
    style={{ animationDelay: `${(index + 3) * 100}ms` }}
  >
    <CardContent className="p-6 relative">
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Profile Image */}
        <div className={`
          h-32 w-32 rounded-full overflow-hidden relative transition-all duration-300 group
          ${member.level === "gold" 
            ? "ring-2 ring-yellow-400" 
            : ""
          }
        `}>
          
          {/* Gold Badge Hover Effect */}
          {member.level === "gold" && (
            <div className="absolute inset-0 z-10">
              {/* Blurry background overlay - only covers left 2/5 */}
              <div className="absolute left-0 top-0 w-2/5 h-full bg-black/30 backdrop-blur-sm rounded-l-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              
              {/* Gold badge sliding from left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/5 h-full flex items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg flex items-center justify-center border-2 border-white">
                  <Image
                    src="/images/LevelGold.png"
                    alt="Gold Member"
                    width={20}
                    height={20}
                    className="object-contain drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          )}
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={128}
            height={128}
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div>
          {/* Name and Role */}
          <h3 className="text-xl font-semibold text-gray-800">
            {member.name}
          </h3>
          <p className="text-blue-600 text-sm font-medium">
            {member.role}
          </p>
        </div>

        {/* Social Media Icons */}
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

          {/* Executive Committee */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Team</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Executive Committee</h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {ExecutiveCommittee.slice(0, 7).map((member, index) => (
                <Card
                  key={member.id}
                  className="depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5 w-56"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6 relative">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Gold Badge */}
                      {member.level === "gold" && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-white/50">
                              <Image
                                src="/images/LevelGold.png"
                                alt="Gold Member"
                                width={24}
                                height={24}
                                className="transition-transform duration-300 hover:rotate-12"
                              />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-30 blur-sm animate-pulse"></div>
                          </div>
                        </div>
                      )}

                      <div className="h-32 w-32 rounded-full overflow-hidden relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                      </div>
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

          {/* Committee Members */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-2">Team</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Committee Members</h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {committeeMembers.slice(0, 13).map((member, index) => (
                <Card
                  key={member.id}
                  className="depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5 w-56"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6 relative">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Gold Badge */}
                      {member.level === "gold" && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-white/50">
                              <Image
                                src="/images/LevelGold.png"
                                alt="Gold Member"
                                width={24}
                                height={24}
                                className="transition-transform duration-300 hover:rotate-12"
                              />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-30 blur-sm animate-pulse"></div>
                          </div>
                        </div>
                      )}

                      <div className="h-32 w-32 rounded-full overflow-hidden relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                      </div>
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
        </div>
      </div>
    </>
  )
}