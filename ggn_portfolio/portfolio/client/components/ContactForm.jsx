import React, { useState, useRef } from 'react'
import './ContactForm.css'
import Button from "./Button"
import Axios from "axios"
import Popup from "./Popup"

export default function ContactForm() {
  const message_char_limit = 500;
  const valid_input = new RegExp('[a-z0-9.,!?\'\"@_ ]', "ig");

  const [message_chars, set_message_chars] = useState(0);
  const [success_popup, set_success_popup] = useState(false);
  const [fail_popup, set_fail_popup] = useState(false);
  
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
      Axios.post(window.location.href.replace("3000","3001")+"/put", {
        name:input_name.current.value,
        email: input_email.current.value,
        message: input_message.current.value
      }).then((response) => {
        // console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      input_name.current.value = "";
      input_email.current.value = "";
      input_message.current.value = "";
      set_message_chars(0);
      set_success_popup(true);
      set_fail_popup(false);
    } else {
      set_success_popup(false);
      set_fail_popup(true);
    };
  }

  return (
    <>
      <div id="form">
          <div className="form_body">
            <p>
                Contact Me!
            </p>
            <input type="text" id="name" name="name" placeholder='Full Name *' onChange={on_name_change} ref={input_name}/><br />
            <input type="text" id="email" name="email" placeholder='Email ID *' onChange={on_email_change} ref={input_email}/><br />
            <input type="text" id="message" name="message" placeholder='Message *' onChange={on_message_change} ref={input_message}/><br />
            <div id="char_count">({ (message_char_limit - message_chars) >= 0 ? message_char_limit - message_chars : 0 } characters left)</div>
            <input type="submit" id="submit" value="Submit" onClick={on_submit}/>
          </div>
          { success_popup ? <Popup title="Thank you for reaching out!" body="I'll get back to you asap." handle_close={() => set_success_popup(false)}/> : null }
          { fail_popup ? <Popup title="Empty or invalid fields." body="Please try again." handle_close={() => set_fail_popup(false)}/> : null }
      </div>
    </>
  )
}
