import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Calendar,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  PenSquare,
  Settings,
  Users,
} from "lucide-react"

const navItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: "Events",
    href: "/admin/dashboard/events",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Members",
    href: "/admin/dashboard/members",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Blog",
    href: "/admin/dashboard/blog",
    icon: <PenSquare className="h-5 w-5" />,
  },
  {
    name: "Analytics",
    href: "/admin/dashboard/analytics",
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    name: "Messages",
    href: "/admin/dashboard/messages",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/admin/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar with Acrylic effect and UWU aesthetics */}
      <aside className="fixed inset-y-0 z-10 hidden w-64 flex-shrink-0 acrylic depth-2 md:sticky md:flex md:flex-col uwu-tea-pattern">
        <div className="flex h-14 items-center gap-2 border-b px-4 uwu-train-track-divider">
          <Link href="/admin/dashboard" className="flex items-center gap-2 reveal">
            <div className="relative h-8 w-8 overflow-hidden rounded-md">
              <Image
                src="https://msclub-uwu.netlify.app/logo.png"
                alt="MS Club Logo"
                width={30}
                height={30}
                className="h-8 w-8 transition-transform hover:scale-110 duration-300"
              />
            </div>
            <span className="font-semibold">MS Club UWU Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <Button variant="ghost" className="w-full justify-start uwu-tea-card">
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4 uwu-train-track-divider">
          <div className="mb-4 text-xs text-muted-foreground text-center">
            <p>Uva Wellassa University</p>
            <p>Badulla, Sri Lanka</p>
          </div>
          <Button variant="outline" className="w-full justify-start text-[#E74C3C]" asChild>
            <Link href="/admin/login">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Mobile Header with Acrylic effect */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b acrylic depth-2 px-4 md:hidden uwu-train-track-divider">
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <Image
            src="https://msclub-uwu.netlify.app/logo.png"
            alt="MS Club Logo"
            width={30}
            height={30}
            className="h-8 w-8"
          />
          <span className="font-semibold">MS Club UWU Admin</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background uwu-scenic-gradient">{children}</main>
    </div>
  )
}

