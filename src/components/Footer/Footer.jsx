import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pinterest from '../assets/pintester_icon.png'
 

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
        <p>JANGO</p>
      </div>

      <ul className="footer-links">
        <li>Blog</li>
        <li>Products</li>
        <li>Locations</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> © 2024 - 2025 | JANGO SUPERSTORES | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
