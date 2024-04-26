import "./projects.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonIcon from "../button-icon/button";

export default function ProjectsFeed() {
  return (
    <>
      <p className="section-text">PROYECTOS</p>
      <div className="project">
        <div className="project-background"></div>
        <div className="project-container">
          <div className="project-texts">
            <p className="details project-stack">React.js + CSS</p>
            <p className="details project-title">The Cat Button Meme</p>
            <p className="details project-description">
              El botón que al oprimirlo te muestra aleatoriamente memes de
              gatos.
            </p>
          </div>
          <div className="project-cta">
            <ButtonIcon icon="ri:earth-fill" text="Probar el demo" />
            <Icon icon="ri:github-fill" className="icon-project" />
          </div>
          <img
            className="project-image"
            src="./src/assets/project-01.png"
            alt=""
          />
        </div>
      </div>
      
      <div className="project">
        <div className="project-background"></div>
        <div className="project-container">
          <div className="project-texts">
            <p className="details project-stack">React.js + CSS</p>
            <p className="details project-title">The Cat Button Meme</p>
            <p className="details project-description">
              El botón que al oprimirlo te muestra aleatoriamente memes de
              gatos.
            </p>
          </div>
          <div className="project-cta">
            <ButtonIcon icon="ri:earth-fill" text="Probar el demo" />
            <Icon icon="ri:github-fill" className="icon-project" />
          </div>
          <img
            className="project-image"
            src="./src/assets/project-01.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
