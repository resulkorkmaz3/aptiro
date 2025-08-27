import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

// In a real app, this would come from the database
const settings = {
  whatsappNumber: '+16288006818',
  email: 'contact@aptiroglobal.com',
  address: '1209 MOUNTAIN ROAD PL NE, STE N, ALBUQUERQUE, NM 87110'
}

export default function HomePage() {
  return (
    <>
      <Header whatsappNumber={settings.whatsappNumber} />
      <main>
        <HeroSection whatsappNumber={settings.whatsappNumber} />
        <AboutPreviewSection />
        <ServicesSection />
        <ContactSection 
          whatsappNumber={settings.whatsappNumber}
        />
      </main>
      <Footer 
        whatsappNumber={settings.whatsappNumber}
        email={settings.email}
      />
      <WhatsAppButton 
        phoneNumber={settings.whatsappNumber}
        message="Hi! I'm interested in your services."
      />
    </>
  )
}