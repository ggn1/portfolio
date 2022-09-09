import React from 'react'
import { Link } from 'react-router-dom'
import Navbutton from './Navbutton'
import "./Header.css"

export default function Header() {
  return (
    <div id="nav_bar" className="overlay">
      <p className='code'>C:\Users\Gayathri_Girish_Nair{">"}</p>
      <ul>
        <li><Link to="/" id="home_link"><Navbutton source="../public/home.png" text="Home" id="home_button"/></Link></li>
        <li><Link to="/projects" id="projects_link"><Navbutton source="../public/gear.png" text="Projects" id="projects_button"/></Link></li>
        <li><Link to="/about" id="about_link"><Navbutton source="../public/heart.png" text="About" id="about_button"/></Link></li>
        <li><Link to="/contact" id="contact_link"><Navbutton source="../public/phone.png" text="Contact" id="contact_button"/></Link></li>
      </ul>
    </div>
  )
}
