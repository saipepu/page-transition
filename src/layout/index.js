import React from 'react';
import Navbar from '../components/navbar';
import './style.css'

const Layout = ({children}) => {

  return (
    <>
    <div className="layout_container">
      <Navbar />
      <div className="layout_body">
        {children}
      </div>
      <div className="mobile_screen">
        Please view on desktop for better experience.
        Thank you.
      </div>
    </div>
    </>
  )
}
export default Layout;