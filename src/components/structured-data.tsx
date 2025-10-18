import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CarryCome',
    description: 'Student-powered campus delivery network for food, documents, and parcels',
    url: 'https://carrycome.com',
    logo: 'https://carrycome.com/assets/logo.png',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/carrycome',
      'https://facebook.com/carrycome',
      'https://instagram.com/carrycome'
    ]
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Campus Delivery Service',
    description: 'Fast, reliable delivery service for students by students on university campuses',
    provider: {
      '@type': 'Organization',
      name: 'CarryCome'
    },
    serviceType: 'Delivery Service',
    areaServed: {
      '@type': 'Place',
      name: 'University Campuses'
    }
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'CarryCome App',
    description: 'Mobile app for campus delivery services',
    applicationCategory: 'DeliveryApplication',
    operatingSystem: ['iOS', 'Android'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema),
        }}
      />
    </>
  )
}