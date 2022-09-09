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
    </div>
    </>
  )
}
export default Layout;