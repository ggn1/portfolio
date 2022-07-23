import React, { useEffect, useState } from 'react'
import "./ProjectDetails.css"
import Button from './Button'
import Tag from './Tag'

export default function ProjectDetails({project, handle_back2gallery}) {

  const files = [];
  project.files.sort((a, b) => (a.priority > b.priority ? 1 : -1)).forEach(file => {
    if (file.src) files.push(<img src={file.src} width="100%"/>);
    else if (file.embed_link) files.push(<iframe src={file.embed_link} autoplay="true"/>);
  });

  const skills = [];
  project.skills.split(",").forEach(skill => { skills.push(<Tag text={skill} />); });

  return (
    <div id="project_details">
        <div className='project_details_header'>
          <h3>{project.title}</h3>
          <Button img_src="../assets/back.png" on_click={handle_back2gallery}/>
        </div>
        <div>{project.brief}</div>
        <div className='project_details_skills'>{skills?skills:null}</div>
        <div style = {{ "display": "flex", "justify-content": "center", "width": "100%"}}>
          <div className='project_details_files'>{files?files:null}</div>
        </div>
    </div>
  )
}
