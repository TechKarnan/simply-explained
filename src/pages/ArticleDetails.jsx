
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

function ArticleDetails() {
  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <main className="article-details">
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      <div className="article-content">
        <span className="article-category">
          {article.category}
        </span>

        <h1>{article.title}</h1>

        <p className="article-description">
          {article.description}
        </p>

        <small>{article.readTime}</small>

        <hr />

        <h2>Introduction</h2>

        <p>
          Welcome to Simply Explained! Our goal is to
          understand complicated concepts using simple
          language and everyday examples.
        </p>

        <h2>Let's understand with an example</h2>

        <p>
          Imagine you are explaining this concept to a
          friend who has never heard about it before.
          Start with something familiar from everyday life.
        </p>

        <h2>Key takeaways</h2>

        <ul>
          <li>Understand the basic concept first.</li>
          <li>Connect it with a real-world example.</li>
          <li>Learn why it matters in everyday life.</li>
        </ul>
      </div>
    </main>
  );
}

export default ArticleDetails;
