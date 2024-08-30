import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '../assets/menu.svg';

function NavBar() {

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  }

  return (
    <div className="container">
      <nav className="navbar-container">
          <div className="logo">TestApp</div>
          <button className="menu-icon" onClick={toggleNav}> <img src={MenuIcon} alt="" /> </button>
          <ul className={`navbar-links ${openNav ? "open" : ""}`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default NavBar