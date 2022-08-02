import React, { useEffect, useState } from 'react'
import "./ProjectCard.css"
import "./Button"
import Button from './Button'
import Popup from './Popup';

export default function ProjectCard({project, handle_project_select}) {

  const [popup, set_popup] = useState(false);

  const show_popup = () => { set_popup(true); }
  const close_popup = () => { set_popup(false); }

  return (
    <>
      <div className='project_card' style={{ "backgroundImage": "url("+project.thumbnail+")" }}>
        <div>
          <h5>{project.title}</h5>
          <Button img_src="../assets/spanner.png" on_click={show_popup}></Button>
          <Button img_src="../assets/github.png" on_click={() => window.open(project.github)}></Button>
          <Button img_src="../assets/eye.png" on_click={() => handle_project_select(project.id)}></Button>
        </div>
    </div>
    { popup ? <Popup title="Skills Applied" body={project.skills} handle_close={close_popup}/> : null }
    </>
  )
}
