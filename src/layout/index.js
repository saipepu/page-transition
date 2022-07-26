import React from 'react';
import Navbar from '../components/navbar';
import './style.css'

const Layout = ({children}) => {

  return (
    <>
    <div className="layout_container">
      <Navbar />
      <h1>{children}</h1>
    </div>
    </>
  )
}
export default Layout;