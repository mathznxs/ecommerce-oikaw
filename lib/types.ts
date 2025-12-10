export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: string
  image_url: string
  images: string[]
  sizes: string[]
  colors: string[]
  stock: number
  featured: boolean
  created_at: string
}

export interface Review {
  id: string
  product_id: string
  user_id: string
  user_email: string
  rating: number
  comment: string
  created_at: string
}
