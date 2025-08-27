import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHeroSection from '@/components/sections/AboutHeroSection'
import AboutStorySection from '@/components/sections/AboutStorySection'
import AboutValuesSection from '@/components/sections/AboutValuesSection'
import AboutTeamSection from '@/components/sections/AboutTeamSection'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Us - Expert Digital Marketing Team',
  description: 'Learn about Aptiro LLC, your trusted partner for Google Ads management, web design, and e-commerce solutions. Based in Albuquerque, New Mexico.',
  keywords: [
    'about aptiro llc',
    'digital marketing team',
    'google ads experts',
    'web design company',
    'albuquerque digital marketing',
    'our story',
    'mission values'
  ],
}

const settings = {
  whatsappNumber: '+16288006818',
  email: 'contact@aptiro.com',
  address: '1209 MOUNTAIN ROAD PL NE, STE N, ALBUQUERQUE, NM 87110'
}

export default function AboutPage() {
  return (
    <>
      <Header whatsappNumber={settings.whatsappNumber} />
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutValuesSection />
        <AboutTeamSection whatsappNumber={settings.whatsappNumber} />
      </main>
      <Footer 
        whatsappNumber={settings.whatsappNumber}
        email={settings.email}
      />
      <WhatsAppButton 
        phoneNumber={settings.whatsappNumber}
        message="Hi! I'd like to know more about your company."
      />
    </>
  )
}

