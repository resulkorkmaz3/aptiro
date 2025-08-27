'use client'

import { motion } from 'framer-motion'
import { FaHandshake, FaLightbulb, FaShieldAlt, FaGlobe } from 'react-icons/fa'

export default function AboutValuesSection() {
  const values = [
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We build trust through honest communication, transparent pricing, and reliable service delivery.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to provide cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality',
      description: 'Every project receives our full attention to detail, ensuring professional results that exceed expectations.'
    },
    {
      icon: FaGlobe,
      title: 'Accessibility',
      description: 'Our WhatsApp-first approach ensures that professional digital marketing services are accessible to everyone.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Successful Campaigns' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'US-Based Team' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These core principles guide everything we do and shape how we serve our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Why Choose Aptiro LLC?
              </h2>
              
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Expert Team:</strong> Certified Google Ads specialists and experienced web developers</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Transparent Communication:</strong> WhatsApp-first approach for instant, clear updates</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Proven Results:</strong> Data-driven strategies that deliver measurable growth</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">US-Based Company:</strong> Reliable, professional service you can trust</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-slate-800 rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-slate-300 text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

