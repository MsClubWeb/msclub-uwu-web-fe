import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">MS</span>
              </div>
              <div>
                <h3 className="font-bold">Microsoft Club UWU</h3>
                <p className="text-xs text-muted-foreground">Uva Wellassa University</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering students through Microsoft technologies.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/share/1ChTtJGJUV/?mibextid=wwXIfr" 
                    className="w-8 h-8 rounded bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="https://www.instagram.com/msclubuwu?igsh=bjg1ODR5MjBkMTRu" 
                    className="w-8 h-8 rounded bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors">
                <Instagram size={16} />
              </Link>
              <Link href="https://youtube.com/@msclubofuwu?si=L4lVs1H6rViqhBeS" 
                    className="w-8 h-8 rounded bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-600 transition-colors">
                <Youtube size={16} />
              </Link>
              <Link href="https://www.linkedin.com/company/ms-club-of-uva-wellassa-university/" 
                    className="w-8 h-8 rounded bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/events", label: "Events" },
                { href: "/board", label: "Board" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <Link key={link.href} href={link.href} 
                      className="text-muted-foreground hover:text-blue-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:info@msclub.edu" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  info@msclub.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-600" />
                <a href="tel:+94551234567" className="text-muted-foreground hover:text-green-600 transition-colors">
                  +94 55 123 4567
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-purple-600 mt-0.5" />
                <p className="text-muted-foreground">
                  Uva Wellassa University<br />Badulla, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/30">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Microsoft Student Club of UWU. All rights reserved. • {' '}
              <a href="/developers" className="text-red-500 hover:text-red-600 transition-colors">
                Meet the Devs
              </a>
            </p>

            {/* Logos */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border p-1.5">
                <Image src="/footer/mlsa_logo.png" alt="MLSA" width={36} height={36} className="object-contain w-full h-full" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm border p-1.5">
                <Image src="/footer/msclub_uwu_logo.png" alt="MS Club UWU" width={36} height={36} className="object-contain w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}