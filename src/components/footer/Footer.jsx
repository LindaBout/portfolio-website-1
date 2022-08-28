import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer >
      <a href="#" className="footer__logo">LOGO</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact"></a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><SiInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LindaBoutamine Following EGATOR Tutorial</small>
      </div>
    </footer>
  )
}

export default Footer