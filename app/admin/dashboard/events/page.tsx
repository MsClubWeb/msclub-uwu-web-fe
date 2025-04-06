import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, MoreHorizontal, Plus, Search, Users } from "lucide-react"

// Simulated event data
const events = [
  {
    id: 1,
    title: "Azure Cloud Workshop",
    status: "Upcoming",
    date: "June 10, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Building, Room 203",
    category: "Cloud",
    registered: 25,
    capacity: 30,
  },
  {
    id: 2,
    title: "Power BI Masterclass",
    status: "Upcoming",
    date: "June 15, 2023",
    time: "3:30 PM - 6:30 PM",
    location: "Business School, Room 105",
    category: "Data",
    registered: 18,
    capacity: 25,
  },
  {
    id: 3,
    title: "Summer Hackathon",
    status: "Upcoming",
    date: "June 24-25, 2023",
    time: "All Day",
    location: "Main Hall",
    category: "Hackathon",
    registered: 45,
    capacity: 100,
  },
  {
    id: 4,
    title: "Microsoft 365 for Students",
    status: "Upcoming",
    date: "July 5, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Library, Media Room",
    category: "Productivity",
    registered: 12,
    capacity: 40,
  },
  {
    id: 101,
    title: "Introduction to GitHub",
    status: "Past",
    date: "May 20, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Building, Room 101",
    category: "Development",
    registered: 22,
    capacity: 25,
  },
  {
    id: 102,
    title: "VS Code Deep Dive",
    status: "Past",
    date: "May 12, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Engineering Building, Lab 3",
    category: "Development",
    registered: 18,
    capacity: 20,
  },
]

export default function EventsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Events Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
          <Link href="/admin/dashboard/events/new">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Events</CardTitle>
          <CardDescription>Manage your upcoming and past events. Create, edit, or delete events.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="h-9" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="cloud">Cloud</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="productivity">Productivity</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Registration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div className="font-medium">{event.title}</div>
                      <Badge className="mt-1">{event.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {event.time}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                        {event.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                        {event.registered}/{event.capacity}
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={event.status === "Upcoming" ? "default" : "outline"}
                        className={event.status === "Upcoming" ? "bg-green-600" : ""}
                      >
                        {event.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/events/${event.id}`}>View Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/events/${event.id}/edit`}>Edit Event</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/dashboard/events/${event.id}/attendees`}>Manage Attendees</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete Event</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

