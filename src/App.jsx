
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
