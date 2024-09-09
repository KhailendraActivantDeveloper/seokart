'use client'
import { InfoModalButton } from '@/components/Button'
import Layout from '@/components/Layout'
import { ChannelSelector } from '@/components/Layout/ChannelSelector'
import { FrameHeadLeft, FrameHeadRight, HeaderLayout } from '@/components/Layout/HeaderLayout'
import Modal from '@/components/Modal'
import Heading from '@/utils/Heading'
import Image from 'next/image'
import React, { useState } from 'react'
import Dropdown from './_components/Dropdown'

type Props = {}

const RankTracker: React.FC<Props> = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [dataModal, setDataModal] = useState(false);
    const options1 = [
        { label: 'All', value: 'all' },
        { label: 'Home', value: 'home' },
        { label: 'Products', value: 'product' },
        { label: 'Custom Collections', value: 'custom_collection' },
        { label: 'Smart Collections', value: 'smart_collection' },
        { label: 'Pages', value: 'page' },
        { label: 'Blogs', value: 'blog' }
    ];

    return (
        <>
            <Heading title='Keyword Ranking | Bigcommerce' />
            <Layout>
                <HeaderLayout>
                    <FrameHeadLeft>
                        Keywords Ranking
                        <InfoModalButton modalActivat={activeModal} setModalActivat={setActiveModal} />
                        <ChannelSelector />
                        <Modal title="How it Works" isOpen={activeModal} onClose={() => setActiveModal(!setActiveModal)}>
                            <p>The ranking feature is provided to search for the appropriate Keywords for the store pages and add Keywords to track the weekly or monthly ranking of website accordingly.</p>
                            <ul>
                                <li><p>Scroll right on the page and click the “ ADD KEYWORD” button.</p></li>
                                <li>
                                    <p>You will get a page to add Keywords as shown in the below-provided image:</p>
                                    <p>
                                        <div className="howWork-modalImg">
                                            <Image width={600} height={500} src="/images/faq-19.jpg" alt="faq" />
                                        </div>
                                    </p>
                                </li>
                                <li><p>Mention the Keywords you want to track ranking in the Keyword field.</p></li>
                                <li><p>On the right of the page, you can see some suggestions and you can add keywords by clicking on the “+” sign from the “Keywords Suggestion” field.</p></li>
                                <li><p>Below the Keyword field, select the location, device on which you are operating, search engine, and language.</p></li>
                                <li><p>After adding the keywords, you can add your top 3 competitors in the “Add Competitors” filed below the screen. Also, you can add competitors from the “Competitor Suggestions “.</p></li>
                                <li><p>Click on “Submit” after adding all the details.</p></li>
                            </ul>
                        </Modal>
                    </FrameHeadLeft>
                    <FrameHeadRight>
                        <div className="badge badge-success">Keywords Used: 1/98</div>
                        <button type="button" className="custom-btn">Add Keyword</button>
                    </FrameHeadRight>
                </HeaderLayout>
                <div className="add-keywordMain">
                    <div className="card">
                        <div className="flex justify-between">
                            <Dropdown options={options1} selected="meta_tag_issues" />
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
                        <div className="custom-table mt-22">
                            <table className="min-w-full bg-white table table-auto">
                                <thead>
                                    <tr className="text-left">
                                        <th className="py-2 px-4">Keywords</th>
                                        <th className="py-2 px-4">My Rankings</th>
                                        <th className="py-2 px-4">Competitor1.com</th>
                                        <th className="py-2 px-4">Competitor2.com</th>
                                        <th className="py-2 px-4">Competitor3.com</th>
                                        <th className="py-2 px-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-4 py-2 ">
                                            <div className="flex justify-between items-center">
                                                <div className="keyword-tableKeyword-list flex items-center space-x-2">
                                                    <ul className='flex items-center space-x-2'>
                                                        <li>
                                                            <div className="language-icon">En</div>
                                                        </li>

                                                        <li>
                                                            <div className="tabe-country-icon"><Image src="/images/flag/india.png" alt="" width={20} height={20} /></div>
                                                        </li>

                                                        <li>
                                                            <div className="keyword-table-heading">buy fridge compressor online</div>
                                                        </li>

                                                        <li className="active" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sitelinks">
                                                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M15.842 4.175a3.746 3.746 0 0 0-5.298 0l-2.116 2.117a3.75 3.75 0 0 0 .01 5.313l.338.336a.75.75 0 1 0 1.057-1.064l-.339-.337a2.25 2.25 0 0 1-.005-3.187l2.116-2.117a2.246 2.246 0 1 1 3.173 3.18l-1.052 1.047a.75.75 0 0 0 1.058 1.064l1.052-1.047a3.746 3.746 0 0 0 .006-5.305Zm-11.664 11.67a3.75 3.75 0 0 0 5.304 0l2.121-2.121a3.75 3.75 0 0 0 0-5.303l-.362-.362a.75.75 0 0 0-1.06 1.06l.362.362a2.25 2.25 0 0 1 0 3.182l-2.122 2.122a2.25 2.25 0 1 1-3.182-3.182l1.07-1.07a.75.75 0 1 0-1.062-1.06l-1.069 1.069a3.75 3.75 0 0 0 0 5.303Z"></path></svg>
                                                        </li>

                                                        <li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Image">
                                                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path fill-rule="evenodd" d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v1.964c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043h-1.964c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Zm-1.877 1.538c-.454.037-.715.107-.912.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.428l.723-.867a1.75 1.75 0 0 1 2.582-.117l2.695 2.695 1.18-1.18a1.75 1.75 0 0 1 2.604.145l.216.27v-2.374c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038Zm-2.103 7.821a7.12 7.12 0 0 1-.006-.08.746.746 0 0 0 .044-.049l1.8-2.159a.25.25 0 0 1 .368-.016l3.226 3.225a.75.75 0 0 0 1.06 0l1.71-1.71a.25.25 0 0 1 .372.021l1.213 1.516c-.021.06-.045.114-.07.165-.216.423-.56.767-.984.983-.197.1-.458.17-.912.207-.462.037-1.056.038-1.909.038h-1.9c-.852 0-1.447 0-1.91-.038-.453-.037-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.984c-.1-.197-.17-.458-.207-.912Z"></path></svg>
                                                        </li>

                                                        <li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Video">
                                                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M13.875 10.65a.75.75 0 0 0 0-1.3l-5.25-3.03a.75.75 0 0 0-1.125.649v6.062a.75.75 0 0 0 1.125.65l5.25-3.032Zm-4.875 1.082v-3.464l3 1.732-3 1.732Z"></path><path fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"></path></svg>
                                                        </li>

                                                        <li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Featured Snippet">
                                                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M7.25 6.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path><path d="M6.5 10a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.25 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"></path><path fill-rule="evenodd" d="M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h5.5a2.25 2.25 0 0 1 2.25 2.25v5.5a2.25 2.25 0 0 1-2.25 2.25h-5.5a2.25 2.25 0 0 1-2.25-2.25v-5.5Z"></path></svg>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="keyword-infoModal cursor-pointer" data-bs-toggle="modal" data-bs-target="#keywordDetails__modal" onClick={()=>setDataModal(!dataModal)}>
                                                    <span><Image src="/images/eye-icon.svg" alt="" width={20} height={20} /></span>
                                                </div>

                                                {/* Modal */}
                                                <Modal title='Ranking details for buy fridge compressor online' isOpen={dataModal} onClose={()=>setDataModal(!dataModal)}>
                                                    <div className="keyword-detailsModal">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="custom-table mb-22">
                                                                    <table className="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colSpan={3} className="text-align-left">Comparison to 31 Jan 2024</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Current Ranking:</td>
                                                                                <td>&gt;100</td>
                                                                                <td>29 Feb 2024</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td>Comparison:</td>
                                                                                <td>&gt;100</td>
                                                                                <td>31 Jan 2024</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <div className="custom-table">
                                                                    <table className="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colSpan={3} className="text-align-left">Extremes</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Best Position:</td>
                                                                                <td>&gt;100</td>
                                                                                <td>29 Feb 2024</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td>Worst Position:</td>
                                                                                <td>&gt;100</td>
                                                                                <td>31 Jan 2024</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="keywordDetails-modal-chart">
                                                                    <Image src="/images/keyword-details-chart.png" width={600} height={600} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="keyword-snippets">
                                                            <div className="custom-table addedKeyword-table noDataTable">
                                                                <p className="keyword-rankSnippet-heading">Your Website ranking and your competitors websites ranking on Google for this keyword</p>
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Position</th>
                                                                            <th className="text-align-left">Ranked page and snippet</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><span className="badge badge-success">1</span></td>
                                                                            <td className="text-align-left">
                                                                                <div className="keyword-rankSnippet">
                                                                                    <p className="keyword-rankSnippetTitle">Unscented – Natura Soylights</p>
                                                                                    <p className="keyword-rankSnippetLink">
                                                                                        <a href="" target="_blank">https://naturasoy.ca/collections/unscented</a>
                                                                                    </p>
                                                                                    <p className="keyword-rankSnippetInfo">Sale. Aroma Melts- WMTM - Natura Soylights. Aroma Melts- WMTM. Regular price $5.00 CAD. Regular price $8.00 CAD Sale price $5.00 CAD. Unit price / per.</p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><span className="badge badge-success">1</span></td>
                                                                            <td className="text-align-left">
                                                                                <div className="keyword-rankSnippet">
                                                                                    <p className="keyword-rankSnippetTitle">Unscented – Natura Soylights</p>
                                                                                    <p className="keyword-rankSnippetLink">
                                                                                        <a href="" target="_blank">https://naturasoy.ca/collections/unscented</a>
                                                                                    </p>
                                                                                    <p className="keyword-rankSnippetInfo">Sale. Aroma Melts- WMTM - Natura Soylights. Aroma Melts- WMTM. Regular price $5.00 CAD. Regular price $8.00 CAD Sale price $5.00 CAD. Unit price / per.</p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="keywordCompetitor flex item-center gap-2">
                                                <span className="keywordCompetitor-rank">&gt;100</span> <span className="badge keywordBadge"><Image width={20} height={20} src="/images/equal-arrow.svg" alt="" className='inline-block w-4 h-4 ml-1' /></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="keywordCompetitor flex item-center gap-2">
                                                <span className="keywordCompetitor-rank">&gt;100</span> <span className="badge keywordBadge"><Image src="/images/equal-arrow.svg" alt="" width={20} height={20} className='inline-block w-4 h-4 ml-1' /></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="keywordCompetitor flex item-center gap-2">
                                                <span className="keywordCompetitor-rank">36</span> <span className="badge keywordBadge badge-danger"><Image src="/images/down-arrow.svg" alt="" width={20} height={20} className='inline-block w-4 h-4 ml-1' /> 3</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="keywordCompetitor flex item-center gap-2">
                                                <span className="keywordCompetitor-rank">76</span> <span className="badge keywordBadge badge-success"><Image src="/images/up-arrow.svg" className='inline-block w-4 h-4 ml-1' alt="" width={20} height={20} /> 4</span>
                                            </div>
                                        </td>
                                        <td><button type="button" className="icon-btn"><Image src="/images/delete-icon.svg" alt="" width={20} height={20} className='inline-block w-4 h-4 ml-1' /></button></td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2">best shop</td>
                                        <td className="p-2"><Image src="/images/flag/india.png" alt="" className='inline-block w-4 h-4 ml-1' width={20} height={20} /></td>
                                        <td className="p-2"><Image src="/images/mobile-icon.svg" className='inline-block w-4 h-4 ml-1' alt="" width={20} height={20} /></td>
                                        <td className="p-2">google.co.in</td>
                                        <td className="p-2"><div className="language-icon">En</div></td>
                                        <td className="p-2"><button type="button" className="icon-btn"><Image src="/images/delete-icon.svg" className='inline-block w-4 h-4 ml-1' alt="" width={20} height={20} /></button></td>
                                    </tr >

                                    <tr className="border-b">
                                        <td className="p-2">best shop</td>
                                        <td className="p-2"><Image src="/images/flag/india.png" alt="" width={20} height={20} className='inline-block w-4 h-4 ml-1' /></td>
                                        <td className="p-2"><Image src="/images/desktop-icon.svg" alt="" width={20} height={20} className='inline-block w-4 h-4 ml-1' /></td>
                                        <td className="p-2">google.co.in</td>
                                        <td className="p-2"><div className="language-icon">En</div></td>
                                        <td className="p-2"><button type="button" className="icon-btn"><Image src="/images/delete-icon.svg" alt="" className='inline-block w-4 h-4 ml-1' width={20} height={20} /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default RankTracker