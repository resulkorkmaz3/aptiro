import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Aptiro LLC digital marketing services. Learn about our service agreements, policies, and user responsibilities.',
  keywords: 'terms of service, service agreement, terms and conditions, user agreement, digital marketing terms',
  openGraph: {
    title: 'Terms of Service | Aptiro LLC',
    description: 'Terms of Service for Aptiro LLC digital marketing services.',
    url: 'https://aptiroglobal.com/terms',
    siteName: 'Aptiro LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Aptiro LLC',
    description: 'Terms of Service for Aptiro LLC digital marketing services.',
  },
  alternates: {
    canonical: 'https://aptiroglobal.com/terms',
  },
}

const settings = {
  whatsappNumber: '+15053736924',
  email: 'contact@aptiroglobal.com',
  businessName: 'Aptiro LLC',
  address: '1209 MOUNTAIN ROAD PL NE, STE N, ALBUQUERQUE, NM 87110',
}

export default function TermsPage() {
  const lastUpdated = 'January 15, 2024'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        whatsappNumber={settings.whatsappNumber}
      />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Please read these Terms of Service carefully before using our digital marketing services.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  1. Acceptance of Terms
                </h2>
                
                <p className="text-slate-600 mb-6">
                  By accessing and using the services provided by Aptiro LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
                </p>
                
                <p className="text-slate-600 mb-6">
                  These Terms constitute a legally binding agreement between you and Aptiro LLC regarding your use of our digital marketing services, including but not limited to Google Ads management, web design and development, and e-commerce business management.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  2. Description of Services
                </h2>
                
                <p className="text-slate-600 mb-4">
                  Aptiro LLC provides the following digital marketing services:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li><strong>Google Ads Management:</strong> Campaign setup, optimization, keyword research, and performance monitoring</li>
                  <li><strong>Web Design & Development:</strong> Custom website creation, responsive design, and SEO optimization</li>
                  <li><strong>E-Commerce Business Management:</strong> Amazon, eBay, Shopify operations, customer service, and inventory management</li>
                  <li><strong>Digital Marketing Consulting:</strong> Strategy development and marketing advice</li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                  <p className="text-amber-800">
                    <strong>Service Specifications:</strong> Detailed service specifications, deliverables, timelines, and pricing will be outlined in separate service agreements or proposals.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  3. Service Agreements and Contracts
                </h2>
                
                <p className="text-slate-600 mb-4">
                  Specific services will be governed by individual service agreements that include:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Scope of work and deliverables</li>
                  <li>Project timelines and milestones</li>
                  <li>Pricing and payment terms</li>
                  <li>Performance metrics and success criteria</li>
                  <li>Termination clauses and notice periods</li>
                </ul>

                <p className="text-slate-600 mb-6">
                  Service agreements take precedence over these general Terms of Service in case of conflicts regarding specific project details.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  4. Payment Terms
                </h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Payment Schedule</h3>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Setup fees are due before project commencement</li>
                  <li>Monthly management fees are billed in advance</li>
                  <li>Ad spend budgets are managed separately and billed monthly</li>
                  <li>One-time project fees may require partial payment upfront</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Late Payments</h3>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Late fees of 1.5% per month may apply to overdue balances</li>
                  <li>Services may be suspended for accounts 30+ days overdue</li>
                  <li>Collection costs and legal fees may be charged to delinquent accounts</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Refunds</h3>
                <p className="text-slate-600 mb-6">
                  Refunds are handled on a case-by-case basis. Setup fees and completed work are generally non-refundable. Monthly management fees may be prorated for early termination with proper notice.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  5. Client Responsibilities
                </h2>
                
                <p className="text-slate-600 mb-4">
                  To ensure successful service delivery, clients agree to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Provide accurate and complete information about their business</li>
                  <li>Grant necessary access to advertising accounts, websites, and platforms</li>
                  <li>Respond promptly to requests for feedback and approvals</li>
                  <li>Maintain compliance with platform policies (Google, Facebook, etc.)</li>
                  <li>Provide timely payment according to agreed terms</li>
                  <li>Communicate changes in business objectives or circumstances</li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <p className="text-red-800">
                    <strong>Account Compliance:</strong> Clients are responsible for ensuring their business practices comply with all applicable platform policies. Account suspensions due to client non-compliance are not our responsibility.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  6. Limitation of Liability
                </h2>
                
                <p className="text-slate-600 mb-6">
                  To the maximum extent permitted by law, Aptiro LLC&apos;s liability for any claims related to our services is limited to the amount paid by the client for services in the 12 months preceding the claim.
                </p>

                <p className="text-slate-600 mb-4">
                  We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Lost profits, revenue, or business opportunities</li>
                  <li>Platform policy changes or account suspensions</li>
                  <li>Third-party service interruptions or failures</li>
                  <li>Market conditions or competitive factors</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  7. Intellectual Property
                </h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Client Content</h3>
                <p className="text-slate-600 mb-6">
                  Clients retain ownership of their trademarks, logos, content, and proprietary information. By engaging our services, clients grant us a limited license to use their materials for service delivery purposes.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Work Product</h3>
                <p className="text-slate-600 mb-6">
                  Upon full payment, clients receive ownership of custom-developed materials specific to their project (websites, ad copy, graphics). We retain rights to our methodologies, processes, and general knowledge.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Third-Party Materials</h3>
                <p className="text-slate-600 mb-6">
                  Some projects may include third-party tools, templates, or materials subject to separate licensing terms. Clients are responsible for ongoing license compliance.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  8. Confidentiality
                </h2>
                
                <p className="text-slate-600 mb-6">
                  We maintain strict confidentiality regarding client business information, strategies, and data. This obligation continues beyond the termination of our service relationship.
                </p>

                <p className="text-slate-600 mb-4">
                  Confidential information may be disclosed only:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>With explicit client consent</li>
                  <li>To authorized team members for service delivery</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our legitimate business interests</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  9. Termination
                </h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Termination by Client</h3>
                <p className="text-slate-600 mb-6">
                  Clients may terminate services with 30 days written notice. Early termination may result in additional fees for work in progress or minimum commitment periods.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Termination by Company</h3>
                <p className="text-slate-600 mb-4">
                  We may terminate services immediately for:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Non-payment of fees</li>
                  <li>Breach of these Terms</li>
                  <li>Illegal or unethical business practices</li>
                  <li>Platform policy violations</li>
                  <li>Abusive or unprofessional conduct</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Post-Termination</h3>
                <p className="text-slate-600 mb-6">
                  Upon termination, we will provide reasonable assistance in transitioning services and returning client materials. Final invoices and outstanding balances remain due.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  10. Governing Law and Disputes
                </h2>
                
                <p className="text-slate-600 mb-6">
                  These Terms are governed by the laws of New Mexico, United States. Any disputes will be resolved through binding arbitration in Albuquerque, New Mexico, except for claims eligible for small claims court.
                </p>

                <p className="text-slate-600 mb-6">
                  Before initiating formal dispute resolution, parties agree to attempt good-faith negotiations to resolve conflicts.
                </p>
              </section>

              {/* Section 11 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  11. Changes to Terms
                </h2>
                
                <p className="text-slate-600 mb-6">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated to active clients with 30 days notice. Continued use of our services after notification constitutes acceptance of updated Terms.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  12. Contact Information
                </h2>
                
                <p className="text-slate-600 mb-6">
                  Questions about these Terms of Service? Contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                    <a href={`mailto:${settings.email}`} className="text-blue-600 hover:text-blue-800 underline">
                      {settings.email}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">WhatsApp</h3>
                    <a href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`} className="text-blue-600 hover:text-blue-800 underline">
                      {settings.whatsappNumber}
                    </a>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-slate-800 mb-2">Business Address</h3>
                    <p className="text-slate-600">
                      {settings.businessName}<br />
                      {settings.address}
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer 
        email={settings.email}
        whatsappNumber={settings.whatsappNumber}
      />
      
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </div>
  )
}
