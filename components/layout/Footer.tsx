'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { handleNavigation } from '@/lib/navigation';
import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowRight,
  FaPhone,
  FaGlobe,
  FaShieldAlt,
  FaStar,
  FaAward
} from 'react-icons/fa';

interface FooterProps {
  whatsappNumber?: string;
  email?: string;
}

export default function Footer({ 
  whatsappNumber = '+15053736924',
  email = 'contact@aptiroglobal.com'
}: FooterProps) {
  const getWhatsAppUrl = (message?: string) => {
    const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');
    const encodedMessage = message ? encodeURIComponent(message) : '';
    return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  };

  const currentYear = 2024;
  
  const services = [
    { 
      name: 'Google Ads Management', 
      href: '/services/google-ads',
      description: 'PPC Campaigns & ROI Optimization'
    },
    { 
      name: 'Web Design & Development', 
      href: '/services/web-design',
      description: 'Custom Websites & Modern UI/UX'
    },
    { 
      name: 'E-Commerce Business', 
      href: '/services/ecommerce',
      description: 'Amazon, eBay, Shopify Operations'
    }
  ];
  
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/#services' },
    { name: 'Contact Us', href: '/#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  const businessInfo = {
    address: '1209 Mountain Road Pl NE, Suite N',
    city: 'Albuquerque, NM 87110, USA',
    hours: 'Mon-Fri: 9AM-6PM (MST)',
    emergency: '24/7 WhatsApp Support'
  };

  const achievements = [
    { icon: FaAward, text: 'Google Ads Certified' },
    { icon: FaStar, text: '5-Star Client Reviews' },
    { icon: FaShieldAlt, text: 'Trusted US Business' }
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: getWhatsAppUrl('Hi! I found your website and I\'m interested in your services.'),
      color: 'hover:bg-green-600',
      external: true
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: `mailto:${email}`,
      color: 'hover:bg-blue-600',
      external: false
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/aptiro-llc',
      color: 'hover:bg-blue-700',
      external: true
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/aptiro_llc',
      color: 'hover:bg-blue-500',
      external: true
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo & Company Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Image
                  src="/images/aptiro-logo.png"
                  alt="Aptiro LLC"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aptiro LLC</h3>
                <p className="text-blue-400 text-sm font-medium">Digital Marketing Experts</p>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering businesses across the United States with cutting-edge digital marketing solutions, 
              professional web design, and strategic e-commerce growth.
            </p>

            {/* Achievements Badges */}
            <div className="space-y-2 mb-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-sm"
                >
                  <achievement.icon className="text-yellow-400" />
                  <span className="text-slate-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-slate-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={social.name}
                >
                  <social.icon className="text-lg text-slate-300 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(service.href);
                    }}
                    className="group block p-3 rounded-lg hover:bg-slate-800 transition-all duration-300 w-full text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h5>
                        <p className="text-sm text-slate-400 mt-1">{service.description}</p>
                      </div>
                      <FaArrowRight className="text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all text-sm" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors py-2 w-full text-left"
                  >
                    <FaArrowRight className="text-xs text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:text-blue-400 transition-colors">{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Get in Touch</h4>
            
            <div className="space-y-4">
              {/* WhatsApp Contact */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-green-400 font-medium text-sm">Preferred Contact</p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors font-medium"
                    >
                      {whatsappNumber}
                    </a>
                    <p className="text-slate-400 text-xs mt-1">Available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Other Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{businessInfo.address}</p>
                    <p className="text-slate-400 text-sm">{businessInfo.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{businessInfo.hours}</p>
                    <p className="text-slate-400 text-sm">{businessInfo.emergency}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href={`mailto:${email}`}
                      className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      {email}
                    </a>
                    <p className="text-slate-400 text-sm">Business Inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <p>© {currentYear} Aptiro LLC. All rights reserved.</p>
              <div className="hidden md:flex items-center gap-2">
                <FaGlobe className="text-blue-400" />
                <span>Made in New Mexico, USA</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-slate-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <div className="flex items-center gap-2 text-slate-400">
                <FaShieldAlt className="text-green-400" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}