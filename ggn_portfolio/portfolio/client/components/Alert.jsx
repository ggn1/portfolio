import React from 'react'
import Button from './Button'
import "./Alert.css"

export default function Alert({heading, body, handle_close}) {
  return (
    <div id="alert">
        <div id="alert_fg">
          <div id="alert_header">
            <h1 style={{marginBottom:"10px"}}>{heading}</h1>
            <Button img_src={"../assets/cross.png"} on_click={handle_close}></Button>
          </div>
          {body}
        </div>
    </div>
  )
}
