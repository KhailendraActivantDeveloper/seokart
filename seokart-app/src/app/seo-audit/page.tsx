'use client'
import { CustomButton, InfoModalButton } from '@/components/Button'
import Layout from '@/components/Layout'
import { ChannelSelector } from '@/components/Layout/ChannelSelector'
import { FrameHeadLeft, FrameHeadRight, HeaderLayout } from '@/components/Layout/HeaderLayout'
import Modal from '@/components/Modal'
import Heading from '@/utils/Heading'
import Image from 'next/image'
import React, { useState } from 'react'
import AuditInfo from './_components/AuditInfo'
import Dropdown from './_components/Dropdown'
import TableRow from './_components/TableRow'

type Props = {}
interface TableRowProps {
    name: string;
    type: string;
    meta: number;
    content: number;
    image: number;
    broken: number;
    url: number;
    score: number;
}

const SeoAudit = (props: Props) => {
    const [activeModal, setActiveModal] = useState(false);
    const [tab, setTab] = useState(0);
    const options1 = [
        { label: 'All', value: 'all' },
        { label: 'Home', value: 'home' },
        { label: 'Products', value: 'product' },
        { label: 'Custom Collections', value: 'custom_collection' },
        { label: 'Smart Collections', value: 'smart_collection' },
        { label: 'Pages', value: 'page' },
        { label: 'Blogs', value: 'blog' }
    ];

    const options2 = [
        { label: 'Name - A to Z', value: 'atoz' },
        { label: 'Name - Z to A', value: 'ztoa' },
        { label: 'SEO Score - Low to High', value: 'lth' },
        { label: 'SEO Score - High to Low', value: 'htl' },
        { label: 'Latest', value: 'latest' }
    ];

    const options3 = [
        { label: 'Select All', value: 'all' },
        { label: 'Blank Title Tag', value: 'meta_title' },
        { label: 'Blank Meta Description', value: 'meta_desc' }
    ];

    const options4 = [
        { label: 'Meta Tag Issues', value: 'meta_tag_issues' },
        { label: 'Content Issues', value: 'content_issues' },
        { label: "Images' Issues", value: 'image_issues' },
        { label: 'Broken Links Issues', value: 'broken_link_issues' },
        { label: 'URL Issues', value: 'url_issues' },
    ];
    
    const options5 = [
        { label: 'Title Tag  length is 40 to 60 characters', value: 'title_40to60' },
        { label: 'Meta Description length is 120 - 160 characters', value: 'meta_120to160' },
        { label: "Target Keyword present in the Title Tag", value: 'title_keyword' },
        { label: 'Target Keyword present in the Meta Description', value: 'meta_keyword' },
        { label: 'Duplicate Title Tags', value: 'duplicate_title' },
        { label: 'Duplicate Meta Descriptions', value: 'duplicate_meta' },
    ];

    const tableRows: TableRowProps[] = [
        {
            name: '14k Intertwined Earrings',
            type: 'product',
            meta: 0,
            content: 1,
            image: 4,
            broken: 0,
            url: 1,
            score: 93
        },
        {
            name: '14k Intertwined Earrings',
            type: 'product',
            meta: 0,
            content: 1,
            image: 4,
            broken: 0,
            url: 1,
            score: 93
        },
    ];
    return (
        <>
            <Heading title={"SEO Audit | Bigcommerce"} />
            <Layout>
                <HeaderLayout>
                    <FrameHeadLeft>
                        SEO Optimizer
                        <InfoModalButton modalActivat={activeModal} setModalActivat={setActiveModal} />
                        <ChannelSelector />
                        <Modal title="How it Works" isOpen={activeModal} onClose={() => setActiveModal(!setActiveModal)}>
                            <p>SEO Audit helps you in evaluating Google&apos;s (and other search engines&apos;) critical ranking factors and in highlighting and fixing the store optimization issues in the following easy steps:</p>
                            <ul>
                                <li><p>The circular bar chart on the top of the SEO Audit page shows the number of pages audited out of the total pages on your store. This SEO Audit feature audits upto 100 pages in a trial plan and all of the website pages in a paid plan.</p></li>
                                <li>
                                    <p>By clicking on Pages, you will be able to find all of your web pages audited by the app.</p>
                                    <ul>
                                        <li><p>You can filter the pages as All, Home, Categories, or Products from the dropdown above the name section.</p></li>
                                        <li><p>You can also sort the pages as per alphabetical order from A-Z, Z-A, low to high or high to low SEO score and latest added, as shown in the below- provided image:</p></li>
                                        <li>
                                            <p>
                                                <div className="howWork-modalImg widthAuto">
                                                    <Image width={600} height={600} src="/images/faq-1.jpg" alt="" />
                                                </div>
                                            </p>
                                        </li>
                                        <li><p>You can find the fields of Name, Type, Meta Description, Content, Images, Broken, and URL section.</p></li>
                                        <li><p>On the right of all these sections, is the SEO Score for the particular page and the OPTIMIZE action button, which allows you to edit and fix the errors.</p></li>
                                        <li><p>
                                            <div className="howWork-modalImg">
                                                <Image width={600} height={600} src="/images/faq-2.jpg" alt="" />
                                            </div>
                                        </p>
                                        </li>
                                        <li><p>Click on the OPTIMIZE action button, for the page you want to rectify first or you may also search the page by mentioning the name of that page in the search bar on the right.</p></li>
                                        <li><p>The next page will show you the different parameters with the option to edit your page, Keyword, Title Tag, Meta Description, Content, Image, and URL.</p></li>
                                    </ul>
                                </li>
                            </ul>
                        </Modal>
                    </FrameHeadLeft>
                    <FrameHeadRight>
                        <button type="button" className="btn-primary">Sync</button>
                    </FrameHeadRight>
                </HeaderLayout>
                <div className="seo-optimizerMain">
                    <div className="flex gap-24">
                        <div className="card">
                            <div className="flex items-center gap-3">
                                <div className="optimizer-logo">
                                    <Image src="images/seokart-logo-icon.svg" alt="" width="70" height="70" />
                                </div>
                                <div className="optimizer-auditInfo">
                                    <div className="flex items-baseline">
                                        <h2 className="Text--heading2xl mb-0 green-text">158</h2>
                                        <span>/162</span>
                                    </div>
                                    <h2 className="Text--headingLg mb-0">Pages Audited</h2>
                                    <div className="audit-progress">
                                        Place Progress bar here pankaj
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card flex-grow">
                            <div className="flex text-align-center">
                                <AuditInfo count={158} total={162} label="Products" />
                                <AuditInfo count={158} total={162} label="Custom Collections" />
                                <AuditInfo count={158} total={162} label="Pages Audited" />
                                <AuditInfo count={158} total={162} label="Pages Audited" />
                                <AuditInfo count={158} total={162} label="Pages Audited" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <nav>
                            <div className="flex border-b nav-tabs">
                                <button className={`nav-link ${tab === 0 ? 'active' : ''}`} id="pageSpeed-home-tab" onClick={() => setTab(0)}>
                                    Pages
                                </button>
                                <button className={`nav-link ${tab === 1 ? 'active' : ''}`} id="pageSpeed-product-tab" onClick={() => setTab(1)}>
                                    Errors
                                </button>
                            </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">
                            <div className={`transition-opacity duration-300 ease-in-out opacity-0 ${tab === 0 ? 'opacity-100 block' : 'hidden'}`} id="pageSpeed-home" role="tabpanel" aria-labelledby="pageSpeed-product-tab" tabIndex={0}>
                                <div className="PageSpeed-URL-Area">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-3">
                                            <Dropdown options={options1} selected="all" />
                                            <Dropdown options={options2} selected="atoz" />
                                            <Dropdown options={options3} selected="all" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <span className="absolute left-3 top-2.5 text-gray-500">
                                                    <Image src="images/search-icon.svg" alt="" className="w-4 h-4" width="20" height="20" />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Name"
                                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-table mt-20">
                                        <table className="min-w-full bg-white table">
                                            <thead>
                                                <tr>
                                                    <th className="py-2 px-4 border-b">Name</th>
                                                    <th className="py-2 px-4 border-b">Type</th>
                                                    <th className="py-2 px-4 border-b">Meta</th>
                                                    <th className="py-2 px-4 border-b">Content</th>
                                                    <th className="py-2 px-4 border-b">Image</th>
                                                    <th className="py-2 px-4 border-b">Broken</th>
                                                    <th className="py-2 px-4 border-b">URL</th>
                                                    <th className="py-2 px-4 border-b text-left">SEO Score</th>
                                                    <th className="py-2 px-4 border-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableRows.map((row, index) => (
                                                    <TableRow key={index} {...row} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-opacity duration-300 ease-in-out opacity-0 ${tab === 1 ? 'opacity-100 block' : 'hidden'}`} id="pageSpeed-product" role="tabpanel" aria-labelledby="pageSpeed-home-tab" tabIndex={0}>
                                <div className="PageSpeed-URL-Area">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-3">
                                            <Dropdown options={options4} selected="meta_tag_issues" />
                                            <Dropdown options={options5} selected="title_40to60" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <span className="absolute left-3 top-2.5 text-gray-500">
                                                    <Image src="images/search-icon.svg" alt="" className="w-4 h-4" width="20" height="20" />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Name"
                                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-table mt-20">
                                        <table className="min-w-full bg-white table">
                                            <thead>
                                                <tr>
                                                    <th className="py-2 px-4 border-b">Name</th>
                                                    <th className="py-2 px-4 border-b">Type</th>
                                                    <th className="py-2 px-4 border-b">Meta</th>
                                                    <th className="py-2 px-4 border-b">Content</th>
                                                    <th className="py-2 px-4 border-b">Image</th>
                                                    <th className="py-2 px-4 border-b">Broken</th>
                                                    <th className="py-2 px-4 border-b">URL</th>
                                                    <th className="py-2 px-4 border-b text-left">SEO Score</th>
                                                    <th className="py-2 px-4 border-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableRows.map((row, index) => (
                                                    <TableRow key={index} {...row} />
                                                ))}
                                            </tbody>
                                        </table>
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

export default SeoAudit