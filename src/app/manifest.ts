import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CarryMart | The Campus Marketplace',
    short_name: 'CarryMart',
    description: 'Buy and sell with students on your campus — reels, chat, and escrow-protected payments',
    start_url: '/',
    display: 'standalone',
    background_color: '#000B29',
    theme_color: '#F50053',
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
    categories: ['shopping', 'lifestyle', 'social'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
