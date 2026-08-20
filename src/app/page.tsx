import Features06Page from '@/components/features-06/features-06'
import Hero03 from '@/components/hero-03/hero-03'
import Hero05 from '@/components/hero-05/hero-05'
import DownloadAppSection from '@/components/download-app-section/download-app-section'
import React from 'react'
import Features01Page from '@/components/features-01/features-01'
import SellSection from '@/components/sell-section/sell-section'
import Testimonials from '@/components/testimonials'
import PageGraph from '@/components/seo/page-graph'
import { APP_ID, type Crumb } from '@/lib/schema'
import { BRAND, CATEGORIES, absoluteUrl } from '@/lib/seo'

const PATH = '/'

const crumbs: Crumb[] = [{ name: 'Home', path: PATH }]

const HomePage = () => {
  return (
    <>
      {/*
        The homepage carries no FAQ node. It used to, describing questions that
        are only rendered on /support — schema for content a visitor cannot see
        on the page is a structured-data violation and risks rich-result
        eligibility for the whole domain. The FAQs now live in the graph of the
        pages that actually display them.
      */}
      <PageGraph
        path={PATH}
        title={`${BRAND.name} | ${BRAND.tagline} for students in Ghana`}
        description={BRAND.description}
        crumbs={crumbs}
        about={{ '@id': APP_ID }}
        nodes={[
          {
            '@type': 'ItemList',
            '@id': `${absoluteUrl(PATH)}#categories`,
            name: 'CarryMart marketplace categories',
            numberOfItems: CATEGORIES.length,
            itemListElement: CATEGORIES.map((name, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name,
            })),
          },
        ]}
      />
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
