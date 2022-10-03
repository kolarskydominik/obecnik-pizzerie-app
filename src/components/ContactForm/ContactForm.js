import React from "react";

import {Form} from './ContactForm.elements'

function ContactForm() {
  return (
    <>
      <Form>
        <p>V případě jakýchkoli dotazů, rezervací a nabídek, nás můžete kontaktovat prostřednictvím formuláře nebo nám zavolat. Těšíme se na Vás.</p>
        <input type='text' required placeholder="Jméno a Příjmení"></input>
        <input type='email'required placeholder="Váš email"></input>
        <input type='text' required placeholder="Předmět"></input>
        <textarea placeholder="Váše zpráva..."></textarea>
        <input type="submit" value="Odeslat"></input>
      </Form>
    </>
  );
}

export default ContactForm;
