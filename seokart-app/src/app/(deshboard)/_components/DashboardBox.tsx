import React from 'react'

type Props = {
    children: React.ReactNode;
}

const DashboardBox:React.FC<Props> = ({children}) => {
  return (
    <div className="dashboard-box">
        <div className="grid gap-x-6 md:grid-cols-12">{children}</div>
    </div>
  )
}

export default DashboardBox