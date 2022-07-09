import React from 'react'
import "./NavigateButton.css"

export default function NavigateButton({img_src, text}) {
  return (
    <div className="nav_btn">
        <img src={img_src}></img>
        <p>{text}</p>
    </div>
  )
}
