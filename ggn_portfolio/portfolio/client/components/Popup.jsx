import React, { useState } from 'react'
import "./Popup.css"
import Button from './Button'

export default function Modal({title, body, handle_close}) {

    return (
        <div className='popup'>
            <div>
                <div className="popup_header">
                    <u><b>{title}</b></u>
                    <Button img_src={"../assets/cross.png"} on_click={handle_close}></Button>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}
