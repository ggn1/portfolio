import React from 'react'
import "./Tag.css"

export default function Tag({ text, on_click }) {
  return (
    <div className={on_click ? 'tag clickable_tag' : 'tag'} onClick={on_click}>{ text }</div>
  )
}
