import { Link } from "react-router-dom";
import { articles } from "../data/articles";

function Articles() {
  return (
    <main className="articles-page">
      <h1>Explore Articles</h1>
      <p>Simple explanations for curious minds.</p>

      <div className="article-grid">
        {articles.map((article) => (
          <article className="article-card" key={article.id}>
            <span>{article.category}</span>

            <h2>{article.title}</h2>

            <p>{article.description}</p>

            <small>{article.readTime}</small>

            <Link to={`/articles/${article.slug}`}>
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Articles;