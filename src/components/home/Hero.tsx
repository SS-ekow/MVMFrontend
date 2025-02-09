"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Box, Truck, Clock, Shield } from "lucide-react"
import Link from "next/link"


const slides = [
  {
    id: 1,
    image:"",
    title: "",
    discount: "54%",
  },
  {
    id: 2,
    image:"",
    title: "Some Product",
    discount: "50%",
  },
  // Add more slides as needed
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative">
      {/* Gray Background Frame */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          <div className="absolute left-1/4 right-0 top-0 bottom-0 bg-gray-100 rounded-l-full" />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] py-12">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-12">
            <span className="text-sm tracking-wider text-gray-600">WELCOME TO TECKZONE</span>
            <h1 className="text-4xl   font-bold text-[#272343] leading-tight">
              Best place for all your tech needs
            </h1>
            <Link href="/products">
              <button className="bg-[#029fae] hover:bg-[#029fae]/90 text-white px-8 py-6 rounded-xl flex items-center text-2xl">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt="Featured Furniture"
                fill
                className="object-contain p-8"
                priority
              />
              {/* Discount Badge */}
              <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg">
                <span className="text-2xl font-bold text-red-500">54%</span>
                <span className="block text-sm text-gray-600">Discount</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-[#029fae]" : "bg-gray-300"}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Box className="h-6 w-6 text-[#029fae]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#272343]">Discount</h3>
              <p className="text-sm text-gray-500">Every week new sales</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Truck className="h-6 w-6 text-[#029fae]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#272343]">Free Delivery</h3>
              <p className="text-sm text-gray-500">100% Free for all orders</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Clock className="h-6 w-6 text-[#029fae]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#272343]">Great Support 24/7</h3>
              <p className="text-sm text-gray-500">We care your experiences</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Shield className="h-6 w-6 text-[#029fae]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#272343]">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% Secure Payment Method</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

