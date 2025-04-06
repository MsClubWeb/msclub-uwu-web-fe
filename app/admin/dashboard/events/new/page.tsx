import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ImagePlus, MapPin, Users } from "lucide-react"

export default function NewEventPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Create New Event</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Fill in the details below to create a new event.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" placeholder="e.g., Azure Cloud Workshop" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cloud">Cloud</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="productivity">Productivity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Provide a detailed description of the event" rows={5} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="date" type="date" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="time" type="time" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="location" placeholder="e.g., Tech Building, Room 203" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="capacity" type="number" min="1" placeholder="e.g., 30" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Event Image</Label>
              <div className="flex items-center gap-4">
                <div className="border rounded-lg h-32 w-32 flex items-center justify-center bg-muted">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <Input id="image" type="file" accept="image/*" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended size: 1200x630 pixels. Max file size: 2MB.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="registration-link">Registration Link</Label>
              <Input id="registration-link" placeholder="e.g., https://forms.office.com/..." />
              <p className="text-xs text-muted-foreground mt-1">
                Leave empty if registrations will be managed on the website.
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/dashboard/events">Cancel</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Create Event</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

