import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from '@mui/material'
import { PiDevicesDuotone } from "react-icons/pi";


const categoryLinks = [
  { label: "Sofa", href: "/category/sofa" },
  { label: "Armchair", href: "/category/armchair" },
  { label: "Wing Chair", href: "/category/wing-chair" },
  { label: "Desk Chair", href: "/category/desk-chair" },
  { label: "Wooden Chair", href: "/category/wooden-chair" },
  { label: "Park Bench", href: "/category/park-bench" },
]

const supportLinks = [
  { label: "Help & Support", href: "/help-support" },
  { label: "Tearms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Help", href: "/help" },

]

export default function Footer() {
  return (
    <footer className="bg-blue-400 max-h-[40vh] overflow-y-hidden mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-3">
            <Link href="/">
           <div className="flex items-center">
             <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
            <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
         </div>
         </Link>
            <p className="text-sm text-white line-clamp-2">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus
            </p>
            <div className="flex gap-3">
              <Link href="#" className="text-white hover:text-[#029fae]">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-[#029fae]">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-[#029fae]">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-[#029fae]">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Category Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">CATEGORY</h3>
            <ul className="space-y-2 text-sm">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:text-[#029fae]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:text-[#029fae]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">NEWSLETTER</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 h-9 text-sm px-4 border-1 rounded-md" />
                <Button className="bg-blue-500 hover:bg-[#029fae]/90 h-9 text-sm rounded-md">Subscribe</Button>
              </div>
              <p className="text-xs text-white line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  )
}

