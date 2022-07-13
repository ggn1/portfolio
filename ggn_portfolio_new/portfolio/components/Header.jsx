import React from 'react'
import { Link } from 'react-router-dom'
import Navbutton from './Navbutton'
import "./Header.css"

export default function Header() {
  return (
    <div id="nav_bar">
      <p className='code'>C:\Users\<span>Gayathri Girish Nair</span>{">"}</p>
      <ul>
        <li><Link to="/"><Navbutton source="../assets/home.png" text="Home" id="home_button"/></Link></li>
        <li><Link to="/projects"><Navbutton source="../assets/gear.png" text="Projects" id="projects_button"/></Link></li>
        <li><Link to="/about"><Navbutton source="../assets/heart.png" text="About" id="about_button"/></Link></li>
        <li><Link to="/contact"><Navbutton source="../assets/phone.png" text="Contact" id="contact_button"/></Link></li>
      </ul>
    </div>
  )
}
