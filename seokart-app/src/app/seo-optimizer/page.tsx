'use client'
import { BackButton, InfoModalButton } from '@/components/Button'
import Layout from '@/components/Layout'
import { ChannelSelector } from '@/components/Layout/ChannelSelector'
import { FrameHeadLeft, FrameHeadRight, HeaderLayout } from '@/components/Layout/HeaderLayout'
import Modal from '@/components/Modal'
import Heading from '@/utils/Heading'
import Image from 'next/image'
import React, { useState } from 'react'
import SEOHeader from './_components/SEOHeader'
import CardDiv from './_components/CardDiv'
import SEOScore from './_components/SEOScore'
import SEOSection from './_components/SEOSection'
import SEOEditor from './_components/SEOEditor'
import SEOIssues from './_components/SEOIssues'
import SEOContentIssues from './_components/SEOContentIssues'

type Props = {}

const SEOOptimizer: React.FC<Props> = () => {
  const [activeModal, setActiveModal] = useState(false);

  const cardData: string[] = [
    'Title length (40 to 60)',
        'Meta description length (120 to 160)',
        'Target Keyword present in the Title Tag',
        'Target Keyword present in the Meta Description',
        'Duplicate Title Tags',
        'Duplicate Meta Descriptions'
  ]

  return (
    <>
      <Heading title={"SEO Optimizer | Bigcommerce"} />
      <Layout>
        <HeaderLayout>
          <FrameHeadLeft>
            <BackButton />
            SEO Optimizer
          </FrameHeadLeft>
          <FrameHeadRight>
            <button type="button" className="custom-btn">Save All</button>
            <button type="button" className="btn-primary">SaveAll & Exit</button>
          </FrameHeadRight>
        </HeaderLayout>
        <div className="seo-optimizerMain">
          <div className="flex gap24">
            <CardDiv>
              <SEOScore score="98%" />
            </CardDiv>
            <CardDiv className="flex-grow">
              <SEOHeader />
            </CardDiv>

          </div>
          <SEOSection title="Meta Tag Issues">
            <SEOIssues cardData={cardData} />
            <SEOEditor />
          </SEOSection>
          <SEOSection title="Content Issues">
            <SEOIssues cardData={cardData} />
            <SEOEditor />
          </SEOSection>
        </div>
      </Layout>
    </>
  )
}

export default SEOOptimizer