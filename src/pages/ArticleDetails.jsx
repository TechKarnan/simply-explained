import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Lightbulb,
  Calculator,
  TrendingUp,
  Wallet,
  CheckCircle2
} from "lucide-react";
import { articles } from "../data/articles";

const sectionIcons = [
  Lightbulb,
  Calculator,
  TrendingUp,
  Clock,
  BookOpen,
  Wallet,
  Lightbulb,
  CheckCircle2
];

function ArticleDetails() {
  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!article) {
    return <main className="article-details"><h2>Article not found</h2></main>;
  }

  return (
    <main className="article-details">

      <div className="article-top">
        <Link to="/articles" className="back-link">
          <ArrowLeft size={17} /> Back to Articles
        </Link>
      </div>

      <article className="article-content">

        <div className="article-meta">
          <span className="article-category">
            <BookOpen size={15} /> {article.category}
          </span>

          <span className="reading-time">
            <Clock size={15} /> {article.readTime}
          </span>
        </div>

        <h1>{article.title}</h1>

        <p className="article-description">
          {article.description}
        </p>

        <div className="article-intro">
          <Lightbulb size={23} />
          <p>
            Welcome to Simply Explained! We break down complicated
            concepts into simple explanations, practical examples
            and everyday experiences.
          </p>
        </div>

        {article.content?.map((section, index) => {
          const SectionIcon =
            sectionIcons[index % sectionIcons.length];

          return (
            <section className="article-section" key={index}>

              <h2>
                <span className="section-icon">
                  <SectionIcon size={20} />
                </span>
                {section.heading}
              </h2>

              {section.paragraphs?.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}

              {section.table && (
                <div className="article-table-wrapper">
                  <table className="article-table">
                    <thead>
                      <tr>
                        {section.table[0].map((heading, hIndex) => (
                          <th key={hIndex}>{heading}</th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {section.table.slice(1).map((row, rIndex) => (
                        <tr key={rIndex}>
                          {row.map((cell, cIndex) => (
                            <td key={cIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </section>
          );
        })}

        <div className="article-end">
          <CheckCircle2 size={22} />
          <span>You've reached the end. Keep learning!</span>
        </div>

        <Link to="/articles" className="more-articles-link">
          <ArrowLeft size={17} /> Explore more articles
        </Link>

      </article>
    </main>
  );
}

export default ArticleDetails;
