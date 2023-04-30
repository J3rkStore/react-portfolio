import React, { useState } from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

function Navigation() {
  const [content, setContent] = useState();
  //to do: setContent(About) for default

  return (
    <div>
      <h1>🧭NAVIGATION🔭</h1>
      <ul>
        <li>
          <p onClick={() => setContent(About)}>About me</p>
        </li>
        <li>
          <p onClick={() => setContent(Project)}>Portfolio</p>
        </li>
        <li>
          <p onClick={() => setContent(Contact)}>Contact</p>
        </li>
        <li>
          <p onClick={() => setContent(Resume)}>Resume</p>
        </li>
      </ul>
      <div>{content}</div>
    </div>
  );
}

export default Navigation;
