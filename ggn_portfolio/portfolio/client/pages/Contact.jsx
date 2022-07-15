import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm';

export default function Contact() {

  useEffect(() => {
    document.getElementById("nav_bar").className = "no_overlay";
    return () => document.getElementById("nav_bar").className = "overlay";
  });

  return (
    <div>
      <ContactForm />
    </div>
  )
}
