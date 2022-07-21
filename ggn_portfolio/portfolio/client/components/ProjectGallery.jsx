import React, { useEffect, useState } from 'react'
import Axios from "axios"
import ProjectCard from './ProjectCard';
import "./ProjectGallery.css"
import Button from './Button';

export default function ProjectGallary() {

    const [projects, set_projects] = useState([]);
    const [selected_project, set_selected_project] = useState(0);

    useEffect(() => {
        let url = window.location.href.replace("3000","3001") + "/get";
        let selection = [];
        Axios.get(url).then(response => {
            response.data.map(project => {
                selection.push(<ProjectCard key={project.id} project={project}/>);
            });
            set_projects(selection);
        }).catch(error => console.error("ERROR:", error));
    }, []);

    useEffect(() => {
        if (selected_project > 0) {

        }
    }, [selected_project]);

    return (
        <div id="gallery">
            {projects}
        </div>
    );
}
