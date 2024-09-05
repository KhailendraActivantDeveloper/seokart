'use client';
import { InfoModalButton } from '@/components/Button';
import { ChannelSelector } from '@/components/Layout/ChannelSelector';
import { FrameHeadLeft } from '@/components/Layout/HeaderLayout';
import Modal from '@/components/Modal';
import React, { useState } from 'react'

type Props = {
    disconnectBtn: Boolean;
}

const LeftHeadModal:React.FC<Props> = ({disconnectBtn}) => {
    const [activeModal, setActiveModal] = useState(false);
    return (
        <FrameHeadLeft>
            Analytics
            <InfoModalButton modalActivat={activeModal} setModalActivat={setActiveModal} />
            <ChannelSelector />
            {
                disconnectBtn && (<button type="button" className="custom-btn">Disconnect GA</button>)
            }
            <Modal title="How it Works" isOpen={activeModal} onClose={() => setActiveModal(!setActiveModal)}>
                <p>The analytics feature links the store to Google Analytics and provides the exact measures of the traffic, orders, and revenue over the website.</p>
                <ul>
                    <li><p>Click &quot;Connect Google Analytics&quot; on top of the Analytics page.</p></li>
                    <li><p>You will see a pop-up with the instructions to link the Google Analytics.</p></li>
                    <li><p>In case, you are unable to connect to Google Analytics, kindly contact us for support. You can email us on <a href="mailto:hi@seokart.com">hi@SEOKart.com</a> and our experts will assist you with the same..</p></li>
                </ul>
            </Modal>
        </FrameHeadLeft>
    )
}

export default LeftHeadModal