import React, { useState } from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

function Navigation() {
  return (
    <div>
      <h1>🧭NAVIGATION🔭</h1>
      <ul>
        <li>
          <button>About me</button>
        </li>
        <li>
          <button>Portfolio</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
        <li>
          <button>Resume</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
