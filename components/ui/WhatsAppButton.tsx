'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { getWhatsAppUrl } from '@/lib/utils'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  position?: 'left' | 'right'
}

export default function WhatsAppButton({ 
  phoneNumber = '+16288006818',
  message = "Hi! I'm interested in your services.",
  position = 'right'
}: WhatsAppButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  
  useEffect(() => {
    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true)
    }, 5000)
    
    // Hide tooltip after 15 seconds
    const hideTimer = setTimeout(() => {
      setIsTooltipVisible(false)
    }, 15000)
    
    return () => {
      clearTimeout(tooltipTimer)
      clearTimeout(hideTimer)
    }
  }, [])
  
  const whatsappUrl = getWhatsAppUrl(phoneNumber, message)
  
  const positionClasses = position === 'left' 
    ? 'left-4 sm:left-6' 
    : 'right-4 sm:right-6'
  
  const tooltipPositionClasses = position === 'left'
    ? 'left-20'
    : 'right-20'
  
  const handleClick = () => {
    // Track WhatsApp click event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'WhatsApp',
        event_label: 'Floating Button',
      })
    }
    
    window.open(whatsappUrl, '_blank')
  }
  
  if (!isButtonVisible) return null
  
  return (
    <div className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50`}>
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className={`absolute bottom-0 ${tooltipPositionClasses} mb-2 whitespace-nowrap`}
          >
            <div className="bg-dark-900 text-white px-4 py-2 rounded-lg shadow-lg relative">
              <button
                onClick={() => setIsTooltipVisible(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-dark-700 rounded-full flex items-center justify-center hover:bg-dark-600 transition-colors"
              >
                <FaTimes className="text-xs" />
              </button>
              <p className="text-sm font-medium">Need help? Chat with us!</p>
              <div className={`absolute bottom-2 ${position === 'left' ? 'left-0 -translate-x-2' : 'right-0 translate-x-2'} w-0 h-0 border-t-8 border-t-dark-900 border-x-8 border-x-transparent`}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative group"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-700">
          <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
        </div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </motion.button>
    </div>
  )
}
