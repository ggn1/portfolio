import React, { useEffect } from 'react'
// import AboutContent from "../components/AboutContent"
import AboutBody from "../components/AboutBody"

export default function About() {

  useEffect(() => {
    document.getElementById("nav_bar").className = "no_overlay";
    return () => document.getElementById("nav_bar").className = "overlay";
  });
  
  return (
    <>
      {/* <AboutContent /> */}
      <AboutBody />
    </>
  )
}
