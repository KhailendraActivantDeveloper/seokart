import { FrameHeadRight, HeaderLayout } from '@/components/Layout/HeaderLayout'
import React from 'react'
import LeftHeadModal from './LeftHeadModal'
import Image from 'next/image'
import Card from './Card'
import Checkbox from './Checkbox'

type Props = {}

const GoogleConnected = (props: Props) => {
    const cardData = [
        {
          title: 'Revenue',
          total: 'INR 1,453',
          data: [
            { label: 'Organic', value: 0, badge: 'analyticsRed__Bg' },
            { label: 'Direct', value: '1,453', badge: 'analyticsPurple__Bg' },
            { label: 'Social', value: 0, badge: 'analyticsGreen__Bg' },
            { label: 'Referral', value: 0, badge: 'analyticsOrange__Bg' },
            { label: 'Paid', value: 0, badge: 'analyticsTeal__Bg' },
          ],
        },
        {
          title: 'Orders',
          total: 1,
          data: [
            { label: 'Organic', value: 0, badge: 'analyticsRed__Bg' },
            { label: 'Direct', value: 4, badge: 'analyticsPurple__Bg' },
            { label: 'Social', value: 0, badge: 'analyticsGreen__Bg' },
            { label: 'Referral', value: 0, badge: 'analyticsOrange__Bg' },
            { label: 'Paid', value: 0, badge: 'analyticsTeal__Bg' },
          ],
        },
        {
          title: 'Traffic',
          total: 'INR 1,453',
          data: [
            { label: 'Organic', value: 0, badge: 'analyticsRed__Bg' },
            { label: 'Direct', value: '1,453', badge: 'analyticsPurple__Bg' },
            { label: 'Social', value: 0, badge: 'analyticsGreen__Bg' },
            { label: 'Referral', value: 0, badge: 'analyticsOrange__Bg' },
            { label: 'Paid', value: 0, badge: 'analyticsTeal__Bg' },
          ],
        },
        {
          title: 'Conversion Rate',
          total: 'INR 1,453',
          data: [
            { label: 'Organic', value: 0, badge: 'analyticsRed__Bg' },
            { label: 'Direct', value: '1,453', badge: 'analyticsPurple__Bg' },
            { label: 'Social', value: 0, badge: 'analyticsGreen__Bg' },
            { label: 'Referral', value: 0, badge: 'analyticsOrange__Bg' },
            { label: 'Paid', value: 0, badge: 'analyticsTeal__Bg' },
          ],
        },
      ];
    return (
        <>
            <HeaderLayout>
                <LeftHeadModal disconnectBtn={true} />
                <FrameHeadRight>
                    <div className="custom-input icon-input without-labelInput">
                        <i className="input-icon"><Image width={20} height={20} src="images/calendar-icon.svg" alt="" /></i>
                        <input type="text" placeholder="Add Date Picker Here" className="form-control" />
                    </div>

                    <div className="custom-input icon-input without-labelInput">
                        <i className="input-icon"><Image width={20} height={20} src="images/calendar-icon.svg" alt="" /></i>
                        <input type="text" placeholder="Add Date Picker Here" className="form-control" />
                    </div>
                    <button type="button" className="btn-primary">Apply</button>
                </FrameHeadRight>
            </HeaderLayout>
            <div className="analytics-graphArea">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            total={card.total}
            data={card.data}
          />
        ))}
      </div>
      
      <div className="card p-4 bg-white rounded-lg shadow-sm">
        <div className="analytics-featuresGraph">
          <div className="flex items-center gap-3 mb-4">
            <Checkbox id="analytics_check1" label="Organic" />
            <Checkbox id="analytics_check2" label="Direct" />
            <Checkbox id="analytics_check3" label="Social" />
            <Checkbox id="analytics_check4" label="Referral" />
            <Checkbox id="analytics_check5" label="Paid" />
          </div>
          <div className="featuresGraph-box h-48 bg-gray-100 flex items-center justify-center">
            Graph here
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default GoogleConnected