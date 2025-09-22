'use client'

import type { Metadata } from 'next'
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const metadata: Metadata = {
  title: 'Pricing & Packages - Aptiro LLC',
  description: 'Transparent pricing for web design, Google Ads management, e-commerce solutions, AI automation, and hosting services. Professional digital marketing packages.',
  keywords: 'pricing, web design cost, Google Ads management price, e-commerce development, AI automation pricing, hosting packages, digital marketing rates',
  openGraph: {
    title: 'Pricing & Packages - Aptiro LLC',
    description: 'Transparent pricing for web design, Google Ads management, e-commerce solutions, AI automation, and hosting services.',
    url: 'https://aptiroglobal.com/pricing',
    siteName: 'Aptiro LLC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing & Packages - Aptiro LLC',
    description: 'Transparent pricing for web design, Google Ads management, e-commerce solutions, AI automation, and hosting services.',
  },
  alternates: {
    canonical: 'https://aptiroglobal.com/pricing',
  },
}

interface PricingPageProps {
  whatsappNumber?: string
}

export default function PricingPage({ 
  whatsappNumber = '+15053736924' 
}: PricingPageProps) {
  const getWhatsAppUrl = (service: string, plan: string) => {
    const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');
    const message = encodeURIComponent(`Hi! I'm interested in the ${plan} plan for ${service}. Can you provide more details?`);
    return `https://wa.me/${cleanNumber}?text=${message}`;
  };

  const webDesignPlans = [
    {
      name: 'Temel',
      price: '$169',
      duration: 'One-time',
      popular: false,
      features: [
        '3-page responsive website',
        'Basic modern design',
        'Contact form',
        'Basic SEO setup',
        'SSL certificate included',
        '15-day WhatsApp & email support',
        'Mobile responsive'
      ],
      limitations: [
        'Template-based design',
        'Limited customization',
        'Basic hosting (6 months)'
      ]
    },
    {
      name: 'Başlangıç',
      price: '$269',
      duration: 'One-time',
      popular: true,
      features: [
        '5-page responsive website',
        'Modern mobile-first design',
        'Contact form integration',
        'SEO optimization',
        'SSL certificate included',
        '30-day WhatsApp & email support',
        'Google Analytics setup',
        'Social media integration'
      ],
      limitations: [
        'Semi-custom design',
        'Standard features',
        'Basic hosting (1 year)'
      ]
    },
    {
      name: 'Pro',
      price: '$799',
      duration: 'One-time',
      popular: false,
      features: [
        '10-page custom website',
        'Premium design & animations',
        'Advanced contact forms',
        'Full SEO optimization',
        'Content management system',
        '90-day WhatsApp & email support',
        'Speed optimization',
        'Multi-language ready',
        'Blog functionality',
        'Google My Business setup'
      ],
      limitations: [
        'Premium hosting (1 year)',
        'Full customization included'
      ]
    }
  ];

  const googleAdsPlans = [
    {
      name: 'Arama Ağı Reklamları',
      price: '$99',
      duration: 'Kurulum',
      popular: false,
      features: [
        'Google Arama Ağı kampanya kurulumu',
        'Anahtar kelime araştırması',
        'Reklam metni oluşturma (5 varyant)',
        'Negatif anahtar kelime ayarları',
        'Teklif optimizasyonu',
        'Dönüşüm takibi kurulumu',
        'Temel hedefleme ayarları',
        'Kampanya başlatma',
        'WhatsApp & email destek'
      ],
      limitations: [
        'Sadece kurulum hizmeti',
        'Aylık yönetim ayrı',
        '48-saat yanıt süresi'
      ]
    },
    {
      name: 'Performance Max Reklamları',
      price: '$149',
      duration: 'Kurulum',
      popular: false,
      features: [
        'Google Performance Max kampanya kurulumu',
        'AI destekli optimizasyon ayarları',
        'Çapraz kanal reklam kurulumu',
        'Varlık grubu oluşturma',
        'Hedef kitle sinyali optimizasyonu',
        'Yaratıcı varlık testleri',
        'Gelişmiş dönüşüm takibi',
        'Kampanya başlatma',
        'WhatsApp & email destek'
      ],
      limitations: [
        'Sadece kurulum hizmeti',
        'Aylık yönetim ayrı',
        '24-saat yanıt süresi'
      ]
    },
    {
      name: 'E-ticaret Reklamları',
      price: '$697',
      duration: 'per month',
      popular: false,
      features: [
        'Google Shopping kampanyaları',
        'Ürün feed optimizasyonu',
        'Up to $7,000 ad spend management',
        'Shopping ads setup',
        'Product listing ads',
        'Dynamic remarketing',
        'Merchant Center management',
        'Product performance analysis',
        'Inventory-based bidding',
        'WhatsApp & email support'
      ],
      limitations: [
        'E-commerce focused',
        'Requires product catalog'
      ]
    },
    {
      name: 'YouTube Reklamları - Temel',
      price: '$149',
      duration: 'Kurulum',
      popular: false,
      features: [
        'YouTube reklam kampanya kurulumu',
        'Video reklam formatı seçimi',
        'Temel hedef kitle ayarları',
        'Kampanya bütçe ayarları',
        'Temel yaratıcı optimizasyon',
        'Dönüşüm takibi kurulumu',
        'Kampanya başlatma',
        'WhatsApp & email destek'
      ],
      limitations: [
        'Temel kurulum hizmeti',
        'Video içerik dahil değil',
        'Aylık yönetim ayrı'
      ]
    },
    {
      name: 'YouTube Reklamları - Profesyonel',
      price: '$599',
      duration: 'Kurulum + 1 Ay Yönetim',
      popular: false,
      features: [
        'Profesyonel YouTube kampanya kurulumu',
        'Video reklam üretimi (30 saniyelik)',
        'Gelişmiş hedef kitle segmentasyonu',
        'A/B testing kurulumu',
        'Remarketing kampanya kurulumu',
        'Detaylı analitik kurulumu',
        '1 ay kampanya yönetimi',
        'Performans optimizasyonu',
        'WhatsApp & email destek'
      ],
      limitations: [
        'Video içerik 1 adet dahil',
        '1 ay sonrası yönetim ayrı'
      ]
    },
    {
      name: 'Özel Danışmanlık',
      price: 'İletişim',
      duration: 'Bilgi Alın',
      popular: false,
      features: [
        'İhtiyaçlarınıza özel çözüm',
        'Detaylı proje analizi',
        'Kişiselleştirilmiş strateji',
        'Bütçe optimizasyonu',
        'Rekabet analizi',
        'Özel kampanya tasarımı',
        'Dedike hesap yöneticisi',
        'Uzun vadeli partnership',
        'Ücretsiz ilk danışmanlık'
      ],
      limitations: [
        'Fiyat projeye göre belirlenir',
        'Minimum bütçe gerekebilir'
      ]
    }
  ];


  const aiAutomationPlans = [
    {
      name: 'Basic Automation',
      price: '$799',
      duration: 'One-time setup',
      popular: false,
      features: [
        'Simple workflow automation',
        'Email automation setup',
        'Basic chatbot integration',
        'Lead capture automation',
        'Social media scheduling',
        '30-day WhatsApp & email support',
        'Training documentation'
      ],
      limitations: [
        'Up to 3 automation workflows',
        'Basic integrations only',
        'Standard templates'
      ]
    },
    {
      name: 'Smart Business',
      price: '$1,599',
      duration: 'One-time setup',
      popular: true,
      features: [
        'Advanced AI chatbot',
        'CRM automation',
        'Lead scoring system',
        'Automated follow-ups',
        'Customer segmentation',
        'Integration with 10+ tools',
        'Custom workflow design',
        'Performance analytics',
        '90-day WhatsApp & email support'
      ],
      limitations: [
        'Up to 10 automation workflows',
        'Monthly optimization included'
      ]
    },
    {
      name: 'Enterprise AI',
      price: '$3,299',
      duration: 'One-time setup',
      popular: false,
      features: [
        'Custom AI solutions',
        'Advanced machine learning',
        'Predictive analytics',
        'Multi-channel automation',
        'API integrations',
        'Custom dashboard',
        'Advanced reporting',
        'Dedicated AI specialist',
        '6-month WhatsApp & email support',
        'Ongoing optimization'
      ],
      limitations: []
    }
  ];

  const emailPlans = [
    {
      name: 'Temel E-posta Paketi',
      price: '$17',
      duration: 'Kurulum + 1 Ay',
      popular: false,
      isVariable: true,
      basePrice: 17,
      perUser: 17,
      userOptions: [1, 3, 7, 13],
      features: [
        'Şirket domainli e-posta hesabı',
        'Profesyonel Gmail arayüzü',
        'Gelişmiş spam ve güvenlik koruması',
        'Mobile ve masaüstü entegrasyonu',
        '30GB depolama alanı (her hesap)',
        'Google Meet video konferans',
        'Temel e-posta imzaları',
        '1 ay lisans bedeli dahil',
        '15 günlük WhatsApp & email destek'
      ],
      limitations: [
        'Her ek kullanıcı +$17',
        '2. ay sonrası $8.40/kullanıcı/ay',
        'Temel özellikler'
      ]
    },
    {
      name: 'İşletme E-posta Paketi',
      price: '$32',
      duration: 'Kurulum + 1 Ay',
      popular: true,
      isVariable: true,
      basePrice: 32,
      perUser: 32,
      userOptions: [1, 3, 7, 13],
      features: [
        'Şirket domainli e-posta hesabı',
        'Gelişmiş Gmail ve Google Workspace',
        'Google Meet premium özellikleri',
        '2TB depolama alanı (her hesap)',
        'Google Drive, Docs, Sheets, Slides',
        'Gelişmiş güvenlik ve yönetim paneli',
        'Otomatik yedekleme',
        'Profesyonel e-posta imzaları',
        '1 ay lisans bedeli dahil',
        '30 günlük WhatsApp & email destek'
      ],
      limitations: [
        'Her ek kullanıcı +$32',
        '2. ay sonrası $16.80/kullanıcı/ay',
        'İlave kullanıcı eklenebilir'
      ]
    },
    {
      name: 'Kurumsal E-posta Çözümü',
      price: '$53',
      duration: 'Kurulum + 1 Ay',
      popular: false,
      isVariable: true,
      basePrice: 53,
      perUser: 53,
      userOptions: [1, 3, 7, 13],
      features: [
        'Şirket domainli e-posta hesabı',
        'Kurumsal Google Workspace Plus',
        'Gelişmiş güvenlik ve uyumluluk',
        '5TB depolama alanı (her hesap)',
        'Gelişmiş raporlama ve analitik',
        'Çok faktörlü kimlik doğrulama',
        'Vault for eDiscovery',
        'Kurumsal seviye destek',
        'Personel eğitimi dahil',
        '1 ay lisans bedeli dahil',
        '60 günlük WhatsApp & email destek'
      ],
      limitations: [
        'Her ek kullanıcı +$53',
        '2. ay sonrası $26.40/kullanıcı/ay',
        'İlave kullanıcı eklenebilir'
      ]
    }
  ];

  const renderEmailCard = (plan: any, category: string) => {
    const [selectedUsers, setSelectedUsers] = React.useState(plan.userOptions[0]);
    const totalPrice = plan.basePrice * selectedUsers;

    return (
      <div key={plan.name} className={`relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        plan.popular 
          ? 'ring-2 ring-blue-500 scale-105 bg-white' 
          : 'bg-white'
      }`}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              Most Popular
            </span>
          </div>
        )}
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          
          {/* User Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kullanıcı Sayısı:
            </label>
            <select 
              value={selectedUsers}
              onChange={(e) => setSelectedUsers(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {plan.userOptions.map((users: number) => (
                <option key={users} value={users}>
                  {users} kullanıcı - ${plan.basePrice * users}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-blue-600">${totalPrice}</span>
            <span className="text-gray-600 ml-2">/{plan.duration}</span>
            <div className="text-sm text-gray-500 mt-1">
              ${plan.basePrice}/kullanıcı
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
            {plan.limitations && plan.limitations.map((limitation: string, index: number) => (
              <li key={`limit-${index}`} className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">⚠</span>
                <span className="text-gray-600 text-sm">{limitation}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <a
              href={getWhatsAppUrl(category, `${plan.name} - ${selectedUsers} kullanıcı`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Başlat - ${totalPrice}
            </a>
            <a
              href={`mailto:info@aptiroglobal.com?subject=E-posta Paketi Talebi - ${plan.name} (${selectedUsers} kullanıcı)`}
              className="w-full py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 text-center block hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderPricingCard = (plan: any, category: string) => {
    const isContactCard = plan.price === 'İletişim';
    
    return (
      <div key={plan.name} className={`relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        plan.popular 
          ? 'ring-2 ring-blue-500 scale-105 bg-white' 
          : isContactCard 
            ? 'bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300'
            : 'bg-white'
      }`}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              Most Popular
            </span>
          </div>
        )}
        
        <div className="p-8">
          <h3 className={`text-2xl font-bold mb-2 ${isContactCard ? 'text-orange-800' : 'text-gray-900'}`}>
            {plan.name}
          </h3>
          <div className="mb-6">
            {isContactCard ? (
              <div className="text-center">
                <span className="text-3xl font-bold text-orange-600">{plan.price}</span>
                <div className="text-orange-700 text-lg font-medium">{plan.duration}</div>
              </div>
            ) : (
              <>
                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-gray-600 ml-2">/{plan.duration}</span>
              </>
            )}
          </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
          {plan.limitations && plan.limitations.map((limitation: string, index: number) => (
            <li key={`limit-${index}`} className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">⚠</span>
              <span className="text-gray-600 text-sm">{limitation}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          {isContactCard ? (
            <>
              <a
                href={getWhatsAppUrl('Özel Danışmanlık', 'Google Ads Danışmanlığı')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold text-center block hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                💬 WhatsApp ile İletişim
              </a>
              <a
                href="mailto:info@aptiroglobal.com?subject=Google Ads Özel Danışmanlık Talebi"
                className="w-full py-3 px-6 border-2 border-orange-400 text-orange-700 rounded-lg font-semibold text-center block hover:bg-orange-50 transition-colors"
              >
                📧 Email Gönder
              </a>
            </>
          ) : (
            <>
              <a
                href={getWhatsAppUrl(category, plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
              <a
                href={`mailto:info@aptiroglobal.com?subject=Quote Request - ${plan.name} (${category})`}
                className="w-full py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 text-center block hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Request Quote
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header whatsappNumber={whatsappNumber} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              💰 Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the perfect package for your business needs and start growing today.
            </p>
          </div>

          {/* Web Design Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Tasarımı & Geliştirme</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                İşletmenizi online dünyada temsil eden profesyonel websiteler. Tüm paketlerde responsive tasarım ve SEO optimizasyonu dahil.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {webDesignPlans.map(plan => renderPricingCard(plan, 'Web Tasarımı'))}
            </div>
          </section>

          {/* Google Ads Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Ads & Digital Marketing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital advertising solutions. Ad spend is separate from management fees. Choose the service that best fits your business needs.
              </p>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8">
              {googleAdsPlans.map(plan => renderPricingCard(plan, 'Dijital Reklam'))}
            </div>
          </section>

          {/* AI Automation Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Automation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Streamline your business with intelligent automation. Save time and increase efficiency with AI-powered solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {aiAutomationPlans.map(plan => renderPricingCard(plan, 'AI Automation'))}
            </div>
          </section>

          {/* Email Setup Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Şirket E-posta Kurulumu</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profesyonel şirket e-posta hesapları kurulumu ve destek hizmetleri. Tüm paketlerde şirket domaininizi içeren e-posta adresleri.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {emailPlans.map(plan => renderEmailCard(plan, 'E-posta Kurulumu'))}
            </div>
          </section>

          {/* Custom Solutions */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a custom solution that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl('Custom Solution', 'Custom Project')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href="mailto:info@aptiroglobal.com?subject=Custom Solution Request"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                📧 Send Email
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3">💳 What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments for your convenience.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3">⏱️ How long does project delivery take?</h3>
                  <p className="text-gray-600">Delivery times vary by project complexity. Websites: 1-4 weeks, Ads setup: 3-5 days, E-commerce: 2-6 weeks.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3">🔄 Do you offer refunds?</h3>
                  <p className="text-gray-600">Yes, we have a comprehensive refund policy. Please check our refund policy page for detailed terms and conditions.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3">📞 What support do you provide?</h3>
                  <p className="text-gray-600">We provide instant WhatsApp and email support. Premium plans include priority support with faster response times.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer 
        email="contact@aptiroglobal.com"
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}
