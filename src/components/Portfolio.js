import "../css/portfolio.css";
import Project from "./Project";
import bloggertScreen from "../images/bloggertScreen.png";
import toadScreen from "../images/toad-smoker-crop.png";
import skyJamScreen from "../images/skyJamScreen.png";
import schedulordScreen from "../images/schedulord.png";
import svgSample from "../images/svgSample.png";

function Portfolio() {
  const projectData = [
    {
      name: "bloggert",
      header: "Bloggert",
      link: "https://bloggert.herokuapp.com/",
      rLink: "https://github.com/J3rkStore/bloggert",
      image: bloggertScreen,
      description: "Forum deployed to heroku using MongoDB, handlebars, MVC",
    },
    {
      name: "weatheringo",
      header: "Weatheringo",
      link: "https://j3rkstore.github.io/toad-smoker/",
      rLink: "https://github.com/J3rkStore/toad-smoker",
      image: toadScreen,
      description: "5 day weather app using openWeather API",
    },
    {
      name: "skyJam",
      header: "Sky Jam",
      link: "https://j3rkstore.github.io/weatheringo/",
      rLink: "https://github.com/J3rkStore/weatheringo",
      image: skyJamScreen,
      description:
        "Group project using Youtube and openWeather APIs to give you music to fit the forecast",
    },

    {
      name: "schedulord",
      header: "Schedulord de las Cosas",
      link: "https://j3rkstore.github.io/schedulord-de-las-cosas/",
      rLink: "https://github.com/J3rkStore/schedulord-de-las-cosas",
      image: schedulordScreen,
      description: "Uses DayJS API to plan your day",
    },

    {
      name: "vectoringo",
      header: "Vectoringo",

      rLink: "https://github.com/J3rkStore/vectoringo-logo-generator",
      image: svgSample,
      description: "Uses Inquirer to turn your prompts into an SVG image",
    },
  ];
  return (
    <div>
      <h2> Portfolio </h2>
      <section className="project-section">
        {projectData.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            header={project.header}
            link={project.link}
            rlink={project.rLink}
            image={project.image}
            description={project.description}
          />
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
