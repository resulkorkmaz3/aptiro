'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaShoppingCart, 
  FaAmazon, 
  FaShopify, 
  FaGlobe, 
  FaHeadset,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaTruck,
  FaUndo,
  FaTools,
  FaHeart,
  FaAward,
  FaRocket,
  FaHandshake,
  FaLightbulb,
  FaThumbsUp,
  FaStar
} from 'react-icons/fa'
import { SiEbay } from 'react-icons/si'
import { HiArrowRight, HiStar } from 'react-icons/hi'
import { getWhatsAppUrl } from '@/lib/utils'
import StructuredData from '@/components/seo/StructuredData'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const whatsappNumber = '+15053736924'
const whatsappUrl = getWhatsAppUrl(whatsappNumber, "Hi! I'm interested in your e-commerce business management services.")

const serviceSchema = {
  name: 'E-Commerce Business Management Services',
  description: 'Complete e-commerce business management across Amazon, eBay, Shopify and our global platform. Professional customer service, inventory management, and sales optimization.',
  provider: {
    name: 'Aptiro LLC',
    url: 'https://aptiro.com',
    telephone: '+15053736924',
    address: {
      streetAddress: '1209 MOUNTAIN ROAD PL NE, STE N',
      addressLocality: 'ALBUQUERQUE',
      addressRegion: 'NM',
      postalCode: '87110',
      addressCountry: 'US'
    }
  },
  areaServed: 'United States',
  serviceType: 'E-Commerce Management Service',
  url: 'https://aptiro.com/services/ecommerce',
  offers: {
    description: 'Professional e-commerce business management with 100% customer satisfaction guarantee',
  }
}

const platforms = [
  {
    name: 'Amazon',
    icon: FaAmazon,
    color: 'orange',
    description: 'Professional Amazon seller account management with optimized listings and customer service.',
    features: [
      'Product listing optimization',
      'Inventory management',
      'Customer service & returns',
      'Review management',
      'Advertising campaigns'
    ]
  },
  {
    name: 'eBay',
    icon: SiEbay,
    color: 'blue',
    description: 'Complete eBay store management with professional handling of all business operations.',
    features: [
      'Store setup & optimization',
      'Listing management',
      'Order fulfillment',
      'Customer communications',
      'Performance tracking'
    ]
  },
  {
    name: 'Shopify',
    icon: FaShopify,
    color: 'green',
    description: 'Full Shopify store operations including design, management, and customer support.',
    features: [
      'Store design & setup',
      'Product catalog management',
      'Order processing',
      'Customer support',
      'Analytics & reporting'
    ]
  },
  {
    name: 'aptiroglobal.com',
    icon: FaGlobe,
    color: 'purple',
    description: 'Our flagship e-commerce platform with global shipping and comprehensive support.',
    features: [
      'Global marketplace access',
      'Multi-currency support',
      'International shipping',
      '24/7 customer service',
      'Quality guarantee'
    ]
  }
]

const benefits = [
  {
    icon: FaHeadset,
    title: 'Professional Customer Service',
    description: '24/7 customer support handling all inquiries, complaints, and issues with 100% satisfaction guarantee.'
  },
  {
    icon: FaTruck,
    title: 'Order Fulfillment',
    description: 'Complete order management from processing to shipping with real-time tracking and updates.'
  },
  {
    icon: FaUndo,
    title: 'Returns & Refunds',
    description: 'Hassle-free return processing and refund management to maintain customer satisfaction.'
  },
  {
    icon: FaTools,
    title: 'Product Issue Resolution',
    description: 'Quick and professional resolution of any product-related issues or customer concerns.'
  },
  {
    icon: FaChartLine,
    title: 'Performance Analytics',
    description: 'Detailed reporting and analytics to track sales performance and optimize operations.'
  },
  {
    icon: FaShieldAlt,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes to ensure customer satisfaction and business reputation.'
  }
]

const stats = [
  { number: '4.9★', label: 'Customer Rating', icon: FaUsers },
  { number: '100%', label: 'Issue Resolution', icon: FaThumbsUp },
  { number: '24/7', label: 'Support Available', icon: FaHeadset },
  { number: '500+', label: 'Happy Customers', icon: FaUsers }
]

const testimonial = {
  content: "Aptiro has transformed our e-commerce operations. Their customer service is exceptional, and they&apos;ve increased our sales by 200% while maintaining perfect customer satisfaction ratings across all platforms.",
  author: "Jennifer Martinez",
  role: "Business Owner",
  company: "Global Retail Solutions"
}

export default function EcommercePageClient() {
  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <Header whatsappNumber={whatsappNumber} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-slate-50">
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
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <FaShoppingCart className="w-4 h-4" />
                    <span>E-Commerce Business Operations</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Complete E-Commerce
                    <span className="block text-purple-600">Business Management</span>
                    <span className="block text-slate-700">Across All Platforms</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                    Professional e-commerce operations across Amazon, eBay, Shopify, and our global platform. We handle everything from customer service to order fulfillment with guaranteed satisfaction.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>Start Partnership</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <Link
                      href="#platforms"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-purple-300"
                    >
                      <span>View Platforms</span>
                      <HiArrowRight className="text-sm" />
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">100% Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">Multi-Platform</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FaShoppingCart className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">E-Commerce Dashboard</h3>
                      <p className="text-sm text-slate-500">Multi-platform management</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <FaAmazon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">Amazon</div>
                      <div className="text-xs text-orange-600">Active</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <SiEbay className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">eBay</div>
                      <div className="text-xs text-blue-600">Active</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <FaShopify className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">Shopify</div>
                      <div className="text-xs text-green-600">Active</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <FaGlobe className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-slate-900">Global</div>
                      <div className="text-xs text-purple-600">Active</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Customer Rating</span>
                      <span className="text-green-600 font-bold">4.9/5.0</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Response Time</span>
                      <span className="text-blue-600 font-bold">&lt; 2 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Issue Resolution</span>
                      <span className="text-purple-600 font-bold">100%</span>
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
                Excellence in E-Commerce Operations
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Our commitment to customer satisfaction and operational excellence delivers measurable results
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
                    <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-16 sm:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaGlobe className="w-4 h-4" />
                <span>Multi-Platform Operations</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                E-Commerce <span className="text-purple-600">Ecosystem</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We operate across all major e-commerce platforms to maximize your reach and sales opportunities
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {platforms.map((platform, index) => {
                const Icon = platform.icon
                const colorClasses = {
                  orange: 'from-orange-500 to-orange-600 border-orange-200',
                  blue: 'from-blue-500 to-blue-600 border-blue-200',
                  green: 'from-green-500 to-green-600 border-green-200',
                  purple: 'from-purple-500 to-purple-600 border-purple-200'
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-200"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[platform.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[platform.color as keyof typeof colorClasses].split(' ')[1]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{platform.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 text-sm mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Complete E-Commerce <span className="text-purple-600">Management</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From customer service to order fulfillment, we handle every aspect of your e-commerce operations
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
                    className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

        {/* Testimonial Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-purple-700">
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
                <div className="text-purple-200">{testimonial.role}, {testimonial.company}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-slate-900">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Scale Your <span className="text-purple-400">E-Commerce Business?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Partner with us for complete e-commerce management across all major platforms. Get professional customer service and guaranteed results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Start Partnership</span>
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
                  <FaHandshake className="w-4 h-4" />
                  <span className="text-sm">Partnership approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="w-4 h-4" />
                  <span className="text-sm">100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4" />
                  <span className="text-sm">Multi-platform coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer 
        whatsappNumber={whatsappNumber}
        email="contact@aptiro.com"
      />
      <WhatsAppButton 
        phoneNumber={whatsappNumber}
        message="Hi! I'm interested in your e-commerce business management services."
      />
    </>
  )
}
