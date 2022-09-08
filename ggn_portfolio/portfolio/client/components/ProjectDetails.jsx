import React from 'react'
import "./ProjectDetails.css"
import Button from './Button'
import Tag from './Tag'

export default function ProjectDetails({project, handle_back2gallery}) {

  const files = [];
  project.files.sort((a, b) => (a.priority > b.priority ? 1 : -1)).forEach(file => {
    if (file.src) files.push(<img key={file.src} src={file.src} width="100%" crossOrigin="anonymous"/>);
    else if (file.embed_link) files.push(
      <iframe key={file.embed_link} width="560" height="315" src={file.embed_link} frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
  });

  const skills = [];
  project.skills.split(",").forEach(skill => { skills.push(<Tag key={skill} text={skill} />); });

  return (
    <div className="project_details">
        <div className='project_details_header'>
          <h3>{project.title}</h3>
          <Button img_src="../assets/back.png" on_click={handle_back2gallery}/>
        </div>
        <div>{project.brief}</div>
        <div className='project_details_skills'>{skills ? skills : null}</div>
        <div style = {{ "display": "flex", "justifyContent": "center", "width": "100%"}}>
          <div className='project_details_files'>{files ? files : null}</div>
        </div>
    </div>
  )
}
