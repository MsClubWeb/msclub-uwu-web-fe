import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  Code, 
  Lightbulb, 
  Target,
  ChevronRight,
  CheckCircle,
  Gift,
  Star,
  Timer,
  Zap,
  Award,
  Heart,
  Coffee,
  Wifi,
  Utensils
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HackMS'25 - Code. Collaborate. Conquer. | MS Club UWU",
  description:
    "Join HackMS'25, our flagship hackathon event where students collaborate, innovate, and compete using Microsoft technologies to solve real-world problems.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/hackathon",
  },
  openGraph: {
    title: "HackMS'25 - Code. Collaborate. Conquer. | MS Club UWU",
    description:
      "Join HackMS'25, our flagship hackathon event where students collaborate, innovate, and compete using Microsoft technologies to solve real-world problems.",
    url: "https://msclub-uwu.netlify.app/hackathon",
    type: "website",
  },
};

const prizes = [
  {
    place: "1st Place",
    amount: "LKR 150,000",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    extras: ["Microsoft Surface Pro", "Azure Credits", "Mentorship Program"]
  },
  {
    place: "2nd Place", 
    amount: "LKR 100,000",
    icon: Award,
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    extras: ["Microsoft Surface Laptop", "Azure Credits", "Certificate"]
  },
  {
    place: "3rd Place",
    amount: "LKR 75,000", 
    icon: Star,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    extras: ["Microsoft Accessories", "Azure Credits", "Certificate"]
  }
];

const timeline = [
  {
    time: "Day 1 - 9:00 AM",
    title: "Registration & Check-in",
    description: "Welcome breakfast and team registration"
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Event kickoff, rules explanation, and challenge reveal"
  },
  {
    time: "11:00 AM",
    title: "Hacking Begins!",
    description: "Teams start working on their solutions"
  },
  {
    time: "1:00 PM",
    title: "Lunch Break",
    description: "Networking lunch with mentors and participants"
  },
  {
    time: "6:00 PM",
    title: "Dinner & Networking",
    description: "Evening meal and mentor consultations"
  },
  {
    time: "Day 2 - 9:00 AM",
    title: "Final Sprint",
    description: "Last chance to polish your projects"
  },
  {
    time: "2:00 PM",
    title: "Project Submissions",
    description: "Submit your final projects and presentations"
  },
  {
    time: "3:00 PM",
    title: "Judging & Demos",
    description: "Present your solutions to the judges"
  },
  {
    time: "5:00 PM",
    title: "Awards Ceremony",
    description: "Winners announcement and prize distribution"
  }
];

const features = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Blazing fast internet connectivity for all participants"
  },
  {
    icon: Utensils,
    title: "Meals Included",
    description: "All meals, snacks, and beverages provided throughout the event"
  },
  {
    icon: Coffee,
    title: "24/7 Refreshments",
    description: "Coffee, energy drinks, and snacks available round the clock"
  },
  {
    icon: Heart,
    title: "Mentorship",
    description: "Expert mentors available to guide and support your team"
  }
];

export default function HackathonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6 text-lg px-4 py-2">
              March 15-16, 2025
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              HackMS'25
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
              Code. Collaborate. Conquer.
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Our flagship hackathon brings together students from all disciplines to collaborate, 
              innovate, and compete using Microsoft technologies to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 depth-2 motion-scale text-lg px-8">
                <Link href="#register">
                  Register Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 depth-1 motion-scale text-lg px-8">
                <Link href="#details">Learn More</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">48</div>
                <div className="text-blue-200 text-sm">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-blue-200 text-sm">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">LKR 325K</div>
                <div className="text-blue-200 text-sm">Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-blue-200 text-sm">Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              Event Details
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
              Everything You Need to Know
            </h2>
            <p className="text-muted-foreground text-lg">
              Get all the essential information about HackMS'25 and prepare for an amazing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">When</h3>
                <p className="text-muted-foreground mb-2">March 15-16, 2025</p>
                <p className="text-sm text-muted-foreground">48 hours of non-stop innovation</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Where</h3>
                <p className="text-muted-foreground mb-2">UWU Innovation Hub</p>
                <p className="text-sm text-muted-foreground">Uva Wellassa University, Badulla</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Who</h3>
                <p className="text-muted-foreground mb-2">University Students</p>
                <p className="text-sm text-muted-foreground">All skill levels welcome</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background"></div>
        
        <div className="container relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              Why Participate
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
              More Than Just a Competition
            </h2>
            <p className="text-muted-foreground text-lg">
              HackMS'25 offers unique opportunities for learning, networking, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-8">
                <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hands-on Innovation</h3>
                <p className="text-muted-foreground">
                  Take part in solving real-world challenges that matter. HackMS'25 is your chance to turn 
                  ideas into action and build something meaningful with guidance and support throughout the event.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-8">
                <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Diverse Team Building</h3>
                <p className="text-muted-foreground">
                  Work in teams with people from different backgrounds and skill sets. Whether you're a beginner 
                  or experienced, you'll learn from each other, share ideas, and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-8">
                <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rewards & Recognition</h3>
                <p className="text-muted-foreground">
                  Showcase your creativity and hard work for a chance to win amazing prizes. Top teams will get 
                  recognition, cool rewards, and the opportunity to highlight their projects to a broader audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              Prizes & Rewards
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
              Amazing Prizes Await
            </h2>
            <p className="text-muted-foreground text-lg">
              Compete for a total prize pool of LKR 325,000 plus exclusive Microsoft goodies and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {prizes.map((prize, index) => (
              <Card 
                key={index}
                className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 ${
                  index === 0 ? 'md:scale-105 md:-mt-4' : ''
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div className={`mb-6 w-16 h-16 rounded-full ${prize.bgColor} flex items-center justify-center mx-auto`}>
                    <prize.icon className={`h-8 w-8 ${prize.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{prize.place}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{prize.amount}</div>
                  <div className="space-y-2">
                    {prize.extras.map((extra, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {extra}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Plus special category prizes for Best UI/UX, Most Innovative Solution, and People's Choice Award!
            </p>
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none">
              <Gift className="h-4 w-4 mr-2" />
              Additional Sponsor Prizes
            </Badge>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background"></div>
        
        <div className="container relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              Event Schedule
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
              48 Hours of Innovation
            </h2>
            <p className="text-muted-foreground text-lg">
              Here's what to expect during the hackathon weekend.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0 mt-2"></div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-1 group-hover:depth-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">{item.time}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
              What's Included
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg">
              We've got you covered with all the essentials for a successful hackathon experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-1 hover:depth-2 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#005A9E]"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">
              Limited Spots Available
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Ready to Hack Your Way to Success?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Registration is now open! Secure your spot in HackMS'25 and be part of Sri Lanka's most exciting 
              student hackathon. Early bird discounts available until February 28th.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 depth-2 motion-scale text-lg px-8">
                <Link href="/register">
                  Register Your Team
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 depth-1 motion-scale text-lg px-8">
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                <span>Early Bird: LKR 2,500/person</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Regular: LKR 3,000/person</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}