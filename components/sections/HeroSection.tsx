'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPlay, FaArrowRight, FaGoogle, FaAmazon, FaShopify } from 'react-icons/fa'
import { HiCheckCircle, HiTrendingUp, HiGlobe } from 'react-icons/hi'
import { SiEbay } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import { getWhatsAppUrl } from '@/lib/utils'

interface HeroSectionProps {
  whatsappNumber?: string
}

export default function HeroSection({ whatsappNumber = '+16288006818' }: HeroSectionProps) {
  const whatsappUrl = getWhatsAppUrl(whatsappNumber, "Hi! I'm interested in your digital marketing and e-commerce services.")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Patterns */}

        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-100 rounded-lg rotate-45 opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-100 rounded-full opacity-50"></div>
        

      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >

              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
                Scale Your
                <span className="block text-blue-600">Digital Business</span>
                <span className="block text-slate-700">To New Heights</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Expert Google Ads management, professional web development, and direct e-commerce operations 
              across Amazon, eBay, Shopify, and our own global platform.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg sm:text-xl group-hover:animate-pulse" />
                <span>Get Free Consultation</span>
                <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-blue-300 text-sm sm:text-base"
              >
                <FaPlay className="text-blue-600 text-xs sm:text-sm" />
                <span>View Our Services</span>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-slate-600"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <HiCheckCircle className="text-green-500 text-base sm:text-lg flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">WhatsApp Support Only</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <HiCheckCircle className="text-green-500 text-base sm:text-lg flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Results Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <HiCheckCircle className="text-green-500 text-base sm:text-lg flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">US-Based Company</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-12 sm:mt-8 lg:mt-0"
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200">
              {/* Header */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <Image
                  src="/images/aptiro-logo.png"
                  alt="Aptiro LLC"
                  width={32}
                  height={32}
                  className="sm:w-10 sm:h-10 rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Aptiro LLC</h3>
                  <p className="text-xs sm:text-sm text-slate-500">Digital Marketing Experts</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-slate-600">Campaigns</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-slate-600">Success Rate</div>
                </div>
              </div>
              
              {/* Platforms */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">Active Platforms</h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl">
                    <FaGoogle className="text-blue-600 text-sm sm:text-base flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Google Ads</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-orange-50 rounded-lg sm:rounded-xl">
                    <FaAmazon className="text-orange-600 text-sm sm:text-base flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Amazon</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl">
                    <SiEbay className="text-blue-600 text-sm sm:text-base flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">eBay</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-green-50 rounded-lg sm:rounded-xl">
                    <FaShopify className="text-green-600 text-sm sm:text-base flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Shopify</span>
                  </div>
                </div>
              </div>
              
              {/* Global Site Link */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <HiGlobe className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm sm:text-base">aptiroglobal.com</div>
                    <div className="text-xs sm:text-sm text-slate-600">Our Global E-Commerce Platform</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-blue-500 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg"
            >
              <HiTrendingUp className="text-lg sm:text-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      

    </section>
  )
}