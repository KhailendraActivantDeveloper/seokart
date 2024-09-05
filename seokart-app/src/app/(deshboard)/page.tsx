'use client'
import { CustomButton } from "@/components/Button";
import Layout from "@/components/Layout";
import { FrameHeadLeft, FrameHeadRight, HeaderLayout } from "@/components/Layout/HeaderLayout";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import DashboardBox from "./_components/DashboardBox";
import ColumCard from "./_components/ColumCard";
import Heading from "@/utils/Heading";

export default function Home() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <Heading title="Dashboard | Bigcommerce" />
      <Layout>
        <HeaderLayout>
          <FrameHeadLeft>
            Dashboard
          </FrameHeadLeft>
          <FrameHeadRight>
            <CustomButton text="Upgrade" />
          </FrameHeadRight>
        </HeaderLayout>
        <DashboardBox>
          <ColumCard className="md:col-span-4 col-span-12" cardClass="card">
            <div className="dashboard-feature-head flex items-center gap15">
              <div className="dashboard-feature-img">
                <Image height={50} width={50} alt="dash-audit-icon" src="images/dash-audit-icon.svg" />
              </div>
              <h2 className="Text--headingLg mb-0">SEO Optimizer</h2>
            </div>
            <div className="dashboard-feature-output grid grid-cols-2">
              <div className="dashboard-featureBox text-center">
                <h4 className="Text--headingLg">159</h4>
                <p>Crawled Pages</p>
              </div>

              <div className="dashboard-featureBox text-center">
                <h4 className="Text--headingLg">189</h4>
                <p>Total Pages</p>
              </div>
            </div>
          </ColumCard>
          <ColumCard className="md:col-span-3 col-span-12" cardClass="card">
            <div className="dashboard-SeoScore">
              <div className="gauge-a"></div>
              <div className="gauge-b"></div>
              <div className="gauge-c green-bg" style={{ "transform": "rotate(180deg)" }}> </div>
              <div className="gauge-data green">
                100% <span>SEO Score</span>
              </div>
            </div>
          </ColumCard>
          <ColumCard className="md:col-span-5 col-span-12" cardClass="card">
            <div className="dashboard-feature-head flex items-center gap15">
              <div className="dashboard-feature-img">
                <Image alt="dash-bulk-optimizer-icon" src="images/dash-bulk-optimizer-icon.svg" width="50" height="50" />
              </div>
              <h2 className="Text--headingLg mb-0">Bulk Optimizer</h2>
            </div>

            <div className="dashboard-feature-output grid grid-cols-3">
              <div className="dashboard-featureBox text-center" data-bs-toggle="modal"
                data-bs-target="#exampleModal" onClick={() => setActiveModal(true)}>
                <h4 className="Text--headingLg green cursor-pointer">0</h4>
                <p>Empty Title Tags</p>
              </div>

              <div className="dashboard-featureBox text-center">
                <h4 className="Text--headingLg red">189</h4>
                <p>Empty Meta Description</p>
              </div>

              <div className="dashboard-featureBox text-center">
                <h4 className="Text--headingLg red">189</h4>
                <p>Empty Alt Texts</p>
              </div>
            </div>
          </ColumCard>
          <ColumCard className="md:col-span-8 col-span-12" cardClass="grid gap-x-8  md:grid-cols-12">
            <ColumCard className="md:col-span-6" cardClass="card">
              <div className="dashboard-feature-head flex item-center gap15">
                <div className="dashboard-feature-img">
                  <Image alt="" src="images/dash-image-optimizer-icon.svg" width="50"
                    height="50" />
                </div>
                <h2 className="Text--headingLg mb-0">Image Optimizer</h2>
              </div>

              <div className="dashboard-feature-output grid grid-cols-2">
                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg green">1</h4>
                  <p>Fixed Images</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg">1300</h4>
                  <p>Total Products</p>
                </div>
              </div>
            </ColumCard>
            <ColumCard className="md:col-span-6" cardClass="card">
              <div className="dashboard-feature-head flex item-center gap15">
                <div className="dashboard-feature-img">
                  <Image alt="" src="images/dash-rank-tracker-icon.svg" width="50"
                    height="50" />
                </div>
                <h2 className="Text--headingLg mb-0">Rank Tracker</h2>
              </div>

              <div className="dashboard-feature-output grid grid-cols-2">
                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg green">159</h4>
                  <p>Avg. Keywords Ranking</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg green">2</h4>
                  <p>Keywords</p>
                </div>
              </div>
            </ColumCard>
            <ColumCard className="md:col-span-12" cardClass="card">
              <div className="dashboard-feature-head flex item-center gap15">
                <div className="dashboard-feature-img">
                  <Image alt="dash-error-icon" src="images/dash-error-icon.svg" width="50" height="50" />
                </div>
                <h2 className="Text--headingLg mb-0">Errors</h2>
              </div>

              <div className="dashboard-feature-output grid grid-cols-5">
                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg red">360</h4>
                  <p>Meta</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg green">0</h4>
                  <p>Content</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg yellow">20</h4>
                  <p>Image</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg red">8</h4>
                  <p>Broken</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg red">206</h4>
                  <p>URL</p>
                </div>
              </div>
            </ColumCard>
            <ColumCard className="md:col-span-12" cardClass="card">
              <div className="dashboard-feature-head flex item-center gap15">
                <div className="dashboard-feature-img">
                  <Image alt="" src="images/dash-page-speed-icon.svg" width="50" height="50" />
                </div>
                <h2 className="Text--headingLg mb-0">Page Speed</h2>
              </div>

              <div className="dashboard-feature-output grid grid-cols-3">
                <div className="dashboard-featureBox text-center">
                  <div className="dashboard-pageSpeed-box flex justify-center gap20">
                    <div className="flex item-center gap10">
                      <Image src="images/page-speed-web-icon.svg" alt="" width="26" height="26" />
                      <h4 className="Text--headingLg mb-0 green">92%</h4>
                    </div>
                    <div className="flex item-center gap10">
                      <Image src="images/page-speed-mobile-icon.svg" alt="" width="26" height="26" />
                      <h4 className="Text--headingLg mb-0 red">68%</h4>
                    </div>
                  </div>
                  <p>Home</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <div className="dashboard-pageSpeed-box flex justify-center gap20">
                    <div className="flex item-center gap10">
                      <Image src="images/page-speed-web-icon.svg" alt="" width="26" height="26" />
                      <h4 className="Text--headingLg mb-0 green">92%</h4>
                    </div>
                    <div className="flex item-center gap10">
                      <Image src="images/page-speed-mobile-icon.svg" alt="" width="26" height="26" />
                      <h4 className="Text--headingLg mb-0 red">68%</h4>
                    </div>
                  </div>
                  <p>Product</p>
                </div>

                <div className="dashboard-featureBox text-center">
                  <div className="dashboard-pageSpeed-box flex justify-center gap20">
                    <div className="flex item-center gap10">
                      <Image src="images/page-speed-web-icon.svg" alt="" width="26" height="26" />
                      <h4 className="Text--headingLg mb-0 green">92%</h4>
                    </div>
                    <div className="flex item-center gap10">
                      <Image src="images/page-speed-mobile-icon.svg" alt="" width="26" height="26" />
                      <h4 className="Text--headingLg mb-0 red">68%</h4>
                    </div>
                  </div>
                  <p>Category</p>
                </div>
              </div>
            </ColumCard>
          </ColumCard>
          <ColumCard className="md:col-span-4 col-span-12">
            <ColumCard className="md:col-span-12 col-span-12" cardClass="card">
              <div className="dashboard-feature-head flex align-item-center gap15">
                <div className="dashboard-feature-img">
                  <Image alt="" src="images/dash-404-error-icon.svg" width="50" height="50" />
                </div>
                <h2 className="Text--headingLg mb-0">404 Errors</h2>
              </div>

              <div className="dashboard-feature-output d-grid">
                <div className="dashboard-featureBox text-center">
                  <h4 className="Text--headingLg red">120</h4>
                  <p>Not Fixed</p>
                </div>
              </div>
            </ColumCard>
            <ColumCard className="md:col-span-12 col-span-12" cardClass="card richSnippets-box">
              <a href="">
                <div className="dashboard-feature-head flex item-center gap15">
                  <div className="dashboard-feature-img">
                    <Image alt="" src="images/dash-bulk-optimizer-icon.svg" width="50"
                      height="50" />
                  </div>
                  <h2 className="Text--headingLg mb-0">Rich Snippets</h2>
                </div>

                <div className="rich-snippetsList">
                  <ul>
                    <li className="flex item-center justify-between">
                      <div className="rich-snippetsList-left Text--headingMd mb-0">
                        Home Page
                      </div>
                      <div className="rich-snippetsList-toggle">
                        <div className="DSA-snippet-toggle DSAS-toggle-off">
                          <div className="DSAST-toggle-round"></div>
                          <span>OFF</span>
                        </div>
                      </div>
                    </li>

                    <li className="flex item-center justify-between">
                      <div className="rich-snippetsList-left Text--headingMd mb-0">
                        Products
                      </div>
                      <div className="rich-snippetsList-toggle">
                        <div className="DSA-snippet-toggle">
                          <span>ON</span>
                          <div className="DSAST-toggle-round"></div>
                        </div>
                      </div>
                    </li>

                    <li className="flex item-center justify-between">
                      <div className="rich-snippetsList-left Text--headingMd mb-0">
                        Breadcrumb
                      </div>
                      <div className="rich-snippetsList-toggle">
                        <div className="DSA-snippet-toggle DSAS-toggle-off">
                          <div className="DSAST-toggle-round"></div>
                          <span>OFF</span>
                        </div>
                      </div>
                    </li>

                    <li className="flex item-center justify-between">
                      <div className="rich-snippetsList-left Text--headingMd mb-0">
                        Sitelinks Search Box
                      </div>
                      <div className="rich-snippetsList-toggle">
                        <div className="DSA-snippet-toggle DSAS-toggle-off">
                          <div className="DSAST-toggle-round"></div>
                          <span>OFF</span>
                        </div>
                      </div>
                    </li>

                    <li className="flex item-center justify-between">
                      <div className="rich-snippetsList-left Text--headingMd mb-0">
                        Blog Posts
                      </div>
                      <div className="rich-snippetsList-toggle">
                        <div className="DSA-snippet-toggle DSAS-toggle-off">
                          <div className="DSAST-toggle-round"></div>
                          <span>OFF</span>
                        </div>
                      </div>
                    </li>

                    <li className="flex item-center justify-between">
                      <div className="rich-snippetsList-left Text--headingMd mb-0">
                        FAQ Page
                      </div>
                      <div className="rich-snippetsList-toggle">
                        <div className="DSA-snippet-toggle DSAS-toggle-off">
                          <div className="DSAST-toggle-round"></div>
                          <span>OFF</span>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </a>
            </ColumCard>
          </ColumCard>
        </DashboardBox>
      </Layout>
      <Modal title="Empty Title Tag" isOpen={activeModal} onClose={() => setActiveModal(!setActiveModal)}>
        <div className="dashboard-bulkOptimizer-modal">
          <div className="dashboard-bulkModal-list flex align-item-center justify-content-between">
            <div className="DBM-left">Home:</div>
            <div className="DBM-left">0</div>
          </div>

          <div className="dashboard-bulkModal-list flex align-item-center justify-content-between">
            <div className="DBM-left">Product:</div>
            <div className="DBM-left">0</div>
          </div>

          <div className="dashboard-bulkModal-list flex align-item-center justify-content-between">
            <div className="DBM-left">Custom Collection:</div>
            <div className="DBM-left">0</div>
          </div>

          <div className="dashboard-bulkModal-list flex align-item-center justify-content-between">
            <div className="DBM-left">Smart Collection:</div>
            <div className="DBM-left">0</div>
          </div>

          <div className="dashboard-bulkModal-list flex align-item-center justify-content-between">
            <div className="DBM-left">Pages:</div>
            <div className="DBM-left">0</div>
          </div>

          <div className="dashboard-bulkModal-list flex align-item-center justify-content-between">
            <div className="DBM-left">Blogs:</div>
            <div className="DBM-left">0</div>
          </div>
        </div>
      </Modal>
    </>
  );
}
