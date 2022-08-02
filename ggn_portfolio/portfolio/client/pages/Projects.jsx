import React, { useEffect } from 'react'
import ProjectGallery from '../components/ProjectGallery'

export default function Projects() {
  useEffect(() => {
    document.getElementById("nav_bar").className = "no_overlay";
    return () => document.getElementById("nav_bar").className = "overlay";
  });
  
  return (
    <ProjectGallery />
  )
}
