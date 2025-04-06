"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Mock event data - in a real app, this would come from a database
const getEventById = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Azure Cloud Workshop",
    date: "June 10, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Building, Room 203",
    category: "Cloud",
  }
}

export default function EventRegistrationPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const event = getEventById(params.id)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [studentType, setStudentType] = useState("university")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const registrationData = {
      eventId: event.id,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      studentType: formData.get("studentType"),
      degree: formData.get("degree"),
      yearOfStudy: formData.get("yearOfStudy"),
      institute: formData.get("institute"),
      specialRequirements: formData.get("specialRequirements"),
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success message
    toast({
      title: "Registration Successful!",
      description: `You have been registered for ${event.title}. Check your email for confirmation.`,
    })

    setIsSubmitting(false)

    // Redirect after a short delay
    setTimeout(() => {
      router.push(`/events/${params.id}/confirmation`)
    }, 2000)
  }

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="depth-2 overflow-hidden">
          <div className="relative h-16 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <h1 className="text-xl font-bold text-white relative z-10">Event Registration</h1>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Register for {event.title}</CardTitle>
            <CardDescription>
              Please fill out the form below to register for this event.
              <div className="mt-2 text-sm p-3 bg-blue-50 rounded-md border border-blue-100">
                <div>
                  <strong>Date:</strong> {event.date}
                </div>
                <div>
                  <strong>Time:</strong> {event.time}
                </div>
                <div>
                  <strong>Location:</strong> {event.location}
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-sm">
                    1
                  </span>
                  Personal Information
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required className="reveal" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required className="reveal" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" required className="reveal" />
                </div>
              </div>

              {/* Student Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-sm">
                    2
                  </span>
                  Student Information
                </h3>

                <div className="space-y-2 p-4 bg-blue-50/50 rounded-md border border-blue-100/50">
                  <Label>Are you a student at: *</Label>
                  <RadioGroup
                    name="studentType"
                    defaultValue="university"
                    onValueChange={setStudentType}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-100/30 transition-colors">
                      <RadioGroupItem value="university" id="university" className="reveal" />
                      <Label htmlFor="university" className="cursor-pointer">
                        Uva Wellassa University
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-100/30 transition-colors">
                      <RadioGroupItem value="other" id="other" className="reveal" />
                      <Label htmlFor="other" className="cursor-pointer">
                        Other Institute
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {studentType === "university" ? (
                  <div className="grid gap-4 md:grid-cols-2 motion-fade animate-in fade-in-0">
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree Program *</Label>
                      <Select name="degree" required>
                        <SelectTrigger id="degree" className="reveal">
                          <SelectValue placeholder="Select degree" />
                        </SelectTrigger>
                        <SelectContent className="acrylic depth-2">
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="information-systems">Information Systems</SelectItem>
                          <SelectItem value="computer-engineering">Computer Engineering</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearOfStudy">Year of Study *</Label>
                      <Select name="yearOfStudy" required>
                        <SelectTrigger id="yearOfStudy" className="reveal">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent className="acrylic depth-2">
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 motion-fade animate-in fade-in-0">
                    <Label htmlFor="institute">Institute Name *</Label>
                    <Input id="institute" name="institute" required className="reveal" />
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-sm">
                    3
                  </span>
                  Additional Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">Special Requirements or Questions</Label>
                  <Textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    placeholder="Let us know if you have any special requirements or questions"
                    rows={3}
                    className="reveal"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline" asChild className="reveal motion-scale">
                <Link href={`/events/${params.id}`}>Cancel</Link>
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 reveal motion-scale"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Registering...
                  </span>
                ) : (
                  "Register Now"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}

