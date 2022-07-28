import React, { useState } from 'react'
import "./AboutCard.css"

export default function AboutCard({ title, content, color }) {
    const [collapse, set_collapse] = useState(true);

    return (
        <div className='about_card' onClick={() => set_collapse(!collapse)} style={{
            backgroundColor: color
        }}>
            <div className="about_title"><p>{ collapse ? title: <i>{title}</i> }</p><p>{ collapse ? "+" : "-" }</p></div>
            <div>{ collapse ? null: content }</div>
        </div>
    )
}
