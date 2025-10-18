import Features06Page from '@/components/features-06/features-06'
import Hero03 from '@/components/hero-03/hero-03'
import Hero05 from '@/components/hero-05/hero-05'
import React from 'react'
import Blog02Page from './blog/page'
import Features01Page from '@/components/features-01/features-01'
import QRCodeDisplay from '@/components/ui/qr-code-generator'

const HomePage = () => {
  return (
    <>
      <Hero03 />
      <Hero05 />
      <Features06Page />
      <Blog02Page />
      <Features01Page />
      <QRCodeDisplay data={{ url: "https://carrycome.com" } as any} />
    </>
  )
}

export default HomePage