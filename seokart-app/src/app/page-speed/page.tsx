'use client';
import Layout from '@/components/Layout'
import { FrameHeadLeft, FrameHeadRight, HeaderLayout } from '@/components/Layout/HeaderLayout'
import Heading from '@/utils/Heading'
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}

interface TabButtonProps {
  id: string;
  target: string;
  ariaControls: string;
  ariaSelected: boolean;
  text: string;
  active: number;
}

const RichSnippets = (props: Props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabData: TabButtonProps[] = [
    { id: 'pageSpeed-home-tab', target: '#pageSpeed-home', ariaControls: 'pageSpeed-home', ariaSelected: true, text: 'Home', active: 0 },
    { id: 'pageSpeed-product-tab', target: '#pageSpeed-product', ariaControls: 'pageSpeed-product', ariaSelected: false, text: 'Product', active: 1 },
    { id: 'pageSpeed-category-tab', target: '#pageSpeed-category', ariaControls: 'pageSpeed-category', ariaSelected: false, text: 'Category', active: 2 },
    { id: 'pageSpeed-custom-tab', target: '#pageSpeed-custom', ariaControls: 'pageSpeed-custom', ariaSelected: false, text: 'Custom',active: 3 }
  ];

  return (
    <>
      <Heading title='Keyword Ranking | Bigcommerce' />
      <Layout>
        <HeaderLayout>
          <FrameHeadLeft>
            Page Speed
          </FrameHeadLeft>
          <FrameHeadRight>
            <button type="button" className="custom-btn">Upgrade</button>
          </FrameHeadRight>
        </HeaderLayout>
        <div className="page-speedMain">
          <div className="grid gap-x-6 ">
            <div className="md:grid-col-8 sm:grid-col-12">
              <div className="card">
                <nav>
                  <div className="nav nav-tabs flex" id="nav-tab" role="tablist">
                    {tabData.map((tab:any, index:number) => (
                      <button
                        className={`nav-link ${tab.active === tabIndex ? 'active' : ''}`}
                        id={tab.id}
                        onClick={()=>setTabIndex(tab.active)}
                        data-bs-toggle="tab"
                        data-bs-target={tab.target}
                        type="button"
                        role="tab"
                        aria-controls={tab.ariaControls}
                        aria-selected={tab.ariaSelected}
                        key={index}
                      >
                        {tab.text}
                      </button>
                      ))
                    }
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className={`tab-pane fade show ${tabIndex===0 ? 'active' : ''}`} id="pageSpeed-home" role="tabpanel" aria-labelledby="pageSpeed-home-tab" tabIndex={0}>
                    <div className="PageSpeed-URL-Area">
                      <div className="PageSpeed-Url-Box">
                        <div className="PageSpeed-Url-img">
                          <Image width="30" height="30" src="images/pageSpeed-url.svg" alt="" />
                        </div>

                        <div className="custom-input flex-grow-1">
                          <input type="text" className="form-control" value="https://pankaj3196.myshopify.com" disabled />
                        </div>

                        <button type="button" className="custom-btn">Analyze</button>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade show ${tabIndex===1 ? 'active' : ''}`}  id="pageSpeed-product" role="tabpanel" aria-labelledby="pageSpeed-product-tab" tabIndex={0}>
                    <div className="PageSpeed-URL-Area">
                      <div className="PageSpeed-Url-Box">
                        <div className="PageSpeed-Url-img">
                          <Image width="30" height="30" src="images/pageSpeed-url.svg" alt="" />
                        </div>

                        <div className="custom-input flex-grow-1">
                          <input type="text" className="form-control" value="https://pankaj3196.myshopify.com/products/the-zulu-glow-fixie" disabled />
                        </div>

                        <button type="button" className="custom-btn">Analyze</button>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade show ${tabIndex===2 ? 'active' : ''}`}  id="pageSpeed-category" role="tabpanel" aria-labelledby="pageSpeed-category-tab" tabIndex={0}>
                    <div className="PageSpeed-URL-Area">
                      <div className="PageSpeed-Url-Box">
                        <div className="PageSpeed-Url-img">
                          <Image width="30" height="30" src="images/pageSpeed-url.svg" alt="" />
                        </div>

                        <div className="custom-input flex-grow-1">
                          <input type="text" className="form-control" value="https://pankaj3196.myshopify.com/collections/custom5-collection-car" disabled />
                        </div>

                        <button type="button" className="custom-btn">Analyze</button>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade show ${tabIndex===3 ? 'active' : ''}`}  id="pageSpeed-custom" role="tabpanel" aria-labelledby="pageSpeed-custom-tab" tabIndex={0}>
                    <div className="PageSpeed-URL-Area">
                      <div className="PageSpeed-Url-Box">
                        <div className="PageSpeed-Url-img">
                          <Image width="30" height="30" src="images/pageSpeed-url.svg" alt="" />
                        </div>

                        <div className="custom-input flex-grow-1">
                          <input type="text" placeholder="Enter URL" className="form-control" />
                        </div>

                        <button type="button" className="custom-btn">Analyze</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default RichSnippets