import "./articles.css";
import ButtonIcon from "../button-icon/button";

const articlesData = [
  {
    id: 1,
    title: "4 consejos para mantener la motivación al aprender programación",
    url: "https://platzi.com/blog/consejos-motivacion-programacion/",
  },
  {
    id: 2,
    title: "44 etiquetas HTML que cualquier developer debe conocer",
    url: "https://platzi.com/blog/etiquetas-html-debes-conocer/",
  },
  {
    id: 3,
    title: "Cómo funcionan las tablas de verdad (con ejemplos)",
    url: "https://platzi.com/blog/tablas-verdad-reglas-ejemplos/",
  },
  {
    id: 4,

    title: "5 errores que cometes al aprender algo nuevo",
    url: "https://platzi.com/blog/5-errores-que-cometes-al-aprender-algo-nuevo/",
  },
];

export default function Articles() {
  return (
    <>
      <p className="section-text secondary-text" id="articulos">
        ARTÍCULOS
      </p>
      <div className="articles-feed">
        {articlesData.map((article, index) => (
          <div
            className={`article ${index === 0 ? "first-article" : ""}`}
            key={article.id}
          >
            <div className="article-background"></div>
            <div className="article-container">
              <h3 className="article-text">{article.title}</h3>
              <div className="article-cta">
                <ButtonIcon
                  icon="ri:article-fill"
                  text="Leer el artículo"
                  url={article.url}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
