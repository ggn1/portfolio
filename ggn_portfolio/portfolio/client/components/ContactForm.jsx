import React, { useState, useRef } from 'react'
import './ContactForm.css'
import Button from "./Button"
import Axios from "axios"

export default function ContactForm() {
  const message_char_limit = 500;
  const valid_input = new RegExp('[a-z0-9.,!?\'\"@_ ]', "ig");

  const [message_chars, set_message_chars] = useState(0);
  
  const input_name = useRef();
  const input_email = useRef();
  const input_message = useRef();

  let form_validity = {name:false, email:false, message:false};

  const sanity_check = (text, field) => {
    if(text && text.match(valid_input) && (text.match(valid_input).length == text.length)) {
      if (field == "email" && !text.includes("@")) return false;
      if (field == "message") {
        set_message_chars(text.length);
        return (text.length <= message_char_limit);
      }
      return true;
    } else {
      set_message_chars(0);
      return false;
    }
  }

  const on_name_change = () => {
    if(sanity_check(input_name.current.value, "name")) {
      form_validity.name = true;
      input_name.current.className = "";
    } else {
      form_validity.name = false;
      input_name.current.className = "invalid";
    }
  }
  
  const on_email_change = () => {
    if(sanity_check(input_email.current.value, "email")) {
      form_validity.email = true;
      input_email.current.className = "";
    } else {
      form_validity.email = false;
      input_email.current.className = "invalid";
    }
  }

  const on_message_change = () => {
    if(sanity_check(input_message.current.value, "message")) {
      form_validity.message = true;
      input_message.current.className = "";
    } else {
      form_validity.message = false;
      input_message.current.className = "invalid";
    }
  }

  const on_submit = () => {
    on_name_change("name"); 
    on_email_change("email"); 
    on_message_change("message");

    if (form_validity.name && form_validity.email && form_validity.message) {
      Axios.post("http://localhost:3001/api/insert", {
        name:input_name.current.value,
        email: input_email.current.value,
        message: input_message.current.value
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      input_name.current.value = "";
      input_email.current.value = "";
      input_message.current.value = "";
      set_message_chars(0);
      alert("Thanks for reaching out! I'll get back to you asap.");
    } else {
      alert("empty or invalid fields :(");
    };
  }

  return (
    <div id="form">
        <div>
          <p>
              Contact Me!
              <Button img_src={"../assets/linkedin.png"} on_click={() => window.open("//www.linkedin.com/in/gayathrigirishnair")}/>
          </p>
          <input type="text" id="name" name="name" placeholder='Full Name *' onChange={on_name_change} ref={input_name}/><br />
          <input type="text" id="email" name="email" placeholder='Email ID *' onChange={on_email_change} ref={input_email}/><br />
          <input type="text" id="message" name="message" placeholder='Message *' onChange={on_message_change} ref={input_message}/><br />
          <div id="char_count">({ (message_char_limit - message_chars) >= 0 ? message_char_limit - message_chars : 0 } characters left)</div>
          <input type="submit" id="submit" value="Submit" onClick={on_submit}/>
        </div>
    </div>
  )
}
