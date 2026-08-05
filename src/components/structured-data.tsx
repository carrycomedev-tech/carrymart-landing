import Script from 'next/script'
import { SUPPORT_EMAIL, SUPPORT_PHONE_HREF } from '@/lib/contact'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CarryMart',
    alternateName: 'CarryMart Campus Marketplace',
    description: 'The campus marketplace where students buy and sell with escrow-protected payments, reels, and real-time chat',
    url: 'https://carrymart.com',
    logo: 'https://carrymart.com/assets/logo-512.png',
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      name: 'Ghana'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: SUPPORT_PHONE_HREF,
      email: SUPPORT_EMAIL,
      availableLanguage: ['en']
    },
    sameAs: [
      'https://twitter.com/carrymart',
      'https://facebook.com/carrymart',
      'https://instagram.com/carrymart'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Ghana'
    }
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CarryMart',
    url: 'https://carrymart.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://carrymart.com/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    sameAs: [
      'https://twitter.com/carrymart',
      'https://facebook.com/carrymart',
      'https://instagram.com/carrymart'
    ]
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'CarryMart',
    description: 'Campus marketplace for student-to-student commerce',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GH',
      addressRegion: 'Greater Accra'
    },
    telephone: SUPPORT_PHONE_HREF,
    email: SUPPORT_EMAIL,
    url: 'https://carrymart.com',
    priceRange: 'GHS 0+',
    image: 'https://carrymart.com/assets/logo-512.png'
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Campus Marketplace',
    description: 'A student-to-student marketplace for fashion, beauty, food, deals, events, and delivery on university campuses across Ghana',
    serviceType: 'Online Marketplace',
    provider: {
      '@type': 'Organization',
      name: 'CarryMart'
    },
    areaServed: {
      '@type': 'Place',
      name: 'University Campuses in Ghana'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Campus Marketplace Categories',
      itemListElement: [
        { '@type': 'Thing', name: 'Fashion' },
        { '@type': 'Thing', name: 'Beauty' },
        { '@type': 'Thing', name: 'Food' },
        { '@type': 'Thing', name: 'Deals' },
        { '@type': 'Thing', name: 'Events' },
        { '@type': 'Thing', name: 'Delivery Services' }
      ]
    }
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'CarryMart',
    description: 'Mobile and web app for buying and selling on campus with the CarryPay escrow wallet',
    applicationCategory: ['ShoppingApplication', 'SocialNetworkingApplication'],
    operatingSystem: ['iOS', 'Android', 'Web'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GHS',
      availability: 'https://schema.org/InStock'
    }
  }

  const faqs = [
    {
      question: "What is CarryMart?",
      answer: "CarryMart is the campus marketplace where students buy and sell everything from fashion and food to beauty and events. Discover deals in reels, chat with sellers instantly, and pay safely with the CarryPay escrow wallet."
    },
    {
      question: "How do I buy something?",
      answer: "Find an item through the feed, search, or reels, then chat with the seller to agree on the details. When you're ready, pay through the app. Your money is held in CarryPay escrow, and you arrange the handover with the seller right in the chat."
    },
    {
      question: "How do I sell something?",
      answer: "Tap the + button, choose 'Sell an item', add photos, a price, a category, and where on campus you're based. Your listing goes live on your campus feed instantly, and it's free."
    },
    {
      question: "Is my money safe with CarryPay?",
      answer: "Yes. Wallet access and every transaction are locked behind your PIN, payments run through licensed mobile money providers, and each deal produces a digital receipt. We never store your mobile money PIN."
    }
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://carrymart.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Marketplace',
        item: 'https://carrymart.com/#marketplace'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Why CarryMart',
        item: 'https://carrymart.com/#features'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Support',
        item: 'https://carrymart.com/support'
      }
    ]
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
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
