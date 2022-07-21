import React, { useEffect, useState } from 'react'
import "./ProjectCard.css"
import "./Button"
import Button from './Button'
import Popup from './Popup';

export default function ProjectCard({project}) {

  const [popup, set_popup] = useState(false);

  const show_popup = () => { set_popup(true); }
  const close_popup = () => { set_popup(false); }

  return (
    <>
      <div className='project_card' style={{ "backgroundImage": "url("+project.thumbnail+")" }}>
        <div className='card_body'>
          <h5>{project.title}</h5>
          <span>
              <Button img_src="../assets/spanner.png" on_click={show_popup}></Button>
              <Button img_src="../assets/eye.png"></Button>
          </span>
        </div>
    </div>
    { popup ? <Popup title="Skills Applied" body={project.skills} handle_close={close_popup}/> : null }
    </>
  )
}
