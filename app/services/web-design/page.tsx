import type { Metadata } from 'next'
import WebDesignPageClient from '@/components/pages/WebDesignPageClient'

export const metadata: Metadata = {
  title: 'Professional Web Design & Development Services',
  description: 'Custom website design and development services that drive conversions. Responsive, fast, and SEO-optimized websites built by expert developers. Get your dream website today.',
  keywords: 'web design USA, web development United States, custom websites design, responsive web design, website development company, e-commerce web development, WordPress development services, React development agency, NextJS web development, SEO optimized websites, professional website design, mobile responsive design, custom web applications, web design agency, website redesign services',
  openGraph: {
    title: 'Professional Web Design & Development Services | Aptiro LLC',
    description: 'Custom website design and development services that drive conversions. Responsive, fast, and SEO-optimized websites built by expert developers.',
    url: 'https://aptiroglobal.com/services/web-design',
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
    canonical: 'https://aptiroglobal.com/services/web-design',
  },
}

export default function WebDesignPage() {
  return <WebDesignPageClient />
}