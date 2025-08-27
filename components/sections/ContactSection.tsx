'use client';

import { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaUser, FaEnvelope, FaComment, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  whatsappNumber: string;
}

export default function ContactSection({ whatsappNumber }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const serviceOptions = [
    { 
      value: 'google-ads', 
      label: 'Google Ads Management', 
      description: 'PPC campaigns, optimization & ROI improvement'
    },
    { 
      value: 'web-design', 
      label: 'Web Design & Development', 
      description: 'Custom websites, responsive design & modern UI/UX'
    },
    { 
      value: 'ecommerce', 
      label: 'E-Commerce Business', 
      description: 'Amazon, eBay, Shopify & aptiroglobal.com operations'
    },
    { 
      value: 'product-info', 
      label: 'Product Information', 
      description: 'Details about our products and services'
    },
    { 
      value: 'product-return', 
      label: 'Product Return/Exchange', 
      description: 'Return process, exchanges & refunds'
    },
    { 
      value: 'customer-support', 
      label: 'Customer Support', 
      description: 'General support and assistance'
    },
    { 
      value: 'partnership', 
      label: 'Partnership Opportunity', 
      description: 'Business partnerships and collaborations'
    },
    { 
      value: 'other', 
      label: 'Other Inquiry', 
      description: 'Any other questions or requests'
    }
  ];

  const getWhatsAppUrl = () => {
    const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');
    const selectedService = serviceOptions.find(s => s.value === formData.service);
    
    let message = `🌟 New Inquiry from Aptiro LLC Website\n\n`;
    message += `👤 Name: ${formData.name}\n`;
    if (formData.email) {
      message += `📧 Email: ${formData.email}\n`;
    }
    message += `🎯 Service Interest: ${selectedService ? selectedService.label : 'Not specified'}\n\n`;
    if (formData.message) {
      message += `💬 Message:\n${formData.message}\n\n`;
    }
    message += `📅 Please contact me at your earliest convenience.\n`;
    message += `Thank you! 🙏`;
    
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.service) {
      window.open(getWhatsAppUrl(), '_blank');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const quickContactOptions = [
    {
      service: 'google-ads',
      title: 'Google Ads',
      message: 'Hi! I\'m interested in Google Ads management services. Can you help me grow my business with effective PPC campaigns?'
    },
    {
      service: 'web-design',
      title: 'Web Design',
      message: 'Hello! I need a professional website. Can you tell me more about your web design and development services?'
    },
    {
      service: 'ecommerce',
      title: 'E-Commerce',
      message: 'Hi! I\'m interested in your e-commerce services. Can you help me with Amazon, eBay, or Shopify operations?'
    },
    {
      service: 'customer-support',
      title: 'General Support',
      message: 'Hello! I need some assistance. Can you help me with my inquiry?'
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaWhatsapp className="text-green-600" />
            WhatsApp Contact Form
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll contact you via WhatsApp for immediate assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  What can we help you with? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      → {option.label}
                    </option>
                  ))}
                </select>
                
                {/* Service Description */}
                {formData.service && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <p className="text-sm text-green-800">
                      {serviceOptions.find(s => s.value === formData.service)?.description}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your project or question..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.name || !formData.service}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                Send via WhatsApp
                <FaArrowRight className="text-sm" />
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                * Required fields. Your message will be sent via WhatsApp.
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Buttons */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Contact</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Need immediate help? Choose a service below for instant WhatsApp contact:
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {quickContactOptions.map((option) => (
                  <a
                    key={option.service}
                    href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(option.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200 hover:border-green-300 text-center group"
                  >
                    <FaWhatsapp className="text-green-600 text-lg mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-700">{option.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-slate-600 font-medium">{whatsappNumber}</p>
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <FaCheckCircle className="text-xs" />
                      Available 24/7 for immediate response
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">1209 Mountain Road Pl NE, Suite N</p>
                    <p className="text-slate-600">Albuquerque, NM 87110, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (MST)</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM (MST)</p>
                    <p className="text-sm text-slate-500 mt-1">WhatsApp available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-green-100 mb-4 text-sm">
                For urgent inquiries or immediate assistance, contact us directly via WhatsApp.
              </p>
              
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent("🚨 URGENT: Hello Aptiro LLC! I need immediate assistance with my inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 shadow-lg text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Emergency Contact
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}