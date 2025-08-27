import type { Metadata } from 'next'
import EcommercePageClient from '@/components/pages/EcommercePageClient'

export const metadata: Metadata = {
  title: 'Professional E-Commerce Business Operations | Aptiro LLC',
  description: 'Complete e-commerce business management across Amazon, eBay, Shopify and our global platform. Professional customer service, inventory management, and sales optimization.',
  keywords: 'e-commerce management, Amazon seller services, eBay business management, Shopify operations, online store management, e-commerce customer service, product listing optimization, marketplace management',
  openGraph: {
    title: 'Professional E-Commerce Business Operations | Aptiro LLC',
    description: 'Complete e-commerce business management across multiple platforms with professional customer service and guaranteed results.',
    url: 'https://aptiro.com/services/ecommerce',
    siteName: 'Aptiro LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional E-Commerce Business Operations | Aptiro LLC',
    description: 'Complete e-commerce business management across multiple platforms.',
  },
  alternates: {
    canonical: 'https://aptiro.com/services/ecommerce',
  },
}

export default function EcommercePage() {
  return <EcommercePageClient />
}
