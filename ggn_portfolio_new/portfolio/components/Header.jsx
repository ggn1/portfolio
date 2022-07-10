import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className="nav_bar">
      <p className='code'>C:\Users\<span>Gayathri Girish Nair</span>{">"}</p>
      <ul>
        <li><a href="index.html"><img src="../assets/home.png" title="Home" alt='Navigate Home'/></a></li>
        <li><a href="projects.html"><img src="../assets/gear.png" title="Projects" alt='Navigate Projects'/></a></li>
        <li><a href="about.html"><img src="../assets/heart.png" title="About" alt='Navigate About'/></a></li>
        <li><a href="contact.html"><img src="../assets/phone.png" title="Contact" alt='Navigate Contact'/></a></li>
      </ul>
    </div>
  )
}
