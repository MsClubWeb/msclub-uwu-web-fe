import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, GitlabIcon as GitHub } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background uwu-tea-pattern">
      <div className="container flex flex-col md:flex-row py-8 gap-8">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4 uwu-mountain-border pb-2">Microsoft Club of Uva Wellassa University</h3>
          <p className="text-muted-foreground max-w-md">
            Empowering students with Microsoft technologies and fostering a community of future tech leaders at Uva
            Wellassa University, nestled in the beautiful mountains of Badulla, Sri Lanka.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <GitHub size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-3 uwu-waterfall-accent pl-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-muted-foreground hover:text-primary">
                  Board
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3 uwu-waterfall-accent pl-3">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Email: info@msclub.edu</li>
              <li className="text-muted-foreground">Phone: +94 55 123 4567</li>
              <li className="text-muted-foreground">Address: Uva Wellassa University, Badulla, Sri Lanka</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t uwu-train-track-divider">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Microsoft Student Club of Uva Wellassa University. All rights reserved.</p>
          <p className="mt-1 text-xs">
            Located in the scenic hills of Badulla, surrounded by tea plantations, waterfalls, and mountain views.
          </p>
        </div>
      </div>
    </footer>
  )
}

