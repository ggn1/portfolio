import React, { useEffect, useState } from 'react'
import "./ProjectDetails.css"
import Button from './Button'
import Tag from './Tag'

export default function ProjectDetails({project, handle_back2gallery}) {

  const [files, set_files] = useState();
  const [skills, set_skills] = useState();

  useEffect(() => {
    // sort files by priority from 1 upwards 
    let arr1 = [];
    project.files.sort((a, b) => (a.priority > b.priority ? 1 : -1)).forEach(file => {
      if (file.src) {
        arr1.push(<img src={file.src} width="100%"/>);
      } else if (file.embed_link) {
        arr1.push(<iframe src={file.embed_link} autoplay="true"/>);
      }
    })
    set_files(arr1);

    let arr2 = [];
    project.skills.split(",").forEach(skill => {
      arr2.push(<Tag text={skill} />);
    });
    set_skills(arr2);
  }, []);

  return (
    <div id="project_details">
        <div className='project_details_header'>
          <h3>{project.title}</h3>
          <Button img_src="../assets/back.png" on_click={handle_back2gallery}/>
        </div>
        <div>{project.brief}</div>
        <div className='project_details_skills'>{skills?skills:null}</div>
        <div className='project_details_files'>{files?files:null}</div>
    </div>
  )
}
