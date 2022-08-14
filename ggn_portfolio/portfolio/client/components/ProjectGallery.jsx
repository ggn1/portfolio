import React, { useEffect, useState } from 'react'
import Axios from "axios"
import ProjectCard from './ProjectCard';
import "./ProjectGallery.css"
import ProjectDetails from './ProjectDetails';


export default function ProjectGallary({set_loading}) {

    const [projects, set_projects] = useState([]);
    const [project_id, set_project_id] = useState(0);
    const [project, set_project] = useState(null);

    useEffect(() => {

        set_loading(true);

        // get all project briefs
        let url = window.location.href.replace("3000","3001");
        if (project_id == 0) {
            url += "/get";
            let selection = [];
            Axios.get(url).then(response => {
                response.data.sort((a, b) => (a.priority > b.priority ? 1 : -1)).forEach(project => {
                    selection.push(<ProjectCard key={project.id} project={project} handle_project_select={set_project_id}/>);
                });
                set_projects(selection);
                setTimeout(() => set_loading(false), 2000);
            }).catch(error => console.error("ERROR:", error));
        
        // get selected project details
        } else {
            url += "/get?id=" + project_id;
            Axios.get(url).then(response => {
                // console.log("SUCCESS:", response);
                set_project(<ProjectDetails project={response.data} handle_back2gallery={() => set_project_id(0)}/>);
                setTimeout(() => set_loading(false), 2000);
            }).catch(error => console.error("ERROR:", error));
        }
    }, [project_id]);

    return (
        <div className="gallery">
            {project_id == 0 ? projects : project}
        </div>
    );
}
