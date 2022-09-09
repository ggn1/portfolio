import React, { useContext } from 'react'
import Button from './Button'
import Tag from './Tag'
import { alert_context } from "../src/Context"
import "./ProjectCard.css"

export default function ProjectCard({project, handle_project_select}) {

  const { set_alert } = useContext(alert_context);

  const get_skill_tags = (skills_csv) => {
    let skills = [];
    skills_csv.split(",").forEach(skill => { skills.push(<Tag key={skill} text={skill} />); });
    return skills;
  }

  return (
    <>
      <div className='project_card' style={{ "backgroundImage": "url("+project.thumbnail+")" }}>
        <div>
          <h5>{project.title}</h5>
          <Button img_src="../public/spanner.png" on_click={() => set_alert({heading:"Skills Applied", body: get_skill_tags(project.skills)})}></Button>
          <Button img_src="../public/github.png" on_click={() => window.open(project.github)}></Button>
          <Button img_src="../public/eye.png" on_click={() => handle_project_select(project.id)}></Button>
        </div>
    </div>
    </>
  )
}
