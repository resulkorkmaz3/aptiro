'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaGoogle, 
  FaSearch, 
  FaChartLine, 
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa'
import { HiArrowRight, HiStar } from 'react-icons/hi'
import { getWhatsAppUrl } from '@/lib/utils'
import StructuredData from '@/components/seo/StructuredData'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const whatsappNumber = '+16288006818'
const whatsappUrl = getWhatsAppUrl(whatsappNumber, "Hi! I'm interested in your Google Ads management services.")

const serviceSchema = {
  name: 'Google Ads Management Services',
  description: 'Professional Google Ads management services that drive qualified traffic and maximize ROI. Strategic PPC campaigns, keyword research, ad optimization, and detailed reporting by certified professionals.',
  provider: {
    name: 'Aptiro LLC',
    url: 'https://aptiro.com',
    telephone: '+16288006818',
    address: {
      streetAddress: '1209 MOUNTAIN ROAD PL NE, STE N',
      addressLocality: 'ALBUQUERQUE',
      addressRegion: 'NM',
      postalCode: '87110',
      addressCountry: 'US'
    }
  },
  areaServed: 'United States',
  serviceType: 'Digital Marketing Service',
  url: 'https://aptiro.com/services/google-ads',
  offers: {
    description: 'Professional Google Ads management with guaranteed ROI improvement',
  }
}

const benefits = [
  {
    icon: FaGoogle,
    title: 'Strategic Campaign Setup',
    description: 'Custom campaign architecture designed for your specific business goals and target audience.'
  },
  {
    icon: FaSearch,
    title: 'Advanced Keyword Research',
    description: 'In-depth keyword analysis to identify high-converting, cost-effective search terms.'
  },
  {
    icon: FaChartLine,
    title: 'Performance Optimization',
    description: 'Continuous monitoring and optimization to improve click-through rates and conversions.'
  },
  {
    icon: FaDollarSign,
    title: 'ROI Maximization',
    description: 'Strategic bid management and budget allocation to maximize your return on investment.'
  },
  {
    icon: FaUsers,
    title: 'Audience Targeting',
    description: 'Precise audience segmentation and targeting to reach your ideal customers.'
  },
  {
    icon: FaShieldAlt,
    title: 'Quality Score Improvement',
    description: 'Optimize ad relevance and landing page experience for better Quality Scores.'
  }
]

const services = [
  {
    title: 'Campaign Setup & Strategy',
    features: [
      'Account audit and analysis',
      'Competitor research',
      'Campaign structure design',
      'Goal setting and KPI definition',
      'Budget allocation strategy'
    ]
  },
  {
    title: 'Keyword Research & Analysis',
    features: [
      'Comprehensive keyword research',
      'Search volume analysis',
      'Competition assessment',
      'Negative keyword lists',
      'Long-tail keyword opportunities'
    ]
  },
  {
    title: 'Ad Creation & Optimization',
    features: [
      'Compelling ad copy creation',
      'A/B testing strategies',
      'Landing page optimization',
      'Ad extension setup',
      'Visual ad design'
    ]
  },
  {
    title: 'Performance Monitoring',
    features: [
      'Real-time performance tracking',
      'Conversion rate optimization',
      'Click-through rate improvement',
      'Cost-per-acquisition analysis',
      'Monthly detailed reporting'
    ]
  }
]

const stats = [
  { number: '300%', label: 'Average ROI Increase', icon: FaChartLine },
  { number: '2.5x', label: 'Conversion Rate Boost', icon: FaRocket },
  { number: '45%', label: 'Cost Reduction', icon: FaDollarSign },
  { number: '98%', label: 'Client Satisfaction', icon: FaUsers }
]

const testimonial = {
  content: "Aptiro&apos;s Google Ads management transformed our online presence. Within 3 months, we saw a 250% increase in qualified leads and significantly reduced our cost per acquisition.",
  author: "Sarah Johnson",
  role: "Marketing Director",
  company: "TechStart Solutions"
}

export default function GoogleAdsPageClient() {
  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <Header whatsappNumber={whatsappNumber} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-slate-50">
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
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <FaGoogle className="w-4 h-4" />
                    <span>Google Ads Management</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Drive Qualified
                    <span className="block text-blue-600">Traffic & Sales</span>
                    <span className="block text-slate-700">with Expert Google Ads</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                    Professional Google Ads management that delivers measurable results. Our certified specialists create, optimize, and manage campaigns that drive qualified traffic and maximize your ROI.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>Get Free Consultation</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <Link
                      href="#services"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-blue-300"
                    >
                      <span>View Services</span>
                      <HiArrowRight className="text-sm" />
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">Google Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">Results Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-sm font-medium">24/7 Support</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaGoogle className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Google Ads Dashboard</h3>
                      <p className="text-sm text-slate-500">Real-time performance</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.slice(0, 2).map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                          <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                          <div className="text-xs text-slate-600">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Conversion Rate</span>
                      <span className="text-green-600 font-bold">+45%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Click-Through Rate</span>
                      <span className="text-blue-600 font-bold">+32%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">Quality Score</span>
                      <span className="text-purple-600 font-bold">9.2/10</span>
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
                Proven Results That Speak for Themselves
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Our Google Ads management delivers measurable ROI improvements for businesses of all sizes
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
                    <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaLightbulb className="w-4 h-4" />
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Expert Google Ads <span className="text-blue-600">Management</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our comprehensive approach to Google Ads management ensures your campaigns are optimized for maximum performance and ROI
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
                    className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                Comprehensive <span className="text-blue-600">Google Ads Services</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From strategy to execution, we handle every aspect of your Google Ads campaigns
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
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-white transition-all duration-300"
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
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
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
                <div className="text-blue-200">{testimonial.role}, {testimonial.company}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-slate-900">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Boost Your <span className="text-blue-400">Google Ads Performance?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Get a free consultation and discover how our expert Google Ads management can transform your digital marketing results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Start Free Consultation</span>
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
                  <span className="text-sm">Free 30-min consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span className="text-sm">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4" />
                  <span className="text-sm">Results guaranteed</span>
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
        message="Hi! I'm interested in your Google Ads management services."
      />
    </>
  )
}
