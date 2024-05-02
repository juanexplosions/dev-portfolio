import "./footer.css";
import SocialMediaIcons from "../socialmedia-icons/socialmedia-icons";

export default function Footer() {
  return (
    <>
      <div className="footer" id="mas-informacion">
        <footer className="footer-container">
        <img src="src/assets/footer-background.png" className="gradient-background-footer"/>
        <img src="src/assets/texture.png" className="grain-footer" />

          <p className="section-text">MÁS SOBRE MÍ</p>
          <div className="footer-texts">
            <p>
              Soy un ingeniero de sistemas que encontró en el content marketing
              una forma de enseñar. Lo que me llevó a trabajar en Platzi
              educando sobre ingeniería y desarrollo de software.
            </p>
            <br />
            <p>
              Algunas veces me verás <a href="https://www.instagram.com/juanexplosions/" target="_blank">tomando fotos</a>, diseñando en Figma los
              proyectos que programo, <a href="https://platzi.com/cursos/videos-tiktok/" target="_blank">enseñando en cursos</a>, o haciendo videos de 
               <a href="https://youtu.be/O9xie_2RUtA?si=XHNznY4ja0pg5a6e" target="_blank"> competencias de programación</a> en YouTube.
            </p>
            <br />
            <p>¿Quieres que trabajemos juntos en algún proyecto?</p>

            <p className="cta-text">¡Hablemos!</p>
            <p className="cta-mail">hola@juanexplosions.com</p>
            <SocialMediaIcons />
          </div>
        </footer>
      </div>
    </>
  );
}
