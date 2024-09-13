import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer-lock">
            <div className="footer-content">
                <div className="footer-column">
                <h3>AppForLearning</h3>
                <p>We are dedicated to providing top-notch educational resources to empower learners worldwide.</p>
            </div>

            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/#'> Courses </Link></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Follow Us</h3>
                <ul className="social-icons">
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#linkedin">LinkedIn</a></li>
                </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 AppForLearning. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;