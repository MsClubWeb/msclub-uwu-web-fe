import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Download, MoreHorizontal, Search } from "lucide-react"

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

export default function EventAttendeesPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)
  const attendees = getAttendees(params.id)
  const checkedInCount = attendees.filter((a) => a.checkedIn).length

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/admin/dashboard/events" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">{event.title} - Attendees</h2>
          <p className="text-muted-foreground">
            {event.date} • {event.time} • {event.location}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/admin/dashboard/events/${params.id}/attendees/check-in`}>Check-in Mode</Link>
          </Button>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{attendees.length}</div>
            <p className="text-sm text-muted-foreground">Total Registrations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{checkedInCount}</div>
            <p className="text-sm text-muted-foreground">Checked In</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{((checkedInCount / attendees.length) * 100).toFixed(0)}%</div>
            <p className="text-sm text-muted-foreground">Attendance Rate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Attendees</CardTitle>
          <CardDescription>Manage attendees and check-in status for this event.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search attendees..." className="h-9" />
            </div>
          </div>

          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Attendee</TableHead>
                  <TableHead>Student Info</TableHead>
                  <TableHead>Registration Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell>
                      <Checkbox checked={attendee.checkedIn} />
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{attendee.name}</div>
                      <div className="text-sm text-muted-foreground">{attendee.email}</div>
                      <div className="text-sm text-muted-foreground">{attendee.phone}</div>
                    </TableCell>
                    <TableCell>
                      {attendee.studentType === "university" ? (
                        <div>
                          <Badge>UWU Student</Badge>
                          <div className="text-sm mt-1">{attendee.degree}</div>
                          <div className="text-sm text-muted-foreground">{attendee.yearOfStudy}</div>
                        </div>
                      ) : (
                        <div>
                          <Badge variant="outline">External</Badge>
                          <div className="text-sm mt-1">{attendee.institute}</div>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{attendee.registrationDate}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={attendee.checkedIn ? "default" : "outline"}
                        className={attendee.checkedIn ? "bg-green-600" : ""}
                      >
                        {attendee.checkedIn ? "Checked In" : "Not Checked In"}
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
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Send Email</DropdownMenuItem>
                          <DropdownMenuItem>
                            {attendee.checkedIn ? "Mark as Not Checked In" : "Mark as Checked In"}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Remove Registration</DropdownMenuItem>
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

