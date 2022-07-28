import React, { useState } from 'react'
import "./AboutCard.css"

export default function AboutCard({ title, content, color }) {
    const [collapse, set_collapse] = useState(false);

    return (
        <div className='about_card' onClick={() => set_collapse(!collapse)} style={{
            borderColor: color
        }}>
            <h3>{title}</h3>
            { collapse ? content: null }
        </div>
    )
}
