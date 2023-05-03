import "../css/project.css";

function Project(props) {
  return (
    <section className="full-contain">
      <h3>{props.header}</h3>
      <div className="project-container" id={props.name}>
        <p className="project-description">{props.description}</p>
        {/* <h3>{props.header}</h3> */}
        {/* commenting out the image.  After spending a really long time figuring this one out, I still came to the conclusion that it's best to set it as the background.  no ragrets */}

        {/* <img
        className="project-img"
        src={props.image}
        alt="screen-shot"
        {...props.name}
      /> */}
      </div>
      <div className="links">
        <a
          className="project-link p-link"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          link
        </a>
        <a
          className="github-link p-link"
          href={props.rlink}
          target="_blank"
          rel="noreferrer"
        >
          github link
        </a>
      </div>
    </section>
  );
}

export default Project;
