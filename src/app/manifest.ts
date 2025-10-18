import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CarryCome - Campus Delivery Service',
    short_name: 'CarryCome',
    description: 'Student-powered campus delivery network for food, documents, and parcels',
    start_url: '/',
    display: 'standalone',
    background_color: '#080231',
    theme_color: '#FFCC00',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/logo-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'lifestyle', 'business'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}