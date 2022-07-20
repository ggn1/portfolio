import React, { useEffect, useState } from 'react'
import "./ProjectCard.css"
import "./Button"
import Button from './Button'
import Popup from './Popup';

export default function ProjectCard({project, color}) {

  const [popup, set_popup] = useState(false);

  const show_popup = () => { set_popup(true); }
  const close_popup = () => { set_popup(false); }

  return (
    <>
      <div className='project_card' style={{"backgroundColor":color, "color":"white"}}>
        <b>{project.title}</b>
        <span>
            <Button img_src="../assets/spanner.png" on_click={show_popup}></Button>
            <Button img_src="../assets/eye.png"></Button>
        </span>
    </div>
    { popup ? <Popup title="Skills Applied" body={project.skills} handle_close={close_popup}/> : null }
    </>
  )
}
