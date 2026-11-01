
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <Lightbulb size={25} />
        <span>Simply Explained</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
