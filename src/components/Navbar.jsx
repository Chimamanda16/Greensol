import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="../images/greensol.svg" alt="Greensol logo" />
      <div className='navbar-links'>
        <p>Solutions</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Partner With Us</p>
      </div>
      <button className='nav-btn'>Get a quote</button>
    </div>
  )
}

export default Navbar