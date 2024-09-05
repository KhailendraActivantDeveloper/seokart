import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const ChannelSelector:React.FC<Props> = () => {
    return (
        <div className="headChannel-dropi custom-dropi link-iconDropi">
            <span>Channel <Link href="" target="_blank"><Image width={20} height={20} src="images/link-icon.svg" alt="Link-Image-Icon" /></Link></span>
            <select className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" aria-label="Default select example">
                <option selected>pankaj2.mybigcommerce.com </option>
            </select>
        </div>
    )
}