import React from 'react'
import "./ProjectCard.css"
import "./Button"
import Button from './Button'

export default function ProjectCard({project, color}) {
  return (
    <div className='project_card' style={{"backgroundColor":color, "color":"white"}}>
        <b>{project.title}</b>
        <div>
            <Button img_src="../assets/spanner.png"></Button>
            <Button img_src="../assets/eye.png"></Button>
        </div>
    </div>  
  )
}
