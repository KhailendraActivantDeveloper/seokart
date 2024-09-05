'use client';
import Heading from '@/utils/Heading';
import React, { useState } from 'react'
import NotConnected from './_components/NotConnected';
import GoogleConnected from './_components/GoogleConnected';
import Layout from '@/components/Layout';

type Props = {}

const Analytics: React.FC<Props> = () => {
    const [connected, setConnected] = useState(false);

    return (
        <>
            <Heading title="Analytics | Bigcommerce" />
            <Layout>
                {
                    connected && <NotConnected />
                }
                {
                    !connected && <GoogleConnected />
                }
            </Layout>

        </>
    )
}

export default Analytics