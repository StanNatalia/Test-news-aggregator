import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ArticlePages from "./pages/ArticlePages";

function App() {
  return (
    <div className="p-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePages />} />
      </Routes>
    </div>
  );
}

export default App;
