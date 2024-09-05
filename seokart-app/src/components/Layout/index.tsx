import React from 'react'
import NavSideBar from './NavSideBar';

type Props = {
    children: React.ReactNode;
}

const Layout:React.FC<Props> = ({children}) => {
  return (
    <section className="frame-area">
        <NavSideBar /> 
        <div className='content-frame-main'>{children}</div>
        
    </section>
  )
}
export default Layout;