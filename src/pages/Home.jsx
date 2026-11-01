
import { Link } from "react-router-dom";
import {
  Laptop,
  Wallet,
  FlaskConical,
  Lightbulb
} from "lucide-react";

const categories = [
  {
    title: "Technology",
    description: "Understand Java, AI, computers and the internet.",
    icon: Laptop
  },
  {
    title: "Money",
    description: "Learn about banking, savings, interest and taxes.",
    icon: Wallet
  },
  {
    title: "Science",
    description: "Discover the science behind everyday life.",
    icon: FlaskConical
  },
  {
    title: "How Things Work",
    description: "Explore the ideas behind ordinary things.",
    icon: Lightbulb
  }
];

function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">LEARN SOMETHING NEW</p>

        <h1>
          Complex things.
          <br />
          <span>Simple explanations.</span>
        </h1>

        <p className="hero-description">
          Curious about how the world works?
          We break down complicated topics into
          simple ideas anyone can understand.
        </p>

        <Link to="/articles" className="primary-button">
          Explore Articles
        </Link>
      </section>

      <section className="categories">
        <h2>Explore Knowledge</h2>
        <p className="section-description">
          Pick a topic and start discovering.
        </p>

        <div className="category-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article className="category-card" key={category.title}>
                <Icon size={30} />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
