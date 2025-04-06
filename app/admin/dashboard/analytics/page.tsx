import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, Download, TrendingUp, Users } from "lucide-react"

// Mock analytics data
const eventAttendanceData = [
  {
    id: 101,
    title: "Introduction to GitHub",
    date: "May 20, 2023",
    registered: 22,
    attended: 18,
    attendanceRate: 81.8,
    category: "Development",
    breakdown: {
      university: 16,
      other: 6,
      yearOfStudy: {
        "1st Year": 5,
        "2nd Year": 7,
        "3rd Year": 6,
        "4th Year": 3,
        Graduate: 1,
      },
      degree: {
        "Computer Science": 10,
        "Information Systems": 5,
        "Computer Engineering": 3,
        "Data Science": 2,
        Other: 2,
      },
    },
  },
  {
    id: 102,
    title: "VS Code Deep Dive",
    date: "May 12, 2023",
    registered: 18,
    attended: 15,
    attendanceRate: 83.3,
    category: "Development",
    breakdown: {
      university: 14,
      other: 4,
      yearOfStudy: {
        "1st Year": 3,
        "2nd Year": 5,
        "3rd Year": 7,
        "4th Year": 2,
        Graduate: 1,
      },
      degree: {
        "Computer Science": 8,
        "Information Systems": 4,
        "Computer Engineering": 3,
        "Data Science": 1,
        Other: 2,
      },
    },
  },
  {
    id: 103,
    title: "Microsoft Imagine Cup Info Session",
    date: "May 5, 2023",
    registered: 35,
    attended: 28,
    attendanceRate: 80.0,
    category: "Competition",
    breakdown: {
      university: 30,
      other: 5,
      yearOfStudy: {
        "1st Year": 8,
        "2nd Year": 10,
        "3rd Year": 12,
        "4th Year": 4,
        Graduate: 1,
      },
      degree: {
        "Computer Science": 15,
        "Information Systems": 8,
        "Computer Engineering": 5,
        "Data Science": 4,
        Other: 3,
      },
    },
  },
]

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex gap-2">
          <Select defaultValue="last3months">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last3months">Last 3 Months</SelectItem>
              <SelectItem value="last6months">Last 6 Months</SelectItem>
              <SelectItem value="lastyear">Last Year</SelectItem>
              <SelectItem value="alltime">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Total Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">524</div>
                <p className="text-sm text-muted-foreground">Total Attendees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">82%</div>
                <p className="text-sm text-muted-foreground">Avg. Attendance Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">43.7</div>
                <p className="text-sm text-muted-foreground">Avg. Attendees/Event</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Event Attendance Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Event Attendance Analysis</CardTitle>
          <CardDescription>Detailed breakdown of attendance for past events.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="attendance">
            <TabsList className="mb-4">
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="attendance" className="space-y-4">
              <div className="rounded-md border">
                <div className="p-4 bg-muted/50">
                  <h3 className="font-medium">Past Events Attendance</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-6">
                    {eventAttendanceData.map((event) => (
                      <div key={event.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm text-muted-foreground">{event.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {event.attended}/{event.registered}
                            </div>
                            <div className="text-sm text-muted-foreground">{event.attendanceRate}% Attendance</div>
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-600"
                            style={{ width: `${event.attendanceRate}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Attendance by Category</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Attendance breakdown by event category
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Attendance Rate Over Time</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Attendance rate trend over time
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Attendee Breakdown by Student Type</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: UWU vs External Students
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Attendee Breakdown by Year of Study</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Distribution across years of study
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Attendee Breakdown by Degree Program</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Distribution across degree programs
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">External Attendees by Institution</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Distribution of external attendees by institution
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              <div className="rounded-md border">
                <div className="p-4 bg-muted/50">
                  <h3 className="font-medium">Event Popularity Trend</h3>
                </div>
                <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                  Chart: Registration numbers over time
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Most Popular Event Categories</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Popularity ranking of event categories
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="p-4 bg-muted/50">
                    <h3 className="font-medium">Attendance Growth</h3>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center text-muted-foreground">
                    Chart: Month-over-month attendance growth
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Event Details */}
      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Select an event to view detailed attendance analytics.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent>
                {eventAttendanceData.map((event) => (
                  <SelectItem key={event.id} value={event.id.toString()}>
                    {event.title} ({event.date})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="text-center py-12 text-muted-foreground">
              <p>Select an event to view detailed analytics</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

