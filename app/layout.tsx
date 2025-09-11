import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aptiroglobal.com'),
  title: {
    default: 'Aptiro LLC - Google Ads & Web Design Experts',
    template: '%s | Aptiro LLC'
  },
  description: 'Professional Google Ads management, web design, and e-commerce solutions. Based in Albuquerque, NM. Get results-driven digital marketing services.',
  keywords: [
    'Google Ads management',
    'web design',
    'e-commerce solutions',
    'digital marketing',
    'PPC advertising',
    'website development',
    'online advertising',
    'Albuquerque web design',
    'New Mexico digital marketing'
  ],
  authors: [{ name: 'Aptiro LLC' }],
  creator: 'Aptiro LLC',
  publisher: 'Aptiro LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aptiroglobal.com',
    siteName: 'Aptiro LLC',
    title: 'Aptiro LLC - Google Ads & Web Design Experts',
    description: 'Professional Google Ads management, web design, and e-commerce solutions. Get results-driven digital marketing services.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aptiro LLC - Digital Marketing Experts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aptiro LLC - Google Ads & Web Design Experts',
    description: 'Professional Google Ads management, web design, and e-commerce solutions.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f2937',
              color: '#fff',
              padding: '16px',
              borderRadius: '8px',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}