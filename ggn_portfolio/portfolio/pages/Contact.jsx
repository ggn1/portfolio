import React from 'react'
import Button from '../components/Button'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contacts">
      <Button img_src="../assets/gmail.png" px_size={200} />
      <Button img_src="../assets/linkedin.png" px_size={200} />
    </div>
  )
}
