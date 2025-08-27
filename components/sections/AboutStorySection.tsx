'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaChartLine } from 'react-icons/fa'

export default function AboutStorySection() {
  const milestones = [
    {
      icon: FaRocket,
      title: 'The Beginning',
      description: 'Founded with a mission to help businesses succeed online through expert digital marketing strategies and cutting-edge web solutions.'
    },
    {
      icon: FaUsers,
      title: 'Client-Focused Approach',
      description: 'We developed our unique WhatsApp-first communication model to ensure instant, clear communication with all our clients.'
    },
    {
      icon: FaChartLine,
      title: 'Proven Results',
      description: 'Today, we continue to deliver measurable growth for businesses across the United States through data-driven strategies.'
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Aptiro LLC was founded with a clear vision: to bridge the gap between businesses 
                and digital success. We understand that every business is unique, and so are their 
                digital marketing needs.
              </p>
              
              <p>
                Based in Albuquerque, New Mexico, we serve clients across the United States, 
                providing expert Google Ads management, professional web design, and comprehensive 
                e-commerce solutions.
              </p>
              
              <p>
                Our commitment to excellence and results-driven approach has made us a trusted 
                partner for businesses looking to grow their online presence and increase revenue.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600">
                To empower businesses with digital marketing solutions that deliver measurable 
                results and sustainable growth in the competitive online marketplace.
              </p>
            </div>
          </motion.div>
          
          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

