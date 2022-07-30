import React, { useEffect } from 'react'
import AboutContent from "../components/AboutContent"
import Parallax from "../components/Parallax"

export default function About() {
  const bg_images = <div>
    <img className='layer' data_speed={30} src="../assets/fly_cyan.png" />
    <img className='layer' data_speed={-30} src="../assets/fly_pink.png" />
    <img className='layer' data_speed={-2} src="../assets/fly_yellow.png" />
  </div>
  
  useEffect(() => {
    document.getElementById("nav_bar").className = "no_overlay";
    return () => document.getElementById("nav_bar").className = "overlay";
  });

  return (
    <>
      <AboutContent />
    </>
  )
}
