import React from 'react';
import './Navbutton.css';

export default function Navbutton({source, text, id}) {
    return (
    <div>
        <img className="nav_img" src={source} alt={text}/>
        <p id={id} className="no_highlight">{text}</p>
    </div>
    )
}
