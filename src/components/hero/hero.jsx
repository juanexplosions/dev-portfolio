import { Icon } from "@iconify/react/dist/iconify.js";
import "./hero.css";
import SocialMediaIcons from "../socialmedia-icons/socialmedia-icons";

export default function Hero() {
  return (
    <>
      <div className="gradient-background"></div>
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
        <button className="button">
          <Icon icon="ri:mail-fill" className="icon-bttn" />
          <p className="icon-txt">Contáctame</p>
        </button>
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
