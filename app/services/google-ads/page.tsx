import type { Metadata } from 'next'
import GoogleAdsPageClient from '@/components/pages/GoogleAdsPageClient'

export const metadata: Metadata = {
  title: 'Professional Google Ads Management Services',
  description: 'Expert Google Ads management services that drive qualified traffic and maximize ROI. Strategic PPC campaigns, keyword research, ad optimization, and detailed reporting by certified professionals.',
  keywords: 'Google Ads management USA, PPC campaigns United States, Google advertising agency, search engine marketing SEM, pay-per-click advertising, digital marketing services, ROI optimization, keyword research tool, ad optimization specialist, conversion tracking analytics, Google Ads expert, PPC management company, search marketing consultant, Google AdWords professional, paid search advertising',
  openGraph: {
    title: 'Professional Google Ads Management Services | Aptiro LLC',
    description: 'Expert Google Ads management services that drive qualified traffic and maximize ROI. Strategic PPC campaigns with proven results.',
    url: 'https://aptiroglobal.com/services/google-ads',
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
    canonical: 'https://aptiroglobal.com/services/google-ads',
  },
}

export default function GoogleAdsPage() {
  return <GoogleAdsPageClient />
}


