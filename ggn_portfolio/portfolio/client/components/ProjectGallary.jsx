import React, { useEffect, useState } from 'react'
import Axios from "axios"

export default function ProjectGallary() {

    // const [id, set_id] = useState(0);
    const [projects, set_projects] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3001/api/projects";
        let selection = [];
        Axios.get(url).then(response => {
            response.data.map(project => {
                selection.push(<p key={project.id}>{project.title}</p>);
            });
            set_projects(selection);
        }).catch(error => console.error("ERROR:", error));

    }, []);

    return (
    <div>
        {projects}
    </div>
    )
}
