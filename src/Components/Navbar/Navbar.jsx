import React from 'react'
import './Navbar.css'

function Navbar() {
  
  return (
      <div className="navbar">
        <div className="logo">V-Dev71</div>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="connect-btn">LinkedIn</div>
      </div>
  )
}

export default Navbar
