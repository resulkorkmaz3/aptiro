// Type definitions for the application

export interface Service {
  id: string
  title: string
  titleTr: string
  slug: string
  description: string
  descriptionTr: string
  features: string[]
  icon?: string
  image?: string
  order: number
  isActive: boolean
  metadata?: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

export interface Portfolio {
  id: string
  title: string
  titleTr: string
  slug: string
  client: string
  category: string
  description: string
  descriptionTr: string
  challenge?: string
  solution?: string
  results: string[]
  technologies: string[]
  images: string[]
  featuredImage?: string
  testimonial?: string
  testimonialAuthor?: string
  link?: string
  order: number
  isFeatured: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Testimonial {
  id: string
  author: string
  company?: string
  position?: string
  content: string
  contentTr: string
  rating: number
  image?: string
  order: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Settings {
  id: string
  whatsappNumber: string
  businessEmail: string
  businessPhone: string
  businessAddress: string
  businessHours: Record<string, any>
  socialLinks: Record<string, string>
  createdAt: Date
  updatedAt: Date
}

export interface SEOData {
  id: string
  page: string
  title: string
  titleTr: string
  description: string
  descriptionTr: string
  keywords: string[]
  ogImage?: string
  structuredData?: Record<string, any>
  customMeta: Array<{ name: string; content: string }>
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: string
  name: string
  email?: string
  phone?: string
  subject?: string
  message: string
  source: 'website' | 'whatsapp' | string
  status: 'new' | 'contacted' | 'converted' | 'archived'
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Admin {
  id: string
  email: string
  name?: string
  createdAt: Date
  updatedAt: Date
}

// Global type augmentations
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

