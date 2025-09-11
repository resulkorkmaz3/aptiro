import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aptiro LLC. Learn how we collect, use, and protect your personal information when you use our digital marketing services.',
  keywords: 'privacy policy, data protection, personal information, GDPR compliance, privacy rights, data security',
  openGraph: {
    title: 'Privacy Policy | Aptiro LLC',
    description: 'Privacy Policy for Aptiro LLC digital marketing services.',
    url: 'https://aptiroglobal.com/privacy',
    siteName: 'Aptiro LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Aptiro LLC',
    description: 'Privacy Policy for Aptiro LLC digital marketing services.',
  },
  alternates: {
    canonical: 'https://aptiroglobal.com/privacy',
  },
}

const settings = {
  whatsappNumber: '+15053736924',
  email: 'contact@aptiroglobal.com',
  businessName: 'Aptiro LLC',
  address: '1209 MOUNTAIN ROAD PL NE, STE N, ALBUQUERQUE, NM 87110',
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At Aptiro LLC, we are committed to protecting your privacy and ensuring the security of your personal information.
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
                  1. Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Personal Information</h3>
                <p className="text-slate-600 mb-4">
                  We may collect the following types of personal information when you use our services:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information (company name, website, industry)</li>
                  <li>Communication preferences and service interests</li>
                  <li>Payment and billing information</li>
                  <li>WhatsApp messages and communication history</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">Technical Information</h3>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  2. How We Use Your Information
                </h2>
                
                <p className="text-slate-600 mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Providing and delivering our digital marketing services</li>
                  <li>Communicating with you about your projects and inquiries</li>
                  <li>Processing payments and managing billing</li>
                  <li>Improving our services and website functionality</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                  <li>Analyzing website traffic and user behavior for optimization</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  3. Information Sharing and Disclosure
                </h2>
                
                <p className="text-slate-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in delivering our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-blue-800">
                    <strong>Third-Party Services:</strong> We may use Google Analytics, Google Ads, and other analytics services. These services have their own privacy policies governing data collection and use.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  4. Data Security
                </h2>
                
                <p className="text-slate-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure hosting and data storage practices</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Incident response procedures</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  5. Your Privacy Rights
                </h2>
                
                <p className="text-slate-600 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                </ul>

                <p className="text-slate-600">
                  To exercise these rights, please contact us at{' '}
                  <a href={`mailto:${settings.email}`} className="text-blue-600 hover:text-blue-800 underline">
                    {settings.email}
                  </a>
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  6. Cookies and Tracking Technologies
                </h2>
                
                <p className="text-slate-600 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>

                <p className="text-slate-600">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  7. Data Retention
                </h2>
                
                <p className="text-slate-600 mb-6">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Client information: Duration of service agreement plus 7 years</li>
                  <li>Marketing communications: Until you unsubscribe</li>
                  <li>Website analytics: Up to 26 months</li>
                  <li>Support communications: 3 years from last contact</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  8. International Data Transfers
                </h2>
                
                <p className="text-slate-600 mb-6">
                  Our services are primarily based in the United States. If you are accessing our services from outside the US, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  9. Children&apos;s Privacy
                </h2>
                
                <p className="text-slate-600 mb-6">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  10. Changes to This Privacy Policy
                </h2>
                
                <p className="text-slate-600 mb-6">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this privacy policy periodically.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  11. Contact Information
                </h2>
                
                <p className="text-slate-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                    <h3 className="font-semibold text-slate-800 mb-2">Mailing Address</h3>
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
