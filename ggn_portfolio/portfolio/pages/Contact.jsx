import React from 'react'
import Button from '../components/Button'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contacts">
      <Button img_src="../assets/gmail.png"/>
      <Button img_src="../assets/linkedin.png" on_click={() => window.open('//www.linkedin.com/in/gayathrigirishnair')} />
    </div>
  )
}
