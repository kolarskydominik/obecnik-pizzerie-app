import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import {Form} from './ContactForm.elements'

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_58zkcbm', 'template_nm2e4sx', form.current, 'QP66USYry_JNx20MA')
      .then((result) => {
          console.log(result.text);
          document.getElementById("contactForm").reset();
          alert("Děkujeme Vám za zprávu. Odepíšeme jak jen to bude možné.")
      }, (error) => {
          console.log(error.text);
          alert("Něco se pokazilo. Prosím, použíjte email nebo telefon.")
      });
  };


  return (
    <>
      <Form id="contactForm" ref={form} onSubmit={sendEmail}>
        <p>V případě jakýchkoli dotazů, rezervací a nabídek, nás můžete kontaktovat prostřednictvím formuláře nebo nám zavolat. Těšíme se na Vás.</p>
        <input type='text' name="user_name" required placeholder="Jméno a Příjmení"></input>
        <input type='email' name="user_email" required placeholder="Váš email"></input>
        <input type='text' name="topic" required placeholder="Předmět"></input>
        <textarea name="message" placeholder="Váše zpráva..."></textarea>
        <input type="submit" value="Odeslat"></input>
      </Form>
    </>
  );
}

export default ContactForm;
