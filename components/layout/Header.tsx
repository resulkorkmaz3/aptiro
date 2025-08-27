'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { cn, getWhatsAppUrl } from '@/lib/utils'
import { handleNavigation } from '@/lib/navigation'

interface HeaderProps {
  whatsappNumber?: string
}

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/#services',
    submenu: [
      { name: 'Google Ads Management', href: '/#services' },
      { name: 'Web Design & Development', href: '/#services' },
      { name: 'E-Commerce Business', href: '/#services' },
    ]
  },
  { name: 'Portfolio', href: '/#services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header({ whatsappNumber = '+16288006818' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const whatsappUrl = getWhatsAppUrl(whatsappNumber, "Hi! I'm interested in your services.")
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false)
      setActiveDropdown(null)
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200/50'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/aptiro-logo.png"
                alt="Aptiro LLC"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-slate-900 leading-tight">
                Aptiro LLC
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Digital Marketing Experts
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                    setActiveDropdown(null);
                  }}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-medium transition-all duration-300 rounded-lg",
                    "hover:text-blue-600 hover:bg-slate-50",
                    "relative group w-full text-left"
                  )}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <HiChevronDown 
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.name && "rotate-180"
                      )} 
                    />
                  )}
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200/50 overflow-hidden"
                    >
                      {item.submenu.map((subItem, index) => (
                        <button
                          key={subItem.name}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.href);
                            setActiveDropdown(null);
                          }}
                          className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-300 border-b border-slate-100 last:border-b-0 w-full text-left"
                        >
                          <span className="font-medium">{subItem.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            className="lg:hidden relative p-2 rounded-lg transition-colors duration-300 hover:bg-slate-100"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "w-5 h-0.5 bg-slate-700 transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              )} />
              <span className={cn(
                "w-5 h-0.5 bg-slate-700 transition-all duration-300 mt-1",
                isMobileMenuOpen ? "opacity-0" : ""
              )} />
              <span className={cn(
                "w-5 h-0.5 bg-slate-700 transition-all duration-300 mt-1",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )} />
            </div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href, () => setIsMobileMenuOpen(false));
                      }}
                      className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium transition-colors duration-300 rounded-lg w-full text-left"
                    >
                      <span>{item.name}</span>
                      {item.submenu && (
                        <HiChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.href, () => setIsMobileMenuOpen(false));
                            }}
                            className="flex items-center px-4 py-2 text-slate-600 hover:text-blue-600 text-sm transition-colors duration-300 rounded-lg w-full text-left"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-300 rounded-lg"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}