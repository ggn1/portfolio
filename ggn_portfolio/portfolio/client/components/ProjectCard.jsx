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
      <div className='project_card' onClick={() => handle_project_select(project.id)} style={{ "backgroundImage": "url("+project.thumbnail+")" }}>
        <div className='card_body'>
          <h5>{project.title}</h5>
          <div>
              <Button img_src="../assets/spanner.png" on_click={show_popup}></Button>
              <Button img_src="../assets/github.png" on_click={() => window.open(project.github)}></Button>
              {/* <Button img_src="../assets/eye.png" ></Button> */}
          </div>
        </div>
    </div>
    { popup ? <Popup title="Skills Applied" body={project.skills} handle_close={close_popup}/> : null }
    </>
  )
}