import React from 'react'
import "./Button.css"

export default function Button({on_click, img_src}) {
  return (
    <img src={img_src} onClick={on_click?on_click:undefined}></img>
  )
}
