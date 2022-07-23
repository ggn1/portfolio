import React from 'react'
import "./Tag.css"

export default function Tag({ text }) {
  return (
    <p className='tag'>{ text }</p>
  )
}
