export interface Product {
  id: number
  title: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

export interface ProductCardProps extends Product {
  onAddToCart?: () => void
  onAddToWishlist?: () => void
}