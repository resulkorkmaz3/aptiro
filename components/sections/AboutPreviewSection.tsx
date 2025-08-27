'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaAward, FaUsers, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreviewSection() {
  const stats = [
    { icon: FaAward, number: '5+', label: 'Years Experience', color: 'text-blue-600' },
    { icon: FaUsers, number: '100+', label: 'Happy Clients', color: 'text-green-600' },
    { icon: FaGlobeAmericas, number: '3', label: 'Global Markets', color: 'text-purple-600' }
  ];

  const achievements = [
    'Google Ads Certified Professionals',
    'Award-winning Web Design Portfolio',
    'Multi-platform E-Commerce Expertise',
    'US-based Business Operations'
  ];

  return (
    <section className="py-20 bg-white" id="about-preview">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaGlobeAmericas className="text-blue-600" />
                About Aptiro LLC
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Your Trusted Partner for 
                <span className="text-blue-600"> Digital Growth</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Based in Albuquerque, New Mexico, Aptiro LLC is a dynamic digital marketing agency 
                specializing in Google Ads management, professional web design, and e-commerce operations. 
                We help businesses across the United States achieve their digital marketing goals with 
                proven strategies and exceptional results.
              </p>
            </div>

            {/* Achievements List */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Choose Aptiro LLC?</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                    <span className="text-slate-600">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Learn More About Us</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 shadow-lg">
              {/* Company Logo/Badge */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-4 shadow-lg">
                  <Image
                    src="/images/aptiro-logo.png"
                    alt="Aptiro LLC"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Aptiro LLC</h3>
                <p className="text-slate-600">Digital Marketing Excellence</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                    >
                      <IconComponent className={`${stat.color} text-2xl mx-auto mb-2`} />
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                      <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Location Badge */}
              <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                <div className="flex items-center justify-center gap-2 text-slate-700">
                  <FaGlobeAmericas className="text-blue-600" />
                  <span className="font-medium">Based in New Mexico, USA</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Serving clients nationwide</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-15"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
