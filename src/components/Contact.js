//import React, { useState } from "react";

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input
          className="message-field"
          type="text"
          placeholder="message"
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Contact;
