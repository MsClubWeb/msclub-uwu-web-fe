import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  GraduationCap,
  MapPin,
  Clock,
  Laptop,
  UserCheck,
  Megaphone,
  Globe,
  CircuitBoard,
  BrainCog,
  BrainCircuit,
  Brain,
  Sparkles,
  Handshake,
} from "lucide-react";
import { WebPageSchema } from "@/components/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MS Club UWU",
  description:
    "Learn about the Microsoft Student Club of Uva Wellassa University, our mission, history, and activities.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/about",
  },
  openGraph: {
    title: "About Us | MS Club UWU",
    description:
      "Learn about the Microsoft Student Club of Uva Wellassa University, our mission, history, and activities.",
    url: "https://msclub-uwu.netlify.app/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        title="About Us | MS Club UWU"
        description="Learn about the Microsoft Student Club of Uva Wellassa University, our mission, history, and activities."
        url="https://msclub-uwu.netlify.app/about"
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
                  About Us
                </Badge>
                <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                  Microsoft Student Club
                </h1>
                <p className="text-gray-700 text-xl mb-8">
                              Empowering students with Microsoft technologies and fostering a community of future tech leaders since 2015. Learn, connect, and grow with us
                </p>
              </div>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-none depth-2 motion-scale group"
            >
              <Link href="/register" className="flex items-center">
                Join Our Club
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-none depth-1 motion-scale"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

            </div>
          </section>

{/* Our Vision, Mission & Aim Section */}
<section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
  <div className="container">
    
    {/* Vision and Aim & Objective - Top Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Vision - Top Left */}
      <div className="motion-fade animate-in fade-in-0 slide-in-from-left-5">
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
          Our Vision
        </Badge>
        <p className="text-lg text-muted-foreground">
          To create a community of tech-driven leaders who champion Microsoft technologies, 
          driving innovation aligned with Uva Wellassa University's commitment to value addition and national development.
        </p>
      </div>

      {/* Aim & Objective - Top Right */}
      <div className="motion-fade animate-in fade-in-0 slide-in-from-right-5">
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
          Our Aim & Objective
        </Badge>
        <p className="text-lg text-muted-foreground">
          The Club enhances skills in Microsoft technologies, supports certifications, mentors future MLSAs, and connects students with industry professionals.
        </p>
      </div>
    </div>

    {/* Mission Section with Image */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Left Side - First 3 Mission Items */}
      <div className="lg:col-span-4 space-y-6">
        <div className="motion-fade animate-in fade-in-0 slide-in-from-left-5">
          <div className="mb-4 w-12 h-12 bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-md">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-muted-foreground">
            Equip students with practical skills in Microsoft technologies through workshops, certifications, and mentorship programs.
          </p>
        </div>

        <div className="motion-fade animate-in fade-in-0 slide-in-from-left-5">
          <div className="mb-4 w-12 h-12 bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-md">
            <Handshake className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-muted-foreground">
            Bridge the gap between academia and industry by encouraging collaborations with professionals and organizations.
          </p>
        </div>

        <div className="motion-fade animate-in fade-in-0 slide-in-from-left-5">
          <div className="mb-4 w-12 h-12 bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-md">
            <Lightbulb className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-muted-foreground">
            Cultivate a culture of continuous learning, creativity, and leadership among members.
          </p>
        </div>
      </div>

      {/* Center - Portrait Image */}
      <div className="lg:col-span-4 flex justify-center">
        <div className="relative motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
          <div className="relative w-80 h-96 rounded-xl overflow-hidden depth-3">
            <Image
              src="/about_us_page_images/Mission_Section_Img.jpg"
              alt="Club activities"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
              style={{ objectPosition: 'center' }}
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-lg rotate-12 backdrop-blur-sm -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200/30 rounded-full backdrop-blur-sm -z-10"></div>
        </div>
      </div>

      {/* Right Side - Last 2 Mission Items */}
      <div className="lg:col-span-4 space-y-6">
        <div className="motion-fade animate-in fade-in-0 slide-in-from-right-5">
          <div className="mb-4 w-12 h-12 bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-md">
            <UserCheck className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-muted-foreground">
            Support members in achieving Microsoft certifications and becoming Microsoft Learn Student Ambassadors.
          </p>
        </div>

        <div className="motion-fade animate-in fade-in-0 slide-in-from-right-5">
          <div className="mb-4 w-12 h-12 bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-md">
            <CircuitBoard className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-muted-foreground">
            Contribute to the university's vision by advocating for technological solutions that enhance national resources.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>

      {/* Our History Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Our History
            </h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to a thriving community of tech
              enthusiasts.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 dark:bg-blue-900/50"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Foundation",
                  description:
                    "The Microsoft Club of Uva Wellassa University was founded in 2024 by a group of passionate students who recognized the potential of Microsoft technologies to shape the future of the tech industry.",
                  // image: "/placeholder.svg?height=300&width=500&text=2015",
                  image: "/Foundation.jpg", //Added the image in Founding Section
                  position: "left",
                },
                {
                  year: "2025",
                  title: "AGM",
                  description:
                    "The Annual General Meeting. held at the beginning of 2025, marked the official launch of the Microsoft Club of Uva Wellassa University. It celebrated the beginning of the club's journey and introduced the initial executive committee, setting the stage for impactful activities ahead.",
                  // image: "/placeholder.svg?height=300&width=500&text=2017",
                  image: "/AGM.jpg", //Added the image in AGM Section
                  position: "right",
                },
                {
                  year: "2025",
                  title: "Ruhunu Session",
                  description:
                    "In March 2025, a collaborative event was held between the MS Club of Uva Wellassa University and the ICT Students' Circle of the University of Ruhuna. The event focused on knowledge sharing, networking, and professional development through interactive sessions and activities that promoted collaboration and enhanced the learning experience  for students from both universities.",
                  // image: "/placeholder.svg?height=300&width=500&text=2019",
                  image: "/Ruhunu Session.jpg", //Added the image in Ruhuna Session Section
                  position: "left",
                },
                // {
                //   year: "2021",
                //   title: "Virtual Transformation",
                //   description:
                //     "Successfully transitioned to virtual events during the pandemic, reaching a wider audience and expanding our community.",
                //   image: "/placeholder.svg?height=300&width=500&text=2021",
                //   position: "right",
                // },
                // {
                //   year: "2023",
                //   title: "Today",
                //   description:
                //     "Now a thriving community with over 500 members, regular events, and strong industry connections.",
                //   image: "/placeholder.svg?height=300&width=500&text=2023",
                //   position: "left",
                // },
              ].map((item, index) => (
                // <div
                //   key={item.year}
                //   className="relative z-10 motion-fade animate-in fade-in-0"
                //   style={{ animationDelay: `${index * 100}ms` }}
                // >
                <div  
                  key={`${item.year}-${index}`}//fixed "duplicate key" warning
                  className="relative z-10 motion-fade animate-in fade-in-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`flex flex-col ${
                      item.position === "left"
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                      <div
                        className={`relative w-full max-w-sm ${
                          item.position === "left" ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <div className="relative aspect-video rounded-xl overflow-hidden depth-2 hover:depth-3 transition-all duration-300">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm z-20">
                      {item.year}
                    </div>

                    <div className="md:w-1/2 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 depth-2 border border-white/20 dark:border-white/5">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our club and activities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 depth-3 border border-white/20 dark:border-white/5 motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">
                  How can I join the Microsoft Student Club?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  You can join by registering through our website or attending
                  one of our open events. Membership is open to all students at
                  our university, regardless of major or technical background.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">
                  Are there any membership fees?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                A modest membership fee is required to join the Microsoft Student Club, which helps fund
                various club activities and resources.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">
                  Do I need to know programming to join?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  No prior programming knowledge is required. We welcome
                  students of all skill levels and provide resources for
                  beginners to get started with Microsoft technologies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">
                  How can I become a board member?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Board member selections happen annually. Active members who
                  show dedication and initiative are encouraged to apply when
                  positions become available. Watch for announcements at the
                  beginning of each academic year.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">
                  Does the club provide internship opportunities?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  While we don't directly offer internships, we frequently share
                  opportunities from Microsoft and partner companies. Our
                  networking events also connect students with recruiters and
                  professionals who can facilitate internship opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions or want to learn more? Reach out to us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Email",
                content: ["info@msclub.edu", "events@msclub.edu"],
                icon: <Mail className="h-6 w-6 text-blue-600" />,
                delay: 0,
              },
              {
                title: "Location",
                content: [
                  "University Campus",
                  "Tech Building, Room 101",
                  "Badulla, Sri Lanka",
                ],
                icon: <MapPin className="h-6 w-6 text-blue-600" />,
                delay: 100,
              },
              {
                title: "Office Hours",
                content: [
                  "Monday - Friday: 10:00 AM - 4:00 PM",
                  "Weekend: Closed",
                ],
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                delay: 200,
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="depth-2 hover:depth-3 transition-all duration-300 border-none bg-white/80 dark:bg-black/40 backdrop-blur-sm motion-fade animate-in fade-in-0 slide-in-from-bottom-5"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <div className="space-y-1">
                    {item.content.map((line, i) => (
                      <p key={i} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}

// Helper components for icons
function Code(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function Mail(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
