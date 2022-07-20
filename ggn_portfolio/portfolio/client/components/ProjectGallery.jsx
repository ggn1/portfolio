import React, { useEffect, useState } from 'react'
import Axios from "axios"
import ProjectCard from './ProjectCard';
import "./ProjectGallery.css"

export default function ProjectGallary() {

    // const [id, set_id] = useState(0);
    const [projects, set_projects] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3001/api/projects";
        let selection = [];
        Axios.get(url).then(response => {
            response.data.map(project => {
                selection.push(<ProjectCard key={project.id} project={project} color={
                    (project.id % 2) == 0 ? "#3329f8" : "#333333"
                } />);
            });
            set_projects(selection);
        }).catch(error => console.error("ERROR:", error));
    }, []);

    return (
    <div id="gallery">
        {projects}
    </div>
    )
}
