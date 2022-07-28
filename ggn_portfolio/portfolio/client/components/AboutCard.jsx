import React from 'react'
import "./AboutCard.css"

export default function AboutCard({ title, content_list }) {

    const contents = [];
    content_list.forEach(content => contents.push(<div className='about_card_tag'>{content}</div>));

    return (
        <div className='about_card'>
            <h6>{title}</h6>
            {contents}
        </div>
    )
}
