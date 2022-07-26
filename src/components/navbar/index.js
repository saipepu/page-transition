import React from 'react';

const Navbar = () => {
  const navItems = ['about', 'contact', 'projects']

  return (
    <>
    <div className="navbar_container">
      <div className="logo_container">
        <p>PEPU.pt</p>
      </div>
      <ul className="navlinks_container">
        {navItems.map((item, index) => (
          <li className="navitems">
            {item}
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