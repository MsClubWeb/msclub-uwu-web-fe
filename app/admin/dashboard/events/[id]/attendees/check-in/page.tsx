"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ArrowLeft, CheckCircle2, Search, UserCheck, UserX } from "lucide-react"

// Mock event data
const getEventById = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Azure Cloud Workshop",
    date: "June 10, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Building, Room 203",
    category: "Cloud",
    registered: 25,
    capacity: 30,
  }
}

// Mock attendees data
const getAttendees = (eventId: string) => {
  return [
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.wilson@example.edu",
      phone: "+94 76 123 4567",
      studentType: "university",
      degree: "Computer Science",
      yearOfStudy: "3rd Year",
      checkedIn: true,
      registrationDate: "May 25, 2023",
    },
    {
      id: 2,
      name: "James Taylor",
      email: "james.taylor@example.edu",
      phone: "+94 77 234 5678",
      studentType: "university",
      degree: "Information Systems",
      yearOfStudy: "2nd Year",
      checkedIn: true,
      registrationDate: "May 26, 2023",
    },
    {
      id: 3,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.edu",
      phone: "+94 71 345 6789",
      studentType: "university",
      degree: "Computer Engineering",
      yearOfStudy: "4th Year",
      checkedIn: false,
      registrationDate: "May 27, 2023",
    },
    {
      id: 4,
      name: "Noah Johnson",
      email: "noah.johnson@example.edu",
      phone: "+94 75 456 7890",
      studentType: "university",
      degree: "Data Science",
      yearOfStudy: "1st Year",
      checkedIn: false,
      registrationDate: "May 28, 2023",
    },
    {
      id: 5,
      name: "Ava Williams",
      email: "ava.williams@example.edu",
      phone: "+94 78 567 8901",
      studentType: "other",
      institute: "Eastern University",
      checkedIn: false,
      registrationDate: "May 29, 2023",
    },
  ]
}

export default function EventCheckInPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)
  const attendeesList = getAttendees(params.id)
  const [searchQuery, setSearchQuery] = useState("")
  const [attendees, setAttendees] = useState(attendeesList)
  const [recentCheckIns, setRecentCheckIns] = useState<any[]>([])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const query = searchQuery.toLowerCase()

    // Find the attendee
    const foundAttendee = attendeesList.find(
      (a) => a.email.toLowerCase() === query || a.name.toLowerCase().includes(query) || a.phone.includes(query),
    )

    if (foundAttendee) {
      // If already checked in
      if (foundAttendee.checkedIn) {
        toast({
          title: "Already Checked In",
          description: `${foundAttendee.name} has already been checked in.`,
          variant: "default",
        })
      } else {
        // Mark as checked in
        const updatedAttendees = attendees.map((a) => (a.id === foundAttendee.id ? { ...a, checkedIn: true } : a))
        setAttendees(updatedAttendees)

        // Add to recent check-ins
        setRecentCheckIns((prev) => [{ ...foundAttendee, checkedIn: true, timestamp: new Date() }, ...prev.slice(0, 4)])

        toast({
          title: "Check-In Successful",
          description: `${foundAttendee.name} has been checked in.`,
          variant: "default",
        })
      }
    } else {
      toast({
        title: "Attendee Not Found",
        description: "No registered attendee matches this search.",
        variant: "destructive",
      })
    }

    setSearchQuery("")
  }

  const checkedInCount = attendees.filter((a) => a.checkedIn).length

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2 reveal motion-scale">
            <Link href={`/admin/dashboard/events/${params.id}/attendees`} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Attendees List
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tighter">Check-In: {event.title}</h2>
          <p className="text-muted-foreground">
            {event.date} • {event.time} • {event.location}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="depth-2 overflow-hidden">
            <div className="relative h-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center px-6">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <h3 className="font-medium text-white relative z-10">Attendee Check-In</h3>
            </div>
            <CardContent className="p-6 space-y-6">
              <CardDescription>Search by name, email, or phone number to check in attendees.</CardDescription>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search attendees..."
                      className="pl-8 reveal"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 reveal motion-scale">
                    Check In
                  </Button>
                </div>
              </form>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Recent Check-Ins</h3>
                  <Badge className="acrylic">{new Date().toLocaleTimeString()}</Badge>
                </div>

                {recentCheckIns.length > 0 ? (
                  <div className="space-y-3">
                    {recentCheckIns.map((attendee, index) => (
                      <div
                        key={`${attendee.id}-${index}`}
                        className="flex items-center gap-3 p-3 rounded-md border bg-green-50/50 depth-1 motion-fade animate-in fade-in-0"
                      >
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{attendee.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(attendee.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground border rounded-md bg-muted/20">
                    <p>No recent check-ins</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 grid-cols-2">
            <Card className="depth-2 hover:depth-3 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{checkedInCount}</div>
                    <p className="text-sm text-muted-foreground">Checked In</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="depth-2 hover:depth-3 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <UserX className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{attendees.length - checkedInCount}</div>
                    <p className="text-sm text-muted-foreground">Not Checked In</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="depth-2 overflow-hidden">
            <div className="relative h-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center px-6">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <h3 className="font-medium text-white relative z-10">Check-In Progress</h3>
            </div>
            <CardContent className="p-6">
              <CardDescription>
                {((checkedInCount / attendees.length) * 100).toFixed(0)}% of registered attendees have checked in.
              </CardDescription>
              <div className="space-y-4 mt-4">
                <div className="h-4 w-full rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-blue-600 transition-all duration-500 ease-in-out"
                    style={{ width: `${(checkedInCount / attendees.length) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">{checkedInCount}</span> checked in
                  </div>
                  <div>
                    <span className="font-medium">{attendees.length}</span> total
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="depth-2 overflow-hidden">
            <div className="relative h-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center px-6">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <h3 className="font-medium text-white relative z-10">Quick Stats</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-muted-foreground">UWU Students</span>
                  <span className="font-medium">{attendees.filter((a) => a.studentType === "university").length}</span>
                </div>
                <div className="flex justify-between p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-muted-foreground">External Attendees</span>
                  <span className="font-medium">{attendees.filter((a) => a.studentType === "other").length}</span>
                </div>
                <div className="flex justify-between p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-muted-foreground">Check-In Rate</span>
                  <span className="font-medium">{((checkedInCount / attendees.length) * 100).toFixed(0)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

