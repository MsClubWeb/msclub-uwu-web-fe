import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebPageSchema } from "@/components/structured-data";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";
import { upcomingEvents, pastEvents } from "./events";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";

export const metadata: Metadata = {
  title: "Events | MS Club UWU",
  description:
    "Join our workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app/events",
  },
  openGraph: {
    title: "Events | MS Club UWU",
    description:
      "Join our workshops, seminars, hackathons, and more to enhance your skills in Microsoft technologies.",
    url: "https://msclub-uwu.netlify.app/events",
    type: "website",
  },
};

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

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#50e6ff]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-[#0078D4]/20 blur-3xl"></div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4">
              Upcoming Events
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Discover Our Events
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join us for workshops, seminars, hackathons, and more to enhance
              your skills in Microsoft technologies.
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
                  <Button className="bg-blue-600 hover:bg-blue-700 reveal motion-scale h-11">
                    Filter
                  </Button>
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

              {/* Events using separate components */}
              <TabsContent value="upcoming" className="mt-8">
                <UpcomingEvents upcomingEvents={upcomingEvents} />
              </TabsContent>
              <TabsContent value="past" className="mt-8">
                <PastEvents events={pastEvents} />
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
                className="border-white text-blue-600 hover:bg-white/20 depth-1 motion-scale"
              >
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