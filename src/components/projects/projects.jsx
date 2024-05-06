import React from "react";
import "./projects.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonIcon from "../buttonIcon/buttonIcon";

const projectsData = [
  {
    stack: "React.js + CSS",
    title: "The Cat Button Meme",
    description:
      "El botón que al oprimirlo te muestra aleatoriamente memes de gatos.",
    imageSrc: "public/project-01.png",
    demoText: "Probar el demo",
    githubIcon: "ri:github-fill",
    url: "https://the-cat-meme-button.netlify.app/",
    github: "https://github.com/juanexplosions/the-cat-meme-button/",
  },
  {
    stack: "React.js + CSS",
    title: "cuentaclaras",
    description:
      "Un tracker de ingresos y egresos, para saber en qué gastas tu dinero.",
    imageSrc: "public/project-02.png",
    demoText: "Probar el demo",
    githubIcon: "ri:github-fill",
    url: "https://cuentasclaras-app.netlify.app/",
    github: "https://github.com/juanexplosions/cuentasclaras",
  },
];

export default function ProjectsFeed() {
  return (
    <>
      <p className="section-text" id="proyectos">
        PROYECTOS
      </p>
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
                <a href={project.github} target="_blank">
                  <Icon icon={project.githubIcon} className="icon-project" />
                </a>
              </div>
              <img className="project-image" src={project.imageSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
