import React, { useState, useRef } from 'react'
import './ContactForm.css'
import Button from "./Button"

export default function ContactForm() {
  const message_char_limit = 500;
  const valid_input = new RegExp('[a-z0-9.,!?@ ]', "ig");

  const [message_chars, set_message_chars] = useState(0);
  
  const input_name = useRef();
  const input_email = useRef();
  const input_message = useRef();

  let form_validity = {name:0, email:0, message:0};

  const sanity_check = (text) => {
    if (text) {
      if(!text.match(valid_input) || text.match(valid_input).length != text.length) return false;
      else return true;
    } else return false;
  }

  const on_message_change = () => {
    let is_valid = sanity_check(input_message.current.value);
    set_message_chars(input_message.current.value.length);
    if ((message_chars >= message_char_limit-1) || !is_valid) {
      input_message.current.className = "invalid";
      form_validity.message = 0;
    }
    else {
      input_message.current.className = "";
      form_validity.message = 1;
    }
  }

  const on_email_change = () => {
    let is_valid = sanity_check(input_email.current.value);
    if (!is_valid || !input_email.current.value.includes("@")) {
      input_email.current.className = "invalid";
      form_validity.email = 0;
    }
    else {
      input_email.current.className = "";
      form_validity.email = 1;
    }
  }

  const on_name_change = () => {
    let is_valid = sanity_check(input_name.current.value);
    if (!is_valid) {
      input_name.current.className = "invalid";
      form_validity.name = 0;
    }
    else {
      input_name.current.className = "";
      form_validity.name = 1;
    }
  }

  const on_submit = () => {
    on_message_change();
    on_email_change();
    on_name_change();
    if (Object.values(form_validity).every((num) => num == 1)) {
      alert("submitted!");
      window.open("//localhost:3001"
        // + "?" + input_name.current.value
        // + "&" + input_email.current.value
        // + "&" + input_message.current.value
      );
    } else {
      alert("empty/invalid fields");
    };
    form_validity.name = 0;
    form_validity.email = 0;
    form_validity.message = 0;
  }

  return (
    <div id="form">
        <div>
          <p>
              Contact Me!
              <Button img_src={"../assets/linkedin.png"} on_click={() => window.open("//www.linkedin.com/in/gayathrigirishnair")}/>
          </p>
          <input type="text" id="name" name="name" placeholder='Full Name *' onChange={on_name_change} ref={input_name}/><br />
          <input type="text" id="email" name="email" placeholder='Your Email ID *' onChange={on_email_change} ref={input_email}/><br />
          <input type="text" id="message" name="message" placeholder='Your Message *' onChange={on_message_change} ref={input_message}/><br />
          <div id="char_count">({ (message_char_limit - message_chars) >= 0 ? message_char_limit - message_chars : 0 } characters left)</div>
          <input type="submit" id="submit" value="Submit" onClick={on_submit}/>
        </div>
    </div>
  )
}
