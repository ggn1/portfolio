import React from 'react'
import './ContactForm.css'
import Button from "./Button"

export default function ContactForm() {
  return (
    <form action="/action_page.php">
        <div>
            <p>
                Contact Me!
                <Button img_src={"../assets/linkedin.png"} on_click={() => window.open("//www.linkedin.com/in/gayathrigirishnair")}/>
            </p>
            <input type="text" id="name" name="name" placeholder='Full Name'/><br />
            <input type="text" id="email" name="email" placeholder='Email ID'/><br />
            <input type="text" id="message" name="message" placeholder='Your Message'/><br />
            <input type="submit" id="submit" value="Submit" />
        </div>
    </form>
  )
}
