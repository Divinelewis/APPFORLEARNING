import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  }

  return (
    <nav className="navbar-container">
        <div className="logo">TestApp</div>
        <button className="menu-icon" onClick={toggleNav}>☰</button>
        <ul className={`navbar-links ${openNav ? "open" : ""}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar