

import { Truck, ShieldCheck, RotateCcw, ClockIcon as Clock24, Headphones } from 'lucide-react'

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Hero Section */}
        <div className="md:col-span-2 bg-blue-500 rounded-2xl p-8 text-white flex flex-col justify-center min-h-[500px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your One-Stop Tech Shopping Destination
          </h1>
          <p className="text-xl mb-8 text-blue-50">
            Discover the latest gadgets and electronics from trusted vendors worldwide. Shop with confidence and find the best deals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              
              className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg"
            >
              Shop Now
            </button>
            <button className="border-white text-white hover:bg-blue-600 px-4 py-2 rounded-lg"> Become a vendor</button>
          </div>
        </div>

        {/* Side Banners */}
        <div className="flex flex-col gap-6">
          {/* Top Banner */}
          <div className="bg-orange-400 rounded-2xl p-6 text-white flex flex-col justify-center min-h-[240px]">
            <h2 className="text-2xl font-bold mb-3">Flash Sales</h2>
            <p className="mb-4">Get up to 50% off on selected items today!</p>
            <button
              
              className="bg-white text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg w-fit"
            >
              View Deals
            </button>
          </div>

          {/* Bottom Banner */}
          <div className="bg-orange-400 rounded-2xl p-6 text-white flex flex-col justify-center min-h-[240px]">
            <h2 className="text-2xl font-bold mb-3">New Arrivals</h2>
            <p className="mb-4">Check out the latest tech products</p>
            <button
              
              className="bg-white px-4 py-2 rounded-lg text-orange-500 hover:bg-orange-50 w-fit"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Clock24 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

