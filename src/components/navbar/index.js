import React from 'react';
import './style.css'

const Navbar = () => {
  const navItems = [
    // {
    //   text: 'about',
    //   url: ''
    // },
    {
      text: 'portfolio',
      url: 'https://saipepu.github.io/pepu'
    },
    // {
    //   text: 'contact',
    //   url: ''
    // }
  ]

  return (
    <>
    <div className="navbar_container">
      <div className="logo_container">
        <p>PEPU.pt</p>
      </div>
      <ul className="navlinks_container">
        {navItems.map((item, index) => (
          <li style={{cursor: 'pointer'}} className="navitems" key={index} onClick={() => window.location.replace(item.url)}>
            {item.text}
          </li>
        ))}
      </ul>
      <div className="hamburger_menu">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
      </div>
    </div>
    </>
  )
}
export default Navbar;