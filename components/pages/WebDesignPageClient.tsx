'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaCode, 
  FaMobile, 
  FaRocket, 
  FaSearch, 
  FaPalette,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaLaptop,
  FaTabletAlt,
  FaDesktop,
  FaGlobe,
  FaLightbulb,
  FaTools,
  FaChartLine,
  FaBolt,
  FaHeart,
  FaAward,
  FaStar
} from 'react-icons/fa'
import { HiArrowRight, HiStar } from 'react-icons/hi'
import { getWhatsAppUrl } from '@/lib/utils'
import StructuredData from '@/components/seo/StructuredData'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const whatsappNumber = '+15053736924'
const whatsappUrl = getWhatsAppUrl(whatsappNumber, "Hi! I'm interested in your web design and development services.")

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design & Development Services',
  description: 'Custom website design and development services that drive conversions. Responsive, fast, and SEO-optimized websites built by expert developers.',
  provider: {
    '@type': 'Organization',
    name: 'Aptiro LLC',
    url: 'https://aptiroglobal.com',
    telephone: '+15053736924',
    email: 'contact@aptiroglobal.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1209 MOUNTAIN ROAD PL NE, STE N',
      addressLocality: 'ALBUQUERQUE',
      addressRegion: 'NM',
      postalCode: '87110',
      addressCountry: 'US'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '89'
    }
  },
  areaServed: 'United States',
  serviceType: 'Web Development Service',
  url: 'https://aptiroglobal.com/services/web-design',
  offers: {
    '@type': 'Offer',
    description: 'Professional web design and development with responsive design and SEO optimization',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    priceRange: '$$$'
  }
}

const benefits = [
  {
    icon: FaPalette,
    title: 'Custom Design',
    description: 'Unique, brand-focused designs that capture your business essence and engage your audience.'
  },
  {
    icon: FaMobile,
    title: 'Responsive Development',
    description: 'Websites that look perfect and function flawlessly on all devices and screen sizes.'
  },
  {
    icon: FaRocket,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance to ensure the best user experience and SEO rankings.'
  },
  {
    icon: FaSearch,
    title: 'SEO Optimized',
    description: 'Built with SEO best practices to help your website rank higher in search results.'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Reliable',
    description: 'Enterprise-level security measures and reliable hosting for peace of mind.'
  },
  {
    icon: FaTools,
    title: 'Easy Management',
    description: 'User-friendly content management systems that make updating your site simple.'
  }
]

const services = [
  {
    title: 'Custom Website Design',
    features: [
      'Brand-focused visual design',
      'User experience (UX) optimization',
      'Conversion-focused layouts',
      'Modern design trends',
      'Unlimited design revisions'
    ]
  },
  {
    title: 'Frontend Development',
    features: [
      'HTML5, CSS3, JavaScript',
      'React/Next.js development',
      'Responsive framework implementation',
      'Cross-browser compatibility',
      'Performance optimization'
    ]
  },
  {
    title: 'Backend Development',
    features: [
      'Database design and integration',
      'API development and integration',
      'Content management systems',
      'E-commerce functionality',
      'Security implementation'
    ]
  },
  {
    title: 'Maintenance & Support',
    features: [
      'Regular security updates',
      'Performance monitoring',
      'Content updates and changes',
      'Technical support',
      'Backup and recovery'
    ]
  }
]

const technologies = [
  { name: 'React', icon: '⚛️', description: 'Modern frontend framework' },
  { name: 'Next.js', icon: '▲', description: 'Full-stack React framework' },
  { name: 'WordPress', icon: '📝', description: 'Content management system' },
  { name: 'Shopify', icon: '🛒', description: 'E-commerce platform' },
  { name: 'Node.js', icon: '🟢', description: 'Backend JavaScript runtime' },
  { name: 'PostgreSQL', icon: '🐘', description: 'Reliable database system' },
]

const stats = [
  { number: '50+', label: 'Websites Built', icon: FaGlobe },
  { number: '99.9%', label: 'Uptime Guarantee', icon: FaBolt },
  { number: '< 2s', label: 'Load Time', icon: FaRocket },
  { number: '100%', label: 'Mobile Optimized', icon: FaMobile }
]

const testimonial = {
  content: "Aptiro delivered exactly what we envisioned and more. Our new website not only looks amazing but has increased our conversion rate by 180%. The team&apos;s attention to detail is exceptional.",
  author: "Michael Chen",
  role: "CEO",
  company: "GrowthTech Innovations"
}

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, target audience, and design preferences.',
    icon: FaLightbulb
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Create wireframes and design mockups that align with your brand and objectives.',
    icon: FaPalette
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Build your website using modern technologies and rigorously test across all devices.',
    icon: FaCode
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description: 'Deploy your website and continuously optimize for performance and user experience.',
    icon: FaRocket
  }
]

export default function WebDesignPageClient() {
  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <Header whatsappNumber={whatsappNumber} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-slate-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:20px_20px]"></div>
          
          <div className="container-custom relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <FaCode className="w-4 h-4" />
                    <span>Web Design & Development</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Beautiful Websites
                    <span className="block text-green-600">That Convert</span>
                    <span className="block text-slate-700">Visitors to Customers</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                    Custom website design and development that combines stunning visuals with powerful functionality. We create responsive, fast, and conversion-optimized websites that grow your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>Get Free Quote</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <Link
                      href="#portfolio"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-green-300"
                    >
                      <span>View Portfolio</span>
                      <HiArrowRight className="text-sm" />
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">Responsive Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">SEO Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">Fast Loading</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <FaCode className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Website Analytics</h3>
                      <p className="text-sm text-slate-500">Performance metrics</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <FaDesktop className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">Desktop</div>
                      <div className="text-xs text-green-600">98%</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <FaTabletAlt className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">Tablet</div>
                      <div className="text-xs text-blue-600">95%</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <FaMobile className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">Mobile</div>
                      <div className="text-xs text-purple-600">97%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Page Speed</span>
                      <span className="text-green-600 font-bold">98/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">SEO Score</span>
                      <span className="text-blue-600 font-bold">95/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Accessibility</span>
                      <span className="text-purple-600 font-bold">100/100</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 bg-slate-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Websites Built for Performance
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Every website we create is optimized for speed, user experience, and conversions
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
                  >
                    <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaHeart className="w-4 h-4" />
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Modern Web Development <span className="text-green-600">Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with beautiful design to create websites that not only look amazing but deliver real business results
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-green-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white text-2xl" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section id="services" className="py-16 sm:py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Complete Web Development <span className="text-green-600">Services</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From concept to launch and beyond, we provide end-to-end web development solutions
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-green-200 hover:bg-white transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 text-sm mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-green-700">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <HiStar key={star} className="w-8 h-8 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl sm:text-2xl text-white mb-8 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-white text-lg">{testimonial.author}</div>
                <div className="text-green-200">{testimonial.role}, {testimonial.company}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-slate-900">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Build Your <span className="text-green-400">Dream Website?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Let&apos;s create a website that not only looks amazing but drives real business results. Get your free consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Get Free Quote</span>
                  <FaArrowRight className="text-sm" />
                </a>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Contact Us</span>
                  <HiArrowRight className="text-sm" />
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span className="text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="w-4 h-4" />
                  <span className="text-sm">100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4" />
                  <span className="text-sm">No hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer 
        whatsappNumber={whatsappNumber}
        email="contact@aptiroglobal.com"
      />
      <WhatsAppButton 
        phoneNumber={whatsappNumber}
        message="Hi! I'm interested in your web design and development services."
      />
    </>
  )
}
