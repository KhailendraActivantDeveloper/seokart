import Image from 'next/image'
import React from 'react'

type Props = {}
type InfoModalButtonProps = {
    modalActivat: boolean;
    setModalActivat: (modalActivat: boolean) => void;
}
type CustomButtonProps = {
    text?: string;
}

export const BackButton: React.FC<Props> = () => {
    return (
        <button type="button" className="headBack-btn"><Image height={20} width={20} src="images/back-icon.svg" alt="Back-Button-Icon" /></button>
    )
}
export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
    return (
        <button type="button" className="custom-btn">{text}</button>
    )
}

export const InfoModalButton: React.FC<InfoModalButtonProps> = ({modalActivat, setModalActivat}) => {
    return (
        <div className="headInfo-icon url-editorMenu" onClick={()=>setModalActivat(!modalActivat)}>
            <Image width={20} height={20} src="images/info-icon.svg" alt="information-image-icon" />
        </div>
    )
}