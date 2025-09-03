interface ServiceSchema {
  name: string
  description: string
  provider: {
    name: string
    url: string
    telephone: string
    address: {
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  areaServed: string
  serviceType: string
  url: string
  offers?: {
    description: string
    price?: string
    priceCurrency?: string
  }
}

interface StructuredDataProps {
  type: 'Service'
  data: ServiceSchema
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateServiceSchema = (serviceData: ServiceSchema) => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceData.name,
      "description": serviceData.description,
      "provider": {
        "@type": "Organization",
        "name": serviceData.provider.name,
        "url": serviceData.provider.url,
        "telephone": serviceData.provider.telephone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": serviceData.provider.address.streetAddress,
          "addressLocality": serviceData.provider.address.addressLocality,
          "addressRegion": serviceData.provider.address.addressRegion,
          "postalCode": serviceData.provider.address.postalCode,
          "addressCountry": serviceData.provider.address.addressCountry
        }
      },
      "areaServed": serviceData.areaServed,
      "serviceType": serviceData.serviceType,
      "url": serviceData.url,
      ...(serviceData.offers && {
        "offers": {
          "@type": "Offer",
          "description": serviceData.offers.description,
          ...(serviceData.offers.price && {
            "price": serviceData.offers.price,
            "priceCurrency": serviceData.offers.priceCurrency || "USD"
          })
        }
      })
    }
  }

  const schema = type === 'Service' ? generateServiceSchema(data) : null

  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

