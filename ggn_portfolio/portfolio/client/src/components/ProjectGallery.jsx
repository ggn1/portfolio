import React, { useEffect, useState } from 'react'
import Axios from "axios"
import ProjectCard from './ProjectCard';
import "./ProjectGallery.css"
import ProjectDetails from './ProjectDetails';


export default function ProjectGallary({set_loading}) {

    const max_row_items = 3;

    const [projects, set_projects] = useState([]);
    const [project_id, set_project_id] = useState(0);
    const [project, set_project] = useState(null);

    let get_gallery_row = ({project_data, row_num}) => {
        let project_cards = [];
        project_data.forEach(p => {
            project_cards.push(<ProjectCard key={p.id} project={p} handle_project_select={set_project_id}/>);
        });
        return <div className="gallery_row" key={`row${row_num}`}>{project_cards}</div>;
    }

    useEffect(() => {
        set_loading(true);

        // get all project briefs
        let window_location = window.location.href;
        // let url = window_location.replace("3000","3001"); // local server
        let url = window_location.replace( // heroku
            window_location.slice(0, window_location.lastIndexOf("/")),
            "https://ggn-portfolio-website.herokuapp.com"
        );
        
        if (project_id == 0) {
            url += "/get";
            let selection = [];
            console.log("URL ="+url)
            Axios.get(url).then(response => {
                response.data.sort((a, b) => (a.priority > b.priority ? 1 : -1))

                let row_num = 0;
                for (let i=0; i<response.data.length; i+=max_row_items) {
                    selection.push(get_gallery_row({
                        "project_data": response.data.slice(i, i+max_row_items),
                        "row_num": row_num
                    }));
                    row_num += 1;
                }

                set_projects(selection);
                set_loading(false);
                // setTimeout(() => set_loading(false), 2000);
            }).catch(error => console.error("ERROR:", error));
        
        // get selected project details
        } else {
            url += "/get?id=" + project_id;
            Axios.get(url).then(response => {
                // console.log("SUCCESS:", response);
                set_project(<ProjectDetails project={response.data} handle_back2gallery={() => set_project_id(0)}/>);
                // setTimeout(() => set_loading(false), 2000);
                set_loading(false);
            }).catch(error => console.error("ERROR:", error));
        }
    }, [project_id]);

    return (
        <div style={{marginTop:'50px'}}>
            {project_id == 0 ? projects : null}
            <div className="gallery_spotlight">{project_id != 0 ? project:null}</div>
        </div>
    );
}
