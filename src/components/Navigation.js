import React, { useState } from "react";
import About from "./About";

import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

function Navigation() {
  const [content, setContent] = useState();
  //to do: setContent(About) for default

  return (
    <div>
      <ul className="nav-list">
        <li>
          <p onClick={() => setContent(About)}>About Me</p>
        </li>
        <li>
          <p onClick={() => setContent(Portfolio)}>Portfolio</p>
        </li>
        <li>
          <p onClick={() => setContent(Contact)}>Contact</p>
        </li>
        <li>
          <p onClick={() => setContent(Resume)}>Resume</p>
        </li>
      </ul>
      <main>{content}</main>
    </div>
  );
}

export default Navigation;
