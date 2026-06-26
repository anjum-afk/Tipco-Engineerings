export interface Spec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  categorySlug: string
  shortDesc: string
  description: string
  image: string
  images: string[]
  specs: Spec[]
  applications: string[]
  industries: string[]
}

export interface Category {
  slug: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  rating: number
}

export interface Stat {
  value: string
  label: string
}

export interface Industry {
  slug: string
  name: string
  desc: string
}

export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}
