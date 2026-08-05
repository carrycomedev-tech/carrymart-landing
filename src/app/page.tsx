import Features06Page from '@/components/features-06/features-06'
import Hero03 from '@/components/hero-03/hero-03'
import Hero05 from '@/components/hero-05/hero-05'
import DownloadAppSection from '@/components/download-app-section/download-app-section'
import React from 'react'
import Features01Page from '@/components/features-01/features-01'
import SellSection from '@/components/sell-section/sell-section'
import Testimonials from '@/components/testimonials'

const HomePage = () => {
  return (
    <>
      <Hero03 />
      <Features06Page />
      <Features01Page />
      <Hero05 />
      <SellSection />
      <Testimonials />
      <DownloadAppSection />
    </>
  )
}

export default HomePage
