import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '../assets/menu.svg';
import AppForLearning from '../assets/AppForLearning.svg';

function NavBar() {

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  }

  return (
    <div className="container">
      <nav className="navbar-container">
          <div className="logo"><Link to='/'> <img src={AppForLearning} alt="" /></Link></div>
          <button className="menu-icon" onClick={toggleNav}> <img src={MenuIcon} alt="" /> </button>
          <ul className={`navbar-links ${openNav ? "open" : ""}`}>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/#'>FAQ</Link></li>
            <li><Link to='/#'>Course Content</Link></li>
            <li><Link to='/#'>Partners</Link></li>
            <li><Link to='/#'>Challenge</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default NavBar