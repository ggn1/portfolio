import React, { useEffect, useState } from 'react'
import Axios from "axios"
import ProjectCard from './ProjectCard';
import "./ProjectGallery.css"
import Button from './Button';

export default function ProjectGallary() {

    const [projects, set_projects] = useState([]);
    const [project_id, set_project_id] = useState(0);
    const [project, set_project] = useState(null);

    useEffect(() => {
        let url = window.location.href.replace("3000","3001");
        if (project_id == 0) {
            url += "/get";
            let selection = [];
            Axios.get(url).then(response => {
                response.data.map(project => {
                    selection.push(<ProjectCard key={project.id} project={project} handle_project_select={set_project_id}/>);
                });
                set_projects(selection);
            }).catch(error => console.error("ERROR:", error));
        } else {
            url += "/get?id=" + project_id;
            Axios.get(url).then(response => {
                console.log("SUCCESS:", response);
            }).catch(error => console.error("ERROR:", error));
        }
    }, [project_id]);

    return (
        <div id="gallery">
            {project_id == 0 ? projects : project}
        </div>
    );
}
