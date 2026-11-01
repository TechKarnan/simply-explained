
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Simply Explained</h3>
        <p>Complex things. Simple explanations.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Simply Explained.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
