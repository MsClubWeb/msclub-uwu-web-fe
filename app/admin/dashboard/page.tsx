import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Calendar, Clock, Users, MessageSquare, ArrowUpRight, BarChart4, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/admin/dashboard/events/new">Create Event</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/dashboard/blog/new">New Blog Post</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">524</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Next event in 3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Website Visits</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,845</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">18%</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 require urgent attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Upcoming Events */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="relative mt-1">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">New member registration</p>
                  <p className="text-sm text-muted-foreground">Jason Miller joined the club</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    15 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative mt-1">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">New blog post published</p>
                  <p className="text-sm text-muted-foreground">"Getting Started with Azure for Students"</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />1 hour ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative mt-1">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Event registration</p>
                  <p className="text-sm text-muted-foreground">15 new registrations for Azure Workshop</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />3 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative mt-1">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Website update</p>
                  <p className="text-sm text-muted-foreground">Home page and About section updated</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    Yesterday
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Button variant="ghost" size="sm" className="text-blue-600">
                View all activity
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Azure Cloud Workshop</p>
                    <Badge className="bg-blue-600">Cloud</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    June 10, 2023
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    2:00 PM - 5:00 PM
                  </p>
                  <p className="text-xs">
                    <span className="font-medium">25/30</span> Registered
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Power BI Masterclass</p>
                    <Badge className="bg-blue-600">Data</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    June 15, 2023
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    3:30 PM - 6:30 PM
                  </p>
                  <p className="text-xs">
                    <span className="font-medium">18/25</span> Registered
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Summer Hackathon</p>
                    <Badge className="bg-blue-600">Hackathon</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    June 24-25, 2023
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    All Day
                  </p>
                  <p className="text-xs">
                    <span className="font-medium">45/100</span> Registered
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Button variant="ghost" size="sm" className="text-blue-600" asChild>
                <Link href="/admin/dashboard/events">
                  Manage events
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart4 className="mr-2 h-5 w-5" />
            Website Analytics Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground text-sm">
            Analytics chart would be displayed here.
            <br />
            Showing page views and user engagement metrics.
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-xs font-medium text-muted-foreground">Page Views</div>
              <div className="mt-1 text-xl font-bold">12,543</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs font-medium text-muted-foreground">Unique Visitors</div>
              <div className="mt-1 text-xl font-bold">4,826</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs font-medium text-muted-foreground">Bounce Rate</div>
              <div className="mt-1 text-xl font-bold">38.2%</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs font-medium text-muted-foreground">Avg. Session</div>
              <div className="mt-1 text-xl font-bold">2:45</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

