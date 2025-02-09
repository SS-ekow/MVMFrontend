"use client"

import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Button } from '@mui/material';
import Link from "next/link";

interface ProductCardProps {
  title: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isSale?: boolean
  onAddToCart?: () => void
  onAddToWishlist?: () => void
}

export function ProductCard({
  title,
  price,
  originalPrice,
  image,
  isNew,
  isSale,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Link href={`/product/${title}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        </Link>

        {/* Status Badge */}
        {isNew && (
          <span className="absolute left-4 top-4 rounded bg-[#01ad5a] px-2 py-1 text-xs font-medium text-white">
            New
          </span>
        )}
        {isSale && (
          <span className="absolute left-4 top-4 rounded bg-[#f5813f] px-2 py-1 text-xs font-medium text-white">
            Sales
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={onAddToWishlist}
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-900 shadow-sm hover:bg-gray-50"
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* Quick Add Button - Shows on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Button onClick={onAddToCart} className="w-full bg-white text-[#272343] hover:bg-gray-50">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-[#272343]">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-[#272343]">${price}</p>
            {originalPrice && <p className="text-sm text-gray-500 line-through">${originalPrice}</p>}
          </div>
        </div>
        <Button
          onClick={onAddToCart}
          size="small"
          className="h-10 w-10 rounded-lg bg-[#029fae] text-white hover:bg-[#029fae]/90"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

