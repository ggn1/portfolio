import React from 'react'
import "./Popup.css"
import Button from './Button'

export default function Modal({title, body, handle_close}) {

    return (
        <div className='popup_bg'>
            <div className='popup_fg'>
                <div className="popup_header">
                    <u><b>{title}</b></u>
                    <Button img_src={"../assets/cross.png"} on_click={handle_close}></Button>
                </div>
                {body}
            </div>
        </div>
    )
}
