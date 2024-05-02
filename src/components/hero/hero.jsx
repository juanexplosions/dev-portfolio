import "./hero.css";
import ButtonIcon from "../button-icon/button";
import SocialMediaIcons from "../socialmedia-icons/socialmedia-icons";

export default function Hero() {
  return (
    <>
      <div className="gradient-background"></div>
      <img src="src/assets/texture.png" className="grain-hero" />
      <header className="header">
        <img src="./src/assets/juanexplosions-logo.svg" className="logo" />
        <nav className="nav-items">
          <ul>
            <li>
              <a href="#proyectos">PROYECTOS</a>
            </li>
            <li>-</li>
            <li>
              <a href="#articulos">ARTÍCULOS</a>
            </li>
            <li>-</li>
            <li>
              <a href="#mas-informacion">MÁS SOBRE MÍ</a>
            </li>
          </ul>
        </nav>
        <ButtonIcon
          icon="ri:linkedin-box-fill"
          text="Contáctame"
          url="https://www.linkedin.com/in/juan-felipe-peralta/"
        />
      </header>
      <div className="main-info">
        <h1 className="title">
          <span class="frontend">Frontend Developer </span>

          <span class="and">and</span>
          <span class="content-creator"> content creator</span>
        </h1>
        <SocialMediaIcons />
        <div className="profile-container">
            <img className="profile-pic" src="./src/assets/profile-pic.png" />
        </div>
      </div>
    </>
  );
}
