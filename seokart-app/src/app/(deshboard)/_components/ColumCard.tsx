import React from 'react'

type Props = {
    className?: string;
    cardClass?: string;
    children: React.ReactNode;
}

const ColumCard:React.FC<Props> = ({className, cardClass, children}) => {
  return (
    <div className={className}>
        <div className={cardClass}>{children}</div>
    </div>
  )
}

export default ColumCard