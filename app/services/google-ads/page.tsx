import type { Metadata } from 'next'
import GoogleAdsPageClient from '@/components/pages/GoogleAdsPageClient'

export const metadata: Metadata = {
  title: 'Professional Google Ads Management Services | Aptiro LLC',
  description: 'Expert Google Ads management services that drive qualified traffic and maximize ROI. Strategic PPC campaigns, keyword research, ad optimization, and detailed reporting by certified professionals.',
  keywords: 'Google Ads management, PPC campaigns, Google advertising, search engine marketing, pay-per-click, digital marketing, ROI optimization, keyword research, ad optimization, conversion tracking',
  openGraph: {
    title: 'Professional Google Ads Management Services | Aptiro LLC',
    description: 'Expert Google Ads management services that drive qualified traffic and maximize ROI. Strategic PPC campaigns with proven results.',
    url: 'https://aptiro.com/services/google-ads',
    siteName: 'Aptiro LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Google Ads Management Services | Aptiro LLC',
    description: 'Expert Google Ads management services that drive qualified traffic and maximize ROI.',
  },
  alternates: {
    canonical: 'https://aptiro.com/services/google-ads',
  },
}

export default function GoogleAdsPage() {
  return <GoogleAdsPageClient />
}


