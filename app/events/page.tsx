"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Clock,
  MapPin,
  ChevronRight,
  Cloud,
  Zap,
  Trophy,
  BarChart3,
  Code,
  Target,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebPageSchema } from "@/components/structured-data";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";
import { useState, useEffect } from "react";

function getUpcomingEvents() {
  // Simulated fetch; replace with actual API or DB call
  return [
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
    description:
      "Discover how AI and Copilot tools are transforming productivity. This session will showcase real-world use cases and demos on integrating AI into your daily workflow.",
    date: "June 18, 2025",
    time: "8:00 PM - 9:00 PM",
    location: "MS Teams (Online)",
    image: "/images/AI & Copilot Tools.png",
    category: "Productivity",
  },
  {
    id: 4,
    title: "HackMS' 2025",
    description:
      "A hands-on hackathon focused on building real-world solutions using Microsoft technologies. Network, code, and compete with the best!",
    date: "July 5-6, 2025",
    time: "All Day",
    location: "Uva Wellassa University",
    image: "/images/HackMs.png",
    category: "Hackathon",
  },
  {
    id: 5,
    title: "Power BI Masterclass",
    description:
      "Create stunning visualizations and analytics dashboards with Power BI.",
    date: "June 15, 2023",
    time: "3:30 PM - 6:30 PM",
    location: "Business School, Room 105",
    image: "/placeholder.svg?height=250&width=500",
    category: "Data",
  },
  {
    id: 6,
    title: "Summer Hackathon",
    description:
      "48-hour hackathon to build solutions using Microsoft technologies.",
    date: "June 24-25, 2023",
    time: "All Day",
    location: "Main Hall",
    image: "/placeholder.svg?height=250&width=500",
    category: "Hackathon",
  },
  {
    id: 7,
    title: "Microsoft 365 for Students",
    description:
      "Get the most out of Microsoft 365 apps for your academic success.",
    date: "July 5, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Library, Media Room",
    image: "/placeholder.svg?height=250&width=500",
    category: "Productivity",
  },
  ];
}

function getPastEvents() {
  return [
    {
    id: 101,
    title: "Annual General Meeting (AGM)",
    description: "The inaugural AGM of the club introduced the initial executive committee and laid the foundation for the club's future initiatives and direction.",
    date: "January 8, 2025",
    time: "6:00 PM onwards",
    location: "TLT",
    image: "/images/Annual General Meeting (AGM).jpeg",
    category: "Productivity",
  },
  {
    id: 102,
    title: "Azure Session Series – Unlocking the Power of the Cloud!",
    description:
      "A full-day session held at the University of Ruhuna, focused on Azure DevOps, Azure AI, and Azure 101. The event featured practical insights and demonstrations exploring the future of cloud technology.",
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
    description:
      "Master the most popular code editor with tips and extensions.",
    date: "May 12, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Engineering Building, Lab 3",
    image: "/placeholder.svg?height=250&width=500",
    category: "Development",
  },
  {
    id: 105,
    title: "Microsoft Imagine Cup Info Session",
    description:
      "Learn about the global student technology competition and how to participate.",
    date: "May 5, 2023",
    time: "4:00 PM - 5:30 PM",
    location: "Student Center, Meeting Room A",
    image: "/placeholder.svg?height=250&width=500",
    category: "Competition",
  },
  ];
}

const categories = [
  { name: "All", icon: Target, color: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700" },
  { name: "Cloud", icon: Cloud, color: "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50" },
  { name: "Productivity", icon: Zap, color: "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50" },
  { name: "Hackathon", icon: Trophy, color: "bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50" },
  { name: "Data", icon: BarChart3, color: "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50" },
  { name: "Development", icon: Code, color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50" },
  { name: "Competition", icon: Target, color: "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50" },
];

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
};

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [filteredUpcomingEvents, setFilteredUpcomingEvents] = useState<Event[]>([]);
  const [filteredPastEvents, setFilteredPastEvents] = useState<Event[]>([]);

  // Load events on component mount
  useEffect(() => {
    const upcoming = getUpcomingEvents();
    const past = getPastEvents();
    setUpcomingEvents(upcoming);
    setPastEvents(past);
    setFilteredUpcomingEvents(upcoming);
    setFilteredPastEvents(past);
  }, []);

  // Filter events when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredUpcomingEvents(upcomingEvents);
      setFilteredPastEvents(pastEvents);
    } else {
      setFilteredUpcomingEvents(
        upcomingEvents.filter(event => event.category === selectedCategory)
      );
      setFilteredPastEvents(
        pastEvents.filter(event => event.category === selectedCategory)
      );
    }
  }, [selectedCategory, upcomingEvents, pastEvents]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <WebPageSchema
        title="Events | MS Club UWU"
        description="Join our workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies."
        url="https://msclub-uwu.netlify.app/events"
      />

      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/AzureAppService-Desktop-Hero-BG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=1164&qlt=100&fmt=png-alpha&fit=constrain')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b opacity-80"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 hover:bg-white/30 border-none mb-4 text-blue-800 bg-blue-100">
              Upcoming Events
            </Badge>
            <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Discover Our Events
            </h1>
            <p className="text-gray-700 text-xl text-blue-100 mb-8">
              Join us for workshops, seminars, hackathons, and more to enhance
              your skills in Microsoft technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Buttons Section */}
      <section className="py-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Browse by Category
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Filter events by your areas of interest
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isSelected = selectedCategory === category.name;
                return (
                  <Button
                    key={category.name}
                    variant="ghost"
                    onClick={() => handleCategoryClick(category.name)}
                    className={`${
                      isSelected 
                        ? category.color.replace('hover:', '') + ' ring-2 ring-current/30 scale-105' 
                        : category.color
                    } flex flex-col items-center justify-center h-20 p-3 rounded-xl transition-all duration-200 motion-scale border border-transparent hover:border-current/20 cursor-pointer`}
                  >
                    <IconComponent className="h-5 w-5 mb-1" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="space-y-10">
          {/* Tabs Section */}
          <div className="flex justify-center">
            <Tabs defaultValue="upcoming" className="w-full max-w-7xl">
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

              {/* Events */}
              <TabsContent value="upcoming" className="mt-8">
                <UpcomingEvents upcomingEvents={filteredUpcomingEvents} />
                {filteredUpcomingEvents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      No upcoming events found for "{selectedCategory}" category.
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="past" className="mt-8">
                <PastEvents events={filteredPastEvents} />
                {filteredPastEvents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      No past events found for "{selectedCategory}" category.
                    </p>
                  </div>
                )}
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
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">
              Host Your Own Event
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Have an Idea for an Event?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for new ideas and collaborations. If you have
              a concept for a workshop, seminar, or any tech event, we'd love to
              hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white/20 depth-1 motion-scale">
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
  );
}