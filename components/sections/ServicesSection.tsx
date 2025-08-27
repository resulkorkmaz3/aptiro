'use client'

import { motion } from 'framer-motion'
import { FaGoogle, FaCode, FaShoppingCart, FaAmazon, FaShopify, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { SiEbay } from 'react-icons/si'
import { HiArrowRight, HiGlobe, HiStar, HiTrendingUp } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 1,
    icon: FaGoogle,
    title: 'Google Ads Management',
    description: 'Strategic PPC campaigns that drive qualified traffic and maximize your return on investment.',
    features: [
      'Campaign Setup & Optimization',
      'Keyword Research & Analysis',
      'Ad Copy Creation',
      'Performance Tracking',
      'Monthly Reporting'
    ],
    link: '/services/google-ads',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    stats: { number: '300%', label: 'Avg ROI Increase' },
    image: '/images/google-ads.jpg'
  },
  {
    id: 2,
    icon: FaCode,
    title: 'Web Design & Development',
    description: 'Beautiful, fast, and conversion-focused websites that represent your brand perfectly.',
    features: [
      'Custom Website Design',
      'Responsive Development',
      'SEO Optimization',
      'Performance Optimization',
      'Content Management'
    ],
    link: '/services/web-design',
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100',
    stats: { number: '50+', label: 'Websites Built' },
    image: '/images/web-desing.jpg'
  },
  {
    id: 3,
    icon: FaShoppingCart,
    title: 'E-Commerce Business',
    description: 'Direct e-commerce operations across multiple platforms with professional customer service.',
    features: [
      'Amazon & eBay Sales',
      'Shopify Store Management',
      'aptiroglobal.com Operations',
      'Customer Support & Returns',
      'Product Issue Resolution'
    ],
    link: '/services/ecommerce',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100',
    stats: { number: '4.9★', label: 'Customer Rating' },
    image: '/images/Ecommerce-Business.jpg'
  }
]

const platforms = [
  {
    name: 'Amazon & eBay',
    description: 'Professional marketplace management with optimized listings and customer service.',
    icons: [FaAmazon, SiEbay],
    colors: ['text-orange-600', 'text-blue-600'],
    bgColors: ['bg-orange-50', 'bg-blue-50']
  },
  {
    name: 'Shopify Operations',
    description: 'Complete store management and optimization for maximum sales performance.',
    icons: [FaShopify],
    colors: ['text-green-600'],
    bgColors: ['bg-green-50']
  },
  {
    name: 'aptiroglobal.com',
    description: 'Our flagship e-commerce platform with global shipping and comprehensive support.',
    icons: [HiGlobe],
    colors: ['text-blue-600'],
    bgColors: ['bg-blue-50']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HiStar className="w-4 h-4" />
            <span>Professional Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Transform Your <span className="text-blue-600">Digital Presence</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </motion.div>
        
        {/* Main Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-1 gap-8 sm:gap-12 mb-16 sm:mb-20"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Single Card Container */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group-hover:border-slate-300 overflow-hidden">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center">
                    {/* Image Side - Mobile First (Top) */}
                    <div className={`relative order-1 lg:order-${!isEven ? '1' : '2'}`}>
                      {/* Image Container */}
                      <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-96">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          priority={index === 0}
                        />
                        
                        {/* Image Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-${service.color}-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Floating Icon */}
                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg opacity-90`}>
                          <Icon className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Side - Mobile Second (Bottom) */}
                    <div className={`p-6 sm:p-8 lg:p-10 order-2 lg:order-${!isEven ? '2' : '1'}`}>
                      {/* Header with Icon and Stats */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white text-2xl" />
                        </div>
                        
                        <div className="text-right">
                          <div className={`text-2xl font-bold text-${service.color}-600`}>{service.stats.number}</div>
                          <div className="text-xs text-slate-500">{service.stats.label}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 text-base sm:text-lg">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-3 mb-6 sm:mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <FaCheckCircle className="text-green-500 text-sm mt-1 flex-shrink-0" />
                            <span className="text-slate-600 text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <Link
                        href={service.link}
                        className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center`}
                      >
                        <span>Learn More</span>
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* E-Commerce Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-200"
        >
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HiTrendingUp className="w-4 h-4" />
              <span>Multi-Platform Operations</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Our E-Commerce <span className="text-purple-600">Ecosystem</span>
            </h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              We operate across multiple platforms to maximize your reach and sales opportunities
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300"
              >
                {/* Platform Icons */}
                <div className="flex items-center gap-3 mb-4">
                  {platform.icons.map((IconComponent, iconIndex) => (
                    <div
                      key={iconIndex}
                      className={`w-12 h-12 ${platform.bgColors[iconIndex]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`${platform.colors[iconIndex]} text-xl`} />
                    </div>
                  ))}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700">
                  {platform.name}
                </h4>
                
                <p className="text-slate-600 group-hover:text-slate-700">
                  {platform.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Customer Service Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            
            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                🌟 Professional Customer Service Excellence
              </h4>
              <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 max-w-3xl mx-auto">
                Dedicated support team handling all customer inquiries, complaints, returns, and product issues 
                across all platforms with 100% satisfaction guarantee.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">24/7</div>
                  <div className="text-sm sm:text-base text-slate-300">Support Available</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">100%</div>
                  <div className="text-sm sm:text-base text-slate-300">Issue Resolution</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">4.9★</div>
                  <div className="text-sm sm:text-base text-slate-300">Customer Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}