import type { Metadata } from 'next'
import WebDesignPageClient from '@/components/pages/WebDesignPageClient'

export const metadata: Metadata = {
  title: 'Professional Web Design & Development Services | Aptiro LLC',
  description: 'Custom website design and development services that drive conversions. Responsive, fast, and SEO-optimized websites built by expert developers. Get your dream website today.',
  keywords: 'web design, web development, custom websites, responsive design, website development, e-commerce websites, WordPress development, React development, NextJS, SEO optimization, website design',
  openGraph: {
    title: 'Professional Web Design & Development Services | Aptiro LLC',
    description: 'Custom website design and development services that drive conversions. Responsive, fast, and SEO-optimized websites built by expert developers.',
    url: 'https://aptiro.com/services/web-design',
    siteName: 'Aptiro LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design & Development Services | Aptiro LLC',
    description: 'Custom website design and development services that drive conversions.',
  },
  alternates: {
    canonical: 'https://aptiro.com/services/web-design',
  },
}

export default function WebDesignPage() {
  return <WebDesignPageClient />
}