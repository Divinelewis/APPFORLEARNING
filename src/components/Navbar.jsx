import React, { useState, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '../assets/menu.svg';
import AppForLearning from '../assets/AppForLearning.svg';

function NavBar({ aboutSectionRef }) {

  const navigate = useNavigate();   // For navigation
  const location = useLocation();   // To check the current page

  const scrollToAbout = () => {
    // If already on the home page, scroll to the about section
    if (location.pathname === '/') {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the home page, first navigate to the home page and then scroll
      navigate('/');
      setTimeout(() => {
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to allow time for navigation before scrolling
    }
  };

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
            <li><button onClick={scrollToAbout}>About</button></li>
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