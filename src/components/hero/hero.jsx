import "./hero.css";
import ButtonIcon from "../button-icon/button";
import SocialMediaIcons from "../socialmedia-icons/socialmedia-icons";

export default function Hero() {
  return (
    <>
      <div className="gradient-background"></div>
      <div className="noise-background"></div>
      <div className="header">
        <img src="./src/assets/juanexplosions-logo.svg" className="logo" />
        <div className="nav-items">
          <ul>
            <li>
              <a href="">PROYECTOS</a>
            </li>
            <li>-</li>
            <li>
              <a href="">ARTÍCULOS</a>
            </li>
            <li>-</li>
            <li>
              <a href="">MÁS SOBRE MÍ</a>
            </li>
          </ul>
        </div>
        <ButtonIcon
          icon="ri:mail-fill"
          text="Contáctame"
        />
      </div>
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
