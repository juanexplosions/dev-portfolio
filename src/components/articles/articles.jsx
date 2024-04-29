import "./articles.css";
import ButtonIcon from "../button-icon/button";

const articlesData = [
  {
    id: 1,
    title: "4 consejos para mantener la motivación al aprender programación"
  },
  {
    id: 2,
    title: "4 consejos para mantener la motivación al aprender programación"
  },
  {
    id: 3,
    title: "4 consejos para mantener la motivación al aprender programación"
  },
  {
    id: 4,
    title: "4 consejos para mantener la motivación al aprender programación"
  },
  {
    id: 5,
    title: "4 consejos para mantener la motivación al aprender programación"
  },
];

export default function Articles() {
  return (
    <>
      <p className="section-text secondary-text">ARTÍCULOS</p>
      <div className="articles-feed">
        {articlesData.map((article, index) => (
          <div className={`article ${index === 0 ? 'first-article' : ''}`} key={article.id}>
            <div className="article-background"></div>
            <div className="article-container">
              <h3 className="article-text">
                {article.title}
              </h3>
              <div className="article-cta">
                <ButtonIcon icon="ri:article-fill" text="Leer el artículo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
