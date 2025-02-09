"use client"

import { useState } from "react"
import { Search, Heart, ShoppingCart, User, ChevronDown, Menu } from "lucide-react"
import Link from "next/link"
import { PiDevicesDuotone } from "react-icons/pi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="w-full mb-8">
      {/* Top Banner */}
      <div className="w-full bg-[#272343] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            <span>✓</span> Free Shipping On All Orders Over $50
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              Eng <ChevronDown className="h-4 w-4" />
            </div>
            
            {!isLoggedIn && (
              <Link href='/login'>
                <button className="flex items-center gap-2 ">
                Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/">
           <div className="flex items-center">
             <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
            <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
         </div>
         </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#029fae]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-[#272343]" />
              <span className="absolute -top-2 -right-2 bg-[#029fae] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="/wishlist">
              <Heart className="h-6 w-6 text-[#272343]" />
            </Link>
            <Link href="/account">
              <User className="h-6 w-6 text-[#272343]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 text-[#272343] font-medium">
              <Menu className="h-6 w-6" />
              All Categories
              <ChevronDown className="h-4 w-4" />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[#272343] hover:text-[#029fae]">
                Home
              </Link>
              <Link href="/products" className="text-[#272343] hover:text-[#029fae]">
                Shop
              </Link>
              <Link href="/products" className="text-[#272343] hover:text-[#029fae]">
                Product
              </Link>
              
              <Link href="/about" className="text-[#272343] hover:text-[#029fae]">
                About
              </Link>
            </nav>

            <div className="text-[#272343]">
              Contact: <span className="font-medium">(808) 555-0111</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


