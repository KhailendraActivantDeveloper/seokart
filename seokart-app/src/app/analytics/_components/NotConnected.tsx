'use client';
import { InfoModalButton } from '@/components/Button';
import { FrameHeadRight, HeaderLayout } from '@/components/Layout/HeaderLayout'
import Modal from '@/components/Modal';
import Image from 'next/image';
import React, { useState } from 'react'
import LeftHeadModal from './LeftHeadModal';

type Props = {}

const NotConnected = (props: Props) => {
    const [activeModalGoogle, setActiveModalGoogle] = useState(false);
    return (
        <>
            <HeaderLayout>
                <LeftHeadModal disconnectBtn={false} />
                <FrameHeadRight>
                    <button type="button" className="btn-primary">CONNECT GOOGLE ANALYTICS</button>
                    <InfoModalButton modalActivat={activeModalGoogle} setModalActivat={setActiveModalGoogle} />
                    <Modal title="We can't find the Google Analytics (Ecommerce enabled) code placed correctly on your website. Kindly follow below steps and try again." isOpen={activeModalGoogle} onClose={() => setActiveModalGoogle(!activeModalGoogle)}>
                        <h5 className="Text--headingLg">GA4</h5>


                        <h5 className="Text--headingSm mt-24">1. Go to Admin › Data Streams.</h5>
                        <div className="howWork-modalImg mb-16">
                            <Image src="/images/ga1.png" alt="" width={709} height={262} />
                        </div>


                        <h5 className="Text--headingSm mt-24">2. On the next screen you should see the Measurement ID in the top right corner.</h5>
                        <div className="howWork-modalImg mb-16">
                            <Image src="/images/ga2.png" alt="" width={709} height={262} />
                        </div>


                        <h5 className="Text--headingSm mt-24">3. In the BigCommerce control panel, Go to Advanced Settings &gt; Data solutions (formerly Web Analytics).</h5>
                        <div className="howWork-modalImg widthAuto mb-16">
                            <Image src="/images/ua4.png" alt="" width={709} height={262} />
                        </div>


                        <h5 className="Text--headingSm mt-24">4. Select Google Analytics 4 from Data Solutions.</h5>
                        <div className="howWork-modalImg mb-16">
                            <Image src="/images/ga5.png" alt="" width={709} height={262} />
                        </div>


                        <h5 className="Text--headingSm mt-24">5. Paste the Measurement ID.</h5>
                        <div className="howWork-modalImg mb-16">
                            <Image src="/images/ga6.png" alt="" width={709} height={262} />
                        </div>


                        <div className="howWork-modalImg">
                            <p className="mb-0">6. If you are using any app for privacy/cookies, then it may hide the code and our app couldn&apos;t detect it even it&apos;s there. In such cases, <a href="">Click Here</a> to directly connect the Google Analytics to SEOKart. In case nothing works, please contact us over chat. We will put all the efforts to make it work for you.</p>
                        </div>


                        <h5 className="Text--headingSm mt-24"></h5>
                    </Modal>
                </FrameHeadRight>
            </HeaderLayout>
            <div className="analytics-connectArea relative">
                <Image src="/images/dashboard-ga-connect.png" alt="" width={1812} height={607} />
                <button type="button" className="btn btn-default">Please Connect SEOKart to Google Analytics</button>
            </div>
        </>
    )
}

export default NotConnected