'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppUrl } from '@/lib/utils'

interface AboutTeamSectionProps {
  whatsappNumber?: string
}

export default function AboutTeamSection({ whatsappNumber = '+15053736924' }: AboutTeamSectionProps) {
  const whatsappUrl = getWhatsAppUrl(whatsappNumber, "Hi! I'd like to discuss working with your team.")

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our experienced team is here to help your business succeed in the digital world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Meet Our Expertise
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">GA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Google Ads Specialists</h4>
                    <p className="text-slate-600">Certified professionals with years of experience in PPC campaign management and optimization.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">WD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Web Developers</h4>
                    <p className="text-slate-600">Full-stack developers creating fast, secure, and beautiful websites that convert visitors into customers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">EC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">E-Commerce Experts</h4>
                    <p className="text-slate-600">Specialists in online store optimization, conversion rate improvement, and sales funnel creation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Our Commitment to You</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Transparent communication through WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Regular progress reports and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Dedicated support throughout your project</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Results-driven approach with measurable outcomes</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Let&apos;s Start Your Success Story
            </h3>
            
            <p className="text-blue-100 mb-6">
              Ready to take your business to the next level? Contact us today for a free consultation and discover how we can help you achieve your digital marketing goals.
            </p>
            
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Start WhatsApp Chat</span>
              </a>
              
              <div className="text-blue-100 text-sm">
                Available 24/7 for your convenience
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-500">
              <div className="text-sm text-blue-100 space-y-1">
                <p><strong>Phone:</strong> +1 (505) 373-6924</p>
                <p><strong>Location:</strong> Albuquerque, New Mexico</p>
                <p><strong>Service Area:</strong> United States</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

