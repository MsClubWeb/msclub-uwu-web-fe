import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function RegistrationConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-12">
      <div className="max-w-md mx-auto text-center">
        <Card className="depth-2 overflow-hidden motion-fade animate-in fade-in-0 slide-in-from-bottom-5">
          <div className="relative h-16 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          </div>
          <CardHeader>
            <div className="flex justify-center -mt-12 mb-4">
              <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center depth-3">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <CardTitle className="text-2xl">Registration Confirmed!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-green-50 rounded-md border border-green-100 mb-4">
              <p className="text-green-800">
                Thank you for registering for our event. We have sent a confirmation email with all the details.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              If you don't receive an email within 10 minutes, please check your spam folder or contact us.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4 border-t p-6">
            <Button asChild variant="outline" className="reveal motion-scale">
              <Link href="/events">Back to Events</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 reveal motion-scale">
              <Link href="/">Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

