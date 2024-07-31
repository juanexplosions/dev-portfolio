import React from "react";
import "./projects.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonIcon from "../buttonIcon/buttonIcon";

const projectsData = [
  {
    stack: "React.js + Sass + BEM",
    title: "MichiCONF 2024",
    description:
      "La conferencia anual hecha para gatitos. Para debatir sobre tecnología.",
    imageSrc: "/project-04.png",
    demoText: "Probar el demo",
    extraIcon: "ri:github-fill",
    label: "GitHub",
    url: "https://michiconf.netlify.app/",
    github: "https://github.com/juanexplosions/michiconf",
  },
  {
    stack: "React.js + CSS",
    title: "The Cat Button Meme",
    description:
      "El botón que al oprimirlo te muestra aleatoriamente memes de gatos.",
    imageSrc: "/project-01.png",
    demoText: "Probar el demo",
    extraIcon: "ri:github-fill",
    label: "GitHub",
    url: "https://the-cat-meme-button.netlify.app/",
    github: "https://github.com/juanexplosions/the-cat-meme-button/",
  },
  {
    stack: "React.js + CSS",
    title: "cuentaclaras",
    description:
      "Un tracker de ingresos y egresos, para saber en qué gastas tu dinero.",
    imageSrc: "/project-02.png",
    demoText: "Probar el demo",
    extraIcon: "ri:github-fill",
    label: "GitHub",
    url: "https://cuentasclaras-app.netlify.app/",
    github: "https://github.com/juanexplosions/cuentasclaras",
  },
  {
    stack: "Storytelling + Software Engineering",
    title: "The Platzi",
    description:
      "Serie web que tuvo +12 millones de views. Relata la vida en el software.",
    imageSrc: "/project-03.png",
    demoText: "Ver la serie",
    extraIcon: "ri:instagram-fill",
    label: "Instagram",
    url: "https://www.tiktok.com/@aprendeconplatzi/playlist/The%20Platzi-7225719594577873669",
    github: "https://www.instagram.com/stories/highlights/17995345943469322/"
  }
];

export default function ProjectsFeed() {
  return (
    <>
      <h2 className="section-text" id="proyectos">
        PROYECTOS
      </h2>
      <div className="projects-feed">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-background"></div>
            <div className="project-container">
              <div className="project-texts">
                <p className="details project-stack">{project.stack}</p>
                <p className="details project-title">{project.title}</p>
                <p className="details project-description">
                  {project.description}
                </p>
              </div>
              <div className="project-cta">
                <ButtonIcon
                  icon="ri:earth-fill"
                  text={project.demoText}
                  url={project.url}
                />
                <a href={project.github} target="_blank" aria-label={project.label}>
                  <Icon icon={project.extraIcon} className="icon-project" />
                </a>
              </div>
              <img className="project-image" src={project.imageSrc} alt="imagen de proyecto" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
