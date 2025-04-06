import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="MS Club Logo" width={50} height={50} className="h-12 w-12" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight">Admin Login</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">Sign in to access the admin dashboard</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-card px-6 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" autoComplete="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" autoComplete="current-password" required />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <Link href="/admin/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/admin/dashboard">Sign in</Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

