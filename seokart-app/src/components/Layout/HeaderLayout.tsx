import React from 'react'

type Props = {
    children: React.ReactNode;
}


export const FrameHeadLeft: React.FC<Props> = ({ children }) => {
    return (
        <div className="content-frameHead-left">
            <h1 className="Text--headingLg flex items-center gap-2">{children}</h1>
        </div>
    )
}
export const FrameHeadRight: React.FC<Props> = ({ children }) => {
    return (
        <div className="content-frameHead-right">{children}</div>
    )
}


export const HeaderLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="content-frame-head flex justify-between items-center">
                {children}
            </div>
        </>
    )
}