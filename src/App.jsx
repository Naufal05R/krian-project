import { Footer } from "./components";
import { HomePage, DocumentationPage, NewsPage } from "./pages";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="relative z-0 overflow-hidden bg-white">
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
