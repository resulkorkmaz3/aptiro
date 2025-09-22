import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Refund Policy - Aptiro LLC',
  description: 'Learn about Aptiro LLC refund policy for digital marketing, web development, and related services. Clear guidelines for refund eligibility and process.',
  keywords: 'refund policy, Aptiro LLC, digital marketing refunds, web development refunds, service refunds, terms and conditions',
  openGraph: {
    title: 'Refund Policy - Aptiro LLC',
    description: 'Learn about Aptiro LLC refund policy for digital marketing, web development, and related services.',
    url: 'https://aptiroglobal.com/refund-policy',
    siteName: 'Aptiro LLC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Refund Policy - Aptiro LLC',
    description: 'Learn about Aptiro LLC refund policy for digital marketing, web development, and related services.',
  },
  alternates: {
    canonical: 'https://aptiroglobal.com/refund-policy',
  },
}

interface RefundPolicyPageProps {
  whatsappNumber?: string
}

export default function RefundPolicyPage({ 
  whatsappNumber = '+15053736924' 
}: RefundPolicyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header whatsappNumber={whatsappNumber} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              📋 Refund Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aptiro LLC – Refund Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear and transparent refund guidelines for all our digital marketing and web development services
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                  Scope
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This policy applies to all services provided by Aptiro LLC, including but not limited to:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Web design and development services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Google Ads management and social media advertising
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Hosting services and domain registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Domain-based email services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    AI automation setup and implementation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Digital marketing consultation and strategy
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                  Eligibility for Refunds
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-yellow-800 font-medium">
                    ⚠️ IMPORTANT: Due to the digital nature of our services, most work cannot be &quot;returned&quot; once delivered.
                  </p>
                </div>
                <ul className="text-gray-700 leading-relaxed space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Refund requests must be submitted in writing within <strong>7 days</strong> of the initial payment (reduced from 14 days due to digital service nature).
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <strong>Any work that has been started, delivered, or hours performed are completely non-refundable.</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <strong>Duplicate payments:</strong> If the same service is accidentally paid for multiple times, the duplicate payment(s) will be fully refunded within 5 business days of notification.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <strong>No work commenced:</strong> If absolutely no work, consultation, or effort has been invested in a project and the client cancels within 7 days, a full refund will be provided minus payment processing fees (typically 3-5%).
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    For advertising management: Once campaigns are live and ad spend has begun, no refunds are available for management fees.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    For AI automations: Once setup begins or configurations are implemented, no refunds are available.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Prepaid service packages may be refunded only for the completely unused portion, less any setup costs, consultation time, or preliminary work already performed.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    Client must demonstrate that services were not performed as contractually agreed to be eligible for any refund consideration.
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">✅ Guaranteed Refund Scenarios:</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">1.</span>
                      <div>
                        <strong>Technical Payment Errors:</strong> System glitches causing duplicate charges, incorrect amounts, or failed transactions that were charged anyway.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">2.</span>
                      <div>
                        <strong>Zero Work Performed:</strong> Projects cancelled within 7 days where no consultation calls were made, no emails exchanged about project details, no access credentials requested, and no preliminary work of any kind was started.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">3.</span>
                      <div>
                        <strong>Service Unavailability:</strong> If we determine we cannot provide the requested service due to technical limitations or resource constraints, before any work begins.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                  Non-Refundable Items & Services
                </h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <p className="text-red-800 font-medium">
                    🚫 The following items and services are NEVER refundable under any circumstances:
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Third-Party Costs:</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Domain registrations and renewals
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Hosting and server fees
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Google Ads spend and other advertising budgets
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Social media advertising spend (Facebook, Instagram, etc.)
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Third-party software licenses or subscriptions
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        SSL certificates and security services
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Digital Deliverables:</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Custom website code and development work
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Graphic design and creative assets
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        AI automation configurations and setups
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Email system setup and configurations
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Campaign strategies and consultation time
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        Time spent on research, analysis, or planning
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800 text-sm">
                    <strong>Important:</strong> Once any advertising campaign goes live, even for a few minutes, 
                    all associated management fees become non-refundable as professional time and expertise have been invested.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                  Refund Request Process
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-blue-800 font-medium">
                    📋 All refund requests are subject to thorough review and must meet strict eligibility criteria.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Step 1: Submit Detailed Request</h3>
                    <p className="text-gray-700 mb-2">
                      Send a written request to <a href="mailto:info@aptiroglobal.com" className="text-blue-600 hover:text-blue-700 font-medium">info@aptiroglobal.com</a> including:
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Invoice number and payment date</li>
                      <li>• Detailed reason for refund request</li>
                      <li>• Documentation of any service issues</li>
                      <li>• Timeline of work performed vs. contracted</li>
                      <li>• For duplicate payments: Transaction IDs of both payments</li>
                      <li>• For zero-work claims: Confirmation that no communication or work occurred</li>
                    </ul>
                    <div className="mt-3 p-3 bg-green-100 rounded text-sm">
                      <strong>⚡ Fast Track:</strong> Duplicate payments and technical errors are processed within 1-2 business days with minimal documentation required.
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Step 2: Investigation & Review</h3>
                    <p className="text-gray-700">
                      We will acknowledge the request within <strong>5 business days</strong> and conduct a thorough review of work performed, 
                      time invested, and contractual obligations. This may take up to <strong>10 business days</strong> for complex cases.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Step 3: Decision & Processing</h3>
                    <p className="text-gray-700">
                      If approved (rare for digital services), refunds are processed within <strong>10-15 business days</strong> 
                      via the original payment method, minus any applicable processing fees and documented costs incurred.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-800 text-sm">
                    <strong>Note:</strong> Due to the nature of digital services and time-based work, 
                    the majority of refund requests cannot be approved. We encourage clients to discuss 
                    any concerns during the project rather than after completion.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                  Client Responsibilities & Service Expectations
                </h2>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                  <p className="text-purple-800 font-medium">
                    🤝 Clear communication and realistic expectations prevent refund disputes.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Client Responsibilities:</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Provide clear project requirements and expectations upfront
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Respond to requests for feedback within agreed timeframes
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Provide necessary access credentials and materials promptly
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Communicate concerns during the project, not after completion
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Service Expectations:</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Digital marketing results may take 30-90 days to show
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        AI automations require testing and refinement periods
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Website development follows agreed project timeline
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        Ad campaign performance depends on market conditions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">6</span>
                  Legal Framework & Disputes
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Governing Law:</h3>
                      <p className="text-gray-700 text-sm">
                        This refund policy and any disputes related to it will be governed by the laws of 
                        <strong> New Mexico, United States</strong> and subject to the jurisdiction of its courts.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Dispute Resolution:</h3>
                      <p className="text-gray-700 text-sm">
                        Before pursuing legal action, parties agree to attempt resolution through direct communication. 
                        If unsuccessful, disputes may be resolved through binding arbitration in Albuquerque, New Mexico.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Limitation of Liability:</h3>
                      <p className="text-gray-700 text-sm">
                        Aptiro LLC&apos;s liability for any service is limited to the amount paid for that specific service. 
                        We are not liable for indirect, consequential, or lost profit damages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mt-12">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Questions About Our Refund Policy?</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us for clarification or to submit a refund request
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:info@aptiroglobal.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      📧 Email Us
                    </a>
                    <a 
                      href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
                Last updated: December 22, 2024
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer 
        email="contact@aptiroglobal.com"
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}
