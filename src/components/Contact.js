import "../css/contact.css";

function Contact() {
  return (
    <div className="contact-info">
      <h2>Contact Me</h2>
      <p>taran.leu@outlook.com</p>
      <p>385-695-9502</p>
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/taran-leu-8230021a3/"
        target="_blank"
        rel="noreferrer"
      >
        linkedin
      </a>
      {/* <p>backend coming soon for contact form functionality</p>
      <form className="contact-form" action="mailto:taran.leu@outlook.com">
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input
          className="message-field"
          type="text"
          placeholder="message"
        ></input>
        <input type="submit"></input>
      </form> */}
    </div>
  );
}

export default Contact;
