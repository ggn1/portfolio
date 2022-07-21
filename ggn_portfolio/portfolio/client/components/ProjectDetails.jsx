import React from 'react'
import "./ProjectDetails.css"
import Button from './Button'

export default function ProjectDetails({project, handle_back2gallery}) {
  return (
    <div id="project_details">
        <div className='project_details_header'>
          <h3>{project.title}</h3>
          <Button img_src="../assets/back.png" on_click={handle_back2gallery}/>
        </div>
        {JSON.stringify(project)}
    </div>
  )
}
