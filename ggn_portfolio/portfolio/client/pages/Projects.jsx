import React, { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.getElementById("nav_bar").className = "no_overlay";
    return () => document.getElementById("nav_bar").className = "overlay";
  });
  return (
    <div>Projects</div>
  )
}
