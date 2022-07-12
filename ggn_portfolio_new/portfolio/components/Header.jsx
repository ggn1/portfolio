import React from 'react'
import Navbutton from './Navbutton'
import "./Header.css"

export default function Header() {
  return (
    <>
      <div className="nav_bar">
        <p className='code'>C:\Users\<span>Gayathri Girish Nair</span>{">"}</p>
        <ul>
          <li><Navbutton source="../assets/home.png" text="Home" id="home_button"/></li>
          <li><Navbutton source="../assets/gear.png" text="Projects" id="projects_button"/></li>
          <li><Navbutton source="../assets/heart.png" text="About" id="about_button"/></li>
          <li><Navbutton source="../assets/phone.png" text="Phone" id="contact_button"/></li>
        </ul>
      </div>
    </>
  )
}
